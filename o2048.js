var canvas = document.getElementById('space');
var ctx = canvas.getContext('2d');
var w=110;
var h=110;
var cpad=10;
var cmarleft=10;
var cmartop=10;
var points=0;
var score =0;
var flag = 1;

function ranPos(){
	do{ 
		var rRan=parseInt(Math.random()*4);
		var cRan=parseInt(Math.random()*4);
		if(Math.random()*4<2 && cells[rRan][cRan].val == 0 )
		 {cells[rRan][cRan].val = 2;
            break;
		 }
		else if(Math.random()*4>2 && cells[rRan][cRan].val == 0)
			{cells[rRan][cRan].val = 4;
                   break;
			}

        }while(true);
}

var cells = [];
for (r=0;r<4;r++){
	cells[r]=[]
	for(c=0;c<4;c++){
		cells[r][c]= {x: 0, y: 0, flag: 1,val: 0}
	}
}
cells[3][3].val = 2;
cells[2][3].val = 2;
function draw(){
	for (r=0;r<4;r++){
	for(c=0;c<4;c++){
	  var cellx=(r*(w+cpad))+cmarleft;
      var celly=(c*(h+cpad))+cmartop;
      //cells[r][c].x= cellx;
      //cells[r][c].y= celly;		     
             ctx.beginPath();
		     ctx.rect(cellx,celly,w,h);
		     ctx.fillStyle = "#FFFFFF";

		     switch(cells[c][r].val){
			case 0 : ctx.fillStyle = "#4d4d4d";
			           break;
			case 2 : ctx.fillStyle = "#bfbfbf";
			           break;
			case 4 : ctx.fillStyle = "#0066cc";
			           break;
			case 8 : ctx.fillStyle = "#ffa366";
			           break;
			case 16 : ctx.fillStyle = "#99ff66";
			           break;
			case 32 : ctx.fillStyle = "#33cc33";
			           break;
			case 64 : ctx.fillStyle = "#884dff";
			           break; 
			case 128 : ctx.fillStyle = "#ff00bf";
			           break;
			case 256 : ctx.fillStyle = "#ffff00";
			           break;           
                                                                          
			default : ctx.fillStyle = "#0000FF";
		     }	

		     ctx.fill();
		     ctx.closePath();
    if(cells[c][r].val!=0)	{
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    //ctx.font="30px Arial";
    ctx.font         = 'Italic 30px Sans-Serif';
               
               ctx.textBaseline = 'Top';
	ctx.fillText(cells[c][r].val,cellx+(w/2),celly+(h/2));
	ctx.closePath();}
}
}
document.getElementById("scoreTab").innerHTML = "SCORE : " + score;
}
document.addEventListener("keydown", dh);
function dh(e){
	if(e.keyCode == 39){moveRight();}
	if(e.keyCode == 37){moveLeft();}
	if(e.keyCode == 38){moveUp();}
	if(e.keyCode == 40){moveDown();}

}
function moveUp(){
	
	for (r=1;r<4;r++){
	  for(c=0;c<4;c++){
	    	if(cells[r][c].val != 0){
	  		  var row = r;
	  		     while(row > 0){
                     if(cells[row-1][c].val== 0) {
                     	cells[row-1][c].val = cells[row][c].val;
                     	cells[row][c].val = 0; 
                     	row--;
                     }
                     else if(cells[row-1][c].val==cells[row][c].val){
                     	cells[row-1][c].val *= 2;
                     	cells[row][c].val = 0; 
                        score= score+cells[row-1][c].val;
                     }
                     else {
                     	break;
                     } 
	  		}
	  	}
	  }
   }ranPos();
}
function moveDown(){
	for(c=0;c<4;c++){
		for(r=2;r>=0;r--){
			if(cells[r][c].val != 0){
	  		  var row = r;
	  		     while(row < 3){
                     if(cells[row+1][c].val== 0) {
                     	cells[row+1][c].val = cells[row][c].val;
                     	cells[row][c].val = 0; 
                     	row++;
                     }
                     else if(cells[row+1][c].val==cells[row][c].val){
                     	cells[row+1][c].val *= 2;
                     	cells[row][c].val = 0; 
                        score= score+(cells[row+1][c].val);

                     }
                     else {
                     	break;
                     } 

		}
	}
}
}ranPos();
}
function moveLeft()
{
	for(r=0;r<4;r++){
		for(c=1;c<4;c++){
			if(cells[r][c].val != 0){
				var col = c;
				while(col > 0){
					if(cells[r][col-1].val == 0){
                          cells[r][col-1].val = cells[r][col].val;
                          cells[r][col].val= 0;
                          col--;

					}
					else if(cells[r][col-1].val == cells[r][col].val){
						cells[r][col-1].val *=2;
						cells[r][col].val=0;
						score=score+(cells[r][col-1].val);
					}
					else{
						break;
					}				}
			}

		}
	}ranPos();
}
function moveRight(){
       for(r=0;r<4;r++){
       	for(c=2;c>=0;c--){
             if(cells[r][c].val != 0){
             	var col=c;
             	while(col<3){
             		if(cells[r][col+1].val== 0){
             			cells[r][col+1].val=cells[r][col].val;
             			cells[r][col].val=0;
             			col++;
             		}
             		else if(cells[r][col+1].val==cells[r][col].val){
                     	cells[r][col+1].val *= 2;
                     	cells[r][col].val = 0; 
                        score= score+(cells[r][col+1].val);

                     }
                     else {
                     	break;
                     } 
             	}
             }
       	}
       } ranPos();
}
/*function cellCol(){
for(r=0;r<4;r++){
	for(c=0;c<4;c++){
		ctx.beginPath();
		switch(cells[r][c].val){
			case 0 : ctx.fillStyle = "#00FF00";
			           break;
			default : ctx.fillStyle = "#0000FF";
		ctx.fill();
		ctx.closePath();
		}
	}
}
}*/

setInterval(draw,10);
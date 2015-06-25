var ctx;
var canvas;
var points = [400,300,700,300, 400,300,700,400, 400,300,700,500, 400,300,700,600, 400,300,700,700, 400,400,700,300, 400,400,700,400, 400,400,700,500, 400,400,700,600, 400,400,700,700, 400,500,700,300, 400,500,700,400, 400,500,700,500, 400,500,700,600, 400,500,700,700, 400,600,700,300, 400,600,700,400, 400,600,700,500, 400,600,700,600, 400,600,700,700, 400,700,700,300, 400,700,700,400, 400,700,700,500, 400,700,700,600, 400,700,700,700];
var x;
var y;
var col_1x = -4;
var col_1y = -3;
var col_2x = -2;
var col_2y = -1;
var rows;
var input;
rows = 800
window.onload = title;

function title()
{
    var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.fillStyle = "rgba(79, 33, 235, 0.72)";
    ctx.shadowColor = "#000";
    ctx.lineWidth ="1";
    ctx.strokeStyle = "black";
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.font = "bold 80px Ariel";
    ctx.fillText("Bipartite Graphs",280,100);
    ctx.strokeText("Bipartite Graphs",280,100);   
    
}




function vertex(x,y)
{
    var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.beginPath();
    ctx.arc(x,y,10,0,2 * Math.PI,false);
    ctx.fill();
    ctx.closePath();
}

   for(x=400;x<800;x=x+300)
    
{
   for(y=300;y<rows;y=y+100)
{
    vertex(x,y);
}
    
}

function drawEdges()
{
    var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.beginPath();
    ctx.lineWidth="3";
    ctx.strokeStyle = "rgba(31, 26, 26, 0.6)";
    ctx.moveTo(points[col_1x],points[col_1y]);
    ctx.lineTo(points[col_2x],points[col_2y]);
    ctx.stroke();
    ctx.closePath();
  
}

    
    for(i = 0;i < 25;i++)
 
{     col_1x = col_1x + 4;
      col_1y = col_1y + 4;
      col_2x = col_2x + 4;
      col_2y = col_2y + 4;
      drawEdges();
}

function probSolve()
{
      var col_1x = 14;
      var col_1y = 15;
      var col_2x = 16;
      var col_2y = 17;
      plot(); 
    


  function plot()
{
   var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.beginPath();
    ctx.lineWidth="4";
    ctx.strokeStyle = "rgba(245, 15, 15, 1.0)";
    ctx.moveTo(points[col_1x],points[col_1y]);
    ctx.lineTo(points[col_2x],points[col_2y]);
    ctx.stroke();
    ctx.closePath();
    
}
 
}


probSolve();


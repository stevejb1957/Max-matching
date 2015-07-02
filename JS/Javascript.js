var ctx;
var canvas;
var points = [400,300,700,300, 400,300,700,400, 400,300,700,500, 400,300,700,600, 400,300,700,700, 400,400,700,300, 400,400,700,400, 400,400,700,500, 400,400,700,600, 400,400,700,700, 400,500,700,300, 400,500,700,400, 400,500,700,500, 400,500,700,600, 400,500,700,700, 400,600,700,300, 400,600,700,400, 400,600,700,500, 400,600,700,600, 400,600,700,700, 400,700,700,300, 400,700,700,400, 400,700,700,500, 400,700,700,600, 400,700,700,700]; // Plot coordinates
var x;
var y;
var store = [];
var a = -1;
var s;
var col_1x = -4;
var col_1y = -3;
var col_2x = -2;
var col_2y = -1;
var range = [];

var lines = [ // Multidimensional array, matches line numbers to plot coordinates
    [1,0,1,2,3],
    [2,4,5,6,7],
    [3,8,9,10,11],
    [4,12,13,14,15],
    [4,16,17,18,19],
    [6,20,21,22,23],
    [7,24,25,26,27],
    [8,28,29,30,31],
    [9,32,33,34,35],
    [10,36,37,38,39],
    [11,40,41,42,43],
    [12,44,45,46,47],
    [13,48,49,50,51],
    [14,52,53,54,55],
    [15,56,57,58,59],
    [16,60,61,62,63],
    [17,64,65,66,67],
    [18,68,69,70,71],
    [19,72,73,74,75],
    [20,76,77,78,79],
    [21,80,81,82,83],
    [22,84,85,86,87],
    [23,88,89,90,91],
    [24,92,93,94,95],
    [25,96,97,98,99]
];

window.onload = title;

function title(){ 
    
var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.fillStyle = "rgba(79, 33, 235, 0.72)";
    ctx.shadowColor = "#000";
    ctx.lineWidth ="1";
    ctx.strokeStyle = "black";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 3;
    ctx.font = "bold 80px Ariel";
    ctx.fillText("Bipartite Graphs",280,100);
    ctx.strokeText("Bipartite Graphs",280,100);   
    
}




function vertex(x,y){ // Draws vertices
    
    var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.beginPath();
    ctx.arc(x,y,10,0,2 * Math.PI,false);
    ctx.fill();
    ctx.closePath();
}

   for(x=400;x<800;x=x+300)
    
{
   for(y=300;y<800;y=y+100)
{
    vertex(x,y);
}
    
}


for(i = 0;i < 25;i++)
 
{     col_1x = col_1x + 4;
      col_1y = col_1y + 4;
      col_2x = col_2x + 4;
      col_2y = col_2y + 4;
      drawEdges();
}


function drawEdges(){ // Draws background edges
    
    var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.beginPath();
    ctx.lineWidth="3";
    ctx.strokeStyle = "rgba(31, 26, 26, 0.6)";
    ctx.moveTo(points[col_1x],points[col_1y]);
    ctx.lineTo(points[col_2x],points[col_2y]);
    ctx.stroke();
    ctx.closePath();
  
}

function inputLine(){ // Takes input problem and stores in array then passes to function to draw
    
var l;
l = document.getElementById("line");
a = l.elements["selection"].value;
a = a-1;
store.push(a + 1);
probSolve();
    
}
    
    
function probSolve(){ // Plots input problem
    
      var col_1x = (lines[a][1]);
      var col_1y = (lines[a][2]);
      var col_2x = (lines[a][3]);
      var col_2y = (lines[a][4]);
      plot(); 
    


  function plot(){ // Draws input problem
      
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



// Step 1 initial guess

function initialMatch(){ 

    //alert(store);
        
    for (i = 5;i <= 25;i=i+5){
   
function devide(value) {
    return value > i-5 && value <= i
}
    var range = store.filter(devide);
    //alert(range);
    //alert(range[0]);
    var s = (range[0])-1;
        
     var col_1x = (lines[s][1]);
    var col_1y = (lines[s][2]);
    var col_2x = (lines[s][3]);
    var col_2y = (lines[s][4]);
        
    var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.beginPath();
    ctx.lineWidth="5";
    ctx.strokeStyle = "#000";
    ctx.moveTo(points[col_1x],points[col_1y]);
    ctx.lineTo(points[col_2x],points[col_2y]);
    ctx.stroke();
    ctx.closePath();
      
}
}
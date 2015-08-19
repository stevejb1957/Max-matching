var points = [400,300,700,300, 400,300,700,400, 400,300,700,500, 400,300,700,600, 400,300,700,700, 400,400,700,300, 400,400,700,400, 400,400,700,500, 400,400,700,600, 400,400,700,700, 400,500,700,300, 400,500,700,400, 400,500,700,500, 400,500,700,600, 400,500,700,700, 400,600,700,300, 400,600,700,400, 400,600,700,500, 400,600,700,600, 400,600,700,700, 400,700,700,300, 400,700,700,400, 400,700,700,500, 400,700,700,600, 400,700,700,700]; // Plot coordinates

var store = [];
var a = -1;
var vertexX = [];
var vertexY = [];
var col_1x = -4;
var col_1y = -3;
var col_2x = -2;
var col_2y = -1;
var sStore = [];
var storeNumx = [];
var storeCoordx = [];
var storeCoordX = [];
var storeRefx = [];
var storeDrawn = [];
var storeDrawnY = [];
var vertX = [];
var missingY = [];
var outY = [];
var current = [300,400,500,600,700];


var lines = [ // Multidimensional array, matches line numbers to plot coordinates
    [1,0,1,2,3],
    [2,4,5,6,7],
    [3,8,9,10,11],
    [4,12,13,14,15],
    [5,16,17,18,19],
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

 function eliminateDuplicate(arr) {  // Removes duplicate values from passed in arrays
		  
		     var t,
            
             len=arr.length,
      
             obj={};
 
             for (t=0;t<len;t++) {
             obj[arr[t]]=0;
             }
                   for (t in obj) {
                   out.push(parseInt(t)); 
                   }
     }

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
    ctx.fillText("Max Matching",380,100);
    ctx.strokeText("Max Matching",380,100);   
    
}


function vertexId(I,vx,vy){
    
var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.fillStyle = "#f00f17";
    ctx.shadowColor = "#000000";
    ctx.lineWidth ="1";
    ctx.strokeStyle = "red";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 3;
    ctx.font = "30px Ariel";
    ctx.fillText(I,vx,vy);
    ctx.strokeText(I,vx,vy);   


}
    vertexId("a",360,300); // ID vertices
    vertexId("A",730,300);
    vertexId("b",360,400);
    vertexId("B",730,400);
    vertexId("c",360,500);
    vertexId("C",730,500);
    vertexId("d",360,600);
    vertexId("D",730,600);
    vertexId("e",360,700);
    vertexId("E",730,700);

function vertex(x,y,colour){ // Draws vertices
    
    var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.beginPath();
    ctx.arc(x,y,10,0,2 * Math.PI,false);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.closePath();
}

   for(x=400;x<800;x=x+300){
       
       
   for(y=300;y<800;y=y+100){
       
    vertex(x,y,"#000");
}
    
}


for(var i = 0;i < 25;i++){
    
      col_1x = col_1x + 4;
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
store.push(a + 1); // pushes edge selection into an array called store
probSolve(); // the edge is then sent to probSolve for drawing
    
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
  
function probSolveY(colour){ // Plots input problem
    
      var col_1x = (maxDrawY[0]);
      var col_1y = (maxDrawY[1]);
      var col_2x = (maxDrawY[2]);
      var col_2y = (maxDrawY[3]);
        
      plotY(); 
    


  function plotY(){ // Draws input problem
      
   var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.beginPath();
    ctx.lineWidth="4";
    ctx.strokeStyle = colour;
    ctx.moveTo(points[col_1x],points[col_1y]);
    ctx.lineTo(points[col_2x],points[col_2y]);
    ctx.stroke();
    ctx.closePath();
    
   }
	
  } 


// Step 1 initial guess

function initialMatch(){ 

// store holds the array of all selected problem edges 
    
    var s;
    var c;
    var range = [];
    var conflict = [];
    
        
     for (k = 5;k <= 25;k=k+5){ // Loop start
   
        function devide(value) { // value = stored problem edges
        return value > k-5 && value <= k // function for deviding up store into sets of 5
        }
                    var range = store.filter(devide); // each set of 5 stored in array called range on each loop
                    s = (range[0])-1; // 1st value from each set stored as s
            
                    
                       if (s != s) { // checking to see if no problem input for a vertex
                       alert("Problem data missing,a solution cannot be found.Please try again and enter data for each vertex");
                       window.location.reload() // clears page to start again
                       break
                       }else{
                           c = (points[lines[s][4]]); // stores y cordinate on Y column of s edge in variable c
                           };
         
                             
                        
                        for ( var j = 0;j < conflict.length;j++){ // checks conflict on Y column.Loops over length of conflict array checking against c
                            
                                if (c == conflict[j]){ // if conflict passes into if statement
                                    
                                                                    
                                    if(range.length == 1){ 
                                    s = sStore.slice(-1)[0];
                                    }else
                                        
                                                      if (range.length == 2){
                                                      s = (range[1])-1;    // sets s to 2nd line in range array to overcome conflict
                                                      c = (points[lines[s][4]]);
                                                      range.length = 1
                                                      j = 0; 
                                                 }else
                                                     
                                                     if (range.length == 3){
                                                      s = (range[1])-1;    // sets s to 3rd line in range array to overcome conflict
                                                      c = (points[lines[s][4]]);
                                                      range.shift();
                                                      j = 0; 
                                        
                                                 }else
                                                     
                                                     if (range.length == 4){
                                                      s = (range[1])-1;     // sets s to 4th line in range array to overcome conflict
                                                      c = (points[lines[s][4]]);
                                                      range.shift();
                                                      j = 0; 
                                                 
                                                 }else
                                                     
                                                     if (range.length == 5){
                                                      s = (range[1])-1;  // sets s to 5th line in range array to overcome conflict
                                                      c = (points[lines[s][4]]);
                                                      range.shift();
                                                      j = 0; 
                                         }
                                continue;
                              }
                      }
                                
                                
                                
                    conflict.push(points[lines[s][4]]); // array of y coordinates on Y column of drawn edges stored in conflict to enable conflict checking
                    sStore.push(s); // stores drawn s lines in array sStore
                    
                     j = 0;   
                     
         
                     storeDrawn.push(lines[s][2]); // array of drawn edge ref numbers of y coordinates on X column
                     vertexX.push(points[lines[s][2]]); // array of y coordinates on X column of drawn edges s
                     vertexY.push(points[lines[s][4]]); // array of y coordinates on Y column of drawn edges s
                                      
                           
                    var col_1x = (lines[s][1]); // edges plotted and drawn
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

   
    } // Loop end
    
       
    
} // initialMatch end




function MaxMatch(){ // completes the process and finds the maximum matching
    
           
      markX();
    
      function markX() { // Marks empty vertex on X column or alerts Max Match found.
          
       out = []; // Clears out array
       missingX = [];           
           
eliminateDuplicate(vertexX); // Duplicates removed from vertexX 
          
missingX = _.difference(current,out); // compares current with out  and finds missing X column vertex named missingX 
          
 missingMinX = _.min(missingX);
 missingMaxX = _.max(missingX); 
          
if ( missingMinX == null){
alert("Max Matching achieved") // if no X column vertex is empty then Max matching must be achieved
exit();
}else{
    vertex(340,missingMinX,"#eb9f0e"); 
    vertex(340,missingMaxX,"#eb9f0e");
    }

    } // end markX
    
    
    
 markY();
    
          function markY(){ // Marks empty vertex on Y column
          
           out = []; // Clears out array                 
       
  eliminateDuplicate(vertexY); // Duplicates removed from vertexY
              
  missingY = _.difference(current,out); // compares current with out  and finds missing Y column vertex named missingY 
                         
  missingMinY = _.min(missingY);
  missingMaxY = _.max(missingY);          

vertex(770,missingMinY,"#fc1111"); 
vertex(770,missingMaxY,"#fc1111");               
              
 for (i = 0;i < store.length; i++){   
            storeNumx.push(lines[(store[i]-1)][2])  // array of numbers from lines array referring to y coordinates of problems lines on X column  
                      
            }
  
    
            for (i = 0;i < storeNumx.length; i++){
            storeCoordx.push(points[storeNumx[i]]) // array of y coordinates of problem lines on X column
            }             
        
 

   
} // end markY
    
    
    
    xToy();
  
    
  
    function xToy(){ // Finds and draws edge from empty X vertex to Y column along problem line
        
    out = [];  // Clears out array  
    eliminateDuplicate(storeDrawn); // Removes duplicates from storeDrawn
        
        
    storeNumx = storeNumx.filter(function(val) { // compares StoreNumx and out from StoreDrawn and removes duplicates ( clears drawn lines from problem lines)
    return out.indexOf(val) == -1;
    });
        
    out = []; // Clears out array
    eliminateDuplicate(storeCoordx);  // Removes duplicates from storeCoordx
        
    var p = out.indexOf(missingMinX); // index of missing y coordinate on X column
    
    storeRefx.push(storeNumx[p]); // y coordinate ref number of problem from lines on missing X vertex
    
    maxDrawY= [storeRefx-1,storeRefx,parseFloat(storeRefx)+1,parseFloat(storeRefx)+2]; // array of ref numbers to draw line from missing X vertex
    
    probSolveY("#000");
        
    yC = (points[maxDrawY[3]]);
        
    if(yC == missingMinY){
          alert("MAX MATCHING FOUND");
          }else{
          yTox();
		  };
    
  }
    
    
    
    function yTox(){ // Finds and draws edge from  Y vertex to X column along drawn line
    
        
          out = [];
          eliminateDuplicate(vertexY)
          
          var interceptY = points[parseFloat(storeRefx)+2] // y coordinate intercept of maxDraw line
         
          out = [];
          eliminateDuplicate(sStore);
                 
        
               for ( x = 0;x < out.length;x++){ // Finds drawn line that ends on the interceptY vertex
              
                   z = out[x];
                   if(points[lines[z][4]] == interceptY){
                    out = out[x];    
                         }
              }
                 
          maxDrawy = lines[out]; // line array of drawn line from y coordinate intercept
        
          maxDrawY = [maxDrawy[1],maxDrawy[2],maxDrawy[3],maxDrawy[4]]; // line array to draw line
        
          probSolveY("#f00f17");
        
          var outx = points[maxDrawy[2]]; // y coordinate on X column of YtoX line
    
          missingMinX = outx;
    
          storeRefx = [];
    
          xToy();
    
   }
        
   
    
    
    
} // end MaxMatch 
    

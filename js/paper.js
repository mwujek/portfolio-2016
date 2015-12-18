// var count =14;
// var threshold = 0.99; // distance to target
// var dots = [];
// var locations = [];
// var lineLocation = [];
// var startingPoint = [];
// var circleSpeed = 20; // higher = faster
// var lineSpeed = 80; // higher = faster
// var minRadius = 3;
// var radiusRange = 6;
// var maxRadius = radiusRange - minRadius;
// var screenWidth = view.size.width;
// var pathStrokeWeight = screenWidth / 15;



// for (var i=0; i< count; i++){
//     var destination = Point.random() * view.size;
//     var startingPoints =  Point.random() * view.size;
//     startingPoint.push(startingPoints);
//     locations.push(destination);
//   lineLocation.push(destination);
// }

// // line layer
// //fillColor: {hue: (i*360/sym)
// var lineLayer = new Layer();
// for (var i= 0; i< count; i++){
//   var path = new Path({
//     strokeWidth: pathStrokeWeight,
//     strokeCap: 'round',
//     segments: [startingPoint[i], lineLocation[i]],
//     strokeColor: { hue: (i*120/count), saturation: 0.7, lightness: 0 },
//     closed: false,
//     opacity: 1
//     //blendMode: 'multiply'
//   });
//   //path.dashArray = [30, 30];
//   path.blendMode = 'multiply'
//   path.data = {startLooking: true, looking: false, found: false, newLocation: null };
//  } // end of for loop
 

//  // circle layer
// var circleLayer = new Layer();
// for (var i=0; i< count; i++){
    
//     if (i % 2 === 0){
//         var dot = new Shape.Circle({
//     center : startingPoint[i],
//     radius: minRadius * threshold,
//     name: 'dot'
//   });
//   dot.data = {
//       startingRadius: dot.radius,
//       radiusDiff: radiusRange * threshold,
//       totalDist: Math.round((destination - dot.position).length),
//       growing: true
//   };
//     } else{
//         var dot = new Shape.Circle({
//     center : startingPoint[i],
//     radius: maxRadius * threshold,
//     name: 'dot'
//   });
//   dot.data = {
//       startingRadius: dot.radius,
//       radiusDiff: radiusRange * threshold,
//       totalDist: Math.round((destination - dot.position).length),
//       growing: false 
//   };
        
//     }
  


//   // attach data
//   dot.data = {startingRadius: dot.radius , radiusDiff: 6 * threshold, totalDist: Math.round((destination - dot.position).length), growing: true };
//   vector = locations[i] - dot.position;
//   dot.data.percentTraveled = dot.data.totalDist - Math.round(vector.length);

//   // push variables to arrays
//   dots.push(dot);
// } // end of for loop

 
// function onFrame(event) {


//   for (var i = 0; i < count; i++) {
//     // define items
//     var item = circleLayer.children[i];
//     var lineItem = lineLayer.children[i];

//     // set inital destination
//     var lineVector = lineLocation[i] - lineItem.lastSegment.point;
//     var vector = locations[i] - item.position;
    
//     item.position += vector / (item.data.totalDist / circleSpeed);
//     lineItem.firstSegment.point = item.position; // always anchor first point to the dot position
    

//     // data for setting setting radius
//     var totalDist = item.data.totalDist;
//     var vectorL = Math.round(vector.length);
//     var percentage = (totalDist - vectorL) / totalDist;
//     var diff = item.data.radiusDiff;
//     var sR = item.data.startingRadius;
    
//     // change line color and position
//     if (lineItem.data.looking === false){
//       lineItem.lastSegment.point += lineVector / lineSpeed;
//       lineItem.strokeColor.lightness = 0.6 + (percentage *0.4);
//       //item.fillColor.lightness = 0.7 - (percentage/2)
//     }
    
//     //console.log(lineItem.strokeColor.lightness);

//     // grow and shrink radius
//     if (item.data.growing === true){
//       item.radius = Math.abs((percentage * diff) + sR);
//     } else {
//       sR = (sR + diff) * threshold;
//       item.radius = Math.abs(sR - (percentage * diff));
//     }
    
//     // reset position
    
//     if (percentage > threshold) {
//       if (lineItem.data.startLooking === true){

//         // new random point
//         var findNew = Point.random() * view.size;
//         lineItem.data.newLocation = findNew;

//         // set data properties
//         lineItem.data.startLooking = false;
//         lineItem.data.looking = true;
//         //console.log('one')
//       }

//       lineVector = lineItem.data.newLocation - lineItem.lastSegment.point;
           
//       if (lineItem.data.looking === true){
//           lineItem.strokeColor.lightness = 0.6;
         
//           //item.fillColor.lightness = 0.7
//         lineItem.lastSegment.point += lineVector/ lineSpeed;
        
//       }
//       if(lineVector.length < 15){
//         lineItem.data.found = true;
//       }
//       if (lineItem.data.found === true) {
//         lineLocation[i] = lineItem.data.newLocation;
//         locations[i] = lineItem.data.newLocation;
//         var newVector = locations[i] - item.position;
//         item.data.totalDist = newVector.length;
//         item.data.growing = !item.data.growing;
//         // set data
//         lineItem.data.looking = false;
//         lineItem.data.found = false;
//         lineItem.data.startLooking = true;
//       } // end of found conditional statement
//     } // end of threshold conditional statement
//     lineItem.strokeColor.hue +=0.5;
//   } // end of loop for circles only
// } // end of frame animation function
// function onMouseUp(event){
//     console.log(event.point.x)
//     console.log(event.point.y)
//     console.log(event.point)
//       for (var i = 0; i < count; i++) {
//     // define items
//     var item = circleLayer.children[i];
//     var lineItem = lineLayer.children[i];

//     // new random point
//     var findNew = event.point;
//     lineItem.data.newLocation = findNew;

//     // set data properties
//     lineItem.data.startLooking = false;
//     lineItem.data.looking = true;
//      }
// }

// function onResize(event) {
//     // Whenever the view is resized, move the path to its center:
//     var screenW = event.size.width;
//     console.log(screenW)
//     for (var i = 0; i < count; i++) {
//         var lineItem = lineLayer.children[i];
//         lineItem.strokeWidth = screenW / 15;
//     }
    
// }

function onFrame(t){for(var i=0;count>i;i++){var o=circleLayer.children[i],n=lineLayer.children[i],a=lineLocation[i]-n.lastSegment.point,e=locations[i]-o.position,r=o.data.totalDist,d=Math.round(e.length),s=(r-d)/r;if(n.strokeColor.hue+=.5,clickWaiting===!1&&(n.data.waiting=!1,circleSpeed=8,lineSpeed=100),n.data.waiting===!1&&moveStuff(n,o,e,s),n.data.looking===!1&&startShrink(n,a,s),s>threshold&&(n.data.startLooking===!0&&findNewPoint(n,o),a=n.data.newLocation-n.lastSegment.point,n.data.looking===!0&&movetoNewPoint(n,o,a),a.length<25&&(n.data.found=!0),n.data.found===!0)){lineLocation[i]=n.data.newLocation,locations[i]=n.data.newLocation;var l=locations[i]-o.position;o.data.totalDist=l.length,n.data.looking=!1,n.data.found=!1,n.data.startLooking=!0}}}function onMouseUp(t){lineSpeed=10,circleSpeed=30,clickWaiting=!0,console.log(t.point.x),console.log(t.point.y);var i=t.point.x,o=t.point.y;coord=[i,o],console.log(t.point);for(var n=0;count>n;n++){var a=circleLayer.children[n],e=lineLayer.children[n],r=t.point;e.data.newLocation=r,e.data.startLooking=!1,e.data.looking=!0,a.data.waiting=!1}return coord}function onResize(t){var i=t.size.width;console.log(i);for(var o=0;count>o;o++){var n=lineLayer.children[o];n.strokeWidth=i/15}}for(var count=12,threshold=.99,dots=[],locations=[],lineLocation=[],startingPoint=[],minRadius=3,radiusRange=6,maxRadius=radiusRange-minRadius,screenWidth=view.size.width,pathStrokeWeight=screenWidth/15,waitCount=0,clickWaiting=!1,coord,runOnce=!1,moveStuff=function(t,i,o,n){i.position+=o/(i.data.totalDist/circleSpeed),t.firstSegment.point=i.position},startShrink=function(t,i,o){t.lastSegment.point+=i/lineSpeed,t.strokeColor.lightness=.6+.4*o},findNewPoint=function(t,i){var o=Point.random()*view.size;return t.data.newLocation=o,t.data.startLooking=!1,t.data.looking=!0,clickWaiting===!0&&(t.data.waiting=!0,waitCount++,waitCount===count&&(clickWaiting=!1,waitCount=0,t.data.waiting=!1)),clickWaiting},movetoNewPoint=function(t,i,o){t.data.waiting===!1&&(t.strokeColor.lightness=.6,t.lastSegment.point+=o/lineSpeed)},initiateShrink=function(t,i,o,n){t=n.data.newLocation,i=n.data.newLocation;var a=i-o.position;o.data.totalDist=a.length,n.data.looking=!1,n.data.found=!1,n.data.startLooking=!0},i=0;count>i;i++){var destination=Point.random()*view.size,startingPoints=Point.random()*view.size;startingPoint.push(startingPoints),locations.push(destination),lineLocation.push(destination)}for(var lineLayer=new Layer,i=0;count>i;i++){var path=new Path({strokeWidth:pathStrokeWeight,strokeCap:"round",segments:[startingPoint[i],lineLocation[i]],strokeColor:{hue:120*i/count,saturation:.7,lightness:0},closed:!1,opacity:1});path.blendMode="multiply",path.data={startLooking:!0,looking:!1,found:!1,newLocation:null,waiting:!1}}for(var circleLayer=new Layer,i=0;count>i;i++){if(i%2===0){var dot=new Shape.Circle({center:startingPoint[i],name:"dot",radius:5});dot.data={totalDist:Math.round((destination-dot.position).length),waiting:!1}}else{var dot=new Shape.Circle({center:startingPoint[i],radius:5,name:"dot"});dot.data={totalDist:Math.round((destination-dot.position).length),waiting:!1}}dot.data={totalDist:Math.round((destination-dot.position).length),waiting:!1},vector=locations[i]-dot.position,dot.data.percentTraveled=dot.data.totalDist-Math.round(vector.length),dots.push(dot)}
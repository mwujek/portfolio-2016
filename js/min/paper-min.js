function onFrame(t){for(var i=0;count>i;i++){var o=circleLayer.children[i],n=lineLayer.children[i],a=lineLocation[i]-n.lastSegment.point,e=locations[i]-o.position,r=o.data.totalDist,d=Math.round(e.length),s=(r-d)/r;if(n.strokeColor.hue+=.5,clickWaiting===!1&&(n.data.waiting=!1,circleSpeed=8,lineSpeed=100),n.data.waiting===!1&&moveStuff(n,o,e,s),n.data.looking===!1&&startShrink(n,a,s),s>threshold&&(n.data.startLooking===!0&&findNewPoint(n,o),a=n.data.newLocation-n.lastSegment.point,n.data.looking===!0&&movetoNewPoint(n,o,a),a.length<25&&(n.data.found=!0),n.data.found===!0)){lineLocation[i]=n.data.newLocation,locations[i]=n.data.newLocation;var l=locations[i]-o.position;o.data.totalDist=l.length,n.data.looking=!1,n.data.found=!1,n.data.startLooking=!0}}}function onMouseUp(t){lineSpeed=10,circleSpeed=30,clickWaiting=!0,console.log(t.point.x),console.log(t.point.y);var i=t.point.x,o=t.point.y;coord=[i,o],console.log(t.point);for(var n=0;count>n;n++){var a=circleLayer.children[n],e=lineLayer.children[n],r=t.point;e.data.newLocation=r,e.data.startLooking=!1,e.data.looking=!0,a.data.waiting=!1}return coord}function onResize(t){var i=t.size.width;console.log(i);for(var o=0;count>o;o++){var n=lineLayer.children[o];n.strokeWidth=i/15}}for(var count=12,threshold=.99,dots=[],locations=[],lineLocation=[],startingPoint=[],minRadius=3,radiusRange=6,maxRadius=radiusRange-minRadius,screenWidth=view.size.width,pathStrokeWeight=screenWidth/15,waitCount=0,clickWaiting=!1,coord,runOnce=!1,moveStuff=function(t,i,o,n){i.position+=o/(i.data.totalDist/circleSpeed),t.firstSegment.point=i.position},startShrink=function(t,i,o){t.lastSegment.point+=i/lineSpeed,t.strokeColor.lightness=.6+.4*o},findNewPoint=function(t,i){var o=Point.random()*view.size;return t.data.newLocation=o,t.data.startLooking=!1,t.data.looking=!0,clickWaiting===!0&&(t.data.waiting=!0,waitCount++,waitCount===count&&(clickWaiting=!1,waitCount=0,t.data.waiting=!1)),clickWaiting},movetoNewPoint=function(t,i,o){t.data.waiting===!1&&(t.strokeColor.lightness=.6,t.lastSegment.point+=o/lineSpeed)},initiateShrink=function(t,i,o,n){t=n.data.newLocation,i=n.data.newLocation;var a=i-o.position;o.data.totalDist=a.length,n.data.looking=!1,n.data.found=!1,n.data.startLooking=!0},i=0;count>i;i++){var destination=Point.random()*view.size,startingPoints=Point.random()*view.size;startingPoint.push(startingPoints),locations.push(destination),lineLocation.push(destination)}for(var lineLayer=new Layer,i=0;count>i;i++){var path=new Path({strokeWidth:pathStrokeWeight,strokeCap:"round",segments:[startingPoint[i],lineLocation[i]],strokeColor:{hue:120*i/count,saturation:.7,lightness:0},closed:!1,opacity:1});path.blendMode="multiply",path.data={startLooking:!0,looking:!1,found:!1,newLocation:null,waiting:!1}}for(var circleLayer=new Layer,i=0;count>i;i++){if(i%2===0){var dot=new Shape.Circle({center:startingPoint[i],name:"dot",radius:5});dot.data={totalDist:Math.round((destination-dot.position).length),waiting:!1}}else{var dot=new Shape.Circle({center:startingPoint[i],radius:5,name:"dot"});dot.data={totalDist:Math.round((destination-dot.position).length),waiting:!1}}dot.data={totalDist:Math.round((destination-dot.position).length),waiting:!1},vector=locations[i]-dot.position,dot.data.percentTraveled=dot.data.totalDist-Math.round(vector.length),dots.push(dot)}
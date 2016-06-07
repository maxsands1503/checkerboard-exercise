// // Your JS goes here
//
// for(var count = 0; count < 80; count++){
//
//   if(count === 0){
//       document.write('<br/><div style="background-color:#000000;float:left; width: 11.1%; padding:11.1%; display:inline-block;"></div>');
//   }
//   if(count === 1){
//     document.write('<br/><div style="background-color:#FF0000;float:left; width: 11.1%; padding:11.1%; display:inline-block;"></div>');
//   }
//   else  if (count % 2 === 0){
//       document.write('<br/><div style="background-color:#FF0000;float:left; width: 11.1%; padding:11.1%; display:inline-block;"></div>');
//         }
//
//         else if(count % 5 === 0 && count % 2 !== 0){
//           document.write('<br/><div style="background-color:#000000; float:left; width: 11.1%; padding:11.1%; display:inline-block;"></div>');
//           }
//           else if(count % 5 === 0 && count % 2 === 0){
//         document.write('<br/><div style="background-color:#FF0000; float:left; width: 11.1%; padding:11.1%; display:inline-block;"></div>');
//           }
//           else if (count % 3 === 0 && count %2 !== 0) {
//             document.write('<br/><div style="background-color:#FF0000; float:left; width: 11.1%; padding:11.1%; display:inline-block;"></div>');
//           }
//     }
var container = document.createElement("div");
container.style.width = "100vw";
container.style.height = "100vh"
container.style.margin = "0"
container.style.padding = "0";

document.body.appendChild(container);

var colors = '0123456789abcdef'.split('').map(function(x,y, z){ return z[Math.floor(Math.random()*16)] }).join('').slice(0,6);


for (var counter = 0; counter < 63; counter++) {
    var div1 = document.createElement("div");
    div1.style.background = getRando();
    div1.style.width = "11.1%";
    div1.style.paddingBottom = "11.1%";
    div1.style.float = "left";
    div1.style.display = "inline-block";
    container.appendChild(div1);
  }
  
  function getRando() {
  var color = '#' + '0123456789abcdef'.split('').map(function(x,y, z){
    return z[Math.floor(Math.random()*16)] }).join('').slice(0,6);
  return color
  }

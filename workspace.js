 var color = '#'+'0123456789abcdef'.split('').map(function(x,y, z){ return z[Math.floor(Math.random()*16)] }).join('').slice(0,6);
console.log(color);

function getRando() {
var color = '#' + '0123456789abcdef'.split('').map(function(x,y, z){ return z[Math.floor(Math.random()*16)] }).join('').slice(0,6);
return color
}

// setTimeout(function(){
//    window.location.reload(1);
// }, 2000);
console.log(getRando());

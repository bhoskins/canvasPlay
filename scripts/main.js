(function(){
  'use strict';



$(document).ready(function(){
    //window.router = new AppRouter();
    //Backbone.history.start();
  console.log('Welcome to my code!');

  var canvas = document.getElementById('sf-canvas');
    var context = canvas.getContext('2d');
    var x = 80;
    var y = 100;
    // context.font = '40pt Arial';
    context.fillStyle = 'blue';
    // context.fillText('Composite Flower', 0, 0);

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(800, 600);
    context.stroke();

    context.lineWidth = 1;
    context.font = '40px Rancho, cursive';
    context.fillText('Composite Flower', 10, 50);
    context.strokeStyle = 'pink';
    context.strokeText('Composite Flower', 10, 50);

    context.strokeStyle = 'pink';
    context.strokeText('Stroking Yeah!', x, y);









  });
})();

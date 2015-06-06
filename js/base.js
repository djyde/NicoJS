;(function(){
  $(document).ready(function(){

    var colors = ['#FFE300','#FFFFFF','#48FFD1','red']

    var random = function(min,max){
      return Math.ceil(Math.random() * (max - min) + min);
    }


    var make = function(container,options){
      var div = $('<div class="bubble" />').text(options.content);
      container.prepend(div);
      var bumb = Math.random() * 10 < 5;
      if (!bumb) {
        div.css({
          "font-size": options.fontsize * 1.8 + "em",
          "position": "absolute",
          "color": colors[random(0,3)],
          "white-space": "nowrap",
          "right": 0,
          "top": Math.random() * $(window).height()
        })
        div.animate({
          right: $(document).width() + 100
        },options.duration,'linear',function(){
          div.remove();
        })
      } else {
        div.css({
          "font-size": options.fontsize * 1.2 + "em",
          "position":"absolute",
          "text-align": "center",
          "width": "100%",
          "color": colors[random(0,3)],
          "top": Math.random() * $(window).height()
        })
        window.setTimeout(function(){
          div.remove();
        },5000);
      }
      
      
    }
    // make($('#container'),{"color":"#f2ad88","fontsize":1.5729205077514052,"content":"来啦","duration":4541,"nickname":"oH_xis15rtTiWz88QL4AwWKrZEFg"});


    var socket = new WebSocket('ws://123.57.143.92:3000');

    socket.onopen = function(){
      socket.send('ping');
    }

    socket.onmessage = function(e){
      make($('body'),JSON.parse(e.data));
    }


    // socket.on('connect',function(){
    //   console.log('1');
    // })

    // socket.on('message',function(options){
    //   console.log(options);
    //   make($('#container'),JSON.parse(options));
    // })
  })
})()
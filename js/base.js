;(function(){
  $(document).ready(function(){

    var random = function(min,max){
      return Math.ceil(Math.random() * (max - min) + min);
    }


    var make = function(container,options){
      var div = $('<div class="bubble" />').text(options.content);
      container.prepend(div);
      if (options.type === 'linear') {
        div.css({
          "z-index": 100,
          "font-size": options.fontsize * 1.8 + "em",
          "position": "absolute",
          "color": options.color,
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
          "z-index": 100,
          "font-size": options.fontsize * 1.2 + "em",
          "position":"absolute",
          "text-align": "center",
          "width": "100%",
          "color": options.color,
          "top": Math.random() * $(window).height()
        })
        window.setTimeout(function(){
          div.remove();
        },5000);
      } 
    }

    var socket = new WebSocket('ws://123.57.143.92:3000');

    socket.onopen = function(){
      socket.send('ping');
    }

    socket.onmessage = function(e){
      make($('body'),JSON.parse(e.data));
    }
  })
})()
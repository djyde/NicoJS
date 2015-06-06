;(function(){
  $(document).ready(function(){
    var make = function(container,options){
      var div = $('<div class="bubble" />').text(options.content);
      container.prepend(div);
      var bumb = Math.random() * 10 < 5;
      console.log(bumb);
      if (!bumb) {
        div.css({
          "font-size": options.fontsize + "em",
          "position": "absolute",
          "color": options.color,
          "top": Math.random() * $(window).height()
        })
        div.animate({
          left: $(document).width() + 100
        },options.duration,'linear',function(){
          div.remove();
        })
      } else {
        div.css({
          "font-size": options.fontsize + "em",
          "position":"absolute",
          "text-align": "center",
          "width": "100%",
          "color": options.color,
          "top": Math.random() * $(window).height()
        })
        window.setTimeout(function(){
          div.remove();
        },3000);
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
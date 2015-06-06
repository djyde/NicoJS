;(function(){
  $(document).ready(function(){
    var make = function(container,options){
      var div = $('<div class="bubble" />').text(options.content);
      div.css({
        "font-size": options.fontsize + "em",
        "position": "relative",
        "color": options.color,
        "top": Math.random() * $(window).height()
      })
      container.append(div);
      div.animate({
        left: $(window).width()
      },options.duration,'linear',function(){
      })
    }
    // make($('#container'),{"color":"#f2ad88","fontsize":1.5729205077514052,"content":"来啦","duration":4541,"nickname":"oH_xis15rtTiWz88QL4AwWKrZEFg"});


    var socket = io('123.57.143.92:3000');

    socket.on('connect',function(){
      console.log('1');
    })

    socket.on('message',function(options){
      console.log(options);
      make($('#container'),JSON.parse(options));
    })
  })
})()
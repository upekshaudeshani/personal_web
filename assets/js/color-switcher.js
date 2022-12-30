

/* ----------------------------------------------------------- */
/* THEME STYLE SWITCHER 
/* ----------------------------------------------------------- */ 
var color;

var space;

function floatySpace() {
  var colors = [
    "#FF3F8E", "#04C2C9", "#2E55C1","#3fc35f"
  ];


  space = new CanvasSpace("canvas",color).display();
  var form = new Form( space );

  // Elements
  var pts = [];
  var center = space.size.$divide(1.8);
  var angle = -(window.innerWidth * 0.5);
  var count = window.innerWidth * 0.05;
  if (count > 150) count = 150;
  var line = new Line(0, angle).to(space.size.x, 0);
  var mouse = center.clone();

  var r = Math.min(space.size.x, space.size.y) * 1;
  for (var i=0; i<count; i++) {
    var p = new Vector( Math.random()*r-Math.random()*r, Math.random()*r-Math.random()*r );
    p.moveBy( center ).rotate2D( i*Math.PI/count, center);
    p.brightness = 0.1
    pts.push( p );
  }

  // Canvas
  space.add({
    animate: function(time, fps, context) {

      for (var i=0; i<pts.length; i++) {
        // rotate the points slowly
        var pt = pts[i];

        pt.rotate2D( Const.one_degree / 20, center);
        form.stroke( false ).fill( colors[i % 3] ).point(pt, 1);

        // get line from pt to the mouse line
        var ln = new Line( pt ).to( line.getPerpendicularFromPoint(pt));

        // opacity of line derived from distance to the line
        var opacity = Math.min( 0.8, 1 - Math.abs( line.getDistanceFromPoint(pt)) / r);
        var distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse))

        if (distFromMouse < 50) {
          if (pts[i].brightness < 0.3) pts[i].brightness += 0.015
        } else {
          if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01
        }

        var color = "rgba(255,255,255," + pts[i].brightness +")"
        form.stroke(color).fill( true ).line(ln);
      }
    },

    onMouseAction: function(type, x, y, evt) {
      if (type=="move") {
        mouse.set(x,y);
      }
    },

    onTouchAction: function(type, x, y, evt) {
      this.onMouseAction(type, x, y);
    }
  });

  space.bindMouse();
  space.play();
}



floatySpace();

// $(window).resize(function(){
//   space.removeAll();
//   $('canvas').remove();
//   floatySpace();
// });



jQuery(function($){


	// style switcher area hide & active

	  jQuery('.style-switch-button').click(function(){
	    $('.theme_style_switcher').toggleClass("style-switch-active");
	  })

	  // theme style css changed	 

	  $('#bridge').click(function (e){
			$('#switcher').attr('href','assets/css/theme-color/bridge-theme.css');
			color="#a5d549";
	    e.preventDefault();
	  });

	  $('#default').click(function (e){
			$('#switcher').attr('href','assets/css/theme-color/default-theme.css');
			color="#339999";
	    e.preventDefault();
	  });

	  $('#darkRed').click(function (e){
			$('#switcher').attr('href','assets/css/theme-color/dark-red-theme.css');
			color=339999;
	    e.preventDefault();
	  });

	  $('#green').click(function (e){
			$('#switcher').attr('href','assets/css/theme-color/green-theme.css');
			color="#3fc35f";
	    e.preventDefault();
	  });

	  $('#liteBlue').click(function (e){
			$('#switcher').attr('href','assets/css/theme-color/lite-blue-theme.css');
			color=339999;
	    e.preventDefault();
	  });

	  $('#orange').click(function (e){
			$('#switcher').attr('href','assets/css/theme-color/orange-theme.css');
			color="#37c6f5";
	    e.preventDefault();
	  });

	  $('#pink').click(function (e){	  	
			$('#switcher').attr('href','assets/css/theme-color/pink-theme.css');
			color="#ff2851";
	    e.preventDefault();
	  });

	  $('#purple').click(function (e){
			$('#switcher').attr('href','assets/css/theme-color/purple-theme.css');
			color="#c762cb";
	    e.preventDefault();
	  });

	  $('#red').click(function (e){
			$('#switcher').attr('href','assets/css/theme-color/red-theme.css');
			color="#ee4532";
	    e.preventDefault();
	  });  

	  $('#darkblue').click(function (e){
			$('#switcher').attr('href','assets/css/theme-color/dark-blue-theme.css');
			color="#4568DC";
	    e.preventDefault();
	  });
	
});


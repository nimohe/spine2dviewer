//$(window).resize = function(){console.log('mother fucker resizing');resetCanvasSize()};

window.onresize = function(){console.log(resetCanvasSize());};

function resetCanvasSize()
{
  console.log('onResize')
  //$('#viewport-canvas').width =
  //$('#viewport-canvas').height =
  //console.log($('.viewport-canvas'));
  //console.log('canvas height : ', $('#viewport-canvas').height());
  setElmtParentSize($('#viewport-canvas'),$('#viewport'));
  //windowsSize($('#viewport-canvas'));
  return false;
}

/// Tools

function setElmtParentSize(elmt, elmtParent){
  var baseWidth = 800;
  var baseHeight = 600;
  var resultW = elmtParent.width();
  var nVw = resultW * 100 / baseWidth;
  var resultH = baseHeight*nVw/100;

  if (resultW<=800 || resultH<=600)
  {
    elmt.height(resultH);
    elmt.width(resultW);
    console.log('reSize ',nVw,'% new canvas height',elmt.height(), 'new canvas width',elmt.width());

  }else{
    console.log('reSize no change');
  }

}
function windowsSize(elmt, less){
  var heightElmt;
	var widthElmt;

	if( typeof( window.innerWidth ) == 'number' )
  {
		heightElmt = window.innerHeight;
		widthElmt = window.innerWidth;
	}else if( document.documentElement && document.documentElement.clientHeight )
  {
		heightElmt = document.documentElement.clientHeight;
		widthElmt = document.documentElement.clientWidth;
  }
 console.log('width', widthElmt);
  //hauteur = hauteur-200;
  var resultH = less?(heightElmt-less):heightElmt;
  var resultW = widthElmt-(16.6*widthElmt/100);
  
  elmt.height(resultH);
  elmt.width(resultW);
  console.log('new canvas height',elmt.height(), 'new canvas width',elmt.width());



}
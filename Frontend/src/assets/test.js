$(".view-full-size").click(function() {

  var mainScreenshot = $("#main-screenshot");
	
  var theImage = new Image();
  theImage.src = mainScreenshot.attr("src");
	
  var winWidth = theImage.width + 20;
  var winHeight = theImage.height + 20;
	
  window.open(this.href,  null, 'height=' + winHeight + ', width=' + winWidth + ', toolbar=0, location=0, status=0, scrollbars=0, resizable=0'); 
	
  return false;
	
});
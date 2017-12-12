document.addEventListener('DOMNodeInserted', function(){
  var div = document.getElementsByClassName('nH')[0];
  if(div){
    div.addEventListener('scroll', function(event){
      var divChild = document.getElementById(':4');
      divChild.scrollTo(0,180);
      div.removeEventListener('scroll', arguments.callee, true);
    }, true);
  }
});

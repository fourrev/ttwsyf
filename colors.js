var Body = {
  setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);    
  }
}
function NightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'day') {
    Body.setColor('black');
    Body.setBackgroundColor('white');
    self.value = 'night' ;
  } else {
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value = 'day' ;
  }
}

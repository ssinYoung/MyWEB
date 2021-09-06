var target = document.querySelector('body');
var Link = {
  setLink:function (color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
    alist[i].style.color = color;
    i = i + 1;
    }
  }
}

var Body = {
  setFontColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function screenHandler(self){
  if (self.value === '어두운 배경'){
    Body.setBackgroundColor('black');
    Body.setFontColor('white');
    self.value = '밝은 배경';

    Link.setLink('powderblue');

  } else {
    Body.setBackgroundColor('white');
    Body.setFontColor('black');
    self.value = '어두운 배경';

    Link.setLink('blue');
}
}

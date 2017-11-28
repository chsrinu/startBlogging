$(document).ready(function(){
  var path1=$('.backView').data("bgimage");
  var path2=$('.aboutAuthor').data("bgimage");
  var path3=$('.frontView').data("bgimage");
  $('.backView').css("background-image","url(../images/"+path1+")");
  $('.aboutAuthor').css("background-image","url(../images/"+path2+")");
  $('.frontView').css("background-image","url(../images/"+path3+")");
})
var name = $('#name').offset().top;
var about = $('#about').offset().top;

$(window).scroll(function(){
    var scrollVar = $(window).scrollTop();
    if ((name - scrollVar) < 220 ) {
    $('#name').stop().fadeTo(50,0);
    }
    else {
    $('#name').stop().fadeTo('fast', 1);
    }

    if ((about - scrollVar) < -10) {
    $('#about').stop().fadeTo(200, 0);
    }
    else {
    $('#about').stop().fadeTo('fast', 1);
    }
})
/*  console.log("user wants to write a new article");

})*/
$('#articleGallery').click(function(){
  console.log("user wants to view Article gallery");
  location.href = window.location.pathname + "/articleGallery";
})
$('#newArticle').click(function(){
  console.log("user wants to write new Article");
  location.href = window.location.pathname + "/newArticle";
})

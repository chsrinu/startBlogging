
$(document).ready(function(){
  $('.fontFamily option:contains("Sans-Serif")').prop('selected',true);
  $('.fontSize option:contains("4")').prop('selected',true);
})

/*Apply the selected font which is selected from selected drop down*/
$('.fontFamily').change(function(){
  document.execCommand("fontName", false, $('.fontFamily').find(':selected').text());
})

/*Apply the selected font size which is selected from selected drop down.*/
$('.fontSize').change(function(){
  console.log("font size is "+$('.fontSize').find(':selected').text());
  document.execCommand("fontSize", false, $('.fontSize').find(':selected').text());
})

/*Change the font style to bold/italic/underline
as per the button clicked. All the 3 can also be selected at a time.*/
$('.fontStyle').click(function(){
  $(this).toggleClass('active');
  if(this.title==='bold')
    document.execCommand('bold', false, null);
  if(this.title==='italic')
    document.execCommand('italic', false, null);
  if(this.title==='underline')
    document.execCommand('underline', false, null);
  });

/*Move the cursor as per the alignment button selected and
change the selected button color accordingly. Only alignment can be selected at a time.*/
$('.fontAlignment').click(function(){
    $('.fontAlignment').not(this).removeClass('active');
    $(this).toggleClass('active');
    if(this.title==='leftAlign')
      document.execCommand('justifyLeft', false, null);
    else if(this.title==='centerAlign')
      document.execCommand('justifyCenter', false, null);
    else if(this.title==='rightAlign')
      document.execCommand('justifyRight', false, null);
})

/*Image upload button*/
$('.uploadImage').click(function(){
    $('.uploadImage').toggleClass('active');
    setTimeout(function(){
      $('.uploadImage').toggleClass('active');
    },1000)
})
/*Changing the text color for text selected.*/
$('.textColor').click(function(){
  $(this).toggleClass('active');
})
/*Changing the bg color for a text.*/
$('.textBgColor').click(function(){
  $(this).toggleClass('active');
})
/*Enable the tab keyword to work while editing.*/
$('#writepad').on('keydown',function writePadShortCuts(event){
  var keyCode=event.which;
  if(keyCode === 9)//preventing default behaviour of tab
  {
    event.preventDefault();
    document.execCommand('insertHTML', false, '&#009');
  }
}).css('white-space', 'pre-wrap');

/*Do not change the focus from writing pad, if any of the above tool buttons are clicked.*/
$('.fontStyle, .fontAlignment, select, .textColor, .textBgColor').focus(function(){
    focusWritepad();
});

/*Utility functions*/
function focusWritepad(){
    $('#writepad').focus();
}

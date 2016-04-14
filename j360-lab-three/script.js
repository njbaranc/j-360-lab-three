
$(function() {
  var score=0;
  var $check= $('button');

  $check.on('click', function(){
    if (this.id=="lastcorrect"){
      score++;
      alert ('Your Final Score is: ' + score);
    }
    else if (this.id=="lincorrect"){
      alert ('Your Final Score is: ' + score);
    }
    else if (this.id=="correct") {
      score++;
      alert (' Good shout, lad! ');
    }
    else {
      alert (" Now that's a load of rubbish! ");
    }
  });
});

$(function() {
  var divs='';
  var $div= $('div');

  $div.on('click', function() {
    if (this.id=="qs1") {
      $('#qs1').fadeOut(750);
    }
    else if(this.id=="qs2") {
        $('#qs2').fadeOut(750);
      }
    else if  (this.id=="qs3") {
        $('#qs3').fadeOut(750);
      }
    else if  (this.id=="qs4") {
        $('#qs4').fadeOut(750);
    }
  });
});

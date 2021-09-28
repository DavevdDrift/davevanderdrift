/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "navbar-right") {
    x.className += " responsive";
  } else {
    x.className = "navbar-right";
  }
}
$(document).ready(function(){
	$('.btn').click(function(){
    $('body').toggleClass("scroll");
    $('nav').toggleClass("show");
		$('.items').toggleClass("show");
		$('ul li').toggleClass("hide");
	});
});

$(document).ready(function () {
  $('.ButtonBlue').click(function (event) {
      console.log('Clicked button')

      var TextfieldName = $('.TextfieldName').val()
      var TextfieldMail = $('.TextfieldMail').val()
      var TextfieldLong = $('.TextfieldLong').val()
      var statusElm = $('.status')
      statusElm.empty()

      if(TextfieldName.length > 1) {
        statusElm.append()
      } else {
        event.preventDefault()
        statusElm.append('<div class="Wrong">Name is not valid</div>')
      }

      if(TextfieldMail.length >= 5 && TextfieldMail.includes('@') && TextfieldMail.includes('.')) {
        statusElm.append()
      } else {
        event.preventDefault()
        statusElm.append('<div class="Wrong">Email is missing an @ or dot.</div>')
      }


      if(TextfieldLong.length >= 10) {
        statusElm.append()
      } else {
        event.preventDefault()
        statusElm.append('<div class="Wrong">Fill in some more text</div>')
      }
  })

  $('img[data-enlargeable]').addClass('img-enlargeable').click(function() {
  var src = $(this).attr('src');
  var modal;

  function removeModal() {
    modal.remove();
    $('body').off('keyup.modal-close');
  }
  modal = $('<div>').css({
    background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: '10000',
    top: '0',
    left: '0',
    cursor: 'zoom-out'
  }).click(function() {
    removeModal();
  }).appendTo('body');
  //handling ESC
  $('body').on('keyup.modal-close', function(e) {
    if (e.key === 'Escape') {
      removeModal();
    }
  });
});
})



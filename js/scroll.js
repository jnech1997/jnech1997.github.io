let header = document.getElementById('my_header');
let sticky = header.offsetTop;

function scrollHeader() {
  if (window.pageYOffset >= sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

$(window).scroll(function() {
  const height = $(window).scrollTop();
  if (height < 725) {
    header.style.opacity = 1;
  }
  else {
    header.style.opacity = 0;
  }
  if (height > 350) {
    $('#point_down').fadeOut();
    $('#back_to_top').fadeIn();
  } else {
    $('#point_down').fadeIn();
    $('#back_to_top').hide();
  }
});

$(document).ready(function() {
  scrollHeader();
  $('#back_to_top').click(function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: 0 },'slow');
  });
  $('#point_down').click(function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(document).height()},'slow');
  });
});
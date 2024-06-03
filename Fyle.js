//Form Pop Up on clicking Contact us button
Formpopup = () => {
  let Form_popup = document.getElementById("form1");
  let web = document.getElementById("web");
  Form_popup.style.display = "block";
};

//This is addition button that close form

Close = () => {
  let Form_popup = document.getElementById("form1");
  Form_popup.style.display = "none";
};

//Image-slider

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  function showSlide(index) {
      currentIndex = index;
      const newTransform = -currentIndex * 100 + '%';
      slides.style.transform = 'translateX(' + newTransform + ')';
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
  }

  dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
          showSlide(index);
      });
  });
});


// Code to change image on clicking different content

        $(document).ready(function() {
            $('.img-text-change div ').click(function() {
                var target = $(this).data('target');
                $('.img-change img').removeClass('active');
                $('#' + target).addClass('active');
            });
        });
    
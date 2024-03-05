
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },

     
    },
   
  });


  let navbar = document.querySelector('.inner-header-bottom .header-bottom')
  let menu = document.querySelector('#menu')
  
  menu.onclick = () => {
      navbar.classList.toggle('active');
  }
  
  let changeIcon = function(icon) {
  icon.classList.toggle('fa-times')
  }


 

  let object = [
    {
      image: 'image/image 6.jpg',
      title: 'Necklaces'
    },
    {
      image: 'image/image 7.jpg',
      title: 'Earrings'
    },
    {
      image: 'image/image 8.jpg',
      title: 'Rings'
    },
    {
      image: 'image/image 9.jpg',
      title: 'Bracelets'
    }
  ]
  
  
  let html = " ";
  object.forEach(object  => {
      html +=`<div class="col-mb-3 card  mt-4">
   <div class="column">
  <img class="image" src="${object.image}">
  <p class="fine-text">${object.title}</p>
   </div>
      </div>`;
  });
  
  document.getElementById("fine-card").innerHTML = html;








  $('.created-button').magnificPopup({
    type: 'inline',
    showCloseBtn: false,
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
  });

  $('.modal-form-close').on('click', function() {
    $.magnificPopup.close();
  });





  





 
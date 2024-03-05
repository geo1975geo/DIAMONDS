

var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev"
    },
    pagination: {
      el: ".main-swiper-inner .swiper-pagination",
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

     
    }
   
  });


var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".shop-next",
      prevEl: ".shop-prev"
    },
    pagination: {
      el: ".shop-inner .swiper-pagination",
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

     
    }
   
  });




  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".spotted-next",
      prevEl: ".spotted-prev"
    },
    pagination: {
      el: ".spotted-inner .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 6,
        spaceBetween: 20,
      },

     
    }
   
  });




  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".most-next",
      prevEl: ".most-prev"
    },
    pagination: {
      el: ".most-inner .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
   
  });



  let navbar = document.querySelector('.inner-header-bottom .header-bottom')
  let menu = document.querySelector('#menu')
  
  menu.onclick = () => {
      navbar.classList.toggle('active');
  }
  
  let changeIcon = function(icon) {
  icon.classList.toggle('fa-times')
  }




var object = [
    {
        image: 'image/image 14.jpg',
        text: 'Bridal'
    },
    {
        image: 'image/image 15.jpg',
        text: 'Most popular gifts'
    }
  
  ]
  
  
  
  let html = " ";
  object.forEach(object  => {
    html +=`<div class="col  mt-4">
  <div class="card main-center-card">
  <img class="main-center-image"  src="${object.image}" alt="${object.name}">
  <p class="main-center-image-text"> ${object.text}</p>
  
   </div>
    </div>`;
  });
  
  document.getElementById("main-center").innerHTML = html;
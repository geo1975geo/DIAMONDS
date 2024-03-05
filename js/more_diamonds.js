let object = [
    {
        name: 'Round Diamond',
        image: 'image/diamond-1.jpg',
        history: "https://blog.brilliance.com/diamonds/the-history-of-diamonds-the-classic-round-cut",
        price: '1500',
        old_price: '1700'
    },
    {
        name: 'Radinate Diamond',
        image: 'image/diamond-2.jpg',
        history_2: "https://www.whiteflash.com/diamond-education/diamond-shapes/radiant-cut/",
        price: '1270',
        old_price: '1500'

    },
    {
        name: 'Princess Diamond',
        image: 'image/diamond-3.jpg',
        history_3: "https://www.whiteflash.com/diamond-education/diamond-shapes/princess-cut/",
        price: '1830',
        old_price: '2200'
    },

    {
        name: 'Asher Diamond',
        image: 'image/diamond-4.jpg',
        history_4: "https://www.whiteflash.com/diamond-education/diamond-shapes/asscher-cut/",
        price: '1350',
        old_price: '1450'
    },

    {
        name: 'Cushion Diamond',
        image: 'image/diamond-5.jpg',
        history_5: "https://www.whiteflash.com/diamond-education/diamond-shapes/cushion-cut/",
        price: '1100',
        old_price: '1200'
    },

    {
        name: 'Heart Diamond',
        image: 'image/diamond-6.jpg',
        history_6: "https://www.whiteflash.com/diamond-education/diamond-shapes/heart-cut/",
        price: '1350',
        old_price: '1450'
    },

    {
        name: 'Marquis Diamond',
        image: 'image/diamond-7.jpg',
        history_7: "https://www.capediamonds.co.za/shape/marquise/",
        price: '1300',
        old_price: '1500'
    },

    {
        name: 'Oval Diamond',
        image: 'image/diamond-8.jpg',
        history_8: "https://blog.brilliance.com/diamonds/the-history-of-the-oval-diamond-ring",
        price: '1200',
        old_price: '1350'
    },

    {
        name: 'Emerald Diamond',
        image: 'image/diamond-9.jpg',
        history_9: "https://blog.brilliance.com/diamonds/the-history-of-the-emerald-cut-diamond",
        price: '1950',
        old_price: '2100'
    },

    {
        name: 'Baguette Diamond',
        image: 'image/diamond-10.jpg',
        history_10: "https://4cs.gia.edu/en-us/blog/baguette-diamond-engagement-ring/",
        price: '1300',
        old_price: '1450'
    },

    {
        name: 'Pear Diamond',
        image: 'image/diamond-11.jpg',
        history_11: "https://www.jfjco.com/history-pear-cut-diamond/",
        price: '1000',
        old_price: '1100'
    },

    {
        name: 'Rhombus Diamond',
        image: 'image/diamond-12.jpg',
        history_12: "https://www.1stdibs.com/buy/rhombus-diamond/",
        price: '1180',
        old_price: '2230'
    },
    {
        name: 'Rhombus Diamond',
        image: 'image/diamond-1.jpg',
        history_12: "https://www.1stdibs.com/buy/rhombus-diamond/",
        price: '1180',
        old_price: '2230'
    },
    {
        name: 'Rhombus Diamond',
        image: 'image/diamond-5.jpg',
        history_12: "https://www.1stdibs.com/buy/rhombus-diamond/",
        price: '1180',
        old_price: '2230'
    },
    {
        name: 'Rhombus Diamond',
        image: 'image/diamond-8.jpg',
        history_12: "https://www.1stdibs.com/buy/rhombus-diamond/",
        price: '1180',
        old_price: '2230'
    },
    {
        name: 'Rhombus Diamond',
        image: 'image/diamond-12.jpg',
        history_12: "https://www.1stdibs.com/buy/rhombus-diamond/",
        price: '1180',
        old_price: '2230'
    },
    {
        name: 'Rhombus Diamond',
        image: 'image/diamond-10.jpg',
        history_12: "https://www.1stdibs.com/buy/rhombus-diamond/",
        price: '1180',
        old_price: '2230'
    },
    {
        name: 'Rhombus Diamond',
        image: 'image/diamond-6.jpg',
        history_12: "https://www.1stdibs.com/buy/rhombus-diamond/",
        price: '1180',
        old_price: '2230'
    },
    {
        name: 'Rhombus Diamond',
        image: 'image/diamond-2.jpg',
        history_12: "https://www.1stdibs.com/buy/rhombus-diamond/",
        price: '1180',
        old_price: '2230'
    },
    {
        name: 'Rhombus Diamond',
        image: 'image/diamond-12.jpg',
        history_12: "https://www.1stdibs.com/buy/rhombus-diamond/",
        price: '1180',
        old_price: '2230'
    }
]


let html = " ";
object.forEach((card) => {
    if(card.history){
        output = '<a href="https://blog.brilliance.com/diamonds/the-history-of-diamonds-the-classic-round-cut" ' +
            'target="_blank" class="btn btn-primary">Watch history</a>';
    }else{
        output = " ";
    }


     if (card.history_2){
       disc = '<a href="https://www.whiteflash.com/diamond-education/diamond-shapes/radiant-cut/" ' +
             'target="_blank" class="btn btn-primary">Watch history</a>';
    }else{
       disc = " ";
    }


     if (card.history_3) {
         doks = '<a href="https://www.whiteflash.com/diamond-education/diamond-shapes/princess-cut/" ' +
             'target="_blank" class="btn btn-primary">Watch history</a>'
     }else {
         doks = " ";
     }


     if (card.history_4) {
         doc = '<a href="https://www.whiteflash.com/diamond-education/diamond-shapes/asscher-cut/" ' +
             'target="_blank" class="btn btn-primary">Watch history</a>'
     }else {
         doc = " ";
     }


     if (card.history_5) {
        pink = '<a href="https://www.whiteflash.com/diamond-education/diamond-shapes/cushion-cut/" ' +
            'target="_blank" class="btn btn-primary">Watch history</a>'
     }else {
          pink = " ";
      }

      if (card.history_6) {
          docu = '<a href="https://www.whiteflash.com/diamond-education/diamond-shapes/heart-cut/" ' +
              'target="_blank" class="btn btn-primary">Watch history</a>'
      }else {
         docu = " ";
      }

      if (card.history_7) {
          priv = '<a href="https://www.capediamonds.co.za/shape/marquise/" ' +
              'target="_blank" class="btn btn-primary">Watch history</a>'
      }else {
         priv = " ";
     }


       if (card.history_8) {
          eit = '<a href="https://blog.brilliance.com/diamonds/the-history-of-the-oval-diamond-ring" ' +
              'target="_blank" class="btn btn-primary">Watch history</a>'
       }else {
           eit = " ";
     }


      if (card.history_9) {
         nain = '<a href="https://blog.brilliance.com/diamonds/the-history-of-the-emerald-cut-diamond" ' +
             'target="_blank" class="btn btn-primary">Watch history</a>'
      }else {
          nain = " ";
      }


      if (card.history_10) {
          ten = '<a href="https://4cs.gia.edu/en-us/blog/baguette-diamond-engagement-ring/" ' +
              'target="_blank" class="btn btn-primary ">Watch history</a>'
      }else {
          ten = " ";
      }

       if (card.history_11) {
          illeven = '<a href="https://www.jfjco.com/history-pear-cut-diamond/" ' +
              'target="_blank" class="btn btn-primary">Watch history</a>'
      }else {
          illeven = " ";
       }

       if (card.history_12) {
          tvelv = '<a href="https://www.1stdibs.com/buy/rhombus-diamond/" ' +
              'target="_blank" class="btn btn-primary">Watch history</a>'
      }else {
          tvelv= " ";
       }



    html +=`
    <div class="col g-2">
  
    <div class="card-diamonds" >
    <img src = "${card.image}" class="card-img-top" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-diamonds-title">${card.name}</h5>
    <div class="card-price">
              <p class="card-diamonds-price">${card.price} $</p>
              <p class="card-diamonds-old_price">${card.old_price} $</p>
              </div>
    ${disc}
    ${output} 
    ${doks} 
    ${doc} 
    ${pink} 
    ${docu} 
    ${priv} 
    ${eit} 
    ${nain} 
    ${ten} 
    ${illeven} 
    ${tvelv} 
    
   
    </div>
    </div>
    </div>
     ` ;

});

document.getElementById("diamonds").innerHTML = html;



$('.button-left').click (function() {
    $('.nav-link').remove('active');
})
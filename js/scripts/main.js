//----------------------------------------Swipper Slide----------------------------------------------------

var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlidesProgress: true,
    breakpoints: {
        320:{
            direction: 'horizontal',
        },
        1150:{
            direction: 'vertical'
        }
    }
   });


var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
     thumbs: {
    swiper: slide_thumbnail,
   },
   autoplay:{
    delay: 5000,
    disableOnInteraction: false,
   }
  });

  //-----------------------------------------Filtros--------------------------------------------------

  const allFilters = document.querySelectorAll('.js-nav-games li a');
  const tabPane = document.querySelectorAll('.tab-pane-games');

  allFilters.forEach((filter, index) => {
    filter.addEventListener('click', (event) => {
        event.preventDefault();

        allFilters.forEach(item => {
            item.classList.remove('active');
        })

        tabPane.forEach(tab=> {
            tab.classList.remove('active');
        })

        tabPane[index].classList.add('active');
        filter.classList.add('active');
    })
  })


  //-------------------------------------Modal----------------------------------------------

  const btnOpenModal  = document.querySelector('.js-open-modal');
  const btnFecharModal = document.querySelector('.js-close');

  

  btnOpenModal.addEventListener('click', (event)=>{
        event.preventDefault();

        let tagHtml = document.documentElement;
        tagHtml.classList.add('show-modal');
  })

  btnFecharModal.addEventListener('click', ()=>{
    
    let tagHtml = document.documentElement;
    tagHtml.classList.remove('show-modal');
})

  
//------------------------------------------Dropdows-----------------------------------------------------------

const btnMenu = document.querySelectorAll(".js-btn-menu");
const MenuSite = document.querySelectorAll(".js-menu");

btnMenu.forEach((btn,index) => {
    btn.addEventListener("click", (event)=>{
        event.preventDefault();

        MenuSite.forEach(itemMenu => {
            itemMenu.classList.remove('active')
            itemMenu.addEventListener('mouseleave', ()=> {
                itemMenu.classList.remove('active')
                btnMenu.forEach(itemBtn =>{
                    itemBtn.classList.remove('active')
                })
            }) 
        })


        btnMenu.forEach(itemBtn =>{
            itemBtn.classList.remove('active')
        })

        btn.classList.add('active')
        MenuSite[index].classList.add("active")
    })
})
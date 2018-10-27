
(() => {
    const mobileWidth = "680";
    const screenWidth = window.innerWidth;
    const naviHeight = document.querySelector('header nav').offsetHeight;

    //change header when scroll    
    const headerScrollDown = () => {
        
        const effectStartOn = "500";

        document.addEventListener("scroll", () => {
           
            const scrollTop =  document.body.scrollTop || document.documentElement.scrollTop;
        
            const navigation = document.querySelector("header nav");
            
            if(screenWidth > mobileWidth){
                scrollTop > effectStartOn ? navigation.classList.add("header-fix") : navigation.classList.remove("header-fix");
            }
        })
    }
    
  

    //change Testimonials
    const changeTestimonials = () => {
        let firstChild, lastChild;
        const prevArrow = document.getElementById("aw-testimonials-prev");
        const nextArrow = document.getElementById("aw-testimonials-next");
        const testimonials = document.querySelector(".aw-testimonials ul");

        document.addEventListener("click", () => {
            if(event.target.id === nextArrow.id){
                firstChild =  testimonials.lastElementChild
                testimonials.insertAdjacentElement("afterbegin", firstChild);
            }else if(event.target.id === prevArrow.id){
                lastChild =  testimonials.firstElementChild
                testimonials.insertAdjacentElement("beforeend", lastChild);
            }
        });
    }

    //scroll with effect
    const scrollToSection = () =>{

        const allLinksNode = document.querySelectorAll('.aw-scroll-link');

        const allLinks = [...allLinksNode];

        allLinks.forEach(item => {
            item.addEventListener('click', event =>{
                //stop href action
                event.preventDefault();

                //get href value of clicked link
                const sectionID = event.target.getAttribute('href') || event.target.dataset.href;
                //store distance
                let sectionPosition;

                //if sectionID retrive value (ID), so get distance
                //if sectionID retrive #(go to no where) so the traget will be top of the page
                if(sectionID !== "#"){
                     //get the distance of the targeted section relative to the top of the page
                    sectionPosition =  document.querySelector(sectionID).offsetTop;

                    sectionPosition = screenWidth > mobileWidth ? sectionPosition - naviHeight : sectionPosition;
                }else{
                    sectionPosition = 0;
                }

                //scroll with smoth effect
                window.scrollTo({
                    top: sectionPosition,
                    behavior: "smooth"
                });


            })

        })
    }


    //open gallery in lightbox
    const galleryLightBox = () =>{
        const allImages = document.querySelector('.aw-gallery-items').children;
        const galleryImages = [...allImages];
        galleryImages.forEach(image => {
            image.addEventListener('click', event =>{
                const imgSrc =  event.target.getAttribute('src');
                const lightBoxContent = `
                <div class="lightBoxModal">
                    <div class="lightBoxContainer">
                        <img src="${imgSrc}" alt="">
                        <span class="lightBox-close">X</span>
                    </div>
                </div>`;
                document.body.insertAdjacentHTML('beforeend', lightBoxContent);

                //remove lightBox
                const removeLightBox = () =>{
                    const touchedLightBox = document.querySelector('.lightBoxModal').addEventListener('click', event =>{
                        document.querySelector('.lightBoxModal').remove();
                    });

                    const closeButton = document.querySelector('.lightBox-close').addEventListener('click', event =>{
                        document.querySelector('.lightBoxModal').remove();
                    });

                   
                }
                //remove lightBox callback function
                removeLightBox();
            })
        });
    }

  
 

 

    //functions callBack 
    headerScrollDown();
    changeTestimonials();
    scrollToSection();
    galleryLightBox();

        
})();

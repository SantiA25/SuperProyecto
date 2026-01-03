const accordion = (function(){
    const accordion = document.querySelector(".accordion");
    return {
        init:function(){
            accordion.addEventListener("click",(event)=>this.accordionEvent(event))
        },
        accordionEvent:function(event){
            if(event.target.matches(".accordion__icon-i")){
                const elementoSelected = event.target;
                elementoSelected.classList.toggle("active-color");
                const elementoPadreSelected = elementoSelected.closest(".accordion__icon-p")
                elementoPadreSelected.classList.toggle("rotate");
                const accordionIconElement = elementoSelected.closest(".accordion__icon");
                const accordionDataTarget = accordionIconElement.getAttribute("data-target");
                const accordionBodySelect = document.querySelector(`${accordionDataTarget}`);
                accordionBodySelect.classList.toggle("active");
            }
        }
    }
})()

accordion.init();


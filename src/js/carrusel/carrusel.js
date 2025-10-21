const carrusel = (function () {
  const sliders = document.querySelectorAll('.sliders');
  const sliderPoint = document.querySelectorAll('.slider-point');
  return {
    init: function () {
      this.sliderPointDraw(sliders)
    },
    sliderPointDraw: function (element) {
      element.forEach((e, key) => {
        if (typeof e !== 'undefined') {
          const sliderCant = e.children.length
          if (typeof sliderPoint !== 'undefined') {
            for (let i = 0; i < sliderCant; i++) {
              sliderPoint[key].innerHTML += `
                                <p class="slider-point-event" data-slide="${i}" style="border-radius:10px;width:20px;height:20px;margin:0px 5px;"></p>
                            `
            }
            sliderPoint[key].addEventListener('click', event => {
              if (event.target.matches('.slider-point-event')) {
                const dataNumber = event.target.getAttribute('data-slide')
                e.style.transform = `translateX(-${dataNumber * 100}%)`
              }
            })
          }
        }
      })
    }
  }
})()

carrusel.init()

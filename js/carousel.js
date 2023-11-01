
document.addEventListener("DOMContentLoaded", function () {
    const indicators = document.getElementById("services-slide-indicators").getElementsByTagName("span");
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;
    let translateValue = 0;
    let currentIndex = 1;
    let currentTranslate = 0;

    carouselWrapper.addEventListener("touchstart", handleTouchStart);
    carouselWrapper.addEventListener("touchmove", handleTouchMove);
    carouselWrapper.addEventListener("touchend", handleTouchEnd);
    carouselWrapper.addEventListener("touchcancel", handleTouchEnd);

    carouselWrapper.addEventListener("mousedown", handleTouchStart);
    carouselWrapper.addEventListener("mousemove", handleTouchMove);
    carouselWrapper.addEventListener("mouseup", handleTouchEnd);
    carouselWrapper.addEventListener("mouseleave", handleTouchEnd);


    function handleTouchStart(event) {
        isDragging = true;
        touchStartX = event.type === "touchstart" ? event.touches[0].clientX : event.clientX;
    }

    function handleTouchMove(event) {
        if (!isDragging) return;
        touchEndX = event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
        const diff = touchEndX - touchStartX;

        translateValue = diff + currentTranslate;
        carouselWrapper.style.transition = "ease";
        carouselWrapper.style.transform = `translateX(${translateValue}px)`;
    }

    function handleTouchEnd() {
        isDragging = false;
        const threshold1 = 100;
        const threshold2 = 200;
        if (Math.abs(touchStartX - touchEndX) > threshold1) {
            if (touchStartX > touchEndX && currentIndex < carouselWrapper.children.length - 1) {
                currentIndex++;
            } else if (touchStartX < touchEndX && currentIndex > 0) {
                currentIndex--;
            }
            
            for (let i = 0; i < indicators.length; i++) {
                const indicator = indicators[i];
                indicator.classList.remove("active");
            }
    
            indicators[currentIndex].classList.add("active")
        }

        translateValue = (currentIndex * (carouselWrapper.offsetWidth) / carouselWrapper.children.length);
        currentTranslate = -translateValue
        carouselWrapper.style.transition = "transform 0.3s ease";
        carouselWrapper.style.transform = `translateX(-${translateValue}px)`;
    }

    function updateButtons(){
        prev.disabled = currentIndex === 0;
        next.disabled = currentIndex === carouselWrapper.children.length-1;

        if(prev.disabled){
            prev.classList.remove("active");
        }else{
            prev.classList.add("active");
        };
        
        if (next.disabled){
            next.classList.remove("active");
        }else{
            next.classList.add("active");
        }
    }

    function goToSlide(index) {
        if ((index >= carouselWrapper.children.length) || (index < 0)) return

        currentIndex = index;
        translateValue = (currentIndex * ((carouselWrapper.offsetWidth) / carouselWrapper.children.length));
        currentTranslate = -translateValue
        carouselWrapper.style.transition = "transform 0.3s";
        carouselWrapper.style.transform = `translateX(-${translateValue}px)`;
        for (let i = 0; i < indicators.length; i++) {
            const indicator = indicators[i];
            indicator.classList.remove("active");
        }

        indicators[index].classList.add("active")

        updateButtons();
    }
    
    for (let i = 0; i < indicators.length; i++) {
        const indicator = indicators[i];
        indicator.addEventListener("click", ()=>goToSlide(i));
    }
    
    next.addEventListener("click", ()=>{goToSlide(currentIndex + 1)});
    prev.addEventListener("click", ()=>{goToSlide(currentIndex - 1)});

    goToSlide(1);
})



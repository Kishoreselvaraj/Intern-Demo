const slider1 = document.querySelector("#range1");
    const value1 = document.querySelector(".value1");

    slider1.addEventListener("input", (event) => {
      const tempSliderValue1 = event.target.value; 
      value1.textContent = tempSliderValue1;
      const progress1 = (tempSliderValue1 / slider1.max) * 100;
      slider1.style.background = `linear-gradient(to right, #2966d8ea ${progress1}%, #ccc ${progress1}%)`;
    });

    const slider2 = document.querySelector("#range2");
    const value2 = document.querySelector(".value2");

    slider2.addEventListener("input", (event) => {
      const tempSliderValue2 = event.target.value; 
      value2.textContent = tempSliderValue2 + '%';
      const progress2 = (tempSliderValue2 / slider2.max) * 100;
      slider2.style.background = `linear-gradient(to right, #2966d8ea ${progress2}%, #ccc ${progress2}%)`;
    });
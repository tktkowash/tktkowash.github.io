const showStats = () => {
  const removeComma = (num) => {
    return Number(num.replace(/,/g, ''))
  }

  const addComma = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const countUp = (element) => {
    const loopNumber = 499;
    const targetNumber = removeComma(element.text());
    let calcNumber = 0;
    let i = 0;

    let intrvl = setInterval(() => {
      if (i < (loopNumber - 1)) {
        calcNumber = Math.floor(targetNumber * i / loopNumber);
        element.text(addComma(calcNumber));
        i += 1;
      } else {
        element.text(addComma(targetNumber));
        clearInterval(intrvl);
      }
    }, 5);
  }

  $(".stats-item").each(function() {
    const scrollPosition = $(window).scrollTop();
    const boxHeight = $(this).outerHeight();
    const boxOffset = $(this).offset().top;
    const windowHeight = $(window).height();
    
    if (scrollPosition > boxOffset + boxHeight - windowHeight) {
      const elStatsItemValue = $(this).children(".stats-item-value.unloaded");

      if (elStatsItemValue.length === 1) {
        elStatsItemValue.removeClass("unloaded");
        countUp(elStatsItemValue);
        elStatsItemValue.animate({"opacity":"1"}, 1000);
      }
    }
  });
}

window.addEventListener("DOMContentLoaded", showStats);
window.addEventListener("scroll", showStats);
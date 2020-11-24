(() => {

  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  const end = new Date('Nov 25, 2020 02:51:00').getTime();

  const int = setInterval(() => {
    const current = new Date().getTime();
    const remaining = end - current;
    document.getElementById("days").innerText = Math.floor(remaining / day);
    document.getElementById("hours").innerText = Math.floor( (remaining % day) / hour );
    document.getElementById("minutes").innerText = Math.floor( (remaining % hour) / min );
    document.getElementById("seconds").innerText = Math.floor( (remaining % min) / sec );
    if (remaining < 0) {
      window.open('https://krunkies.github.io/haniday/index.html', "_self");

    }
  }, 1000);
})();

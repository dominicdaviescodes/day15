// multiple counters
const counters = document.querySelectorAll('.counter');
// gives us a node list (like array)
counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    //  + converts to number
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    // increment by 200ms, higher number will take longer
    const increment = target / 200;
    if (c < target) {
      //  round up using Math.ceil
      counter.innerText = `${Math.ceil(c + increment)}`;
      //  waits 1ms
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

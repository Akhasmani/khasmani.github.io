let index = 1;
let current = 0;
function loop(controls, wrapper, percentage) {
  controls.children[current].className = 'swipe-control';
  controls.children[index].className += ' swipe-current';
  // wrapper.style.height = wrapper.children[index].clientHeight + 'px';
  wrapper.children[0].style.marginLeft = `-${percentage * index}%`;
  if (index < wrapper.children.length - 1) {
    index++;
    current = index - 1;
  }
  else {
    index = 0;
    current = wrapper.children.length - 1;
  }
}
function swipe(id) {
  const swipe = document.getElementById(id);
  const wrapper = swipe.children[0];
  const controls = document.getElementById(`${id}-controls`);
  wrapper.style.width = `${100 * wrapper.children.length}%`;
  // wrapper.style.height = wrapper.children[0].clientHeight + 'px';
  const percentage = 100 / wrapper.children.length;
  let iEl;
  for (let i = 0; i < wrapper.children.length; i++) {
    wrapper.children[i].style.width = `${percentage}%`;
    iEl = document.createElement('i');
    iEl.className = 'swipe-control';
    iEl.addEventListener('click', (e) => {
      clearInterval(interval);
      const swipeTo = parseInt(e.target.getAttribute('data-swipe-to'));
      // wrapper.style.height = wrapper.children[swipeTo].clientHeight + 'px';
      wrapper.children[0].style.marginLeft = `-${percentage * swipeTo}%`;
      controls.children[current].className = 'swipe-control';
      e.target.className += ' swipe-current';
      current = swipeTo;
      if (swipeTo < wrapper.children.length - 1) index = swipeTo + 1;
      else index = 0;
      interval = setInterval(() => {
        loop(controls, wrapper, percentage)
      }, 8000);
    });
    if (i === 0) iEl.className += ' swipe-current';
    iEl.setAttribute('data-swipe-to', i);
    controls.appendChild(iEl);
  }
  let interval = setInterval(() => {
    loop(controls, wrapper, percentage)
  }, 8000);
}
swipe('swipe-1');

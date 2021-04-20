function filter(id) {
  const control = document.getElementById(`${id}-control`);
  const body = document.getElementById(`${id}-body`);
  const current = control.children[0];
  const options = control.children[1].children[0];
  let isDown=false;
  let index = 0;
  let item;
  let tags;
  let className;
  let isAll;
  current.addEventListener('click',()=>{
    options.className=isDown ? 'd-none':'d-block';
    isDown=!isDown;
  })
  for (var i = 0; i < options.children.length; i++) {
    options.children[i].addEventListener('click',(e)=>{
      current.innerText=e.target.innerText;
      e.target.className='d-none';
      options.children[index].className='d-list';
      index=parseInt(e.target.getAttribute('data-i'));
      options.className = 'd-none';
      isDown=false;
      if (e.target.getAttribute('data-v') === '*') {
        isAll = true;
        className = 'op-one';
      }
      else isAll = false;
      for (let c = 0; c < body.children.length; c++) {
        for (let j = 0; j < body.children[c].children.length; j++) {
          item = body.children[c].children[j];
          tags = item.getAttribute('data-filter');
          tags = tags.split(',');
          if (tags.indexOf(e.target.getAttribute('data-v')) !== -1) className = 'op-one';
          else {
            if (!isAll) className = 'op-zero';
          }
          item.className = className;
        }
      }
    })
  }
}
filter('filter-1');

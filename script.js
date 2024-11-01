const lis = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if(element.isIntersecting){
      element.target.classList.add('show');
    } else {
      element.target.classList.remove('show');
    }
  })
})

lis.forEach((element) => {
  myObserver.observe(element);
})
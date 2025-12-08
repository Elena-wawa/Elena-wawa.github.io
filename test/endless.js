function scroll(speed) {
    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, speed, function() {
        $(this).animate({ scrollTop: 0 }, speed);
    });
}

speed = 1000;

scroll(speed)
setInterval(function(){scroll(speed)}, speed * 2);

const container = document.querySelector('section')
const original = container.querySelector('article')

const cloned = original.cloneNode(true)
container.appendChild(cloned)

const threshold = 120

window.scrollTo(0, threshold)

window.addEventListener('scroll', () => {
  const halfHeight = original.clientHeight

  if (window.scrollY > halfHeight + threshold) {
    window.scrollTo(0, window.scrollY - halfHeight)
  } else if (window.scrollY < threshold) {
    window.scrollTo(0, halfHeight + window.scrollY)
  }
})

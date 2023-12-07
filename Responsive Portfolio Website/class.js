document.querySelectorAll('button.More').forEach(bttn => {
  bttn.dataset.state = 0;
  bttn.addEventListener('click', function (e) {
    let span = this.previousElementSibling;
    span.dataset.tmp = span.textContent;
    span.textContent = span.dataset.content;
    span.dataset.content = span.dataset.tmp;

    this.innerHTML = this.dataset.state == 1 ? 'Show More...' : 'Show Less...';
    this.dataset.state = 1 - this.dataset.state;
  })
});

document.querySelectorAll('span.p1').forEach(span => {
  span.dataset.content = span.textContent;
  span.textContent = span.textContent.substr(0, 100) + '...';
})




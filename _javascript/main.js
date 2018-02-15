document.addEventListener('DOMContentLoaded', () => {
  $(window).keydown((e) => {
    let k = e.which;

    if (k >= 48 && k <= 90) {
      let c = String.fromCharCode(k);
      console.log(k, c);

      $('h1.title')
        .fadeOut('fast')
        .text(c)
        .fadeIn('fast');
    }
  });
});

function smoothScroll(target, duration) {
  // Получаем текущую позицию окна
  const startPos = window.pageYOffset || document.documentElement.scrollTop;

  // Вычисляем необходимую позицию для скролла
  const targetPos = target.offsetTop;
  const distance = targetPos - startPos;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollAmount = ease(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, scrollAmount);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Функция для создания эффекта плавности
  function ease(t, b, c, d) {
    // t - текущее время, b - начальное значение, c - изменение значения, d - продолжительность
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// При клике на ссылку вызываем функцию скролла к секции
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const duration = 1000; // Продолжительность скролла в миллисекундах
    smoothScroll(target, duration);
  });
});
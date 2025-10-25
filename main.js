// Хорошей практикой является ожидание полной загрузки DOM перед запуском любого скрипта,
// который с ним взаимодействует. Это предотвращает ошибки, если скрипт запускается до создания элементов.
document.addEventListener('DOMContentLoaded', () => {
  // Выбираем элемент-контейнер для слайдера
  const swiperContainer = document.querySelector('.swiper');

  // Проверяем, существует ли элемент, перед инициализацией Swiper.
  // Это улучшает обработку ошибок и предотвращает сбой скрипта, если элемент не найден.
  if (swiperContainer) {
    try {
      const swiper = new Swiper('.mySwiper', {
        // Базовые (мобильные) настройки
        slidesPerView: 1,
        spaceBetween: 20,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // Настройки для десктопных разрешений
        breakpoints: {
          768: {
            slidesPerView: 'auto',
            spaceBetween: 16,
            // centeredSlides: true, картинка по центру
          },
        },
      });

      // Для отладки лучше использовать console.log вместо alert,
      // так как это не блокирует основной поток пользовательского интерфейса.
      console.log('Swiper initialized successfully.');
    } catch (error) {
      // Отлавливаем и логируем любые ошибки во время инициализации Swiper.
      console.error('Failed to initialize Swiper:', error);
    }
  } else {
    // Сообщаем разработчику, если контейнер слайдера отсутствует.
    console.warn('Swiper container ".swiper" not found on this page.');
  }
});

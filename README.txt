ТЕСТОВЫЙ САЙТ «ИНТЕРНЕТ-ЕСТЬ» (плоская версия: все файлы лежат рядом, без папок)

ФАЙЛЫ
  index.html                  главная
  city-*.html                 страницы 8 городов
  politika.html               политика обработки данных (ЧЕРНОВИК)
  style.css, app.js           оформление и форма
  config.js                   настройки (адрес приёма заявок)
  worker.js                   код приёма заявок в Telegram (для Cloudflare)
  robots.txt                  закрывает сайт от поисковиков на время теста

ЗАГРУЗКА НА GITHUB
  Репозиторий -> Add file -> Upload files -> перетащите ВСЕ файлы (Ctrl+A в папке) ->
  Commit changes. Потом Settings -> Pages -> Deploy from a branch -> main, /(root) -> Save.

ПРИЁМ ЗАЯВОК
  Пока endpoint в config.js пустой, форма работает в тестовом режиме: заявка сохраняется
  только в браузере. Для Telegram: Cloudflare Worker (вставьте worker.js), секреты
  BOT_TOKEN, CHAT_ID, ALLOW_ORIGIN; адрес Worker впишите в config.js. Токен в файлы
  сайта вписывать нельзя.

ПЕРЕД РЕАЛЬНЫМ ЗАПУСКОМ
  Заполните [ЗАПОЛНИТЕ: ...], уберите плашку теста и noindex, проверьте требования 152-ФЗ.

ТЕСТОВЫЙ САЙТ «ИНТЕРНЕТ-ЕСТЬ» — ИНСТРУКЦИЯ

ЧТО ВНУТРИ
  index.html            главная страница
  city/*.html           страницы 8 городов
  politika.html         политика обработки данных (ЧЕРНОВИК)
  assets/config.js      настройки (адрес приёма заявок)
  worker/worker.js      код приёма заявок в Telegram (необязательно на первом шаге)
  robots.txt            закрывает сайт от поисковиков на время теста

ШАГ 1. ПОСМОТРЕТЬ У СЕБЯ
  Распакуйте архив и откройте index.html в браузере. Форма работает в ТЕСТОВОМ режиме:
  заявка сохраняется только в вашем браузере и никому не отправляется.

ШАГ 2. ВЫЛОЖИТЬ НА GITHUB PAGES
  1. github.com -> New repository. Имя, например: site. Public. Create repository.
  2. "uploading an existing file": перетащите ВСЁ содержимое папки
     (index.html, city, assets, worker, politika.html, robots.txt). Commit changes.
  3. Settings -> Pages -> Source: Deploy from a branch -> Branch: main, папка /(root) -> Save.
  4. Через 1-2 минуты сайт откроется по адресу, который покажет GitHub.

ШАГ 3. ЗАПОЛНИТЬ ПОЛЯ В КВАДРАТНЫХ СКОБКАХ
  В нижней части страниц и в politika.html найдите [ЗАПОЛНИТЕ: ...] и впишите свои данные
  (или пришлите их мне, и я пересоберу сайт).

ШАГ 4. ПРИЁМ ЗАЯВОК В TELEGRAM
  1. Бот из @BotFather: токен. Ваш id из @userinfobot. В боте нажмите Start.
  2. cloudflare.com -> Workers & Pages -> Create -> Worker. Вставьте worker/worker.js, Deploy.
  3. Settings -> Variables and Secrets: BOT_TOKEN (Secret), CHAT_ID, ALLOW_ORIGIN
     (адрес сайта без слэша в конце, например https://ваш-логин.github.io).
  4. Адрес Worker вставьте в assets/config.js в endpoint. Сохраните на GitHub.
  5. Отправьте тестовую заявку: она должна прийти в Telegram.
  Токен бота НЕЛЬЗЯ вписывать в файлы сайта: только в Secrets Cloudflare.

ВАЖНО
  * Cloudflare и Telegram — зарубежные сервисы. Перед рекламой на реальных людей проверьте
    требования 152-ФЗ (хранение данных в РФ) с юристом.
  * Название оператора и логотип на сайте не используются. Использовать название МТС можно
    только после договора и с их согласия.
  * Перед запуском рекламы уберите плашку "ТЕСТОВАЯ ВЕРСИЯ", разрешите индексацию
    (удалите robots.txt и meta noindex) и заполните политику.

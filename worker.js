// Cloudflare Worker: принимает заявку с сайта и отправляет её вам в Telegram.
// Секреты задаются в панели Cloudflare (Settings -> Variables -> Secrets), в код их вставлять НЕЛЬЗЯ:
//   BOT_TOKEN  - токен бота от @BotFather
//   CHAT_ID    - ваш числовой id от @userinfobot
//   ALLOW_ORIGIN - адрес вашего сайта, например https://xn----...xn--p1ai или https://имя.github.io
export default {
  async fetch(req, env) {
    const cors = {
      'Access-Control-Allow-Origin': env.ALLOW_ORIGIN || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (req.method !== 'POST') return new Response('ok', { headers: cors });
    let d;
    try { d = await req.json(); } catch { return new Response('bad json', { status: 400, headers: cors }); }
    const clean = (v, n = 200) => String(v || '').replace(/[<>]/g, '').slice(0, n);
    const phone = clean(d.phone, 20);
    if (!/^\+7\d{10}$/.test(phone)) return new Response('bad phone', { status: 400, headers: cors });
    const text = [
      'Новая заявка',
      'Имя: ' + clean(d.name, 80),
      'Телефон: ' + phone,
      'Город: ' + clean(d.city, 80),
      'Адрес: ' + clean(d.address, 160),
      'Тариф: ' + clean(d.tariff, 40),
      'Страница: ' + clean(d.page, 100),
    ].join('\n');
    const r = await fetch('https://api.telegram.org/bot' + env.BOT_TOKEN + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: env.CHAT_ID, text }),
    });
    return new Response(JSON.stringify({ ok: r.ok }), { status: r.ok ? 200 : 502, headers: { ...cors, 'Content-Type': 'application/json' } });
  },
};

// Wspólny kod portalu "U nas w UK": nagłówek, stopka i renderowanie stron.

const KATEGORIE = {
  wiadomosci: { nazwa: "Wiadomości", kolor: "#0b2a5b", ikona: "📰" },
  pieniadze: { nazwa: "Pieniądze", kolor: "#b8860b", ikona: "💰" },
  dom: { nazwa: "Dom i mieszkanie", kolor: "#3d6b2f", ikona: "🏠" },
  podroze: { nazwa: "Podróże", kolor: "#1f7ac2", ikona: "✈️" },
  zdrowie: { nazwa: "Zdrowie", kolor: "#0e7c86", ikona: "🩺" },
  prawo: { nazwa: "Prawo na co dzień", kolor: "#7a2e3b", ikona: "⚖️" },
  porady: { nazwa: "Porady", kolor: "#0f7b5f", ikona: "💡" },
  ludzie: { nazwa: "Ludzie", kolor: "#8a4b0f", ikona: "🤝" },
  zakupy: { nazwa: "Warto kupić", kolor: "#e65100", ikona: "🛒" },
  gwiazdy: { nazwa: "Gwiazdy", kolor: "#c2185b", ikona: "⭐" },
  rozrywka: { nazwa: "Rozrywka", kolor: "#6b3fa0", ikona: "🎉" },
  humor: { nazwa: "Humor", kolor: "#e07a10", ikona: "😂" },
};

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmt = (d) => new Date(d + "T12:00:00").toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
const param = (k) => new URLSearchParams(location.search).get(k);
const posortowane = () => [...window.ARTYKULY].sort((a, b) => b.data.localeCompare(a.data));

function naglowek(aktywna) {
  const linki = [["index.html", "Strona główna", "start"]]
    .concat(Object.entries(KATEGORIE).map(([k, v]) => [`kategoria.html?k=${k}`, v.nazwa, k]));
  const narzedzia = [
    ["ogloszenia.html", "📌 Ogłoszenia", "ogloszenia"],
    ["katalog.html", "📇 Polskie firmy", "katalog"],
    ["wydarzenia.html", "📅 Wydarzenia", "wydarzenia"],
    ["zapytaj.html", "✉️ Zapytaj redakcję", "zapytaj"],
  ];
  const dzis = new Date().toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  return `
    <div class="beta">Wersja próbna portalu – treści oznaczone jako przykładowe nie są prawdziwymi wiadomościami</div>
    <header class="site-header">
      <div class="wrap head-row">
        <a class="logo" href="index.html"><span>U nas w</span><span class="logo-b">UK</span></a>
        <span class="tagline">Wiadomości, porady i rozrywka dla Polaków na Wyspach</span>
        <span class="today">${dzis}</span>
      </div>
      <div class="wrap tools">
        ${narzedzia.map(([href, nazwa, id]) => `<a href="${href}" class="${id === aktywna ? "active" : ""}">${nazwa}</a>`).join("")}
      </div>
      <nav class="nav"><div class="wrap nav-row">
        ${linki.map(([href, nazwa, id]) => `<a href="${href}" class="${id === aktywna ? "active" : ""}">${nazwa}</a>`).join("")}
      </div></nav>
    </header>`;
}

function stopka() {
  return `
    <footer class="site-footer"><div class="wrap">
      <div class="foot-row">
        <a class="logo" href="index.html"><span>U nas w</span><span class="logo-b">UK</span></a>
        <div class="foot-links">
          <a href="#" title="Wkrótce">O nas</a>
          <a href="#" title="Wkrótce">Kontakt</a>
          <a href="#" title="Wkrótce">Regulamin ogłoszeń</a>
          <a href="#" title="Wkrótce">Polityka prywatności i cookies</a>
        </div>
      </div>
      <p class="disclaimer">© ${new Date().getFullYear()} U nas w UK. Treści mają charakter informacyjny i nie stanowią porady prawnej, medycznej ani finansowej. Pod każdym artykułem podajemy źródła.
      ${window.AMAZON_TAG ? " Jako uczestnik programu Amazon Associates zarabiamy na kwalifikujących się zakupach." : ""}</p>
    </div></footer>`;
}

function karta(a, duza = false) {
  const k = KATEGORIE[a.kategoria];
  return `
    <a class="card ${duza ? "card-big" : ""}" href="artykul.html?id=${a.id}">
      <div class="card-img" style="--c:${k.kolor}"><span>${k.ikona}</span></div>
      <div class="card-body">
        <span class="tag" style="--c:${k.kolor}">${k.nazwa}</span>
        <h3>${a.tytul}</h3>
        <p>${a.lead}</p>
        <time>${fmt(a.data)}</time>
      </div>
    </a>`;
}

function zartDnia() {
  const dzien = Math.floor(Date.now() / 86400000);
  return window.ZARTY[dzien % window.ZARTY.length];
}

function boxZart() {
  return `
    <div class="box box-joke">
      <h2>😂 Żart dnia</h2>
      <p class="joke-text" id="zart">${zartDnia()}</p>
      <button class="btn btn-ghost" id="kolejny">Losuj kolejny</button>
    </div>`;
}

function podlaczLosowanie() {
  const btn = document.getElementById("kolejny");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const el = document.getElementById("zart");
    let nowy;
    do { nowy = window.ZARTY[Math.floor(Math.random() * window.ZARTY.length)]; } while (nowy === el.textContent && window.ZARTY.length > 1);
    el.textContent = nowy;
  });
}

function stronaGlowna() {
  const lista = posortowane();
  const ogl = window.OGLOSZENIA.slice(0, 3);
  return `
    <div class="layout">
      <div>
        <h2 class="section-title">Najważniejsze</h2>
        ${karta(lista[0], true)}
        <h2 class="section-title">Najnowsze</h2>
        <div class="grid">${lista.slice(1).map((a) => karta(a)).join("")}</div>
      </div>
      <aside class="sidebar">
        ${boxZart()}
        <div class="box">
          <h2>📌 Najnowsze ogłoszenia</h2>
          ${ogl.map((o) => `<a class="ad-mini" href="ogloszenia.html"><strong>${esc(o.tytul)}</strong><span>${esc(o.kategoria)} · ${esc(o.miasto)}</span></a>`).join("")}
          <p style="margin:12px 0 0"><a class="btn" href="ogloszenia.html#dodaj">Dodaj ogłoszenie</a></p>
        </div>
        ${boxTerminy()}
        ${boxNewsletter()}
      </aside>
    </div>`;
}

function boxTerminy() {
  const dzis = new Date().toISOString().slice(0, 10);
  const najblizsze = window.TERMINY.filter((t) => t.data >= dzis).sort((a, b) => a.data.localeCompare(b.data)).slice(0, 4);
  return `
    <div class="box">
      <h2>⏰ Ważne terminy</h2>
      ${najblizsze.map((t) => `<div class="term"><time>${fmt(t.data)}</time><span>${t.opis}</span></div>`).join("")}
    </div>`;
}

function boxNewsletter() {
  return `
    <div class="box box-info">
      <h2>Codziennie coś nowego</h2>
      <p>Najważniejsze, sprawdzone informacje i przypomnienia o terminach prosto na Twoją skrzynkę.</p>
      <form class="form" name="newsletter" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="newsletter">
        <input type="email" name="email" placeholder="Twój e-mail" required>
        <label class="check"><input type="checkbox" required> Zgadzam się na otrzymywanie newslettera. Mogę zrezygnować w każdej chwili.</label>
        <button class="btn" type="submit">Zapisz mnie</button>
        <div class="form-msg"></div>
      </form>
    </div>`;
}

function formularz(nazwa, pola, zgoda, przycisk) {
  return `
    <form class="form" name="${nazwa}" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="${nazwa}">
      ${pola}
      <label class="check"><input type="checkbox" required> ${zgoda}</label>
      <button class="btn" type="submit">${przycisk}</button>
      <div class="form-msg"></div>
    </form>`;
}

function filtry(wartosci) {
  return `<div class="filters">${["Wszystkie", ...wartosci].map((c, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-v="${esc(c)}">${esc(c)}</button>`).join("")}</div>`;
}

function stronaKatalogu() {
  const branze = ["Zdrowie i uroda", "Prawo i księgowość", "Budowa i remonty", "Motoryzacja", "Tłumaczenia", "Sklepy i gastronomia", "Inne"];
  return `
    <div class="layout">
      <div>
        <h1 class="section-title">📇 Polskie firmy i usługi w UK</h1>
        <p>Lekarze, dentyści, księgowi, mechanicy, prawnicy i fachowcy, z którymi porozmawiasz po polsku.</p>
        ${filtry([...new Set(window.FIRMY.map((f) => f.miasto))])}
        <div class="ads" id="lista"></div>
        <p class="disclaimer-dark">Wpisy dodają same firmy. Redakcja sprawdza dane kontaktowe przed publikacją, ale nie weryfikuje kwalifikacji ani jakości usług.</p>
      </div>
      <aside class="sidebar">
        <div class="box" id="dodaj">
          <h2>Dodaj swoją firmę – bezpłatnie</h2>
          ${formularz("firma", `
            <label>Nazwa firmy<input name="nazwa" required maxlength="80"></label>
            <label>Branża<select name="branza" required>${branze.map((b) => `<option>${b}</option>`).join("")}</select></label>
            <label>Miasto<input name="miasto" required maxlength="40"></label>
            <label>Opis usług<textarea name="opis" required maxlength="600"></textarea></label>
            <label>Telefon<input name="telefon" maxlength="30"></label>
            <label>E-mail lub strona www<input name="www" maxlength="120"></label>`,
            "Prowadzę tę firmę lub mam zgodę na jej dodanie. Akceptuję regulamin katalogu.", "Wyślij do sprawdzenia")}
        </div>
      </aside>
    </div>`;
}

function pokazFirmy(miasto) {
  const lista = window.FIRMY.filter((f) => miasto === "Wszystkie" || f.miasto === miasto);
  document.getElementById("lista").innerHTML = lista.length ? lista.map((f) => `
    <div class="ad">
      <h3>${esc(f.nazwa)}</h3>
      <div class="ad-meta"><span>📂 ${esc(f.branza)}</span><span>📍 ${esc(f.miasto)}</span></div>
      <p>${esc(f.opis)}</p>
      <div class="contact">${[f.telefon, f.www].filter(Boolean).map(esc).join(" · ")}</div>
    </div>`).join("") : `<div class="empty">Katalog dopiero startuje. Masz polską firmę w UK? <a href="#dodaj">Dodaj ją jako pierwsza – bezpłatnie</a>.</div>`;
}

function stronaWydarzen() {
  const dzis = new Date().toISOString().slice(0, 10);
  const lista = window.WYDARZENIA.filter((w) => w.data >= dzis).sort((a, b) => a.data.localeCompare(b.data));
  return `
    <div class="layout">
      <div>
        <h1 class="section-title">📅 Polskie wydarzenia w UK</h1>
        <p>Koncerty, kabarety, festyny, spotkania i wydarzenia dla dzieci w Twojej okolicy.</p>
        ${filtry([...new Set(lista.map((w) => w.miasto))])}
        <div class="ads" id="lista"></div>
      </div>
      <aside class="sidebar">
        <div class="box" id="dodaj">
          <h2>Zgłoś wydarzenie</h2>
          ${formularz("wydarzenie", `
            <label>Nazwa wydarzenia<input name="nazwa" required maxlength="100"></label>
            <label>Data<input type="date" name="data" required></label>
            <label>Miasto<input name="miasto" required maxlength="40"></label>
            <label>Miejsce (adres)<input name="miejsce" required maxlength="120"></label>
            <label>Opis<textarea name="opis" required maxlength="600"></textarea></label>
            <label>Link do biletów lub strony<input name="link" maxlength="200"></label>`,
            "Jestem organizatorem lub mam zgodę na zgłoszenie. Wydarzenie pojawi się po sprawdzeniu.", "Wyślij do sprawdzenia")}
        </div>
      </aside>
    </div>`;
}

function pokazWydarzenia(miasto) {
  const dzis = new Date().toISOString().slice(0, 10);
  const lista = window.WYDARZENIA.filter((w) => w.data >= dzis && (miasto === "Wszystkie" || w.miasto === miasto)).sort((a, b) => a.data.localeCompare(b.data));
  document.getElementById("lista").innerHTML = lista.length ? lista.map((w) => `
    <div class="ad">
      <h3>${esc(w.nazwa)}</h3>
      <div class="ad-meta"><span>🗓 ${fmt(w.data)}</span><span>📍 ${esc(w.miasto)}, ${esc(w.miejsce)}</span></div>
      <p>${esc(w.opis)}</p>
      ${w.link ? `<a class="contact" href="${esc(w.link)}" target="_blank" rel="noopener">Szczegóły i bilety ›</a>` : ""}
    </div>`).join("") : `<div class="empty">Kalendarz uzupełniamy co tydzień. Organizujesz polskie wydarzenie? <a href="#dodaj">Zgłoś je bezpłatnie</a>.</div>`;
}

function stronaZapytaj() {
  return `
    <div class="layout">
      <div>
        <h1 class="section-title">✉️ Zapytaj redakcję</h1>
        <p>Nie wiesz, jak coś załatwić w UK? Masz pytanie o pieniądze, mieszkanie, urzędy albo podróże? Napisz do nas. Na najciekawsze pytania odpowiadamy w artykułach – bez podawania Twoich danych.</p>
        <div class="box">
          ${formularz("pytanie", `
            <label>Twoje pytanie<textarea name="pytanie" required maxlength="1500"></textarea></label>
            <label>Miasto (opcjonalnie)<input name="miasto" maxlength="40"></label>
            <label>E-mail (opcjonalnie, jeśli chcesz odpowiedź)<input type="email" name="email"></label>`,
            "Zgadzam się, aby redakcja wykorzystała moje pytanie w artykule bez podawania moich danych.", "Wyślij pytanie")}
        </div>
        <h2 class="section-title">Opowiedz swoją historię</h2>
        <p>Założyłeś firmę, zmieniłeś zawód, pomagasz innym? Szukamy Polaków, o których warto napisać w dziale „Ludzie”.</p>
        <div class="box">
          ${formularz("historia", `
            <label>Imię<input name="imie" required maxlength="40"></label>
            <label>Twoja historia w kilku zdaniach<textarea name="historia" required maxlength="1500"></textarea></label>
            <label>E-mail lub telefon do kontaktu<input name="kontakt" required maxlength="80"></label>`,
            "Zgadzam się na kontakt redakcji w sprawie artykułu. Nic nie opublikujemy bez mojej akceptacji.", "Wyślij")}
        </div>
      </div>
      <aside class="sidebar">
        ${boxTerminy()}
        ${boxZart()}
      </aside>
    </div>`;
}

function podlaczFiltry(pokaz) {
  pokaz("Wszystkie");
  document.querySelectorAll(".chip").forEach((chip) => chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    pokaz(chip.dataset.v);
  }));
}

// Formularze zadziałają po umieszczeniu strony na Netlify; lokalnie tylko pokazujemy komunikat.
function podlaczFormularze() {
  document.querySelectorAll("form[data-netlify]").forEach((form) => form.addEventListener("submit", (e) => {
    if (location.protocol === "file:" || location.hostname === "localhost") {
      e.preventDefault();
      const msg = form.querySelector(".form-msg");
      msg.textContent = "Wersja próbna: wysyłanie formularzy zacznie działać po umieszczeniu strony w internecie.";
      msg.style.display = "block";
    }
  }));
}

function stronaKategorii() {
  const k = param("k");
  const kat = KATEGORIE[k];
  if (!kat) return `<p>Nie znaleziono kategorii. <a href="index.html">Wróć na stronę główną</a>.</p>`;
  const lista = posortowane().filter((a) => a.kategoria === k);
  document.title = `${kat.nazwa} – U nas w UK`;
  let html = `<h1 class="section-title">${kat.ikona} ${kat.nazwa}</h1>`;
  html += lista.length ? `<div class="grid">${lista.map((a) => karta(a)).join("")}</div>` : `<p>Wkrótce pojawią się tu nowe artykuły.</p>`;
  if (k === "humor") {
    html += `<h2 class="section-title">Żarty z życia na Wyspach</h2>
      <div class="jokes">${window.ZARTY.map((z) => `<div class="joke">${z}</div>`).join("")}</div>`;
  }
  return html;
}

function stronaArtykulu() {
  const a = window.ARTYKULY.find((x) => x.id === param("id"));
  if (!a) return `<p>Nie znaleziono artykułu. <a href="index.html">Wróć na stronę główną</a>.</p>`;
  const k = KATEGORIE[a.kategoria];
  document.title = `${a.tytul} – U nas w UK`;
  const inne = posortowane().filter((x) => x.id !== a.id).slice(0, 2);
  return `
    <div class="layout">
      <article class="article">
        <div class="crumbs"><a href="index.html">Strona główna</a> › <a href="kategoria.html?k=${a.kategoria}">${k.nazwa}</a></div>
        <span class="tag" style="--c:${k.kolor}">${k.nazwa}</span>
        <h1>${a.tytul}</h1>
        <div class="meta">${fmt(a.data)} · Redakcja U nas w UK</div>
        ${a.przyklad ? `<div class="notice">To przykładowy tekst w wersji próbnej portalu.</div>` : ""}
        ${a.afiliacja ? `<div class="notice">Ten artykuł zawiera linki afiliacyjne. Jeśli coś przez nie kupisz, portal może otrzymać prowizję – Ty nie płacisz więcej.</div>` : ""}
        ${a.kategoria === "zakupy" ? `<div class="notice">Produkty wybraliśmy na podstawie niezależnych testów i opinii kupujących. Nie testowaliśmy ich osobiście, chyba że piszemy o tym wprost.</div>` : ""}
        <p class="lead">${a.lead}</p>
        <div class="body">${a.tresc}</div>
        ${a.zrodla.length ? `<div class="sources"><strong>Źródła:</strong><ul>${a.zrodla.map((z) => `<li><a href="${z.url}" target="_blank" rel="noopener">${z.nazwa}</a></li>`).join("")}</ul></div>` : ""}
      </article>
      <aside class="sidebar">
        ${boxZart()}
        <div><h2 class="section-title">Czytaj także</h2><div class="sidebar">${inne.map((x) => karta(x)).join("")}</div></div>
      </aside>
    </div>`;
}

function stronaOgloszen() {
  const kategorie = ["Praca", "Mieszkania", "Usługi", "Sprzedam", "Inne"];
  return `
    <div class="layout">
      <div>
        <h1 class="section-title">📌 Ogłoszenia</h1>
        ${filtry(kategorie)}
        <div class="ads" id="lista"></div>
      </div>
      <aside class="sidebar">
        <div class="box" id="dodaj">
          <h2>Dodaj ogłoszenie</h2>
          ${formularz("ogloszenie", `
            <label>Tytuł<input name="tytul" required maxlength="80"></label>
            <label>Kategoria<select name="kategoria" required>${kategorie.map((k) => `<option>${esc(k)}</option>`).join("")}</select></label>
            <label>Miasto<input name="miasto" required maxlength="40"></label>
            <label>Treść<textarea name="opis" required maxlength="800"></textarea></label>
            <label>Kontakt (telefon lub e-mail)<input name="kontakt" required maxlength="80"></label>`,
            "Akceptuję regulamin ogłoszeń. Ogłoszenie zostanie opublikowane po sprawdzeniu przez redakcję.", "Wyślij do sprawdzenia")}
        </div>
      </aside>
    </div>`;
}

function pokazOgloszenia(kat) {
  const lista = window.OGLOSZENIA.filter((o) => kat === "Wszystkie" || o.kategoria === kat);
  document.getElementById("lista").innerHTML = lista.map((o) => `
    <div class="ad">
      ${o.przyklad ? `<span class="badge-example">Przykładowe ogłoszenie</span>` : ""}
      <h3>${esc(o.tytul)}</h3>
      <div class="ad-meta"><span>📂 ${esc(o.kategoria)}</span><span>📍 ${esc(o.miasto)}</span><span>🗓 ${fmt(o.data)}</span></div>
      <p>${esc(o.opis)}</p>
      <div class="contact">Kontakt: ${esc(o.kontakt)}</div>
    </div>`).join("");
}

// Linki do Amazona w artykułach dostają identyfikator partnera z dane.js (AMAZON_TAG) i oznaczenie "sponsored".
function oznaczLinkiAmazon() {
  document.querySelectorAll('a[href*="amazon.co.uk"]').forEach((a) => {
    a.rel = "sponsored nofollow noopener";
    a.target = "_blank";
    if (!window.AMAZON_TAG) return;
    const url = new URL(a.href);
    url.searchParams.set("tag", window.AMAZON_TAG);
    a.href = url.toString();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const strona = document.body.dataset.page;
  const aktywna = strona === "kategoria" ? param("k") : strona;
  const tresc = {
    start: stronaGlowna, kategoria: stronaKategorii, artykul: stronaArtykulu, ogloszenia: stronaOgloszen,
    katalog: stronaKatalogu, wydarzenia: stronaWydarzen, zapytaj: stronaZapytaj,
  }[strona]();
  document.body.innerHTML = `${naglowek(aktywna)}<main><div class="wrap">${tresc}</div></main>${stopka()}`;
  podlaczLosowanie();
  podlaczFormularze();
  oznaczLinkiAmazon();
  const listy = { ogloszenia: pokazOgloszenia, katalog: pokazFirmy, wydarzenia: pokazWydarzenia };
  if (listy[strona]) podlaczFiltry(listy[strona]);
});

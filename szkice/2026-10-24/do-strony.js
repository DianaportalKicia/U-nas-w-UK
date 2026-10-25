// Szkice z 2026-10-24 – do wklejenia na początek window.ARTYKULY i window.ZARTY w dane.js.
// Kategorie "pieniadze" i "zdrowie" są zdefiniowane w app.js (komentarz w nagłówku dane.js jest nieaktualny).

const NOWE_ARTYKULY = [
  {
    id: "sztorm-boelo-po-sztormie-austen",
    tytul: "Po sztormie Austen nadciąga Boelo. Pomarańczowe ostrzeżenia dla Szkocji, Irlandii Północnej i północy Anglii",
    kategoria: "wiadomosci",
    data: "2026-10-24",
    lead: "Ledwie przeszedł pierwszy nazwany sztorm sezonu, a Met Office ostrzega przed kolejnym. Sztorm Boelo przyniesie w nocy z soboty na niedzielę silny wiatr, a na odsłoniętych wybrzeżach porywy do 80 mil na godzinę.",
    tresc: `
      <p>Ledwie przeszedł pierwszy nazwany sztorm sezonu, a brytyjskie biuro meteorologiczne (Met Office) ostrzega przed kolejnym. Sztorm Boelo przyniesie w nocy z soboty na niedzielę silny wiatr – na odsłoniętych wybrzeżach z porywami do 80 mil na godzinę (ok. 130 km/h) – oraz ulewy.</p>
      <h2>Co przyniósł sztorm Austen</h2>
      <p>Sztorm Austen przeszedł nad południem Wielkiej Brytanii w nocy z czwartku na piątek (22–23 października). Według Met Office najsilniejsze porywy zanotowano na wyspach Scilly (76 mil/h), w Aberporth (Ceredigion, zachodnia Walia) (74 mile/h) i w Culdrose w Kornwalii (71 mil/h). Według danych National Grid, na które powołuje się agencja Bloomberg, w południowo-zachodniej Anglii prąd straciło około 20 tys. osób. Zamknięte były do piątkowego popołudnia lotniska na Wyspach Normandzkich (Jersey, Guernsey, Alderney).</p>
      <h2>Sztorm Boelo: gdzie i kiedy</h2>
      <ul>
        <li><strong>Ostrzeżenie pomarańczowe (amber) przed wiatrem</strong> obejmuje Szkocję kontynentalną i północ Anglii (według listy Met Office m.in. Kumbrię, Lancashire, północny wschód Anglii i North Yorkshire) – od soboty 21:00 do niedzieli 21:00 – oraz hrabstwa Antrim i Londonderry w Irlandii Północnej – od soboty 21:00 do niedzieli 10:00 (stan na sobotę 24.10).</li>
        <li><strong>Ostrzeżenie żółte przed wiatrem</strong> sięga dalej na południe: obejmuje część Anglii, północną Walię i całą Irlandię Północną.</li>
        <li><strong>W sobotę (11:00–23:00) obowiązuje też żółte ostrzeżenie przed deszczem</strong> dla środkowej i południowej Anglii oraz Walii – możliwe lokalne podtopienia i dłuższe dojazdy.</li>
        <li>Według Met Office wiatr i deszcz mają dotrzeć do Irlandii Północnej i zachodniej Szkocji w sobotę po południu, a najgorsze warunki przewidywane są w nocy i w niedzielę.</li>
        <li>Prognozowane porywy: powszechnie 60–70 mil/h, na odsłoniętych wybrzeżach do 80 mil/h; poza strefą pomarańczową 50–60 mil/h.</li>
      </ul>
      <p>Met Office ostrzega, że możliwe są przerwy w dostawach prądu, odwołane pociągi, promy i loty, a także uszkodzenia dachów i drzew.</p>
      <h2>Co dalej?</h2>
      <p>Według Met Office pogoda pozostanie wietrzna i deszczowa także na początku przyszłego tygodnia, zwłaszcza na północy. Na wtorek wydano już żółte ostrzeżenie przed wiatrem dla północnej części kraju. Pod koniec tygodnia na południu może się uspokoić, ale prognoza jest niepewna.</p>
      <h2>Jak się przygotować</h2>
      <ul>
        <li>Zabezpiecz rzeczy w ogrodzie i na balkonie (meble, trampoliny, kosze).</li>
        <li>Przed wyjazdem sprawdź rozkład przewoźnika – kolei, promu lub linii lotniczej.</li>
        <li>Na drodze zwolnij i zachowaj większy odstęp, uważaj na powalone drzewa.</li>
        <li>Awarię prądu zgłosisz w Anglii, Szkocji i Walii pod bezpłatnym numerem <strong>105</strong>, a w Irlandii Północnej – w NIE Networks pod numerem <strong>03457 643 643</strong>.</li>
      </ul>
      <div class="co-to-znaczy">
        <h2>Co to oznacza dla Polaków w UK?</h2>
        <p>Jeśli mieszkasz w Szkocji, Irlandii Północnej lub na północy Anglii, nastaw się na trudną noc i niedzielę. Jeśli w weekend lecisz do Polski lub wracasz, sprawdzaj status lotu na stronie przewoźnika i lotniska – przy dużych opóźnieniach i odwołaniach mogą przysługiwać Ci prawa pasażera (zwrot lub zmiana lotu, opieka na lotnisku). Ostrzeżenia mogą się zmieniać – najaktualniejsze są na stronie Met Office.</p>
      </div>`,
    zrodla: [
      { nazwa: "Met Office – Warnings in place as Storm Boelo to impact UK", url: "https://www.metoffice.gov.uk/about-us/news-and-media/media-centre/weather-and-climate-news/2026/amber-warning-issued-for-storm-boelo-as-storm-austen-moves-through" },
      { nazwa: "Met Office – 10-day trend: Storm Austen brings wind and rain", url: "https://www.metoffice.gov.uk/blog/2026/10-day-trend-storm-austen-brings-wind-and-rain" },
      { nazwa: "Met Office – aktualne ostrzeżenia", url: "https://weather.metoffice.gov.uk/warnings-and-advice/uk-warnings" },
      { nazwa: "Bloomberg via Claims Journal – Storm Austen Knocks Out Power to Nearly 300,000 French Homes", url: "https://www.claimsjournal.com/news/national/2026/10/23/340892.htm" },
      { nazwa: "NIE Networks – Power cuts", url: "https://www.nienetworks.co.uk/power-cuts" },
      { nazwa: "RTÉ – Five counties under Orange warning during Storm Boelo", url: "https://www.rte.ie/news/ireland/2026/1024/1596689-storm-boelo-ireland/" },
    ],
  },
  {
    id: "budzet-28-pazdziernika-co-wiadomo",
    tytul: "Budżet już w środę 28 października. Co wiadomo na pewno, a co to tylko przecieki",
    kategoria: "wiadomosci",
    data: "2026-10-24",
    lead: "W środę kanclerz skarbu John Healey przedstawi swój pierwszy budżet. Wyjaśniamy, co rząd już potwierdził, a o czym na razie tylko piszą media.",
    tresc: `
      <p>W środę 28 października kanclerz skarbu (Chancellor of the Exchequer) John Healey przedstawi w Izbie Gmin swój pierwszy budżet. To także pierwszy budżet rządu premiera Andy'ego Burnhama. Wyjaśniamy, co jest pewne, a co pozostaje w sferze przecieków i prognoz.</p>
      <h2>Co jest pewne</h2>
      <ul>
        <li><strong>Termin:</strong> środa 28 października 2026. Tego samego dnia niezależne Biuro Odpowiedzialności Budżetowej (Office for Budget Responsibility, OBR) opublikuje nowe prognozy dla gospodarki i finansów publicznych.</li>
        <li><strong>Stawki podatków:</strong> premier Burnham zapowiedział, że rząd dotrzyma obietnicy z programu wyborczego Partii Pracy z 2024 roku i nie podniesie stawek podatku dochodowego (income tax), składek na ubezpieczenie społeczne płaconych przez pracowników (employee National Insurance) ani VAT.</li>
        <li><strong>Progi podatkowe pozostają zamrożone.</strong> Kwota wolna od podatku (Personal Allowance) wynosi 12 570 funtów, a próg wyższej stawki 50 270 funtów. Na mocy decyzji z budżetu z listopada 2025 roku zamrożenie ma trwać do kwietnia 2031 roku. To oznacza, że przy rosnących pensjach coraz więcej osób zaczyna płacić podatek lub wpada w wyższą stawkę, choć same stawki się nie zmieniają.</li>
        <li><strong>Prąd bez VAT:</strong> od 1 października VAT na domowe rachunki za energię elektryczną spadł z 5 do 0 procent. Rząd szacuje oszczędność na średnio 45 funtów rocznie.</li>
      </ul>
      <h2>Tło: mniej pieniędzy w kasie</h2>
      <p>Według Institute for Government tło gospodarcze jest trudne: będą to pierwsze prognozy OBR od czasu, gdy konflikt na Bliskim Wschodzie podbił światowe ceny energii. Healey zapowiadał, że budżet będzie oparty na „dyscyplinie fiskalnej”.</p>
      <h2>O czym piszą media – to NIE są decyzje</h2>
      <p>Poniższe pomysły pojawiają się w doniesieniach prasowych i komentarzach. Rząd ich nie potwierdził:</p>
      <ul>
        <li>przegląd kwoty wolnej od podatku – premier mówił, że sprawa będzie analizowana, ale niczego nie obiecał,</li>
        <li>zmiany w podatku od zysków kapitałowych (Capital Gains Tax),</li>
        <li>dodatkowe 100 funtów w ramach zniżki na rachunek za prąd (Warm Home Discount) – według „Guardiana”,</li>
        <li>podniesienie progu ulgi w podatku od nieruchomości komercyjnych (business rates) dla małych firm – według „Sunday Times”,</li>
        <li>szczegóły nowego programu dla kupujących pierwsze mieszkanie w Anglii („Your First Home”), który rząd zapowiedział, ale bez kosztów i daty startu.</li>
      </ul>
      <div class="co-to-znaczy">
        <h2>Co to oznacza dla Polaków w UK?</h2>
        <p>Jeśli pracujesz na etacie, w środę raczej nie zmieni się stawka Twojego podatku ani składek – to rząd wykluczył. Ważniejsze mogą być zmiany w progach, zasiłkach, pomocy na rachunki i w mieszkalnictwie. Nie podejmuj decyzji finansowych na podstawie przecieków – poczekaj na oficjalne dokumenty budżetowe na gov.uk. Po środzie opiszemy najważniejsze decyzje.</p>
      </div>`,
    zrodla: [
      { nazwa: "Which? – Autumn Budget 2026: when is it and what will it contain?", url: "https://www.which.co.uk/news/article/autumn-budget-2026-when-is-it-and-what-will-it-contain-aQqC47O24jnl" },
      { nazwa: "Institute for Government – Budget 2026", url: "https://www.instituteforgovernment.org.uk/budget-2026" },
      { nazwa: "GOV.UK – Breathing space on your energy bill", url: "https://www.gov.uk/government/news/breathing-space-on-your-energy-bill" },
      { nazwa: "ICAEW – Budget: Freeze on personal allowance extended", url: "https://www.icaew.com/insights/tax-news/2025/nov-2025/budget-freeze-on-personal-allowance-extended" },
      { nazwa: "Grant Thornton – Autumn Budget 2026: what you need to know", url: "https://www.grantthornton.co.uk/insights/autumn-budget/" },
    ],
  },
  {
    id: "prad-bez-vat-gaz-drozszy-rachunki-zima",
    tytul: "Prąd bez VAT, gaz droższy. Co to oznacza dla rachunków tej zimy i jak je obniżyć",
    kategoria: "pieniadze",
    data: "2026-10-24",
    lead: "Od 1 października z rachunków za prąd zniknął VAT, ale limit cen energii i tak wzrósł o 4 procent. Wyjaśniamy, skąd ta różnica i co możesz zrobić, żeby płacić mniej.",
    tresc: `
      <p>Od 1 października z domowych rachunków za prąd zniknął 5-procentowy VAT. Mimo to wiele gospodarstw domowych płaci za energię więcej niż latem. Podwyżka limitu nie dotyczy osób z taryfą stałą (fixed) – one płacą stawki z umowy, a za prąd bez VAT. Wyjaśniamy, skąd ta różnica i co możesz zrobić.</p>
      <h2>Co się zmieniło 1 października</h2>
      <ul>
        <li><strong>VAT na prąd: 0% zamiast 5%.</strong> Rząd szacuje oszczędność na średnio 45 funtów rocznie. Nie trzeba niczego zgłaszać – dostawcy obniżają rachunki automatycznie, także przy taryfach stałych (fixed) i licznikach przedpłaconych (prepayment). Obniżka dotyczy tylko prądu, nie gazu. Według MoneySavingExpert ma obowiązywać do 31 marca 2027 roku; rząd podaje, że jest sfinansowana na rok budżetowy 2026/27. Według MoneySavingExpert w Irlandii Północnej mechanizm działa inaczej – tamtejszy rząd (Executive) dostaje równoważne środki.</li>
        <li><strong>Limit cen energii (Energy Price Cap) wzrósł o 4%.</strong> Regulator rynku energii Ofgem ustalił, że na okres od 1 października do 31 grudnia 2026 roku typowe gospodarstwo domowe płacące za prąd i gaz poleceniem zapłaty (Direct Debit) zapłaci 1 723 funty rocznie, czyli o 60 funtów (5 funtów miesięcznie) więcej niż wcześniej (1 663 funty).</li>
      </ul>
      <h2>Skąd podwyżka, skoro VAT zniknął?</h2>
      <p>Według Ofgem za wzrost odpowiadają hurtowe ceny gazu, które poszły w górę w związku z konfliktem na Bliskim Wschodzie. Rachunki za prąd pozostały mniej więcej na tym samym poziomie, a za gaz wzrosły o około 8%. Ofgem wylicza, że bez zniesienia VAT podwyżka byłaby wyższa o około 45 funtów. Gospodarstwa bez gazu odczuły wzrost poniżej 1%.</p>
      <p>Pamiętaj: limit nie ogranicza całego rachunku. Określa maksymalną cenę za kilowatogodzinę i opłatę stałą (standing charge). Im więcej zużywasz, tym więcej płacisz.</p>
      <h2>Jak obniżyć rachunek</h2>
      <ul>
        <li><strong>Sprawdź taryfy stałe.</strong> Według Ofgem są dostępne oferty o 100 funtów lub więcej tańsze niż limit. Przed zmianą sprawdź opłaty za wcześniejsze zerwanie umowy.</li>
        <li><strong>Licznik inteligentny (smart meter).</strong> Niektórzy dostawcy oferują tańszy prąd poza godzinami szczytu.</li>
        <li><strong>Sposób płatności.</strong> Najniższe stawki w ramach limitu mają klienci z licznikiem przedpłaconym.</li>
        <li><strong>Zniżka na ogrzewanie (Warm Home Discount)</strong> – 150 funtów odliczenia od rachunku za prąd dla uprawnionych osób w Anglii, Walii i Szkocji. Zwykle przyznawana automatycznie; w Szkocji czasem trzeba złożyć wniosek u dostawcy. Nie obowiązuje w Irlandii Północnej.</li>
        <li><strong>Masz problem ze spłatą?</strong> Jak najszybciej skontaktuj się z dostawcą. Firmy powinny zaproponować rozsądny plan spłaty i wskazać, gdzie szukać pomocy.</li>
      </ul>
      <p>Kolejny limit, na okres od stycznia do marca 2027 roku, Ofgem ogłosi prawdopodobnie pod koniec listopada.</p>
      <div class="co-to-znaczy">
        <h2>Co to oznacza dla Polaków w UK?</h2>
        <p>Jeśli ogrzewasz mieszkanie gazem, zima i tak będzie droższa – sama obniżka VAT na prąd tego nie zrównoważy. Warto porównać oferty, sprawdzić, czy przysługuje Ci Warm Home Discount lub zasiłek (na gov.uk jest bezpłatny kalkulator zasiłków), i regularnie podawać odczyty licznika. Limit Ofgem obowiązuje w Anglii, Szkocji i Walii; w Irlandii Północnej obowiązują inne zasady. Ten tekst nie jest poradą finansową.</p>
      </div>`,
    zrodla: [
      { nazwa: "Ofgem – Energy price cap will rise by 4% from October 2026", url: "https://www.ofgem.gov.uk/press-release/energy-price-cap-will-rise-4-october-2026" },
      { nazwa: "GOV.UK – Breathing space on your energy bill", url: "https://www.gov.uk/government/news/breathing-space-on-your-energy-bill" },
      { nazwa: "MoneySavingExpert – Electricity VAT to be scrapped for six months from 1 October", url: "https://www.moneysavingexpert.com/news/2026/07/electricity-bills-vat-cut-martin-lewis-analysis/" },
      { nazwa: "EDF Energy – Energy Price Cap to rise by 4% from October to December 2026", url: "https://www.edfenergy.com/energywise/energy-price-cap-october-2026" },
      { nazwa: "GOV.UK – Warm Home Discount Scheme", url: "https://www.gov.uk/the-warm-home-discount-scheme" },
      { nazwa: "GOV.UK – Benefits calculators", url: "https://www.gov.uk/benefits-calculators" },
    ],
  },
  {
    id: "szczepienia-grypa-covid-jesien-2026",
    tytul: "Darmowa szczepionka na grypę i COVID tej zimy. Kto może ją dostać i jak się zapisać",
    kategoria: "zdrowie",
    data: "2026-10-24",
    lead: "NHS prowadzi jesienną akcję szczepień przeciw grypie i COVID-19. Sprawdź, czy należysz do grupy, która może zaszczepić się bezpłatnie. W Anglii nie trzeba czekać na zaproszenie.",
    tresc: `
      <p>NHS prowadzi jesienną akcję szczepień przeciw grypie i COVID-19. Według wytycznych większość szczepień ma się odbyć do końca listopada, by zapewnić ochronę przed szczytem zachorowań zimą. Zasady opisane poniżej dotyczą Anglii.</p>
      <h2>Grypa: kto może się zaszczepić za darmo</h2>
      <p>Według wspólnego pisma UKHSA, NHS England i ministerstwa zdrowia w sezonie 2026/27 lista uprawnionych jest taka sama jak rok temu. Zgodnie ze stroną NHS bezpłatną szczepionkę mogą dostać:</p>
      <ul>
        <li>osoby w wieku 65 lat i więcej (także te, które skończą 65 lat do 31 marca 2027),</li>
        <li>dorośli w wieku 18–64 lat z niektórymi chorobami przewlekłymi, np. astmą wymagającą sterydów, POChP, chorobami serca, nerek lub wątroby, cukrzycą, osłabioną odpornością lub BMI 40 i więcej,</li>
        <li>kobiety w ciąży – na każdym etapie,</li>
        <li>mieszkańcy domów opieki,</li>
        <li>główni opiekunowie osób starszych lub z niepełnosprawnością oraz osoby pobierające zasiłek dla opiekunów (Carer's Allowance),</li>
        <li>osoby mieszkające z kimś z osłabioną odpornością,</li>
        <li>osoby w wieku 16+ bez dachu nad głową lub mieszkające w hostelu czy noclegowni,</li>
        <li>pracownicy ochrony zdrowia i opieki społecznej mający kontakt z pacjentami (zwykle przez pracodawcę).</li>
      </ul>
      <p>Dzieci szczepione są głównie w szkołach i u lekarza rodzinnego, zwykle szczepionką w postaci sprayu do nosa. Szczepienia trwają do 31 marca 2027 roku.</p>
      <h2>COVID-19: węższa grupa</h2>
      <p>Jesienną dawkę przeciw COVID-19 mogą dostać:</p>
      <ul>
        <li>osoby w wieku 75 lat i więcej (także te, które skończą 75 lat do 31 stycznia 2027),</li>
        <li>osoby w wieku od 6 miesięcy do 74 lat (włącznie) z osłabioną odpornością z powodu choroby lub leczenia,</li>
        <li>mieszkańcy domów opieki dla osób starszych.</li>
      </ul>
      <p>Ostatni dzień szczepień to 31 stycznia 2027 roku.</p>
      <h2>Jak się zapisać</h2>
      <ul>
        <li>przez stronę NHS lub aplikację NHS App,</li>
        <li>w aptece, która prowadzi bezpłatne szczepienia,</li>
        <li>w swojej przychodni (GP surgery),</li>
        <li>przy COVID-19 także w punktach szczepień bez zapisu (walk-in).</li>
      </ul>
      <p>Nie musisz czekać na zaproszenie. Jeśli nie wiesz, czy Twoja choroba daje prawo do bezpłatnego szczepienia, zapytaj farmaceutę lub lekarza.</p>
      <h2>Szkocja, Walia i Irlandia Północna</h2>
      <p>Każda część UK prowadzi własny program, a terminy i sposób zapisów mogą się wyraźnie różnić. Na przykład w Walii rady zdrowia (health boards) zwykle same wysyłają termin szczepienia. Informacje znajdziesz: w Szkocji na NHS inform, w Walii na stronie swojej rady zdrowia, a w Irlandii Północnej na nidirect.</p>
      <div class="co-to-znaczy">
        <h2>Co to oznacza dla Polaków w UK?</h2>
        <p>Jeśli jesteś w ciąży, masz chorobę przewlekłą, opiekujesz się kimś lub masz rodziców w wieku 65+ mieszkających w UK – sprawdź, czy przysługuje Wam bezpłatne szczepienie. Zapisy działają po angielsku, ale w aptece możesz poprosić o pomoc. Ten tekst ma charakter informacyjny. W razie wątpliwości co do zdrowia skonsultuj się z lekarzem GP, farmaceutą lub zadzwoń pod NHS 111.</p>
      </div>`,
    zrodla: [
      { nazwa: "NHS – Flu vaccine", url: "https://www.nhs.uk/vaccinations/flu-vaccine/" },
      { nazwa: "NHS – COVID-19 vaccine", url: "https://www.nhs.uk/vaccinations/covid-19-vaccine/" },
      { nazwa: "Nursing in Practice – Dates confirmed for 2026/27 flu vaccination programme", url: "https://www.nursinginpractice.com/clinical/vaccination-and-infection/dates-confirmed-for-2026-27-flu-vaccination-programme/" },
      { nazwa: "Swansea Bay University Health Board – Flu vaccinations Autumn/Winter 2026", url: "https://sbuhb.nhs.wales/vaccinations-in-swansea-and-neath-port-talbot1/vaccine-information/flu-vaccinations-autumn-winter-2026/" },
    ],
  },
];

const NOWE_ZARTY = [
  "Brytyjczyk przy minus dwóch stopniach: „It's a bit nippy”. Polak przy minus dwóch stopniach: „No, wreszcie normalna jesień”.",
  "Met Office nadaje sztormom imiona, żeby łatwiej było o nich rozmawiać. Mój sąsiad i tak o każdym mówi to samo: „A bit breezy today, isn't it?”.",
  "W UK licznik inteligentny pokazuje, ile zużywasz prądu. W Polsce robiła to sąsiadka z parteru – i jeszcze wiedziała, o której wstawiłeś pranie.",
  "Prognoza w UK: „sunny spells”. Tłumaczenie dla Polaków: słońce będzie, ale okulary zostaw w domu, a parasol weź.",
  "Po zmianie czasu wychodzę z pracy o piątej, patrzę w ciemne niebo i przez chwilę nie wiem, czy to jeszcze dziś, czy już jutro.",
];

// Treści portalu. Nowe artykuły dopisujemy na początku listy ARTYKULY.
// kategoria: wiadomosci | pieniadze | dom | podroze | zdrowie | prawo | porady | ludzie | gwiazdy | rozrywka | humor
// przyklad: true = tekst z wersji próbnej; afiliacja: true = artykuł spoza działu "zakupy" z linkami afiliacyjnymi.

// Identyfikator partnera Amazon Associates UK (np. "unaswuk-21"). Pusty = linki bez prowizji.
window.AMAZON_TAG = "";

window.ARTYKULY = [
  {
    id: "zmiana-czasu-pazdziernik-2026",
    tytul: "Zmiana czasu już w tę niedzielę. Cofamy zegarki o godzinę",
    kategoria: "wiadomosci",
    data: "2026-10-24",
    lead: "W nocy z soboty na niedzielę 25 października w Wielkiej Brytanii kończy się czas letni. Śpimy godzinę dłużej.",
    tresc: `
      <p>W niedzielę 25 października o godzinie 2:00 w nocy zegarki w Wielkiej Brytanii przestawiamy na 1:00. Kończy się brytyjski czas letni (BST) i wracamy na czas zimowy (GMT).</p>
      <p>W Polsce zmiana następuje tej samej nocy: o 3:00 zegarki cofa się na 2:00. Dlatego różnica czasu między UK a Polską się nie zmienia. W Polsce nadal jest o godzinę później niż na Wyspach.</p>
      <h2>O czym pamiętać</h2>
      <ul>
        <li>Telefony i komputery zmienią czas same. Ręcznie trzeba przestawić zegar w samochodzie, piekarniku czy mikrofalówce.</li>
        <li>Jeśli pracujesz na nocną zmianę, tej nocy może ona trwać godzinę dłużej. Warto sprawdzić, jak rozlicza to pracodawca.</li>
        <li>Rano będzie wcześniej jasno, ale już około 16:30–17:00 zrobi się ciemno.</li>
      </ul>
      <div class="co-to-znaczy">
        <h2>Co to oznacza dla Polaków w UK?</h2>
        <p>Rozmowy z rodziną w Polsce umawiasz tak samo jak dotąd, bo różnica czasu zostaje jednogodzinna. Godziny lotów w rezerwacjach zawsze podawane są w czasie lokalnym lotniska, więc tu też nic się nie zmienia.</p>
      </div>`,
    zrodla: [
      { nazwa: "GOV.UK – When do the clocks change?", url: "https://www.gov.uk/when-do-the-clocks-change" },
      { nazwa: "timeanddate.com – zmiana czasu w Polsce", url: "https://www.timeanddate.com/time/change/poland" },
    ],
  },
  {
    id: "jak-zapisac-sie-do-gp",
    tytul: "Jak zapisać się do lekarza rodzinnego (GP) w UK – krok po kroku",
    kategoria: "porady",
    data: "2026-10-23",
    lead: "Rejestracja u lekarza rodzinnego jest bezpłatna i często da się ją załatwić przez internet. Wyjaśniamy, jak to zrobić.",
    tresc: `
      <p>Lekarz rodzinny, czyli GP (general practitioner), to pierwszy kontakt z publiczną służbą zdrowia NHS. To on wystawia większość recept i skierowania do specjalistów. Warto zapisać się do przychodni (GP surgery) od razu po przeprowadzce, a nie dopiero wtedy, gdy zachorujesz.</p>
      <h2>Jak się zapisać w Anglii</h2>
      <ol>
        <li>Znajdź przychodnię w pobliżu domu w wyszukiwarce na stronie NHS.</li>
        <li>Wypełnij formularz rejestracyjny: online przez stronę NHS albo przychodni, lub na miejscu.</li>
        <li>Poczekaj na potwierdzenie. Przychodnia może zaprosić Cię na krótką wizytę zapoznawczą.</li>
      </ol>
      <p>Według NHS do rejestracji nie jest potrzebny dowód adresu, dokument tożsamości, status imigracyjny ani numer NHS. Przychodnia może jednak o nie poprosić. Odmówić może np. wtedy, gdy mieszkasz poza jej obszarem albo nie przyjmuje nowych pacjentów, ale musi podać powód.</p>
      <p>W Szkocji, Walii i Irlandii Północnej zasady są podobne, ale szczegóły procedury mogą się różnić. Sprawdź stronę lokalnej służby zdrowia.</p>
      <div class="co-to-znaczy">
        <h2>Co to oznacza dla Polaków w UK?</h2>
        <p>Wizyty u GP są bezpłatne. W Anglii większość dorosłych płaci za receptę stałą opłatę, a w Szkocji, Walii i Irlandii Północnej recepty są bezpłatne. Jeśli słabo mówisz po angielsku, możesz poprosić przychodnię o tłumacza. NHS zapewnia go bezpłatnie.</p>
      </div>`,
    zrodla: [
      { nazwa: "NHS – How to register with a GP surgery", url: "https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/" },
      { nazwa: "NHS – Prescription charges", url: "https://www.nhs.uk/nhs-services/prescriptions/" },
    ],
  },
  {
    id: "evisa-jak-udowodnic-status",
    tytul: "eVisa: jak pokazać status osiedlenia pracodawcy lub właścicielowi mieszkania",
    kategoria: "porady",
    data: "2026-10-22",
    lead: "Status z EU Settlement Scheme istnieje tylko w wersji cyfrowej. Pokazujesz go za pomocą kodu (share code). Tłumaczymy, jak go wygenerować.",
    tresc: `
      <p>Osoby ze statusem settled lub pre-settled z EU Settlement Scheme nie mają papierowego dokumentu. Ich status to tzw. eVisa, zapisana na koncie UKVI w systemach Home Office.</p>
      <h2>Jak wygenerować kod</h2>
      <ol>
        <li>Wejdź na stronę GOV.UK „View and prove your immigration status”.</li>
        <li>Zaloguj się danymi dokumentu, którego używałeś w aplikacji (paszport lub dowód osobisty).</li>
        <li>Wybierz, w jakim celu udostępniasz status, np. prawo do pracy (right to work) albo prawo do najmu (right to rent).</li>
        <li>Otrzymasz kod (share code), który przekazujesz pracodawcy lub wynajmującemu razem z datą urodzenia.</li>
      </ol>
      <p>Kod do sprawdzenia prawa do pracy jest ważny 90 dni. Pracodawca sprawdza go na stronie GOV.UK.</p>
      <div class="co-to-znaczy">
        <h2>Co to oznacza dla Polaków w UK?</h2>
        <p>Jeśli wymieniasz paszport lub dowód osobisty, zaktualizuj dane w swoim koncie UKVI. Unikniesz problemów na granicy i przy sprawdzaniu statusu. Przed podróżą warto sprawdzić, czy konto pokazuje aktualny dokument.</p>
      </div>`,
    zrodla: [
      { nazwa: "GOV.UK – View and prove your immigration status", url: "https://www.gov.uk/view-prove-immigration-status" },
      { nazwa: "GOV.UK – Prove your right to work to an employer", url: "https://www.gov.uk/prove-right-to-work" },
    ],
  },
  {
    id: "wigilia-na-wyspach-polskie-produkty",
    tytul: "Wigilia na Wyspach: jak skompletować polskie produkty na święta",
    kategoria: "rozrywka",
    data: "2026-10-21",
    lead: "Do świąt jeszcze dwa miesiące, ale najlepsze rzeczy znikają szybko. Podpowiadamy, gdzie szukać i co zamówić wcześniej.",
    przyklad: true,
    tresc: `
      <p>Barszcz, pierogi, makowiec i opłatek – bez nich trudno wyobrazić sobie polską Wigilię. Na szczęście na Wyspach jest dziś łatwiej niż kiedykolwiek.</p>
      <h2>Gdzie szukać</h2>
      <ul>
        <li><strong>Polskie sklepy</strong> – w większych miastach jest ich wiele. Przed świętami często przyjmują zamówienia na ryby, wypieki i pierogi.</li>
        <li><strong>Supermarkety</strong> – w wielu większych sklepach są półki z produktami z Polski i Europy Środkowej.</li>
        <li><strong>Sklepy internetowe</strong> – wysyłają polskie produkty na terenie całej Wielkiej Brytanii. Przed świętami zamawiaj z zapasem czasu.</li>
        <li><strong>Polskie parafie</strong> – to zwykle najprostsze miejsce, żeby zdobyć opłatek.</li>
      </ul>
      <h2>Co zamówić wcześniej</h2>
      <p>Karpia, makowiec i domowe pierogi warto zarezerwować na początku grudnia. Suszone grzyby, mak i bakalie kupisz już teraz – długo się przechowują.</p>
      <div class="co-to-znaczy">
        <h2>Co to oznacza dla Polaków w UK?</h2>
        <p>Jeśli lecisz na święta do Polski, sprawdź zasady przewozu żywności w bagażu przy powrocie. Mięso i nabiał z UE podlegają ograniczeniom przy wwozie do Wielkiej Brytanii.</p>
      </div>`,
    zrodla: [
      { nazwa: "GOV.UK – Bringing food into Great Britain", url: "https://www.gov.uk/bringing-food-animals-plants-into-uk" },
    ],
  },
  {
    id: "znaki-ze-mieszkasz-w-uk-za-dlugo",
    tytul: "12 znaków, że mieszkasz w UK już za długo",
    kategoria: "humor",
    data: "2026-10-20",
    lead: "Przepraszasz, kiedy ktoś na Ciebie wpadnie? Mówisz „lovely” do kasjerki? Sprawdź, ile punktów zdobywasz.",
    przyklad: true,
    tresc: `
      <ol>
        <li>Mówisz „sorry”, kiedy ktoś nadepnie <em>Tobie</em> na nogę.</li>
        <li>14 stopni i słońce? Krótkie spodenki i grill w ogrodzie.</li>
        <li>Herbatę pijesz z mlekiem i nie widzisz w tym nic dziwnego.</li>
        <li>Na pytanie „How are you?” odpowiadasz „Not bad, you?” i idziesz dalej.</li>
        <li>Kolejka do autobusu to dla Ciebie świętość.</li>
        <li>Wiesz, że „it's a bit chilly” oznacza mróz, a „quite interesting” oznacza nudę.</li>
        <li>Kierowcom autobusu dziękujesz przy wysiadaniu.</li>
        <li>Rodzina w Polsce pyta, czy dalej pada. Odpowiadasz zgodnie z prawdą: „trochę”.</li>
        <li>W Polsce odruchowo podchodzisz do samochodu od złej strony.</li>
        <li>Z wakacji przywozisz walizkę kiełbasy, twarogu i krówek, a ubrania w plecaku.</li>
        <li>Słowo „lovely” wkradło się do Twoich rozmów po polsku.</li>
        <li>Nie wiesz już, czy tęsknisz za Polską, czy za Wyspami – bo zawsze jesteś „u siebie” trochę w obu miejscach.</li>
      </ol>
      <p><strong>Wynik:</strong> 0–4 – dopiero przyjechałeś. 5–8 – zaaklimatyzowany. 9–12 – prawie Brytyjczyk, ale z polskim sercem.</p>`,
    zrodla: [],
  },
];

window.ZARTY = [
  "Brytyjczyk mówi „not bad”, kiedy jest zachwycony. Polak mówi „może być”, kiedy jest zachwycony. Dlatego tak dobrze się dogadujemy.",
  "Szef: „Could you possibly, if it's not too much trouble, have a look at this?” Tłumaczenie: „Na wczoraj.”",
  "Mama przez telefon: „A ciepło tam u was?” Ja: „Mamo, jest 22 stopnie, a w telewizji ogłaszają falę upałów.”",
  "Po pięciu latach w UK przeprosiłem lodówkę, bo w nią uderzyłem.",
  "Wróciłem na wakacje do Polski i w sklepie powiedziałem „sorry” trzy razy. Kasjerka zapytała, czy dobrze się czuję.",
  "Tylko Polak w UK wraca z urlopu z walizką, w której są 4 kilo kiełbasy, 2 kilo twarogu i jedna koszulka.",
  "– Pada? – Nie, tylko trochę mży. Od marca.",
  "Mój angielski sąsiad nauczył się po polsku tylko słowa „kurczę”. Używa go poprawniej niż ja.",
  "W Polsce na powitanie pytają „co słychać?” i chcą usłyszeć całą historię. W UK pytają „you alright?” i nie chcą usłyszeć nic.",
  "Brytyjczycy mają 40 słów na deszcz. Polacy w UK mają jedno: „znowu”.",
  "Anglik na grillu: trzy kiełbaski i rozmowa o pogodzie. Polak na grillu: karkówka, szaszłyki, sałatka jarzynowa i rozmowa o tym, czemu Anglik przyniósł tylko trzy kiełbaski.",
  "Najkrótsza polsko-brytyjska rozmowa: – Sorry! – Sorry! – Nic się nie stało. – Sorry?",
  "Kolega pyta, czemu po dziesięciu latach w Londynie wciąż mam polski akcent. Odpowiadam, że to nie akcent, tylko znak firmowy.",
  "W UK „we should grab a coffee sometime” znaczy „nie zobaczymy się nigdy”. W Polsce „wpadnij kiedyś” znaczy „jutro o 17, mama robi pierogi”.",
  "Pierwszy rok w UK: „Kiedy wreszcie będzie lato?” Piąty rok: „O, było w zeszły wtorek.”",
  "Moja mama wysyła mi paczkę z Polski. Zawartość: słoik ogórków, kabanosy, ciepłe skarpety i karteczka „bo tam u was pewnie nie ma”.",
  "Angielski kolega spróbował bigosu i powiedział „interesting”. Od tej pory gotuję mu tylko fish and chips.",
  "Rachunek za ogrzewanie w UK sprawił, że zacząłem w domu chodzić w kurtce. Babcia z Polski byłaby dumna.",
  "– Ile lat mieszkasz w UK? – Tyle, że w Polsce pytam w sklepie „can I pay by card?”, a potem się rumienię.",
  "Brytyjczycy stoją w kolejce nawet wtedy, gdy nie ma kolejki. Polacy w UK nauczyli się tego tak dobrze, że w Polsce stoją w kolejce sami.",
];

// Katalog polskojęzycznych firm: { nazwa, branza, miasto, opis, telefon, www } – dodajemy po sprawdzeniu zgłoszenia.
window.FIRMY = [];

// Kalendarz wydarzeń: { nazwa, data: "RRRR-MM-DD", miasto, miejsce, opis, link } – tylko potwierdzone przez organizatora.
window.WYDARZENIA = [];

// Ważne terminy w ramce na stronie głównej (minione terminy same znikają).
window.TERMINY = [
  { data: "2026-11-27", opis: "Black Friday – sprawdź nasze porady, jak nie przepłacić" },
  { data: "2027-01-01", opis: "Nowy limit cen energii Ofgem (price cap) na styczeń–marzec" },
  { data: "2027-01-31", opis: "Termin złożenia zeznania Self Assessment online i zapłaty podatku za rok 2025/26" },
  { data: "2027-03-28", opis: "Zmiana czasu na letni – przestawiamy zegarki o godzinę do przodu" },
  { data: "2027-04-05", opis: "Koniec roku podatkowego 2026/27 – ostatni dzień na wykorzystanie limitu ISA" },
];

window.OGLOSZENIA = [
  { tytul: "Pokój do wynajęcia, rachunki wliczone", kategoria: "Mieszkania", miasto: "Peterborough", data: "2026-10-23", opis: "Duży pokój w spokojnym domu, blisko centrum i dworca. Wspólna kuchnia i łazienka. Rachunki i internet w cenie.", kontakt: "07700 900123", przyklad: true },
  { tytul: "Tłumaczenia dokumentów polski–angielski", kategoria: "Usługi", miasto: "Londyn / zdalnie", data: "2026-10-22", opis: "Tłumaczenia świadectw, dyplomów i zaświadczeń. Szybki termin, odbiór online.", kontakt: "tlumaczenia@example.com", przyklad: true },
  { tytul: "Szukamy zawodników do polskiej drużyny piłkarskiej", kategoria: "Inne", miasto: "Slough", data: "2026-10-21", opis: "Amatorska drużyna szuka chętnych do gry w niedzielnej lidze. Poziom dowolny, liczy się dobra atmosfera.", kontakt: "07700 900456", przyklad: true },
  { tytul: "Pomocnik na budowę od zaraz", kategoria: "Praca", miasto: "Birmingham", data: "2026-10-20", opis: "Firma remontowa zatrudni pomocnika. Wymagane CSCS i podstawowy angielski. Praca od poniedziałku do piątku.", kontakt: "07700 900789", przyklad: true },
  { tytul: "Fotelik samochodowy dla dziecka 9–18 kg", kategoria: "Sprzedam", miasto: "Manchester", data: "2026-10-19", opis: "Stan bardzo dobry, nie był w wypadku. Odbiór osobisty.", kontakt: "07700 900321", przyklad: true },
];

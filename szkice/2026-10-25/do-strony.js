// Szkice z 2026-10-25 – do wklejenia na początek window.ARTYKULY i window.ZARTY w dane.js.
// Artykuł zimowy-rozklad-ryanair-nowe-trasy-uk-warszawa ma status DO SPRAWDZENIA (patrz RAPORT.md).

const NOWE_ARTYKULY = [
  {
    id: "zimowy-rozklad-ryanair-nowe-trasy-uk-warszawa",
    tytul: "Ruszył zimowy rozkład lotów. Ryanair zapowiada nowe połączenia z Wielkiej Brytanii do Warszawy",
    kategoria: "wiadomosci",
    data: "2026-10-25",
    lead: "W ostatnią niedzielę października linie lotnicze przechodzą na rozkład zimowy. Ryanair wymienia wśród zimowych nowości pięć tras między Wielką Brytanią a Warszawą: z Birmingham, Bristolu, Edynburga, Manchesteru i Liverpoolu.",
    tresc: `
      <p>W ostatnią niedzielę października, razem ze zmianą czasu, linie lotnicze przechodzą na zimowy rozkład lotów. Obowiązuje on do końca marca. Dla Polaków w Wielkiej Brytanii to dobry moment, żeby sprawdzić, skąd tej zimy da się polecieć do Polski, zwłaszcza przed świętami.</p>
      <h2>Co ogłosił Ryanair</h2>
      <p>29 września Ryanair przedstawił zimowy rozkład z Warszawy. Przewoźnik opisał go jako rekordowy. Zapowiedział 18 nowych tras z obu warszawskich lotnisk, w tym 11 z Modlina i 7 z Lotniska Chopina, oraz trzy dodatkowe samoloty w bazie w Modlinie. Na liście zimowych nowości jest pięć połączeń z Wielką Brytanią:</p>
      <ul>
        <li><strong>z Warszawy-Modlina:</strong> Birmingham, Bristol, Edynburg i Manchester,</li>
        <li><strong>z Lotniska Chopina w Warszawie:</strong> Liverpool.</li>
      </ul>
      <p>Zastrzeżenie: Ryanair nazywa te trasy „nowymi” w rozkładzie zimowym, ale nie wszystkie są zupełnie nowe. Połączenie Birmingham–Modlin było już w letnim rozkładzie na 2026 rok. Z Liverpoolu do Modlina Ryanair latał już wcześniej w tym roku. Nowością jest więc połączenie z Lotniskiem Chopina. Bristol, Edynburg i Manchester to według dostępnych informacji nowe kierunki do Warszawy. W połowie października przewoźnik potwierdził w komunikacie dla Edynburga, że Warszawa jest jedną z trzech nowych tras ze stolicy Szkocji tej zimy.</p>
      <h2>Czego jeszcze nie wiemy na pewno</h2>
      <p>W komunikatach prasowych Ryanair nie podał dokładnych dat pierwszych lotów ani tego, ile razy w tygodniu będą latać samoloty na poszczególnych trasach. Nie jest też jasne, czy dotychczasowe połączenie Liverpool–Modlin zostanie utrzymane obok nowego lotu na Lotnisko Chopina. Serwisy branżowe podają różne informacje. Dlatego przed rezerwacją sprawdź aktualny rozkład i dni lotów na oficjalnej stronie przewoźnika. Rozkłady i ceny mogą się zmieniać.</p>
      <p>Warto pamiętać, że Modlin leży około 40 km od centrum Warszawy. Zanim kupisz bilet, sprawdź, jak dojedziesz z lotniska do celu i ile to będzie kosztować.</p>
      <div class="co-to-znaczy"><h2>Co to oznacza dla Polaków w UK?</h2>
      <p>Mieszkańcy okolic Bristolu, Manchesteru i Edynburga zyskają bezpośrednie połączenie z Warszawą. Do tej pory wielu z nich musiało dojeżdżać na inne lotnisko albo lecieć z przesiadką. Pasażerowie z Liverpoolu będą mogli wybrać lotnisko bliżej centrum stolicy. Więcej tras zwykle oznacza też większy wybór terminów przed Bożym Narodzeniem.</p>
      <p>Przed rezerwacją:</p>
      <ul>
        <li>sprawdź, z którego warszawskiego lotniska jest lot, czyli z Modlina czy z Lotniska Chopina,</li>
        <li>porównaj całkowity koszt z bagażem, bo w tanich liniach to on często decyduje o cenie,</li>
        <li>przy świątecznych terminach nie zwlekaj z rezerwacją, bo popyt jest wtedy największy.</li>
      </ul>
      </div>
    `,
    zrodla: [
      { nazwa: "Ryanair – komunikat: rekordowy rozkład na zimę 2026 z Warszawy, trzy dodatkowe samoloty w Modlinie (29.09.2026)", url: "https://corporate.ryanair.com/informacje/ryanair-oglasza-rekordowy-rozklad-lotow-nazime-2026-z-warszawy-i-dodaje-trzy-samoloty-w-modlinie/" },
      { nazwa: "Ryanair – komunikat: dwa dodatkowe samoloty w Warszawie na zimę 2026 (29.05.2026)", url: "https://corporate.ryanair.com/informacje/ryanair-umieszcza-w-warszawie-kolejne-2-samoloty-na-sezon-zimowy-2026/" },
      { nazwa: "Ryanair – Winter 2026 schedule for Edinburgh (14.10.2026)", url: "https://corporate.ryanair.com/?p=31408" },
      { nazwa: "Ryanair – 9th aircraft at Birmingham for summer 2026", url: "https://corporate.ryanair.com/news/ryanair-adds-9th-aircraft-at-birmingham-for-summer-2026/" },
      { nazwa: "Ryanair – 19th aircraft at Manchester for winter 2026", url: "https://corporate.ryanair.com/news/ryanair-adds-19th-aircraft-at-manchester-for-winter-2026/" },
      { nazwa: "Pasazer.com – Ryanair przywróci kolejne połączenie z Modlina (Liverpool)", url: "https://www.pasazer.com/news/468621/ryanair,przywroci,kolejne,polaczenie,z,modlina.html" },
      { nazwa: "Tanie-Loty.com.pl – Ryanair dorzuca 12 nowych tras z Warszawy i Modlina", url: "https://www.tanie-loty.com.pl/czytelnia/aktualnosci/ryanair-dorzuca-12-nowych-tras-z-warszawy-i-modlina-najmocniej-stawia-na-wlochy-i-wielka-brytanie/" },
    ]
  },
  {
    id: "ghost-brokers-falszywe-ubezpieczenie-auta",
    tytul: "Tanie ubezpieczenie auta z Facebooka czy WhatsAppa? Uważaj na „ghost brokerów”",
    kategoria: "pieniadze",
    data: "2026-10-25",
    lead: "Brytyjski nadzór finansowy (FCA) ostrzega przed oszustami, którzy sprzedają fałszywe polisy samochodowe w mediach społecznościowych i komunikatorach. Kto kupi taką polisę, może jeździć bez ubezpieczenia i nawet o tym nie wiedzieć.",
    tresc: `
      <p>Ubezpieczenie samochodu w UK jest drogie, więc oferta „o połowę taniej” od znajomego znajomego na Facebooku może kusić. Właśnie na to liczą tak zwani ghost brokers, czyli oszuści podszywający się pod pośredników ubezpieczeniowych.</p>
      <h2>Na czym polega oszustwo</h2>
      <p>Według FCA ghost brokers sprzedają polisy, które:</p>
      <ul>
        <li>są całkowicie podrobione,</li>
        <li>zostały wystawione na fałszywe dane, więc są nieważne,</li>
        <li>są prawdziwe, ale oszust anuluje je wkrótce po zakupie.</li>
      </ul>
      <p>Ofiara płaci, dostaje dokument, który wygląda wiarygodnie, i jeździ w przekonaniu, że ma ubezpieczenie. Prawda wychodzi na jaw zwykle przy kontroli policji albo po wypadku.</p>
      <h2>Skala problemu</h2>
      <p>W maju 2026 r. FCA opublikowało ostrzeżenie skierowane do młodych kierowców. Według badania przeprowadzonego dla FCA przez firmę Kantar 49% kierowców w wieku 17–25 lat kupiło kiedyś ubezpieczenie przez media społecznościowe albo komunikatory. 39% nie czuje się pewnie, gdy ma rozpoznać fałszywą polisę. FCA powołuje się też na dane Insurance Fraud Bureau, według których liczba wykrytych przypadków ghost brokingu wzrosła w latach 2022–2024 o 52%.</p>
      <h2>Sygnały ostrzegawcze</h2>
      <p>FCA wymienia między innymi:</p>
      <ul>
        <li>cenę dużo niższą niż u znanych ubezpieczycieli,</li>
        <li>kontakt wyłącznie przez media społecznościowe lub komunikatory, np. WhatsApp,</li>
        <li>brak prawdziwej strony internetowej, adresu biura i brytyjskiego numeru stacjonarnego,</li>
        <li>presję, żeby kupić od razu,</li>
        <li>prośbę o zapłatę przelewem na konto prywatne, kryptowalutą albo gotówką.</li>
      </ul>
      <h2>Jak sprawdzić, czy polisa jest prawdziwa</h2>
      <ol>
        <li>Wyszukaj firmę w rejestrze FCA (Firm Checker) i kontaktuj się z nią tylko przez dane podane w rejestrze.</li>
        <li>Sprawdź, czy na polisie zgadzają się Twoje imię i nazwisko, adres, samochód i zakres ochrony.</li>
        <li>Sprawdź, czy auto jest w bazie ubezpieczonych pojazdów (Motor Insurance Database). Zaleca to także FCA.</li>
      </ol>
      <h2>Co grozi za jazdę bez ubezpieczenia</h2>
      <p>Według gov.uk w Wielkiej Brytanii (Anglia, Szkocja, Walia) policja może nałożyć mandat 300 funtów i 6 punktów karnych. W Irlandii Północnej zasady opisuje serwis nidirect. Jeśli sprawa trafi do sądu, grozi nieograniczona grzywna i zakaz prowadzenia pojazdów. Policja może też zatrzymać samochód. Tłumaczenie, że kupiło się polisę w dobrej wierze, nie chroni przed konsekwencjami.</p>
      <h2>Co zrobić, jeśli padłeś ofiarą</h2>
      <p>FCA radzi zgłosić oszustwo na stronie Report Fraud (reportfraud.police.uk) i do FCA. Report Fraud obsługuje Anglię, Walię i Irlandię Północną. W Szkocji oszustwo zgłasza się na policji (Police Scotland, numer 101). Sprawę można też zgłosić do Insurance Fraud Bureau. Jeśli nie wiesz, czy oferta jest uczciwa, zadzwoń na infolinię FCA: 0800 111 6768. Pamiętaj, żeby jak najszybciej wykupić prawdziwą polisę.</p>
      <div class="co-to-znaczy"><h2>Co to oznacza dla Polaków w UK?</h2>
      <p>Oferty „taniego ubezpieczenia dla Polaków” krążą także w polskojęzycznych grupach. Jeśli od niedawna jeździsz w UK i nie masz tu historii bezszkodowej jazdy, możesz dostać wysoką składkę i łatwiej dać się skusić. Bezpieczniej kupować polisę bezpośrednio u ubezpieczyciela albo przez porównywarkę. Przed zapłatą zawsze sprawdź firmę w rejestrze FCA. Artykuł ma charakter informacyjny i nie jest poradą finansową.</p>
      </div>
    `,
    zrodla: [
      { nazwa: "FCA – Young drivers warned about fake insurance sold on social media (20.05.2026)", url: "https://www.fca.org.uk/news/press-releases/young-drivers-warned-about-fake-insurance-sold-social-media" },
      { nazwa: "FCA – Insurance and warranty scams / ghost broking", url: "https://www.fca.org.uk/consumers/insurance-warranty-scams" },
      { nazwa: "GOV.UK – Driving without insurance", url: "https://www.gov.uk/vehicle-insurance/driving-without-insurance" },
      { nazwa: "Lawyer Monthly – FCA warning: fake insurance on social media (05.2026)", url: "https://www.lawyer-monthly.com/2026/05/fca-warning-fake-insurance-social-media-ghost-broking/" },
      { nazwa: "Money to the Masses – Ghost brokers targeting young drivers on social media", url: "https://moneytothemasses.com/news/ghost-brokers-targeting-young-drivers-on-social-media" },
    ]
  },
  {
    id: "eta-rodzina-z-polski-na-swieta",
    tytul: "Rodzina z Polski przyjeżdża na święta? Bez ETA nie wsiądzie do samolotu. Jak ją załatwić krok po kroku",
    kategoria: "porady",
    data: "2026-10-25",
    lead: "Rodzice, rodzeństwo czy znajomi z Polski, którzy chcą odwiedzić Cię w UK, muszą przed podróżą mieć elektroniczne zezwolenie na podróż (ETA). Kosztuje 20 funtów, a wniosek można złożyć w kilka minut przez aplikację.",
    tresc: `
      <p>Planujesz święta z bliskimi z Polski u siebie w Wielkiej Brytanii? Najpierw upewnij się, że każdy z gości ma ETA (Electronic Travel Authorisation). Od 25 lutego 2026 r. osoba, która go nie ma, może nie zostać wpuszczona na pokład albo zostać zatrzymana na granicy.</p>
      <h2>Kto potrzebuje ETA</h2>
      <ul>
        <li><strong>Obywatele Polski i innych krajów UE</strong>, którzy przyjeżdżają do UK w odwiedziny, na wakacje albo w krótką podróż służbową i nie mają prawa pobytu w UK.</li>
        <li><strong>Każdy podróżny osobno, także niemowlęta i dzieci.</strong> Rodzina z dwójką dzieci potrzebuje czterech ETA.</li>
        <li>Osoby przesiadające się na lotnisku w UK, jeśli przechodzą przez kontrolę graniczną.</li>
      </ul>
      <h2>Kto NIE potrzebuje ETA</h2>
      <ul>
        <li>Osoby z paszportem brytyjskim lub irlandzkim.</li>
        <li>Osoby, które mają prawo mieszkać, pracować lub uczyć się w UK, np. Polacy z settled lub pre-settled status (EU Settlement Scheme) albo z wizą. Jeśli mieszkasz w UK, ETA nie dotyczy Ciebie, tylko Twoich gości.</li>
      </ul>
      <h2>Ile kosztuje i jak długo jest ważne</h2>
      <ul>
        <li><strong>Koszt:</strong> 20 funtów za osobę (stan na 25.10.2026). Od 8 kwietnia 2026 r. opłata wzrosła z 16 do 20 funtów. Opłata nie podlega zwrotowi.</li>
        <li><strong>Ważność:</strong> 2 lata albo do wygaśnięcia paszportu, w zależności od tego, co nastąpi wcześniej. W tym czasie można przyjeżdżać wiele razy, za każdym razem na maksymalnie 6 miesięcy.</li>
        <li>ETA jest przypisane do konkretnego paszportu. Kto wyrobi nowy paszport, musi złożyć nowy wniosek.</li>
      </ul>
      <h2>Jak złożyć wniosek krok po kroku</h2>
      <ol>
        <li>Pobierz oficjalną aplikację <strong>UK ETA</strong> (Google Play lub App Store) albo wejdź na stronę gov.uk/eta/apply.</li>
        <li>Przygotuj paszport, z którym będziesz podróżować, adres e-mail i kartę płatniczą (albo Apple Pay lub Google Pay).</li>
        <li>W aplikacji zeskanuj paszport i zrób zdjęcie twarzy. Przy wniosku przez stronę potrzebne jest zdjęcie paszportowe w formie cyfrowej.</li>
        <li>Odpowiedz na pytania, m.in. o karalność, i zapłać.</li>
        <li>Poczekaj na decyzję. Zwykle przychodzi e-mailem w ciągu doby, ale może to potrwać do 3 dni roboczych.</li>
      </ol>
      <p>Wniosek można złożyć za kogoś innego. Możesz więc pomóc rodzicom, którzy nie czują się pewnie ze smartfonem.</p>
      <h2>Uwaga na płatne pośrednictwo</h2>
      <p>Gov.uk ostrzega przed stronami, które podszywają się pod serwisy rządowe i pobierają wyższe opłaty. Oficjalny wniosek kosztuje 20 funtów i składa się go tylko przez aplikację UK ETA albo przez gov.uk.</p>
      <div class="co-to-znaczy"><h2>Co to oznacza dla Polaków w UK?</h2>
      <p>Jeśli zapraszasz kogoś na święta, przypomnij mu o ETA już teraz, zanim kupi bilety. Najlepiej złóż wniosek co najmniej kilka dni przed podróżą. Pamiętaj, że ETA nie gwarantuje wjazdu, bo ostateczną decyzję podejmuje Straż Graniczna. W sprawach nietypowych, np. przy karalności albo nieważnym paszporcie, sprawdź zasady na gov.uk albo zasięgnij porady.</p>
      </div>
    `,
    zrodla: [
      { nazwa: "GOV.UK – Get an electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { nazwa: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { nazwa: "The Local – UK confirms ETA price hike for European travellers", url: "https://www.thelocal.de/20260207/uk-confirms-eta-price-hike-for-european-travellers-as-rules-set-to-toughen" },
      { nazwa: "Lewis Silkin – UK immigration, nationality and passport fee rises from 8 April 2026", url: "https://www.lewissilkin.com/insights/2026/03/19/uk-immigration-nationality-and-passport-fee-rises-from-8-april-2026-102mnez" },
    ]
  },
  {
    id: "justyna-steczkowska-koncerty-birmingham-londyn",
    tytul: "Justyna Steczkowska zaśpiewa w Birmingham i Londynie. Dwa koncerty w listopadzie",
    kategoria: "gwiazdy",
    data: "2026-10-25",
    lead: "Jedna z najbardziej rozpoznawalnych polskich wokalistek wystąpi w Wielkiej Brytanii w drugiej połowie listopada: 21 listopada w Birmingham i 22 listopada w Londynie. Bilety są już w sprzedaży.",
    tresc: `
      <p>Fani Justyny Steczkowskiej w Wielkiej Brytanii nie muszą tej jesieni lecieć do Polski, żeby zobaczyć ją na żywo. Organizator, firma Zenith Media, prowadzi sprzedaż biletów na dwa koncerty w Anglii. Dzień wcześniej artystka zaśpiewa w Dublinie.</p>
      <h2>Kiedy i gdzie</h2>
      <ul>
        <li><strong>Birmingham – sobota 21 listopada 2026</strong>, The Crossing (kod pocztowy B5 5SU). Drzwi otwierane o 18:00, początek o 19:00.</li>
        <li><strong>Londyn – niedziela 22 listopada 2026</strong>, 229 The Venue, 229 Great Portland Street (W1W 5PN). Najbliższa stacja metra to Great Portland Street. Drzwi otwierane o 18:00, początek o 19:00.</li>
      </ul>
      <p>Według stron sprzedaży koncerty potrwają do 20:30. Bilety są dostępne w serwisie Ticket Tailor na stronach organizatora. Każdy koncert ma osobną stronę. Według organizatora wstęp mają osoby od 14. roku życia z dokumentem ze zdjęciem. Można wnieść tylko małą torbę w formacie najwyżej A4.</p>
      <h2>30 lat płyty „Dziewczyna Szamana”</h2>
      <p>Steczkowska jest na scenie od ponad trzech dekad. Szerszej publiczności dała się poznać w 1994 roku w programie „Szansa na sukces”. W 1995 roku reprezentowała Polskę na Eurowizji w Dublinie z piosenką „Sama”. Rok później ukazał się jej debiutancki album „Dziewczyna Szamana”, który w tym roku obchodzi 30-lecie.</p>
      <p>Wielu Polaków na Wyspach pamięta też jej powrót na Eurowizję w 2025 roku. Z utworem „Gaja” zajęła w finale w Bazylei 14. miejsce ze 156 punktami. Zdecydowaną większość, 139 punktów, przyznali jej widzowie.</p>
      <div class="co-to-znaczy"><h2>Co to oznacza dla Polaków w UK?</h2>
      <p>To dobra okazja na wieczór z polską muzyką bez wyjazdu z kraju, a może i na przedświąteczny prezent. Koncerty odbywają się w średniej wielkości klubach, więc liczba miejsc jest ograniczona. Kupuj bilety tylko w oficjalnej sprzedaży organizatora, a nie od przypadkowych osób w mediach społecznościowych. Ceny biletów sprawdź na stronie sprzedaży. Termin, miejsce i zasady wejścia mogą się zmienić, więc tuż przed koncertem zajrzyj na stronę organizatora.</p>
      </div>
    `,
    zrodla: [
      { nazwa: "Ticket Tailor (Zenith Media) – Justyna Steczkowska Birmingham, 21.11.2026", url: "https://www.tickettailor.com/events/zenithmedialtd/2206241" },
      { nazwa: "Ticket Tailor (Zenith Media) – Justyna Steczkowska London, 22.11.2026", url: "https://www.tickettailor.com/events/zenithmedialtd/2316135" },
      { nazwa: "Polish Express – Justyna Steczkowska wystąpi w Wielkiej Brytanii (24.10.2026)", url: "https://polishexpress.eu/justyna-steczkowska-koncerty-uk-2026-birmingham-londyn/" },
      { nazwa: "Songkick – Justyna Steczkowska, Dublin, The Academy, 20.11.2026", url: "https://www.songkick.com/concerts/43218191-justyna-steczkowska-at-academy" },
      { nazwa: "Wikipedia – Poland in the Eurovision Song Contest 2025", url: "https://en.wikipedia.org/wiki/Poland_in_the_Eurovision_Song_Contest_2025" },
      { nazwa: "Eska.pl – Eurowizja 2025: wyniki Justyny Steczkowskiej", url: "https://www.eska.pl/rozrywka/gwiazdy/justyna-steczkowska-wygrala-w-dwoch-krajach-ktore-panstwa-najbardziej-glosowaly-na-polske-na-eurowizji-2025-aa-3NaM-FCVr-TW2Y.html" },
    ]
  },
];

const NOWE_ZARTY = [
  "W UK przeprosiłem szafkę, o którą uderzyłem kolanem. Wtedy zrozumiałem, że zostaję tu na stałe.",
  "Szef powiedział o moim raporcie „not bad”. Po pięciu latach na Wyspach wiem już, że to prawie medal.",
  "Mama pakuje mi paczkę do UK, jakby w Tesco od lat sprzedawali tylko herbatę i parasole.",
  "Lekarz GP zapytał, czym leczę przeziębienie. Odpowiedziałem uczciwie: czosnkiem, miodem i radami babci przez WhatsAppa.",
  "W Polsce rodzina pyta, ile zarabiam w funtach. W UK koledzy pytają, ile w Polsce kosztuje piwo w złotówkach. Każdy liczy, gdzie bardziej opłaca się tęsknić.",
];

# Codzienne zadanie w chmurze – jak je odtworzyć

Na wypadek przeniesienia na inne konto Claude lub inny komputer.

## Ustawienia
- Miejsce: https://claude.ai/code/routines → „New routine”
- Repozytorium: DianaportalKicia/U-nas-w-UK (konto GitHub musi być połączone z kontem Claude: https://claude.ai/connect-github, i musi być zainstalowana aplikacja Claude na GitHubie)
- Harmonogram: codziennie o 7:00 (cron w UTC: `0 7 * * *`)
- Model: Claude Sonnet 5.5
- Narzędzia: Bash, Read, Write, Edit, Glob, Grep, WebSearch, WebFetch, Agent
- Bez dodatkowych konektorów

Uwaga: zadanie powinno działać tylko na JEDNYM koncie naraz – inaczej szkice powstaną podwójnie.

## Instrukcja (prompt) do wklejenia

```
Jesteś redaktorem portalu „U nas w UK” dla Polaków w Wielkiej Brytanii. Pracujesz w sklonowanym repozytorium DianaportalKicia/U-nas-w-UK.

1. Ustal dzisiejszą datę w strefie czasowej Europe/London (np. poleceniem: TZ=Europe/London date +%Y-%m-%d) i dzień tygodnia – od nich zależą stałe serie.
2. Przeczytaj w całości plik redakcja/INSTRUKCJE.md i wykonaj dokładnie opisane w nim dzisiejsze zadanie: wyszukaj tematy, napisz artykuły i żarty, zweryfikuj fakty (z osobnym agentem-recenzentem), przygotuj posty na Facebooka, wiadomość na WhatsAppa i RAPORT.md.
3. Wszystkie pliki zapisz w folderze szkice/RRRR-MM-DD/ (dzisiejsza data). Nie zmieniaj plików w strona/ ani w redakcja/. Niczego nie publikujesz.
4. Na koniec zrób jeden commit tylko z dzisiejszym folderem szkiców („Szkice z DD.MM.RRRR”) i wypchnij go na gałąź main (git push origin main). Jeśli push się nie uda przez nowsze zmiany, zrób git pull --rebase origin main i spróbuj ponownie. Nie twórz pull requestów ani innych gałęzi.
5. Zakończ krótkim podsumowaniem po polsku: ile artykułów i żartów powstało, jakie tytuły i co wymaga uwagi właściciela.
```

## Praca na innym komputerze
1. Zainstaluj Git (https://git-scm.com) i aplikację Claude.
2. Pobierz repozytorium: `git clone https://github.com/DianaportalKicia/U-nas-w-UK.git`
3. Otwórz folder w aplikacji Claude – wszystkie pliki strony, szkice i instrukcje są na miejscu.

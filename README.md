# Landings

Statyczne landingi, każdy w osobnym folderze (np. `elitefood/` → `/elitefood/`).
Główny `index.html` to lista landingów, `404.html` – strona błędu.

## Wdrożenie na DigitalOcean App Platform

Specyfikacja aplikacji: [`.do/app.yaml`](.do/app.yaml) (static site, bez builda, repo `raburabur/landings`, gałąź `main`, auto-deploy po pushu).

Panel: **Create App → GitHub → raburabur/landings → main**, typ komponentu *Static Site*, bez komendy builda, *Output Directory* puste.

Albo z CLI:

```bash
doctl apps create --spec .do/app.yaml
```

Kolejne wdrożenia uruchamia `git push origin main`.

## Podgląd lokalny

```bash
python3 -m http.server 8731
```

i otwórz http://localhost:8731/elitefood/

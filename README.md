# Portfólio de Thayane Nascimento

Portfólio desenvolvido com Vue 3 e Vite.

## Desenvolvimento local

Requer Node.js 22 ou superior.

```sh
npm ci
npm run dev
```

Para validar a versão de produção localmente:

```sh
npm run build
npm run preview
```

## Publicação no GitHub Pages

O workflow em `.github/workflows/deploy.yml` compila e publica o site automaticamente a cada push para `main`. Também é possível iniciar a publicação manualmente pela aba **Actions** do GitHub.

Na primeira publicação, abra **Settings > Pages** no repositório e selecione **GitHub Actions** como origem do deploy.

O build de publicação usa o caminho `/my-portfolio/`, correspondente ao repositório, e a versão local continua usando `/`.

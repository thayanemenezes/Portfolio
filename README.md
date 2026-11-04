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

No GitHub Actions, o caminho base é definido automaticamente a partir do nome do repositório, respeitando maiúsculas e minúsculas. A versão local continua usando `/`.

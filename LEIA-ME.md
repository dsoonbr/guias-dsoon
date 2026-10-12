# Guias Dsoon

App (PWA) com checklists de jogos. Funciona offline e instala no Android pelo Chrome.

## Estrutura
- `index.html`: tela inicial com a lista de guias e o progresso de cada um
- `guias.js`: lista de guias (é aqui que se cadastra um jogo novo)
- `guias/eday/`: guia de coletáveis do Gears of War: E-Day
- `sw.js`: cache offline (suba `VERSION` a cada mudança)
- `manifest.webmanifest` e `icons/`: nome e ícone do app

## Publicar (GitHub Pages)
1. Crie um repositório público em github.com, ex. `guias-dsoon`.
2. "Add file" > "Upload files" e arraste **o conteúdo** desta pasta (não a pasta em si).
3. Settings > Pages > Branch `main`, pasta `/ (root)` > Save.
4. Em ~1 min o app fica em `https://SEU-USUARIO.github.io/guias-dsoon/`.

## Instalar no celular
Abra o endereço no Chrome do Android > menu ⋮ > "Instalar app" (ou "Adicionar à tela inicial").

## Adicionar um jogo novo
1. Crie `guias/<id>/index.html` (copie o do E-Day como modelo; troque a chave `KEY` do localStorage).
2. Cadastre em `guias.js` (mesma `chave`, `total` de itens).
3. Inclua `"guias/<id>/"` no `ASSETS` do `sw.js` e suba a `VERSION`.
4. Envie os arquivos alterados para o GitHub. O app atualiza sozinho.

# Subettini Crochê

Site estático (HTML, CSS e JavaScript puros), pronto para o GitHub Pages.

## Estrutura

```
index.html                 página principal
css/style.css              estilos
js/script.js               menu, filtros e animações
logo-subettinicroche.png   logotipo (também usado como ícone da aba)
img/                       (crie esta pasta para as fotos das peças)
```

## O que personalizar

Procure por `TROQUE` no `index.html`:

- **WhatsApp**: substitua `5500000000000` (aparece 2 vezes) pelo número com 55 + DDD + número, só dígitos.
- **E-mail**: substitua `seuemail@exemplo.com`.
- **Fotos das peças**: coloque as imagens em `img/` e troque cada `<div class="card__media card__media--N">…</div>` por
  `<div class="card__media"><img src="img/sua-foto.jpg" alt="Descrição"></div>`.
- **Foto da seção "Sobre mim"**: troque o bloco `photo-placeholder` por `<img src="img/sobre.jpg" alt="...">`.
- **Depoimentos** e o texto "+30 anos de crochê".

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `subettini-croche`).
2. Envie estes arquivos para a branch `main`.
3. No repositório: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. Em 1–2 minutos o site estará em `https://SEU-USUARIO.github.io/subettini-croche/`.

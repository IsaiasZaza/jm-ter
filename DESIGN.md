---
name: JM Ternos
description: Ritual de polimento cordovan — alfaiataria local que brilha com trabalho, não com vitrine.
colors:
  leather: "#140f0d"
  leather-lift: "#1f1714"
  cordovan: "#6b2a28"
  cordovan-deep: "#4f1d1c"
  brass: "#b8956c"
  brass-hot: "#d4b489"
  cloth: "#e6dfd4"
  cloth-dim: "#c9bfb2"
  ink: "#140f0d"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 12vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.15rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.65rem, 3.2vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
    letterSpacing: "0"
rounded:
  none: "0"
spacing:
  xs: "0.6rem"
  sm: "0.85rem"
  md: "1.25rem"
  lg: "1.6rem"
  xl: "2.25rem"
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  section-y: "clamp(3.75rem, 11vh, 6.75rem)"
components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.3rem"
    height: "2.9rem"
  button-primary-hover:
    backgroundColor: "{colors.brass-hot}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.cloth}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.3rem"
    height: "2.9rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.cloth}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.3rem"
    height: "2.9rem"
  button-top-wa:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.85rem"
  polish-block:
    backgroundColor: "{colors.cordovan}"
    textColor: "{colors.cloth}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "clamp(2rem, 5vw, 3.1rem)"
  leather-block:
    backgroundColor: "{colors.leather-lift}"
    textColor: "{colors.cloth-dim}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "clamp(2.25rem, 5vw, 3.25rem)"
---

# Design System: JM Ternos

## Overview

**Creative North Star: "Ritual de polimento"**

A interface se comporta como o banco de polimento de um sapateiro: solo de couro preto-queimado, campos largos de cordovan, latão como único brilho quente, e um pano de limpeza sobre pedra clara quando o tom precisa respirar. Confiança local que brilha com trabalho — não com vitrine de shopping, não com hero navy+serif de alfaiataria genérica.

A densidade é generosa e fechada: blocos sólidos de material, tipografia de rótulo de lata (Bricolage) contra corpo sóbrio (Host Grotesk), sem grade de cards iguais. Profundidade vem de troca tonal entre couro, cordovan e cloth, mais um véu fotográfico no hero — não de cartões flutuantes.

**Key Characteristics:**
- Full-bleed leather plate no primeiro viewport; marca como sinal heroico
- Cordovan e leather como campos fechados; brass reservado a CTAs e destaques raros
- Cantos afiados (0 radius) em toda a superfície
- Lista com filetes, nunca mosaico de cards
- Motion curto: rise + sheen de latão; respeita `prefers-reduced-motion`

## Colors

Paleta de oficina: couro escuro, oxblood cordovan, latão polido, pano claro — sem navy, sem creme genérico de “luxury serif”.

### Primary
- **Cordovan** (`cordovan`): Campo de destaque e títulos de lista; bloco de citação (`loja__polish`).
- **Cordovan Deep** (`cordovan-deep`): Base do hero sob a placa de couro.

### Secondary
- **Brass** (`brass`): Único brilho quente — botões primários, link de e-mail, foco visível.
- **Brass Hot** (`brass-hot`): Topo do gradiente de metal, place line do hero, meta da citação, hover de links do rodapé.

### Neutral
- **Leather** (`leather` / `ink`): Solo da página e tinta sobre latão.
- **Leather Lift** (`leather-lift`): Bloco de copy da loja e fundo do mapa.
- **Cloth** (`cloth`): Texto principal sobre couro; superfície tipográfica do hero.
- **Cloth Dim** (`cloth-dim`): Lead, body secundário, nav inativa.

### Named Rules
**The Brass Rarity Rule.** Latão aparece só onde há ação ou ênfase pontual (CTA, foco, place/meta). Não pintar seções inteiras de brass.

**The Cordovan Field Rule.** Cordovan é campo fechado ou título de lista — nunca fundo global da página (o solo é leather).

## Typography

**Display Font:** Bricolage Grotesque (system-ui, sans-serif)
**Body Font:** Host Grotesk (system-ui, sans-serif)

**Character:** Display como rótulo de lata / tin-label — condensado, pesado, tracking negativo. Body como leitura de oficina: clara, sem serifa de boutique.

### Hierarchy
- **Display** (800, `clamp(3.25rem, 12vw, 6rem)`, 0.92): Marca no hero (`JM Ternos`); max ~12ch.
- **Headline** (800, `clamp(2rem, 4.5vw, 3.15rem)`, 1.05): Títulos de seção; max ~18ch.
- **Title** (700, `clamp(1.65rem, 3.2vw, 2.25rem)` / 1.45rem em lista): Citação da loja e títulos de ocasião.
- **Body** (400, 1.0625rem, 1.7): Parágrafos; leads usam cloth-dim, max ~34–40rem.
- **Label** (500–700, 0.85–0.9rem): Place line, nav, botões, meta, horários (display family nos valores).

### Named Rules
**The Tin-Label Rule.** Qualquer palavra de marca, nav, CTA ou dado operacional (horário, marca no rodapé) usa Bricolage. Host Grotesk fica no parágrafo.

## Layout

Solo full-bleed; conteúdo ancora à esquerda no hero (`max-width: 38rem`) e centra em `--max` (72rem) nas seções seguintes. Gutters horizontais: `clamp(1rem, 4vw, 2.5rem)`. Ritmo vertical de seção: `clamp(3.75rem, 11vh, 6.75rem)` na faixa de ocasiões; blocos loja/visita usam padding interno generoso sem gap entre painéis.

Quebras observadas: nav desktop `720px`; rodapé em três colunas `700px`; loja duas colunas `860px`; visita + mapa `900px`. Ocasiões = lista empilhada com filetes 1px, gap 0 — não grid de cards. Loja = dois painéis fechados (leather-lift | cordovan) sem gutter entre eles.

### Named Rules
**The Closed Block Rule.** Seções são placas de material contíguas. Não inventar grade uniforme de cards iguais.

## Elevation & Depth

Sistema predominantemente tonal. Depth = troca leather → leather-lift → cordovan, véu escuro/cordovan no hero, e textura fotográfica (leather plate / cloth-on-stone). Sombras existem só como material de latão ou âncora do mapa — não como elevação de card.

### Shadow Vocabulary
- **Brass inset + drop** (`0 1px 0 rgba(255, 236, 200, 0.35) inset, 0 8px 18px rgba(0, 0, 0, 0.28)`): Botão brass (variante top WA usa drop menor).
- **Map settle** (`0 12px 40px rgba(0, 0, 0, 0.35)`): Moldura do iframe do mapa.

### Named Rules
**The Material Shadow Rule.** Sombra só para metal polido ou para pousar o mapa. Blocos de copy e listas ficam flat.

## Shapes

Cantos afiados em toda a UI (`border-radius: 0`). Botões, header chip WA, painéis e mapa são retângulos vivos. Filetes finos: ocasões em `rgba(20,15,13,0.14)`; horários e rodapé em brass a ~18% opacidade. Contorno de botão cloth/ghost: cloth a 35–40% opacidade.

### Named Rules
**The Sharp Plate Rule.** Sem radius. Placas e CTAs cortam reto como sola e fivela.

## Components

### Buttons
- **Shape:** Retângulo afiado (0); min-height 2.9rem; padding 0.7rem 1.3rem; Bricolage 700 ~0.92rem.
- **Primary (brass):** Gradiente vertical brass-hot → brass → `#9a7a52`; texto ink; borda `#8a6d48`; sombra inset+drop de metal.
- **Hover / Focus:** Gradiente sobe para `#e0c49a` / brass-hot; focus-visible = outline 2px brass, offset 3px.
- **Secondary (cloth):** Transparente, texto cloth, borda cloth 40%; hover solidifica a borda.
- **Ghost:** Igual ao cloth com borda ~35%; usado no telefone junto ao Maps.

### Navigation
- Barra fixa leather 92% + blur 8px. Marca “JM” display 800. Links cloth-dim → cloth no hover. Chip WA compacto (gradiente brass) à direita; nav só ≥720px.

### Cards / Containers
- **Não há cards.** Ocasiões = lista com filetes. Loja = dois campos de material. Mapa = bloco leather-lift com sombra settle.
- **Internal Padding:** painéis `clamp(2rem–3.25rem)`; itens de lista `1.4rem 1rem`.

### Signature: Hero leather plate
Full-bleed `hero-leather.jpg` com véu leather/cordovan e sheen brass animado. Conteúdo: place (brass-hot) → marca display → lead cloth-dim → par brass + cloth. Entrada staggered `rise` + `sheen` (~0.95–1.4s, `--ease`).

### Signature: Cloth-stone field
Seção ocasiões sobre `cloth-stone.jpg` com véu cloth; tipografia ink/cordovan; lista filetada — o “pano de limpeza” do ritual.

### Signature: Polish quote block
Painel cordovan com quote display e meta brass-hot; fecha o díptico com o bloco leather-lift.

## Do's and Don'ts

### Do:
- **Do** manter o solo em leather e tratar cordovan/brass como campos e brilho pontual.
- **Do** usar Bricolage em marca, títulos, CTAs e dados operacionais; Host Grotesk no parágrafo.
- **Do** preferir listas filetadas e dípticos de material a grids de cards.
- **Do** reservar motion a rise/sheen e desligar sob `prefers-reduced-motion`.
- **Do** manter focus-visible em outline brass 2px / offset 3px.

### Don't:
- **Don't** introduzir hero navy + serifa de alfaiataria genérica.
- **Don't** arredondar cantos ou empilhar cards iguais com sombra de elevação.
- **Don't** espalhar brass como fundo de seção — raridade é o ponto.
- **Don't** inventar kickers/eyebrows de marketing, badges flutuantes ou collages no hero.
- **Don't** trocar a placa full-bleed por imagem inset/card no primeiro viewport.

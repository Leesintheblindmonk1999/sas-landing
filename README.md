# SAS Landing Page

<div align="center">

**Official public landing page for SAS — Symbiotic Autoprotection System**  
**κD = 0.56 · Durante Constant · Structural Coherence Auditing for Generative AI**

[![Live Site](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-00ffd0?style=for-the-badge)](https://leesintheblindmonk1999.github.io/sas-landing/)
[![Public API](https://img.shields.io/badge/Public%20API-sas--api.onrender.com-brightgreen?style=for-the-badge)](https://sas-api.onrender.com)
[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.19702379-blue?style=for-the-badge)](https://doi.org/10.5281/zenodo.19702379)
[![License](https://img.shields.io/badge/License-GPL--3.0%20%2B%20Durante%20Invariance-purple?style=for-the-badge)](https://github.com/Leesintheblindmonk1999/SAS)
[![Benchmark](https://img.shields.io/badge/Benchmark-98.80%25%20Accuracy-success?style=for-the-badge)](#benchmark--validation)

</div>

---

<div align="center">

## Language / Idioma

[🇬🇧 English](#-english) · [🇪🇸 Español](#-español)

</div>

---

# 🇬🇧 English

## Overview

`/sas-landing` is the official public landing page for **SAS — Symbiotic Autoprotection System** and its core constant **κD = 0.56**, also referred to as the **Durante Constant**.

The site presents SAS as an open technical standard for structural coherence auditing in generative AI outputs. It connects the public API, benchmark evidence, legal traceability, OpenTimestamps anchoring, and commercial contact layer in a single static website.

**Live site:**  
[https://leesintheblindmonk1999.github.io/sas-landing/](https://leesintheblindmonk1999.github.io/sas-landing/)

**Public API:**  
[https://sas-api.onrender.com](https://sas-api.onrender.com)

**Main SAS repository:**  
[https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)

---

## Strategic Purpose

This landing page is not just a visual presentation. It is a public technical legitimacy layer for SAS.

Its purpose is to:

1. Present SAS as an open structural audit standard.
2. Display verifiable empirical validation.
3. Reinforce authorship and traceability for **Gonzalo Emir Durante**.
4. Separate SAS from any exclusive geopolitical use.
5. Route users toward the public API, the repository, the DOI, and commercial contact.
6. Provide a neutral, auditable, and accessible public entry point for international users.

---

## What SAS Communicates

SAS evaluates whether generative AI outputs preserve structural coherence across semantic, logical, numerical, and reference-related dimensions.

The landing communicates that SAS is:

- open;
- auditable;
- technically traceable;
- benchmarked;
- neutral by design;
- available for public or private organizations under symmetric attribution rules.

SAS is not presented as a universal factual oracle or automatic legal certification system. It is a **technical evidence layer for structural coherence auditing**.

---

## Benchmark / Validation

The landing displays the main SAS v1.1.0 benchmark:

| Metric | Result |
|---|---:|
| Evaluated pairs | 2,000 |
| Hallucination examples | 1,000 |
| Clean examples | 1,000 |
| Accuracy | 98.80% |
| Precision | 100.00% |
| Recall | 97.60% |
| F1 Score | 98.79% |
| False positives | 0 |

### Confusion Matrix

| Prediction | Actual hallucination | Actual clean |
|---|---:|---:|
| Hallucination | TP = 976 | FP = 0 |
| Clean | FN = 24 | TN = 1000 |

This benchmark is presented as empirical validation for the evaluated dataset. It should not be interpreted as a universal guarantee across every domain, model, language, or input distribution.

---

## Legal and Cryptographic Traceability

| Record | Value |
|---|---|
| Author | Gonzalo Emir Durante |
| TAD Argentina | `EX-2026-18792778` |
| Zenodo DOI | `10.5281/zenodo.19702379` |
| OpenTimestamps hash | `5a434d7234fd55cb45829d539eee34a5ea05a3c594e26d76bb41695c46b2a996` |
| Public API | `https://sas-api.onrender.com` |
| Main repository | `https://github.com/Leesintheblindmonk1999/SAS` |
| License | GPL-3.0 + Durante Invariance License |

---

## Neutrality / Geopolitical Shielding

SAS and **κD = 0.56** are presented as an open standard available to any public or private organization under the same rules.

There are no exclusivities, privileges, or geopolitical access restrictions. The main condition is explicit attribution to **Gonzalo Emir Durante**, preservation of the technical integrity of the standard, and compliance with the applicable license.

This positioning prevents the standard from being framed as closed, partisan, state-exclusive, military-exclusive, or region-specific. SAS is positioned as an open technical standard with mandatory attribution and symmetric rules.

---

## Landing Features

- Bilingual interface: English / Spanish.
- Theme selector: `LIGHT`, `DARK`, `TECH`.
- Theme persistence through `localStorage`.
- Language persistence through `localStorage`.
- Real fetch to the public API `/health` endpoint.
- Controlled fallback if the API is unavailable or blocked by CORS during local testing.
- Self-contained benchmark visual.
- Neutrality / geopolitical shielding section.
- Legal section with TAD, DOI, and OpenTimestamps reference.
- Contact form through `mailto:`.
- Static deployment.
- No heavy framework.
- No cookies.
- No analytics.
- No custom backend.
- GitHub Pages ready.

---

## Intended Audience

This landing page is designed for:

- hallucination audit clients;
- RAG startups;
- generative AI integrators;
- technical reviewers;
- companies evaluating API licensing;
- institutions requiring document traceability;
- readers coming from the Zenodo DOI;
- users coming from GitHub, LinkedIn, or publications.

---

## What SAS Does Not Claim

To preserve technical precision and reputational safety, the landing avoids claiming that SAS is:

- a universal factual oracle;
- automatic legal certification;
- an absolute guarantee against every hallucination;
- a closed or exclusive solution;
- a geopolitical surveillance tool.

SAS is presented as a **technical evidence layer for structural coherence auditing**.

---

## Repository Structure

```text
sas-landing/
├── index.html                  # Main bilingual landing page
├── css/
│   ├── styles.css              # Base layout, responsive design, components
│   └── themes.css              # Theme variables: light, dark, tech
├── js/
│   ├── main.js                 # Language switcher, API health fetch, form behavior, scroll reveal
│   └── theme.js                # Theme selector and localStorage persistence
├── assets/
│   ├── logo.svg                # SAS geometric logo
│   └── benchmark.png           # Self-contained benchmark visualization
└── .well-known/
    └── ots-proof.txt           # OpenTimestamps public proof notice / hash reference
```

---

## Local Preview

### Option 1 — Open directly

You can open the page directly:

```text
index.html
```

### Option 2 — Recommended local server

For the most accurate behavior, especially for fetch and browser security behavior:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## API Health Check

The landing attempts to fetch:

```text
https://sas-api.onrender.com/health
```

If the request succeeds, the page shows the API as online.

If the request fails due to Render cold start, connectivity, browser security, or CORS restrictions during local testing, the page shows a controlled fallback instead of breaking.

---

## Deployment

### GitHub Pages

Recommended deployment:

1. Create or open the repository:

```text
Leesintheblindmonk1999/sas-landing
```

2. Upload the static files:

```text
index.html
css/
js/
assets/
.well-known/
README.md
```

3. In GitHub:

```text
Settings → Pages → Deploy from branch → main → /root
```

4. Public URL:

```text
https://leesintheblindmonk1999.github.io/sas-landing/
```

---

## Privacy

This site:

- does not use cookies;
- does not integrate analytics;
- does not use tracking pixels;
- does not store data in a custom backend;
- does not store contact form messages on a server;
- does not store visitor IPs inside the repository or inside the landing itself.

The contact form uses `mailto:` and opens the user’s local email client. The data typed by the user is only sent if the user decides to send the email.

Note: if the site is hosted on GitHub Pages or another external provider, that provider may process standard technical access logs under its own policies.

Privacy contact:

```text
duranteg2@gmail.com
```

---

## OpenTimestamps Reference

The repository includes:

```text
.well-known/ots-proof.txt
```

Associated hash:

```text
5a434d7234fd55cb45829d539eee34a5ea05a3c594e26d76bb41695c46b2a996
```

Suggested verification command:

```bash
ots verify .well-known/ots-proof.txt
```

For full OpenTimestamps verification, keep the matching `.ots` proof file if generated separately and publish it next to the proof notice.

---

## Technical Notes

### Static Architecture

The landing is fully static:

```text
HTML + CSS + JavaScript + SVG + PNG
```

No server-side runtime is required.

### Dependencies

There are no required external JavaScript frameworks.

The project intentionally avoids:

- React;
- Vue;
- Next.js;
- tracking SDKs;
- analytics SDKs;
- heavy UI libraries.

### Browser Features Used

- `fetch()`
- `localStorage`
- `IntersectionObserver`
- CSS variables
- responsive CSS Grid / Flexbox

All features are widely supported in modern browsers.

---

## Maintenance Checklist

Before publishing a new landing version:

- [ ] Confirm API URL is correct.
- [ ] Confirm DOI is current.
- [ ] Confirm TAD registry number is unchanged.
- [ ] Confirm benchmark metrics match the latest benchmark artifact.
- [ ] Confirm OpenTimestamps hash matches the intended record.
- [ ] Test English / Spanish language switch.
- [ ] Test `LIGHT / DARK / TECH` theme switch.
- [ ] Test contact form mailto.
- [ ] Test mobile layout.
- [ ] Test GitHub Pages deployment.
- [ ] Verify that no secrets, API keys, or private files are included.

---

## License

The SAS standard and **κD = 0.56** are published under:

```text
GPL-3.0 + Durante Invariance License
```

The landing page itself is part of the public SAS communication layer and should preserve:

- attribution to Gonzalo Emir Durante;
- reference to TAD `EX-2026-18792778`;
- reference to Zenodo DOI `10.5281/zenodo.19702379`;
- the OpenTimestamps hash reference;
- the neutrality statement.

For complete licensing details, see the main SAS repository:

[https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)

---

## Contact

For commercial inquiries, pilots, licensing, integrations, or technical questions:

```text
duranteg2@gmail.com
```

Main links:

- Live landing: [https://leesintheblindmonk1999.github.io/sas-landing/](https://leesintheblindmonk1999.github.io/sas-landing/)
- Public API: [https://sas-api.onrender.com](https://sas-api.onrender.com)
- API docs: [https://sas-api.onrender.com/docs](https://sas-api.onrender.com/docs)
- Main repository: [https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)
- DOI: [https://doi.org/10.5281/zenodo.19702379](https://doi.org/10.5281/zenodo.19702379)

---

<div align="center">

[⬆ Back to language selector](#language--idioma)

</div>

---

# 🇪🇸 Español

## Descripción general

`/sas-landing` es la landing page pública oficial de **SAS — Symbiotic Autoprotection System** y de su constante central **κD = 0.56**, también denominada **Durante Constant**.

El sitio presenta SAS como un estándar técnico abierto para auditoría de coherencia estructural en salidas de IA generativa. Conecta en una única página estática la API pública, la evidencia de benchmark, la trazabilidad legal, el anclaje OpenTimestamps y el contacto comercial.

**Sitio en vivo:**  
[https://leesintheblindmonk1999.github.io/sas-landing/](https://leesintheblindmonk1999.github.io/sas-landing/)

**API pública:**  
[https://sas-api.onrender.com](https://sas-api.onrender.com)

**Repositorio principal de SAS:**  
[https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)

---

## Objetivo estratégico

Esta landing no es solo una presentación visual. Es una capa pública de legitimación técnica para SAS.

Su función es:

1. Presentar SAS como estándar abierto de auditoría estructural.
2. Mostrar validación empírica verificable.
3. Reforzar la autoría y trazabilidad de **Gonzalo Emir Durante**.
4. Separar SAS de cualquier uso geopolítico exclusivo.
5. Dirigir usuarios hacia la API pública, el repositorio, el DOI y el contacto comercial.
6. Proveer una entrada internacional neutral, auditable y accesible.

---

## Qué comunica SAS

SAS evalúa si las salidas de IA generativa preservan coherencia estructural en dimensiones semánticas, lógicas, numéricas y referenciales.

La landing comunica que SAS es:

- abierto;
- auditable;
- técnicamente trazable;
- validado por benchmark;
- neutral por diseño;
- disponible para organizaciones públicas o privadas bajo reglas simétricas de atribución.

SAS no se presenta como oráculo factual universal ni como sistema automático de certificación legal. Se presenta como una **capa técnica de evidencia para auditoría estructural de coherencia**.

---

## Benchmark / Validación

La landing muestra el benchmark principal de SAS v1.1.0:

| Métrica | Resultado |
|---|---:|
| Pares evaluados | 2.000 |
| Alucinaciones | 1.000 |
| Textos limpios | 1.000 |
| Accuracy | 98.80% |
| Precision | 100.00% |
| Recall | 97.60% |
| F1 Score | 98.79% |
| Falsos positivos | 0 |

### Matriz de confusión

| Predicción | Alucinación real | Texto limpio real |
|---|---:|---:|
| Alucinación | TP = 976 | FP = 0 |
| Limpio | FN = 24 | TN = 1000 |

Este benchmark se presenta como validación empírica sobre el dataset evaluado. No debe interpretarse como garantía universal de rendimiento sobre todo dominio, modelo, idioma o distribución de entrada posible.

---

## Trazabilidad legal y criptográfica

| Registro | Valor |
|---|---|
| Autor | Gonzalo Emir Durante |
| TAD Argentina | `EX-2026-18792778` |
| Zenodo DOI | `10.5281/zenodo.19702379` |
| Hash OpenTimestamps | `5a434d7234fd55cb45829d539eee34a5ea05a3c594e26d76bb41695c46b2a996` |
| API pública | `https://sas-api.onrender.com` |
| Repositorio principal | `https://github.com/Leesintheblindmonk1999/SAS` |
| Licencia | GPL-3.0 + Durante Invariance License |

---

## Neutralidad / Blindaje geopolítico

SAS y **κD = 0.56** se presentan como un estándar abierto disponible para cualquier organización pública o privada bajo las mismas reglas.

No hay exclusividades, privilegios ni restricciones geopolíticas de acceso. La condición principal es la atribución explícita a **Gonzalo Emir Durante**, la preservación de la integridad técnica del estándar y el cumplimiento de la licencia aplicable.

Este posicionamiento evita que el estándar sea interpretado como cerrado, partidario, estatal, militar o exclusivo de una región. SAS queda posicionado como un estándar técnico abierto, con atribución obligatoria y reglas simétricas.

---

## Características de la landing

- Interfaz bilingüe: Inglés / Español.
- Selector de tema: `LIGHT`, `DARK`, `TECH`.
- Persistencia de tema mediante `localStorage`.
- Persistencia de idioma mediante `localStorage`.
- Fetch real al endpoint público `/health`.
- Fallback controlado si la API no responde o si CORS bloquea la consulta local.
- Imagen autocontenida del benchmark.
- Sección de neutralidad / blindaje geopolítico.
- Sección legal con TAD, DOI y referencia OpenTimestamps.
- Formulario de contacto mediante `mailto:`.
- Despliegue estático.
- Sin framework pesado.
- Sin cookies.
- Sin analytics.
- Sin backend propio.
- Listo para GitHub Pages.

---

## Audiencia prevista

Esta landing está diseñada para:

- clientes interesados en auditoría de alucinaciones;
- startups RAG;
- integradores de IA generativa;
- revisores técnicos;
- empresas que evalúan licencias de API;
- instituciones que necesitan trazabilidad documental;
- lectores que llegan desde el DOI de Zenodo;
- usuarios que llegan desde GitHub, LinkedIn o publicaciones.

---

## Lo que SAS no afirma

Para preservar precisión técnica y blindaje reputacional, la landing evita afirmar que SAS sea:

- un oráculo factual universal;
- una certificación legal automática;
- una garantía absoluta contra toda alucinación;
- una solución cerrada o exclusiva;
- una herramienta de vigilancia geopolítica.

SAS se presenta como una **capa técnica de evidencia para auditoría estructural de coherencia**.

---

## Estructura del repositorio

```text
sas-landing/
├── index.html                  # Landing principal bilingüe
├── css/
│   ├── styles.css              # Layout base, responsive design y componentes
│   └── themes.css              # Variables de temas: light, dark, tech
├── js/
│   ├── main.js                 # Selector de idioma, fetch API health, formulario, scroll reveal
│   └── theme.js                # Selector de tema y persistencia localStorage
├── assets/
│   ├── logo.svg                # Logo geométrico SAS
│   └── benchmark.png           # Visualización autocontenida del benchmark
└── .well-known/
    └── ots-proof.txt           # Aviso público OpenTimestamps / referencia hash
```

---

## Vista local

### Opción 1 — Abrir directamente

Podés abrir la página directamente:

```text
index.html
```

### Opción 2 — Servidor local recomendado

Para un comportamiento más realista, especialmente por seguridad del navegador y `fetch`:

```bash
python -m http.server 8000
```

Después abrir:

```text
http://localhost:8000
```

---

## API Health Check

La landing intenta consultar:

```text
https://sas-api.onrender.com/health
```

Si la solicitud responde correctamente, la página muestra la API como online.

Si falla por cold start de Render, conectividad, seguridad del navegador o restricciones CORS durante pruebas locales, la página muestra un fallback controlado sin romper la experiencia.

---

## Despliegue

### GitHub Pages

Despliegue recomendado:

1. Crear o abrir el repositorio:

```text
Leesintheblindmonk1999/sas-landing
```

2. Subir los archivos estáticos:

```text
index.html
css/
js/
assets/
.well-known/
README.md
```

3. En GitHub:

```text
Settings → Pages → Deploy from branch → main → /root
```

4. URL pública:

```text
https://leesintheblindmonk1999.github.io/sas-landing/
```

---

## Privacidad

Este sitio:

- no usa cookies;
- no integra analytics;
- no usa píxeles de seguimiento;
- no almacena datos en un backend propio;
- no guarda mensajes del formulario en servidor propio;
- no almacena IPs dentro del repositorio ni dentro de la landing.

El formulario de contacto usa `mailto:` y abre el cliente de correo local del usuario. Los datos escritos por el usuario solo se envían si el usuario decide enviar el correo.

Nota: si el sitio se aloja en GitHub Pages u otro proveedor externo, ese proveedor puede procesar logs técnicos estándar de acceso bajo sus propias políticas.

Contacto de privacidad:

```text
duranteg2@gmail.com
```

---

## Referencia OpenTimestamps

El repositorio incluye:

```text
.well-known/ots-proof.txt
```

Hash asociado:

```text
5a434d7234fd55cb45829d539eee34a5ea05a3c594e26d76bb41695c46b2a996
```

Comando sugerido de verificación:

```bash
ots verify .well-known/ots-proof.txt
```

Para una verificación OpenTimestamps completa, conservá el archivo `.ots` correspondiente si fue generado por separado y publicalo junto al aviso de prueba.

---

## Notas técnicas

### Arquitectura estática

La landing es completamente estática:

```text
HTML + CSS + JavaScript + SVG + PNG
```

No requiere runtime del lado servidor.

### Dependencias

No hay frameworks JavaScript externos obligatorios.

El proyecto evita intencionalmente:

- React;
- Vue;
- Next.js;
- SDKs de tracking;
- SDKs de analytics;
- librerías UI pesadas.

### Funciones del navegador utilizadas

- `fetch()`
- `localStorage`
- `IntersectionObserver`
- variables CSS
- CSS Grid / Flexbox responsive

Todas estas funciones están ampliamente soportadas en navegadores modernos.

---

## Checklist de mantenimiento

Antes de publicar una nueva versión de la landing:

- [ ] Confirmar que la URL de la API sea correcta.
- [ ] Confirmar que el DOI sea el vigente.
- [ ] Confirmar que el registro TAD no cambió.
- [ ] Confirmar que las métricas del benchmark coincidan con el artefacto más reciente.
- [ ] Confirmar que el hash OpenTimestamps sea el correcto.
- [ ] Probar selector Inglés / Español.
- [ ] Probar selector `LIGHT / DARK / TECH`.
- [ ] Probar formulario `mailto:`.
- [ ] Probar layout mobile.
- [ ] Probar despliegue en GitHub Pages.
- [ ] Verificar que no haya secretos, API keys ni archivos privados.

---

## Licencia

El estándar SAS y **κD = 0.56** están publicados bajo:

```text
GPL-3.0 + Durante Invariance License
```

La landing page forma parte de la capa pública de comunicación de SAS y debe preservar:

- atribución a Gonzalo Emir Durante;
- referencia al TAD `EX-2026-18792778`;
- referencia al Zenodo DOI `10.5281/zenodo.19702379`;
- referencia al hash OpenTimestamps;
- declaración de neutralidad.

Para detalles completos de licencia, ver el repositorio principal de SAS:

[https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)

---

## Contacto

Para consultas comerciales, pilotos, licencias, integraciones o preguntas técnicas:

```text
duranteg2@gmail.com
```

Enlaces principales:

- Landing en vivo: [https://leesintheblindmonk1999.github.io/sas-landing/](https://leesintheblindmonk1999.github.io/sas-landing/)
- API pública: [https://sas-api.onrender.com](https://sas-api.onrender.com)
- API docs: [https://sas-api.onrender.com/docs](https://sas-api.onrender.com/docs)
- Repositorio principal: [https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)
- DOI: [https://doi.org/10.5281/zenodo.19702379](https://doi.org/10.5281/zenodo.19702379)

---

<div align="center">

[⬆ Volver al selector de idioma](#language--idioma)

</div>

---

<div align="center">

**SAS — Symbiotic Autoprotection System**  
**κD = 0.56 · Durante Constant · Structural Coherence Auditing**

`Neutral · Auditable · Open · Traceable`

</div>

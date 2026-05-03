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

## 🌐 Live Site

**Production URL:**  
[https://leesintheblindmonk1999.github.io/sas-landing/](https://leesintheblindmonk1999.github.io/sas-landing/)

**Public API:**  
[https://sas-api.onrender.com](https://sas-api.onrender.com)

**Main SAS Repository:**  
[https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)

---

## Language / Idioma

- [🇪🇸 Español](#-español)
- [🇬🇧 English](#-english)
- [Repository Structure](#-repository-structure)
- [Local Preview](#-local-preview)
- [Deployment](#-deployment)
- [Privacy](#-privacy--privacidad)
- [License](#-license--licencia)

---

# 🇪🇸 Español

## Descripción

`/sas-landing` es la landing page pública oficial del estándar **SAS — Symbiotic Autoprotection System** y de la constante central **κD = 0.56**, también denominada **Durante Constant**.

El sitio está diseñado como una pieza pública de comunicación técnica, comercial y legal para presentar:

- el estándar SAS;
- el umbral κD = 0.56;
- la API pública;
- el benchmark de validación;
- la trazabilidad legal y criptográfica;
- la política de neutralidad geopolítica;
- el contacto comercial para pilotos, licencias y auditorías.

La landing está pensada para funcionar como **puerta de entrada internacional** al proyecto: simple para usuarios no técnicos, verificable para revisores técnicos y suficientemente clara para empresas, instituciones y potenciales clientes.

---

## Objetivo estratégico

Esta landing no es solo una página visual. Es un punto público de legitimación técnica.

Su función es:

1. Presentar SAS como estándar abierto de auditoría estructural.
2. Mostrar evidencia empírica verificable.
3. Reforzar la autoría y trazabilidad de Gonzalo Emir Durante.
4. Separar claramente el estándar SAS de cualquier uso geopolítico exclusivo.
5. Dirigir usuarios hacia la API, el repositorio, el DOI y el contacto comercial.

---

## Qué comunica la landing

### 1. SAS como estándar abierto

SAS y **κD = 0.56** se presentan como un estándar abierto disponible para cualquier organización pública o privada bajo las mismas reglas.

No hay exclusividades, privilegios ni restricciones geopolíticas de acceso.  
La condición principal es la atribución explícita a **Gonzalo Emir Durante**, la preservación de la integridad técnica del estándar y el respeto a la licencia correspondiente.

### 2. Evidencia técnica

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

### 3. Matriz de confusión

| Predicción | Alucinación real | Texto limpio real |
|---|---:|---:|
| Alucinación | TP = 976 | FP = 0 |
| Limpio | FN = 24 | TN = 1000 |

### 4. Trazabilidad legal y criptográfica

| Registro | Valor |
|---|---|
| Autor | Gonzalo Emir Durante |
| TAD Argentina | `EX-2026-18792778` |
| Zenodo DOI | `10.5281/zenodo.19702379` |
| OpenTimestamps Hash | `5a434d7234fd55cb45829d539eee34a5ea05a3c594e26d76bb41695c46b2a996` |
| API pública | `https://sas-api.onrender.com` |
| Repositorio principal | `https://github.com/Leesintheblindmonk1999/SAS` |
| Licencia | GPL-3.0 + Durante Invariance License |

---

## Características de la landing

- Diseño **bilingüe**: Español / English.
- Selector de tema: `LIGHT`, `DARK`, `TECH`.
- Persistencia de tema mediante `localStorage`.
- Persistencia de idioma mediante `localStorage`.
- Fetch real a `/health` de la API pública.
- Fallback visual si la API no responde o si CORS bloquea la consulta local.
- Sección de benchmark con imagen autocontenida.
- Sección de neutralidad / blindaje geopolítico.
- Sección legal con TAD, DOI y OpenTimestamps.
- Formulario de contacto vía `mailto:`.
- Sin framework pesado.
- Sin cookies.
- Sin analytics.
- Sin backend propio.
- Desplegable directamente en GitHub Pages.

---

## Neutralidad / Blindaje geopolítico

La landing incluye una declaración explícita de neutralidad:

> SAS y κD = 0.56 son un estándar abierto disponible para cualquier organización pública o privada bajo las mismas reglas, sin exclusividades ni privilegios.

Esta frase cumple una función estratégica importante: evita que el estándar sea presentado como herramienta cerrada, partidaria, estatal, militar o exclusiva de una región. SAS se posiciona como un estándar técnico abierto, con atribución obligatoria y reglas simétricas.

---

## Uso previsto

Esta landing está pensada para:

- clientes interesados en auditoría de alucinaciones;
- startups RAG;
- integradores de IA generativa;
- revisores técnicos;
- empresas que evalúan una licencia API;
- instituciones que necesitan trazabilidad documental;
- lectores del DOI en Zenodo;
- usuarios que llegan desde GitHub, LinkedIn o publicaciones.

---

## Lo que SAS no afirma

Para mantener precisión técnica y blindaje reputacional, la landing evita afirmar que SAS sea:

- un oráculo factual universal;
- una certificación legal automática;
- una garantía absoluta contra toda alucinación;
- una solución cerrada o exclusiva;
- una herramienta de vigilancia geopolítica.

SAS se presenta correctamente como una **capa técnica de evidencia para auditoría estructural de coherencia**.

---

# 🇬🇧 English

## Description

`/sas-landing` is the official public landing page for the **SAS — Symbiotic Autoprotection System** standard and its core constant **κD = 0.56**, also referred to as the **Durante Constant**.

The site is designed as a public technical, commercial, and legal communication layer for presenting:

- the SAS standard;
- the κD = 0.56 threshold;
- the public API;
- benchmark validation;
- legal and cryptographic traceability;
- geopolitical neutrality;
- commercial contact for pilots, licensing, and audits.

The landing page is intended to operate as the **international entry point** for the project: simple enough for non-technical users, verifiable for technical reviewers, and clear enough for companies, institutions, and potential clients.

---

## Strategic Purpose

This landing page is not only a visual page. It is a public technical legitimacy layer.

Its purpose is to:

1. Present SAS as an open structural audit standard.
2. Display verifiable empirical evidence.
3. Reinforce authorship and traceability for Gonzalo Emir Durante.
4. Clearly separate the SAS standard from any exclusive geopolitical use.
5. Route users toward the API, the repository, the DOI, and commercial contact.

---

## What the Landing Communicates

### 1. SAS as an open standard

SAS and **κD = 0.56** are presented as an open standard available to any public or private organization under the same rules.

There are no exclusivities, privileges, or geopolitical access restrictions.  
The main condition is explicit attribution to **Gonzalo Emir Durante**, preservation of the standard’s technical integrity, and compliance with the applicable license.

### 2. Technical evidence

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

### 3. Confusion matrix

| Prediction | Actual hallucination | Actual clean |
|---|---:|---:|
| Hallucination | TP = 976 | FP = 0 |
| Clean | FN = 24 | TN = 1000 |

### 4. Legal and cryptographic traceability

| Record | Value |
|---|---|
| Author | Gonzalo Emir Durante |
| TAD Argentina | `EX-2026-18792778` |
| Zenodo DOI | `10.5281/zenodo.19702379` |
| OpenTimestamps Hash | `5a434d7234fd55cb45829d539eee34a5ea05a3c594e26d76bb41695c46b2a996` |
| Public API | `https://sas-api.onrender.com` |
| Main repository | `https://github.com/Leesintheblindmonk1999/SAS` |
| License | GPL-3.0 + Durante Invariance License |

---

## Landing Features

- **Bilingual interface**: Spanish / English.
- Theme selector: `LIGHT`, `DARK`, `TECH`.
- Theme persistence through `localStorage`.
- Language persistence through `localStorage`.
- Real fetch to the public API `/health` endpoint.
- Visual fallback if the API is unavailable or CORS blocks local access.
- Self-contained benchmark visual.
- Neutrality / geopolitical shielding section.
- Legal section with TAD, DOI, and OpenTimestamps reference.
- Contact form through `mailto:`.
- No heavy framework.
- No cookies.
- No analytics.
- No custom backend.
- Deployable directly through GitHub Pages.

---

## Neutrality / Geopolitical Shielding

The landing includes an explicit neutrality statement:

> SAS and κD = 0.56 are an open standard available to any public or private organization under the same rules, without exclusivity or privileges.

This statement has strategic value: it prevents the standard from being framed as closed, partisan, state-exclusive, military-exclusive, or region-specific. SAS is positioned as an open technical standard with mandatory attribution and symmetric rules.

---

## Intended Audience

This landing is designed for:

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

SAS is presented correctly as a **technical evidence layer for structural coherence auditing**.

---

# 📁 Repository Structure

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

# 🧪 Local Preview

## Option 1 — Open directly

You can open the page directly:

```text
index.html
```

This works because the landing is static and self-contained.

## Option 2 — Recommended local server

For the most accurate behavior, especially for fetch and browser security behavior:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

# 🔌 API Health Check

The landing attempts to fetch:

```text
https://sas-api.onrender.com/health
```

If the request succeeds, the page shows the API as online.

If the request fails due to Render cold start, connectivity, or local browser CORS restrictions, the page shows a controlled fallback state instead of breaking.

---

# 🚀 Deployment

## GitHub Pages

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

# 🛡️ Privacy / Privacidad

## Español

Este sitio:

- no usa cookies;
- no integra analytics;
- no usa píxeles de seguimiento;
- no almacena datos en un backend propio;
- no guarda mensajes del formulario en servidor propio;
- no almacena IPs dentro del repositorio ni dentro de la landing.

El formulario de contacto usa `mailto:` y abre el cliente de correo del usuario. Los datos que el usuario escriba solo se envían si decide enviar el correo desde su cliente.

Nota: si el sitio se aloja en GitHub Pages u otro proveedor externo, ese proveedor puede procesar logs técnicos estándar de acceso bajo sus propias políticas.

Contacto de privacidad:

```text
duranteg2@gmail.com
```

## English

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

# 🔐 OpenTimestamps Reference

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

# 🧾 Technical Notes

## Static architecture

The landing is fully static:

```text
HTML + CSS + JavaScript + SVG + PNG
```

No server-side runtime is required.

## Dependencies

There are no required external JavaScript frameworks.

The project intentionally avoids:

- React;
- Vue;
- Next.js;
- tracking SDKs;
- analytics SDKs;
- heavy UI libraries.

## Browser features used

- `fetch()`
- `localStorage`
- `IntersectionObserver`
- CSS variables
- responsive CSS Grid / Flexbox

All features are widely supported in modern browsers.

---

# 🧭 Maintenance Checklist

Before publishing a new landing version:

- [ ] Confirm API URL is correct.
- [ ] Confirm DOI is current.
- [ ] Confirm TAD registry number is unchanged.
- [ ] Confirm benchmark metrics match the latest benchmark artifact.
- [ ] Confirm OpenTimestamps hash matches the intended record.
- [ ] Test `ES / EN` language switch.
- [ ] Test `LIGHT / DARK / TECH` theme switch.
- [ ] Test contact form mailto.
- [ ] Test mobile layout.
- [ ] Test GitHub Pages deployment.
- [ ] Verify that no secrets, API keys, or private files are included.

---

# 📊 Benchmark / Validation

The benchmark displayed on the landing refers to SAS v1.1.0:

```text
Total evaluated pairs: 2,000
Hallucination examples: 1,000
Clean examples: 1,000
Accuracy: 98.80%
Precision: 100.00%
Recall: 97.60%
F1 Score: 98.79%
False positives: 0
```

This benchmark is presented as empirical validation for the evaluated dataset. It should not be interpreted as a universal guarantee of performance across every possible domain, model, language, or input distribution.

---

# 📜 License / Licencia

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

# 📧 Contact

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

**SAS — Symbiotic Autoprotection System**  
**κD = 0.56 · Durante Constant · Structural Coherence Auditing**

`Neutral · Auditable · Open · Traceable`

</div>

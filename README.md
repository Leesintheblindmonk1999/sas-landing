# SAS Landing Page

<div align="center">

**Official public landing page for SAS — Symbiotic Autoprotection System**  
**κD = 0.56 · Durante Constant · Structural Coherence Auditing for Generative AI**

[![Live Site](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-00ffd0?style=for-the-badge)](https://leesintheblindmonk1999.github.io/sas-landing/)
[![Public API](https://img.shields.io/badge/Public%20API-sas--api.onrender.com-brightgreen?style=for-the-badge)](https://sas-api.onrender.com)
[![Demo](https://img.shields.io/badge/Public%20Demo-no%20API%20key-00ffd0?style=for-the-badge)](https://leesintheblindmonk1999.github.io/sas-landing/#demo)
[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.19702379-blue?style=for-the-badge)](https://doi.org/10.5281/zenodo.19702379)
[![License](https://img.shields.io/badge/License-GPL--3.0%20%2B%20Durante%20Invariance-purple?style=for-the-badge)](https://github.com/Leesintheblindmonk1999/SAS)
[![Benchmark](https://img.shields.io/badge/Benchmark-98.80%25%20Accuracy-success?style=for-the-badge)](#benchmark--validation)
[![Payments](https://img.shields.io/badge/Billing-Polar%20%2B%20Mercado%20Pago-orange?style=for-the-badge)](#hosted-api-access--billing)

</div>

---

<div align="center">

## Language / Idioma

[English](#english) · [Español](#español)

</div>

---

# English

## Overview

`/sas-landing` is the official public landing page for **SAS — Symbiotic Autoprotection System** and its core threshold **κD = 0.56**, also referred to as the **Durante Constant**.

The site presents SAS as an open technical standard candidate for structural coherence auditing in generative AI outputs. It connects the live public API, no-key demo, benchmark evidence, legal traceability, OpenTimestamps anchoring, privacy-preserving public activity, hosted API access, and commercial contact layer in a single static GitHub Pages site.

**Live site:**  
[https://leesintheblindmonk1999.github.io/sas-landing/](https://leesintheblindmonk1999.github.io/sas-landing/)

**Public API:**  
[https://sas-api.onrender.com](https://sas-api.onrender.com)

**Main SAS repository:**  
[https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)

**Official Python client:**  
[https://github.com/Leesintheblindmonk1999/sas-client](https://github.com/Leesintheblindmonk1999/sas-client)

---

## Repository Ecosystem

| Repository | Purpose |
|---|---|
| [`SAS`](https://github.com/Leesintheblindmonk1999/SAS) | Core FastAPI service, structural coherence engine, benchmark artifacts, API routes, hosted-service logic, and license. |
| [`sas-landing`](https://github.com/Leesintheblindmonk1999/sas-landing) | Static public website for the standard, demo, benchmark summary, live activity, traceability, and commercial routing. |
| [`sas-client`](https://github.com/Leesintheblindmonk1999/sas-client) | Official Python package and CLI for developers integrating with the hosted or self-hosted SAS API. |

---

## Strategic Purpose

This landing page is not only a visual presentation. It is the public legitimacy and access layer for SAS.

Its purpose is to:

1. Present SAS as an open structural audit standard candidate.
2. Give users a no-key demo of the live reference implementation.
3. Display empirical benchmark validation and clear claim boundaries.
4. Reinforce authorship and traceability for **Gonzalo Emir Durante**.
5. Route developers toward the API, repository, Python client, DOI, and documentation.
6. Route commercial users toward hosted API access, pilots, licensing, or private deployment.
7. Preserve neutrality by avoiding geopolitical exclusivity or closed institutional control.

---

## What SAS Communicates

SAS evaluates whether generative AI outputs preserve structural coherence across semantic, logical, numerical, temporal, and reference-related dimensions.

The landing communicates that SAS is:

- open;
- auditable;
- technically traceable;
- benchmarked;
- privacy-aware;
- neutral by design;
- usable through a hosted API or self-hosted deployment;
- available for public or private organizations under symmetric attribution rules.

SAS is not presented as a universal factual oracle, legal certification engine, medical certification tool, or absolute guarantee against every hallucination. It is a **technical evidence layer for structural coherence auditing**.

---

## Benchmark / Validation

The landing displays the main SAS benchmark:

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
| κD | 0.56 |

### Confusion Matrix

| Prediction | Actual hallucination | Actual clean |
|---|---:|---:|
| Hallucination | TP = 976 | FP = 0 |
| Clean | FN = 24 | TN = 1000 |

This benchmark is presented as empirical validation for the evaluated dataset. It should not be interpreted as a universal guarantee across every domain, model, language, or input distribution.

---

## Public API

| Resource | URL |
|---|---|
| API root | [https://sas-api.onrender.com](https://sas-api.onrender.com) |
| API docs | [https://sas-api.onrender.com/docs](https://sas-api.onrender.com/docs) |
| Health | [https://sas-api.onrender.com/health](https://sas-api.onrender.com/health) |
| Readiness | [https://sas-api.onrender.com/readyz](https://sas-api.onrender.com/readyz) |
| Public stats | [https://sas-api.onrender.com/public/stats](https://sas-api.onrender.com/public/stats) |
| Public activity | [https://sas-api.onrender.com/public/activity?limit=100](https://sas-api.onrender.com/public/activity?limit=100) |
| Public demo audit | `POST https://sas-api.onrender.com/public/demo/audit` |
| Free key request | `POST https://sas-api.onrender.com/public/request-key` |

---

## Live Demo

The landing page includes a public interactive SAS demo powered by the production endpoint:

```text
POST https://sas-api.onrender.com/public/demo/audit
```

The demo compares a source text against a response using the same source-vs-response structural audit logic exposed by the SAS reference API. It shows:

- ISI;
- κD;
- verdict;
- triggered modules;
- latency;
- public audit summary.

### Demo Privacy Controls

- No API key is exposed in the frontend.
- Maximum 2,000 characters per field.
- Rate limiting is applied through anonymized IP hashing.
- Full input text is not stored by the demo endpoint.
- The public response exposes only audit summary fields.
- No raw IPs, raw API keys, API key hashes, or request IDs are published.

Example:

```bash
curl -X POST https://sas-api.onrender.com/public/demo/audit \
  -H "Content-Type: application/json" \
  -d '{
    "source": "The Eiffel Tower is located in Paris, France.",
    "response": "The Eiffel Tower is located in Berlin, Germany."
  }'
```

---

## Hosted API Access / Billing

The landing should route users toward the current hosted API access model:

| Access path | Description |
|---|---|
| **Free key** | Users can request a free API key through `POST /public/request-key`. The key is generated and delivered automatically by email. |
| **Pro access** | Paid access can be handled through Polar for international cards and Mercado Pago for LATAM users. |
| **Automatic key provisioning** | After confirmed payment, the hosted service can generate and send the corresponding API key automatically. |
| **Enterprise / Pilot** | Larger deployments, pilots, private integrations, and on-premise licensing are routed to direct commercial contact. |

Free key example:

```bash
curl -X POST https://sas-api.onrender.com/public/request-key \
  -H "Content-Type: application/json" \
  -d '{"email": "your@email.com", "name": "Your Name"}'
```

Plan check example:

```bash
curl https://sas-api.onrender.com/v1/whoami \
  -H "X-API-Key: sas_xxxxxxxxxxxxxxxxxxxxx"
```

> The landing should describe hosted access as a service layer. It must not imply that payment changes or relaxes the open-source license of the SAS repository.

---

## Developer Routing

The landing should direct developers to the official Python client:

```bash
pip install sas-client
```

Basic CLI examples:

```bash
sas health
sas readyz
sas public-stats
sas public-activity --limit 10
sas --api-key YOUR_API_KEY diff "Python is a programming language." "A python is a snake."
```

Environment variable:

```bash
export SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
```

Self-hosted API support:

```bash
sas --base-url http://localhost:8000 health
```

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
| Landing repository | `https://github.com/Leesintheblindmonk1999/sas-landing` |
| Python client | `https://github.com/Leesintheblindmonk1999/sas-client` |
| License | GPL-3.0 + Durante Invariance License |

---

## Neutrality / Geopolitical Shielding

SAS and **κD = 0.56** are presented as an open technical standard candidate available to public and private organizations under the same attribution and licensing rules.

There are no exclusivities, privileges, or geopolitical access restrictions claimed by the landing. The main conditions are explicit attribution to **Gonzalo Emir Durante**, preservation of the technical integrity of the standard, and compliance with the applicable license.

This positioning prevents the standard from being framed as closed, partisan, state-exclusive, military-exclusive, or region-specific.

---

## Landing Features

- Bilingual interface: English / Spanish.
- Theme selector: `LIGHT`, `DARK`, `TECH`.
- Theme persistence through `localStorage`.
- Language persistence through `localStorage`.
- Real fetch to the public API `/health` endpoint.
- Public API stats and anonymized activity sections.
- Interactive no-key demo using `/public/demo/audit`.
- Controlled fallback if the API is unavailable or blocked by CORS during local testing.
- Self-contained benchmark visual.
- Neutrality / geopolitical shielding section.
- Legal section with TAD, DOI, and OpenTimestamps reference.
- Commercial contact through `mailto:` or configured contact flow.
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
- developers integrating the Python client;
- enterprise users evaluating pilots or private deployment;
- readers coming from Zenodo DOI, GitHub, LinkedIn, or publications.

---

## What SAS Does Not Claim

To preserve technical precision and reputational safety, the landing avoids claiming that SAS is:

- a universal factual oracle;
- automatic legal certification;
- medical, financial, or legal professional judgment;
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
│   ├── main.js                 # Language switcher, API fetches, demo, form behavior, scroll reveal
│   └── theme.js                # Theme selector and localStorage persistence
├── assets/
│   ├── logo.svg                # SAS geometric logo
│   └── benchmark.png           # Self-contained benchmark visualization
├── manifest.json               # PWA/site metadata when enabled
├── .nojekyll                   # GitHub Pages static deployment helper
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

For the most accurate behavior, especially for `fetch()` and browser security behavior:

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

If the request fails due to Render cold start, connectivity, browser security, or CORS restrictions during local testing, the page should show a controlled fallback instead of breaking.

---

## Deployment

### GitHub Pages

Recommended deployment:

1. Open the repository:

```text
Leesintheblindmonk1999/sas-landing
```

2. Upload or update the static files:

```text
index.html
css/
js/
assets/
.well-known/
manifest.json
.nojekyll
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
- does not store data in a custom landing backend;
- does not store contact form messages on a landing server;
- does not expose raw IPs, API keys, API key hashes, or request IDs;
- does not publish full demo input text.

The contact flow may use `mailto:` or an explicitly configured external contact/payment flow. The data typed by the user is only sent when the user submits through that chosen client or provider.

Public activity is privacy-preserving and should show only aggregated or anonymized operational metadata.

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
- [ ] Confirm `/public/demo/audit` works.
- [ ] Confirm `/public/stats` and `/public/activity` work.
- [ ] Confirm `/public/request-key` copy matches the hosted API behavior.
- [ ] Confirm Polar and Mercado Pago links or references match the current production flow.
- [ ] Confirm DOI is current.
- [ ] Confirm TAD registry number is unchanged.
- [ ] Confirm benchmark metrics match the latest benchmark artifact.
- [ ] Confirm OpenTimestamps hash matches the intended record.
- [ ] Test English / Spanish language switch.
- [ ] Test `LIGHT / DARK / TECH` theme switch.
- [ ] Test contact form or commercial route.
- [ ] Test mobile layout.
- [ ] Test GitHub Pages deployment.
- [ ] Verify that no secrets, API keys, private files, webhook secrets, or payment credentials are included.

---

## License

The SAS standard and **κD = 0.56** are published under:

```text
GPL-3.0 + Durante Invariance License
```

The landing page is part of the public SAS communication layer and should preserve:

- attribution to Gonzalo Emir Durante;
- reference to TAD `EX-2026-18792778`;
- reference to Zenodo DOI `10.5281/zenodo.19702379`;
- the OpenTimestamps hash reference;
- the neutrality statement;
- the distinction between open-source SAS code and hosted API service access.

For complete licensing details, see the main SAS repository:

[https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)

---

## Contact

For commercial inquiries, pilots, licensing, integrations, private deployment, or technical questions:

```text
duranteg2@gmail.com
```

Main links:

- Live landing: [https://leesintheblindmonk1999.github.io/sas-landing/](https://leesintheblindmonk1999.github.io/sas-landing/)
- Public API: [https://sas-api.onrender.com](https://sas-api.onrender.com)
- API docs: [https://sas-api.onrender.com/docs](https://sas-api.onrender.com/docs)
- Main repository: [https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)
- Python client: [https://github.com/Leesintheblindmonk1999/sas-client](https://github.com/Leesintheblindmonk1999/sas-client)
- DOI: [https://doi.org/10.5281/zenodo.19702379](https://doi.org/10.5281/zenodo.19702379)

---

<div align="center">

[Back to language selector](#language--idioma)

</div>

---

# Español

## Descripción general

`/sas-landing` es la landing page pública oficial de **SAS — Symbiotic Autoprotection System** y de su umbral central **κD = 0.56**, también denominado **Durante Constant**.

El sitio presenta SAS como candidato a estándar técnico abierto para auditoría de coherencia estructural en salidas de IA generativa. Conecta en una única web estática de GitHub Pages la API pública, la demo sin API key, la evidencia de benchmark, la trazabilidad legal, el anclaje OpenTimestamps, la actividad pública anonimizada, el acceso hosted a la API y el contacto comercial.

**Sitio en vivo:**  
[https://leesintheblindmonk1999.github.io/sas-landing/](https://leesintheblindmonk1999.github.io/sas-landing/)

**API pública:**  
[https://sas-api.onrender.com](https://sas-api.onrender.com)

**Repositorio principal de SAS:**  
[https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)

**Cliente Python oficial:**  
[https://github.com/Leesintheblindmonk1999/sas-client](https://github.com/Leesintheblindmonk1999/sas-client)

---

## Ecosistema de repositorios

| Repositorio | Función |
|---|---|
| [`SAS`](https://github.com/Leesintheblindmonk1999/SAS) | Servicio FastAPI core, motor de coherencia estructural, artefactos de benchmark, rutas API, lógica del servicio alojado y licencia. |
| [`sas-landing`](https://github.com/Leesintheblindmonk1999/sas-landing) | Sitio público estático para el estándar, demo, resumen de benchmark, actividad pública, trazabilidad y contacto comercial. |
| [`sas-client`](https://github.com/Leesintheblindmonk1999/sas-client) | Paquete Python y CLI oficial para desarrolladores que integran la API SAS alojada o autoalojada. |

---

## Objetivo estratégico

Esta landing no es solo una presentación visual. Es la capa pública de legitimidad y acceso de SAS.

Su función es:

1. Presentar SAS como candidato a estándar abierto de auditoría estructural.
2. Dar a los usuarios una demo sin API key de la implementación pública de referencia.
3. Mostrar validación empírica y límites claros de las afirmaciones.
4. Reforzar la autoría y trazabilidad de **Gonzalo Emir Durante**.
5. Dirigir desarrolladores hacia la API, repositorio, cliente Python, DOI y documentación.
6. Dirigir usuarios comerciales hacia acceso hosted, pilotos, licencias o despliegue privado.
7. Preservar neutralidad evitando exclusividad geopolítica o control institucional cerrado.

---

## Qué comunica SAS

SAS evalúa si las salidas de IA generativa preservan coherencia estructural en dimensiones semánticas, lógicas, numéricas, temporales y referenciales.

La landing comunica que SAS es:

- abierto;
- auditable;
- técnicamente trazable;
- validado por benchmark;
- consciente de la privacidad;
- neutral por diseño;
- utilizable mediante API alojada o despliegue propio;
- disponible para organizaciones públicas o privadas bajo reglas simétricas de atribución.

SAS no se presenta como oráculo factual universal, motor de certificación legal, certificación médica ni garantía absoluta contra toda alucinación. Se presenta como una **capa técnica de evidencia para auditoría estructural de coherencia**.

---

## Benchmark / Validación

La landing muestra el benchmark principal de SAS:

| Métrica | Resultado |
|---|---:|
| Pares evaluados | 2.000 |
| Ejemplos con alucinación | 1.000 |
| Ejemplos limpios | 1.000 |
| Accuracy | 98.80% |
| Precision | 100.00% |
| Recall | 97.60% |
| F1 Score | 98.79% |
| Falsos positivos | 0 |
| κD | 0.56 |

### Matriz de confusión

| Predicción | Alucinación real | Texto limpio real |
|---|---:|---:|
| Alucinación | TP = 976 | FP = 0 |
| Limpio | FN = 24 | TN = 1000 |

Este benchmark se presenta como validación empírica sobre el dataset evaluado. No debe interpretarse como garantía universal de rendimiento sobre todo dominio, modelo, idioma o distribución de entrada posible.

---

## API pública

| Recurso | URL |
|---|---|
| API root | [https://sas-api.onrender.com](https://sas-api.onrender.com) |
| API docs | [https://sas-api.onrender.com/docs](https://sas-api.onrender.com/docs) |
| Health | [https://sas-api.onrender.com/health](https://sas-api.onrender.com/health) |
| Readiness | [https://sas-api.onrender.com/readyz](https://sas-api.onrender.com/readyz) |
| Public stats | [https://sas-api.onrender.com/public/stats](https://sas-api.onrender.com/public/stats) |
| Public activity | [https://sas-api.onrender.com/public/activity?limit=100](https://sas-api.onrender.com/public/activity?limit=100) |
| Demo pública de auditoría | `POST https://sas-api.onrender.com/public/demo/audit` |
| Solicitud de Free key | `POST https://sas-api.onrender.com/public/request-key` |

---

## Demo en vivo

La landing incluye una demo pública interactiva conectada al endpoint de producción:

```text
POST https://sas-api.onrender.com/public/demo/audit
```

La demo compara un texto fuente contra una respuesta usando la lógica de auditoría estructural source-vs-response expuesta por la API de referencia SAS. Muestra:

- ISI;
- κD;
- veredicto;
- módulos activados;
- latencia;
- resumen público de auditoría.

### Controles de privacidad de la demo

- No se expone ninguna API key en el frontend.
- Máximo 2.000 caracteres por campo.
- Se aplica rate limit mediante hash anonimizado de IP.
- El texto completo no se almacena en el endpoint de demo.
- La respuesta pública expone solo campos resumidos de auditoría.
- No se publican IPs reales, API keys, hashes de API keys ni request IDs.

Ejemplo:

```bash
curl -X POST https://sas-api.onrender.com/public/demo/audit \
  -H "Content-Type: application/json" \
  -d '{
    "source": "The Eiffel Tower is located in Paris, France.",
    "response": "The Eiffel Tower is located in Berlin, Germany."
  }'
```

---

## Acceso hosted a la API / Billing

La landing debe dirigir usuarios hacia el modelo actual de acceso a la API alojada:

| Vía de acceso | Descripción |
|---|---|
| **Free key** | Los usuarios pueden pedir una API key gratuita mediante `POST /public/request-key`. La key se genera y envía automáticamente por email. |
| **Acceso Pro** | El acceso pago puede manejarse mediante Polar para tarjetas internacionales y Mercado Pago para usuarios LATAM. |
| **Provisionamiento automático de keys** | Tras confirmación de pago, el servicio alojado puede generar y enviar automáticamente la API key correspondiente. |
| **Enterprise / Piloto** | Despliegues grandes, pilotos, integraciones privadas y licencias on-premise se derivan a contacto comercial directo. |

Ejemplo de Free key:

```bash
curl -X POST https://sas-api.onrender.com/public/request-key \
  -H "Content-Type: application/json" \
  -d '{"email": "your@email.com", "name": "Your Name"}'
```

Ejemplo para verificar plan:

```bash
curl https://sas-api.onrender.com/v1/whoami \
  -H "X-API-Key: sas_xxxxxxxxxxxxxxxxxxxxx"
```

> La landing debe describir el acceso hosted como una capa de servicio. No debe sugerir que pagar cambia o relaja la licencia open source del repositorio SAS.

---

## Ruta para desarrolladores

La landing debe dirigir desarrolladores hacia el cliente Python oficial:

```bash
pip install sas-client
```

Ejemplos básicos de CLI:

```bash
sas health
sas readyz
sas public-stats
sas public-activity --limit 10
sas --api-key YOUR_API_KEY diff "Python is a programming language." "A python is a snake."
```

Variable de entorno:

```bash
export SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
```

Soporte para API autoalojada:

```bash
sas --base-url http://localhost:8000 health
```

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
| Repositorio landing | `https://github.com/Leesintheblindmonk1999/sas-landing` |
| Cliente Python | `https://github.com/Leesintheblindmonk1999/sas-client` |
| Licencia | GPL-3.0 + Durante Invariance License |

---

## Neutralidad / Blindaje geopolítico

SAS y **κD = 0.56** se presentan como candidato a estándar técnico abierto disponible para organizaciones públicas y privadas bajo las mismas reglas de atribución y licencia.

La landing no afirma exclusividades, privilegios ni restricciones geopolíticas de acceso. Las condiciones principales son la atribución explícita a **Gonzalo Emir Durante**, la preservación de la integridad técnica del estándar y el cumplimiento de la licencia aplicable.

Este posicionamiento evita que el estándar sea interpretado como cerrado, partidario, estatal, militar o exclusivo de una región.

---

## Características de la landing

- Interfaz bilingüe: Inglés / Español.
- Selector de tema: `LIGHT`, `DARK`, `TECH`.
- Persistencia de tema mediante `localStorage`.
- Persistencia de idioma mediante `localStorage`.
- Fetch real al endpoint público `/health`.
- Secciones de stats públicas y actividad anonimizada.
- Demo interactiva sin API key usando `/public/demo/audit`.
- Fallback controlado si la API no responde o si CORS bloquea la consulta local.
- Visual autocontenido del benchmark.
- Sección de neutralidad / blindaje geopolítico.
- Sección legal con TAD, DOI y referencia OpenTimestamps.
- Contacto comercial mediante `mailto:` o flujo de contacto configurado.
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
- desarrolladores que integran el cliente Python;
- usuarios enterprise que evalúan pilotos o despliegue privado;
- lectores que llegan desde Zenodo DOI, GitHub, LinkedIn o publicaciones.

---

## Lo que SAS no afirma

Para preservar precisión técnica y blindaje reputacional, la landing evita afirmar que SAS sea:

- un oráculo factual universal;
- una certificación legal automática;
- juicio profesional médico, financiero o legal;
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
│   ├── main.js                 # Selector de idioma, fetch API, demo, formulario, scroll reveal
│   └── theme.js                # Selector de tema y persistencia localStorage
├── assets/
│   ├── logo.svg                # Logo geométrico SAS
│   └── benchmark.png           # Visualización autocontenida del benchmark
├── manifest.json               # Metadata PWA/site si está habilitada
├── .nojekyll                   # Helper para despliegue estático en GitHub Pages
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

Para un comportamiento más realista, especialmente por `fetch()` y seguridad del navegador:

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

Si falla por cold start de Render, conectividad, seguridad del navegador o restricciones CORS durante pruebas locales, la página debe mostrar un fallback controlado sin romper la experiencia.

---

## Despliegue

### GitHub Pages

Despliegue recomendado:

1. Abrir el repositorio:

```text
Leesintheblindmonk1999/sas-landing
```

2. Subir o actualizar los archivos estáticos:

```text
index.html
css/
js/
assets/
.well-known/
manifest.json
.nojekyll
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
- no almacena datos en un backend propio de la landing;
- no guarda mensajes de contacto en un servidor de la landing;
- no expone IPs reales, API keys, hashes de API keys ni request IDs;
- no publica el texto completo ingresado en la demo.

El flujo de contacto puede usar `mailto:` o un flujo externo de contacto/pago explícitamente configurado. Los datos escritos por el usuario solo se envían cuando el usuario confirma el envío mediante el cliente o proveedor elegido.

La actividad pública preserva privacidad y debe mostrar únicamente metadata operacional agregada o anonimizada.

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
- [ ] Confirmar que `/public/demo/audit` funcione.
- [ ] Confirmar que `/public/stats` y `/public/activity` funcionen.
- [ ] Confirmar que el texto de `/public/request-key` coincida con el comportamiento actual de la API alojada.
- [ ] Confirmar que los links o referencias de Polar y Mercado Pago coincidan con el flujo productivo actual.
- [ ] Confirmar que el DOI sea el vigente.
- [ ] Confirmar que el registro TAD no cambió.
- [ ] Confirmar que las métricas del benchmark coincidan con el artefacto más reciente.
- [ ] Confirmar que el hash OpenTimestamps sea el correcto.
- [ ] Probar selector Inglés / Español.
- [ ] Probar selector `LIGHT / DARK / TECH`.
- [ ] Probar formulario o ruta comercial.
- [ ] Probar layout mobile.
- [ ] Probar despliegue en GitHub Pages.
- [ ] Verificar que no haya secretos, API keys, archivos privados, webhook secrets ni credenciales de pago.

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
- declaración de neutralidad;
- distinción entre código open source de SAS y acceso al servicio API alojado.

Para detalles completos de licencia, ver el repositorio principal de SAS:

[https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)

---

## Contacto

Para consultas comerciales, pilotos, licencias, integraciones, despliegue privado o preguntas técnicas:

```text
duranteg2@gmail.com
```

Enlaces principales:

- Landing en vivo: [https://leesintheblindmonk1999.github.io/sas-landing/](https://leesintheblindmonk1999.github.io/sas-landing/)
- API pública: [https://sas-api.onrender.com](https://sas-api.onrender.com)
- API docs: [https://sas-api.onrender.com/docs](https://sas-api.onrender.com/docs)
- Repositorio principal: [https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)
- Cliente Python: [https://github.com/Leesintheblindmonk1999/sas-client](https://github.com/Leesintheblindmonk1999/sas-client)
- DOI: [https://doi.org/10.5281/zenodo.19702379](https://doi.org/10.5281/zenodo.19702379)

---

<div align="center">

[Volver al selector de idioma](#language--idioma)

</div>

---

<div align="center">

**SAS — Symbiotic Autoprotection System**  
**κD = 0.56 · Durante Constant · Structural Coherence Auditing**

`Neutral · Auditable · Open · Traceable`

</div>

# SAS Landing Page

<div align="center">

**Official public landing page for SAS — Symbiotic Autoprotection System**  
**κD = 0.56 · Durante Constant · Structural Coherence Auditing for Generative AI**

[![Live Site](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-00ffd0?style=for-the-badge)](https://leesintheblindmonk1999.github.io/sas-landing/)
[![Public API](https://img.shields.io/badge/Public%20API-sas--api.onrender.com-brightgreen?style=for-the-badge)](https://sas-api.onrender.com)
[![Demo](https://img.shields.io/badge/Public%20Demo-no%20API%20key-00ffd0?style=for-the-badge)](https://leesintheblindmonk1999.github.io/sas-landing/#demo)
[![Free Key](https://img.shields.io/badge/Free%20API%20Key-email%20delivery-00ffd0?style=for-the-badge)](https://leesintheblindmonk1999.github.io/sas-landing/#access)
[![Platform Status](https://img.shields.io/badge/Platform%20Status-public%20aggregate%20stats-00ffd0?style=for-the-badge)](https://leesintheblindmonk1999.github.io/sas-landing/#platform)
[![PyPI](https://img.shields.io/badge/PyPI-sas--client-blue?style=for-the-badge)](https://pypi.org/project/sas-client/)
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

The site presents SAS as an **open technical standard candidate** for structural coherence auditing in generative AI outputs. It connects the live public API, no-key demo, benchmark evidence, legal traceability, OpenTimestamps anchoring, privacy-preserving public activity, hosted API access, CLI onboarding, billing, and commercial contact layer in a single static GitHub Pages site.

This H0 version adds a sober operational layer:

- public platform status;
- `/readyz` visibility;
- interaction-stability aggregate stats;
- privacy flags;
- improved Free Key onboarding UX;
- no premature statistical conclusions from low-volume interaction data.

**Live site:**  
[https://leesintheblindmonk1999.github.io/sas-landing/](https://leesintheblindmonk1999.github.io/sas-landing/)

**Public API:**  
[https://sas-api.onrender.com](https://sas-api.onrender.com)

**Main SAS repository:**  
[https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)

**Official Python client:**  
[https://pypi.org/project/sas-client/](https://pypi.org/project/sas-client/)

---

## Current H0 Status

The H0 landing update is intentionally conservative. It is meant to improve trust, onboarding, and public verification without turning the landing into a heavy dashboard.

### Functional H0 changes

| Area | Status |
|---|---|
| Platform Status section | Added |
| `/readyz` public readiness display | Added |
| `/public/interaction/stats?days=7` aggregate display | Added |
| `total_analyses` display | Added |
| `avg_latency_ms` display | Added |
| Privacy flag display | Added |
| Free Key request UX | Hardened |
| False green success on key request | Avoided |
| Public activity escaping | Hardened |
| Duplicate initial status fetches | Removed |
| “Open standard” wording | Changed to “open standard candidate” |
| Backend changes | None |

### Important design rule

The landing may show:

- readiness;
- public aggregate request stats;
- total interaction analyses;
- average interaction latency;
- privacy flags.

The landing should **not** present `dominant_states_distribution`, `sigma_buckets`, or `demand_peak_buckets` as conclusions until there is enough real volume.

Recommended threshold:

```text
50+ interaction analyses  -> useful dashboard distribution
100+ interaction analyses -> empirical snapshot / publication candidate
```

---

## Repository Ecosystem

| Repository | Purpose |
|---|---|
| [`SAS`](https://github.com/Leesintheblindmonk1999/SAS) | Core FastAPI service, structural coherence engine, benchmark artifacts, API routes, hosted-service logic, privacy docs, observability stores, and license. |
| [`sas-landing`](https://github.com/Leesintheblindmonk1999/sas-landing) | Static public website for the standard candidate, demo, benchmark summary, live activity, platform status, CLI onboarding, and commercial routing. |
| [`sas-client`](https://github.com/Leesintheblindmonk1999/sas-client) | Official Python package and CLI for developers integrating with the hosted or self-hosted SAS API. |

---

## Strategic Purpose

This landing page is not only a visual presentation. It is the public legitimacy, verification, and access layer for SAS.

Its purpose is to:

1. Present SAS as an open structural audit standard candidate.
2. Give users a no-key demo of the live reference implementation.
3. Display empirical benchmark validation with clear claim boundaries.
4. Show that the API is alive, observable, and privacy-aware.
5. Reinforce authorship and traceability for **Gonzalo Emir Durante**.
6. Route developers toward the API, repository, Python client, DOI, documentation, and hosted access.
7. Reduce onboarding friction through web form, CLI, curl, and PowerShell examples.
8. Route commercial users toward hosted API access, pilots, licensing, or private deployment.
9. Preserve neutrality by avoiding geopolitical exclusivity or closed institutional control.

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
- available through a no-key public demo;
- accessible through a Free API key flow;
- observable through public aggregate metrics;
- available for public or private organizations under symmetric attribution rules.

SAS is not presented as a universal factual oracle, legal certification engine, medical certification tool, or absolute guarantee against every hallucination. It is a **technical evidence layer for structural coherence auditing**.

---

## Quick Start

### Option A — Try the no-key demo

Use the landing:

```text
https://leesintheblindmonk1999.github.io/sas-landing/#demo
```

Or call the public demo endpoint:

```bash
curl -X POST https://sas-api.onrender.com/public/demo/audit \
  -H "Content-Type: application/json" \
  -d '{
    "source": "The Eiffel Tower is located in Paris, France.",
    "response": "The Eiffel Tower is located in Berlin, Germany."
  }'
```

### Option B — Request a Free API key from the terminal

```bash
pip install sas-client
sas request-key --email you@example.com --name "Your Name"
```

After receiving the key by email:

```bash
export SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
sas whoami
sas diff "Paris is in France." "Paris is in Germany."
```

### Option C — Windows PowerShell

```powershell
pip install sas-client
sas request-key --email you@example.com --name "Your Name"

$env:SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
sas whoami
sas diff "Paris is in France." "Paris is in Germany."
```

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
| Public interaction stats | [https://sas-api.onrender.com/public/interaction/stats?days=7](https://sas-api.onrender.com/public/interaction/stats?days=7) |
| Public demo help | `GET https://sas-api.onrender.com/public/demo/audit` |
| Public demo audit | `POST https://sas-api.onrender.com/public/demo/audit` |
| Free key help | `GET https://sas-api.onrender.com/public/request-key` |
| Free key request | `POST https://sas-api.onrender.com/public/request-key` |
| Authenticated identity | `GET https://sas-api.onrender.com/v1/whoami` |
| Authenticated diff | `POST https://sas-api.onrender.com/v1/diff` |
| Authenticated batch | `POST https://sas-api.onrender.com/v1/batch` |
| Interaction example | `GET https://sas-api.onrender.com/v1/interaction/stability/example` |
| Interaction stability | `POST https://sas-api.onrender.com/v1/interaction/stability` |

---

## Platform Status / H0 Snapshot

The H0 landing includes a public status section powered by:

```text
GET /readyz
GET /public/interaction/stats?days=7
```

It displays:

- readiness;
- `interaction_db` availability;
- `public_interaction_stats` router availability;
- total interaction analyses;
- average interaction latency;
- privacy state.

### Privacy guarantees shown in H0

The landing surfaces aggregate privacy flags from `/public/interaction/stats`:

```json
{
  "privacy": {
    "raw_text_stored": false,
    "raw_api_keys_stored": false,
    "public_stats_are_aggregated": true
  }
}
```

The public page must not expose:

- raw submitted text;
- API keys;
- API-key hashes;
- request IDs;
- input hashes;
- content fingerprints;
- per-user rows.

### Degradation behavior

The status section should degrade safely:

| Failure | Expected UI behavior |
|---|---|
| `/readyz` unavailable | readiness card shows unavailable |
| `/public/interaction/stats` unavailable | interaction cards show `n/a` |
| `total_analyses = 0` | display `0`, not an error |
| network timeout | show fallback and log warning |
| one endpoint fails | the other endpoint should still render |

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

---

## Hosted API Access / Billing

The landing routes users toward the current hosted API access model.

| Access path | Description |
|---|---|
| **Free key** | Users can request a free API key through the web form, CLI, curl, PowerShell, or `POST /public/request-key`. The key is generated and delivered automatically by email when delivery is confirmed by the backend. |
| **Pro access** | Paid access can be handled through Polar for international cards and Mercado Pago for LATAM users. |
| **Automatic key provisioning** | After confirmed payment, the hosted service can generate and send the corresponding API key automatically. |
| **Enterprise / Pilot** | Larger deployments, pilots, private integrations, and on-premise licensing are routed to direct commercial contact. |

### Free Key web-form UX

The H0 landing must not show a false green success state.

Expected behavior:

| Backend result | UI behavior |
|---|---|
| `HTTP 200` + `email_delivery.sent === true` | Green success: API key sent |
| `HTTP 200` + `delivery.sent === true` | Green success: API key sent |
| `HTTP 200` without delivery confirmation | Warning: request accepted, delivery not confirmed |
| existing/duplicate key signal | Warning: check previous email or retry later |
| `HTTP 400` / `422` | Error with backend message |
| `HTTP 429` | Warning: rate limited / retry later |
| network error | Error: API unavailable |

The form must use:

```text
POST https://sas-api.onrender.com/public/request-key
Content-Type: application/json
```

with body:

```json
{
  "email": "you@example.com",
  "name": "Your Name"
}
```

It must not use:

```text
/public/request-key?email=...
```

---

## Free key onboarding paths

The landing exposes multiple equivalent ways to request a Free API key:

| Method | Best for | Notes |
|---|---|---|
| Web form | Non-technical users | Fill name/email and submit. |
| CLI | Developers using `sas-client` | Recommended path for terminal users. |
| curl | API/manual HTTP testing | Good for Linux/macOS and API clients. |
| PowerShell | Windows users | Avoids shell quoting problems from Unix examples. |

### CLI

```bash
pip install sas-client
sas request-key --email you@example.com --name "Your Name"
```

After receiving the key:

```bash
export SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
sas whoami
sas diff "Paris is in France." "Paris is in Germany."
```

### curl

```bash
curl -X POST https://sas-api.onrender.com/public/request-key \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","name":"Your Name"}'
```

After receiving the key:

```bash
curl -X POST https://sas-api.onrender.com/v1/diff \
  -H "X-API-Key: sas_xxxxxxxxxxxxxxxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{"text_a":"Paris is in France.","text_b":"Paris is in Germany.","experimental":true}'
```

### PowerShell

```powershell
pip install sas-client
sas request-key --email you@example.com --name "Your Name"

$env:SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
sas whoami
sas diff "Paris is in France." "Paris is in Germany."
```

> The landing should describe hosted access as a service layer. It must not imply that payment changes or relaxes the open-source license of the SAS repository.

---

## Developer Routing

The landing directs developers to the official Python client:

```bash
pip install sas-client
```

Core CLI commands:

```bash
sas health
sas readyz
sas plans
sas public-stats
sas public-activity --limit 10
sas request-key --email you@example.com --name "Your Name"
sas demo-audit "The Eiffel Tower is in Paris." "The Eiffel Tower is in Berlin."
sas whoami
sas diff "Python is a programming language." "A python is a snake."
sas audit "Text to audit"
sas chat "Explain SAS in one paragraph"
```

Environment variable:

```bash
export SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
```

Windows PowerShell:

```powershell
$env:SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
```

Self-hosted API support:

```bash
sas --base-url http://localhost:8000 health
```

---

## Error and Onboarding UX

The landing mirrors the hosted API onboarding behavior:

| Situation | UX behavior |
|---|---|
| User visits `/public/request-key` with GET | API returns help with CLI, curl, PowerShell, plan info, and next steps. |
| User visits `/public/demo/audit` with GET | API returns demo usage help. |
| User sends invalid request body | API returns `422` with actionable examples and fix commands. |
| User sends oversized payload | API returns `413 Payload Too Large`. |
| User requests a key successfully | API sends a Free key by email if delivery is confirmed. |
| User has a key | `sas whoami` confirms plan and quota. |

This is intended to convert common mistakes into onboarding rather than dead-end errors.

---

## Legal and Cryptographic Traceability

| Record | Value |
|---|---|
| Author | Gonzalo Emir Durante |
| TAD Argentina | `EX-2026-18792778` |
| Zenodo DOI | `10.5281/zenodo.19702379` |
| OpenTimestamps public notice hash | `5a434d7234fd55cb45829d539eee34a5ea05a3c594e26d76bb41695c46b2a996` |
| Benchmark artifact SHA-256 | `0713acbbf50e1a0054f545e5eb68078744f9c5a09d4bc370b5224bb81183a6fe` |
| Public API | `https://sas-api.onrender.com` |
| Main repository | `https://github.com/Leesintheblindmonk1999/SAS` |
| Landing repository | `https://github.com/Leesintheblindmonk1999/sas-landing` |
| Python client | `https://github.com/Leesintheblindmonk1999/sas-client` |
| License | GPL-3.0 + Durante Invariance License |

Note: the OpenTimestamps public notice hash and benchmark artifact SHA-256 may refer to different artifacts. Keep labels explicit to avoid verification confusion.

---

## Neutrality / Geopolitical Shielding

SAS and **κD = 0.56** are presented as an **open technical standard candidate** available to public and private organizations under the same attribution and licensing rules.

There are no exclusivities, privileges, or geopolitical access restrictions claimed by the landing. The main conditions are explicit attribution to **Gonzalo Emir Durante**, preservation of the technical integrity of the standard, and compliance with the applicable license.

This positioning prevents the standard candidate from being framed as closed, partisan, state-exclusive, military-exclusive, or region-specific.

---

## Landing Features

- Bilingual interface: English / Spanish.
- Theme selector: `LIGHT`, `DARK`, `TECH`.
- Theme persistence through `localStorage`.
- Language persistence through `localStorage`.
- Real fetch to the public API `/health` endpoint.
- Public API stats and anonymized activity sections.
- Platform Status section using `/readyz` and `/public/interaction/stats`.
- Public privacy flags for interaction observability.
- Interactive no-key demo using `/public/demo/audit`.
- Free key request form.
- Free key UX that avoids false green success without delivery confirmation.
- CLI / curl / PowerShell onboarding block inside the Free Key card.
- Copy buttons for onboarding commands.
- Dedicated Windows PowerShell path for API key setup.
- Pro checkout route through Polar and Mercado Pago.
- Controlled fallback if the API is unavailable or blocked by CORS during local testing.
- Self-contained benchmark visual.
- Neutrality / geopolitical shielding section.
- Legal section with TAD, DOI, OpenTimestamps notice, and benchmark artifact hash.
- Commercial contact through configured contact flow.
- Static deployment.
- No heavy framework.
- No cookies.
- No analytics.
- No custom landing backend.
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
- Windows users who need PowerShell-ready examples;
- enterprise users evaluating pilots or private deployment;
- readers coming from Zenodo DOI, GitHub, LinkedIn, Hacker News, or publications.

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

Current H0 landing structure:

```text
sas-landing/
├── index.html                  # Main bilingual landing page and H0 interaction logic
├── css/
│   ├── styles.css              # Base layout, responsive design, components if present
│   └── themes.css              # Theme variables: light, dark, tech if present
├── assets/
│   ├── logo.svg                # SAS geometric logo
│   └── benchmark.png           # Self-contained benchmark visualization
├── manifest.json               # PWA/site metadata when enabled
├── .nojekyll                   # GitHub Pages static deployment helper
└── .well-known/
    └── ots-proof.txt           # OpenTimestamps public proof notice / hash reference
```

H0 note:

```text
The current H0 implementation keeps the main runtime behavior inside index.html.
If a future refactor moves JavaScript back to js/main.js, update this section.
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

2. For the H0 functional update, replace:

```text
index.html
```

3. If updating documentation too, replace:

```text
README.md
```

4. Keep existing static assets unless intentionally changing them:

```text
css/
assets/
.well-known/
manifest.json
.nojekyll
```

5. GitHub Pages should serve from:

```text
Settings → Pages → Deploy from branch → main → /root
```

6. Public URL:

```text
https://leesintheblindmonk1999.github.io/sas-landing/
```

---

## H0 Manual Test Plan

After deploying `index.html`, test:

1. Open the landing in a clean browser session.
2. Open DevTools → Console.
3. Confirm there are no JavaScript errors.
4. Open DevTools → Network.
5. Confirm the following calls are not duplicated unnecessarily:
   - `/readyz`
   - `/public/interaction/stats?days=7`
   - `/public/stats`
   - `/public/activity?limit=100`
6. Confirm Platform Status renders:
   - readiness;
   - interaction analyses;
   - average latency;
   - privacy flag.
7. Confirm the demo works:
   - load example;
   - audit;
   - see ISI/verdict/modules/latency.
8. Test short demo input and verify controlled error.
9. Test Free Key with a new email alias:
   - `POST /public/request-key`;
   - JSON body;
   - no query string.
10. Test Free Key with a repeated email.
11. Confirm green success only appears when delivery is confirmed.
12. Confirm warning appears when request is accepted but delivery is not confirmed.
13. Test invalid email and browser validation.
14. Switch ES/EN.
15. Switch LIGHT/DARK/TECH.
16. Test mobile layout.
17. Confirm all external links open correctly.
18. Confirm no API keys, secrets, webhook secrets, or private files are included.

---

## Privacy

This site:

- does not use cookies;
- does not integrate analytics;
- does not use tracking pixels;
- does not store data in a custom landing backend;
- does not store contact form messages on a landing server;
- does not expose raw IPs, API keys, API key hashes, or request IDs;
- does not publish full demo input text;
- does not expose interaction input hashes or content fingerprints.

The contact flow may use `mailto:`, FormSubmit, or another explicitly configured external contact/payment flow. The data typed by the user is only sent when the user submits through that chosen client or provider.

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

Associated public notice hash:

```text
5a434d7234fd55cb45829d539eee34a5ea05a3c594e26d76bb41695c46b2a996
```

Suggested verification command:

```bash
ots verify .well-known/ots-proof.txt
```

For full OpenTimestamps verification, keep the matching `.ots` proof file if generated separately and publish it next to the proof notice.

Benchmark artifact SHA-256:

```text
0713acbbf50e1a0054f545e5eb68078744f9c5a09d4bc370b5224bb81183a6fe
```

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
- `AbortController`
- `localStorage`
- `IntersectionObserver`
- `navigator.clipboard`
- CSS variables
- responsive CSS Grid / Flexbox

All features are widely supported in modern browsers. Clipboard copy may require a secure context depending on browser policy.

---

## Maintenance Checklist

Before publishing a new landing version:

- [ ] Confirm API URL is correct.
- [ ] Confirm `/health` works.
- [ ] Confirm `/readyz` works.
- [ ] Confirm `/public/demo/audit` works.
- [ ] Confirm `/public/stats` and `/public/activity` work.
- [ ] Confirm `/public/interaction/stats?days=7` works.
- [ ] Confirm `/public/request-key` copy matches the hosted API behavior.
- [ ] Confirm the web form sends JSON by POST, not query string.
- [ ] Confirm the Free Key form only shows green success when delivery is confirmed.
- [ ] Confirm `sas request-key` command matches the current PyPI client.
- [ ] Confirm `sas whoami` works with a valid key.
- [ ] Confirm `sas diff` works with a valid key.
- [ ] Test CLI / curl / PowerShell tabs in the Free Key card.
- [ ] Test copy buttons.
- [ ] Confirm Windows PowerShell examples work.
- [ ] Confirm Polar and Mercado Pago links or references match the current production flow.
- [ ] Confirm DOI is current.
- [ ] Confirm TAD registry number is unchanged.
- [ ] Confirm benchmark metrics match the latest benchmark artifact.
- [ ] Confirm OpenTimestamps hash labels match their intended artifacts.
- [ ] Test English / Spanish language switch.
- [ ] Test `LIGHT / DARK / TECH` theme switch.
- [ ] Test contact form or commercial route.
- [ ] Test mobile layout.
- [ ] Test GitHub Pages deployment.
- [ ] Verify that no secrets, API keys, private files, webhook secrets, or payment credentials are included.

---

## License

The SAS standard candidate and **κD = 0.56** are published under:

```text
GPL-3.0 + Durante Invariance License
```

The landing page is part of the public SAS communication layer and should preserve:

- attribution to Gonzalo Emir Durante;
- reference to TAD `EX-2026-18792778`;
- reference to Zenodo DOI `10.5281/zenodo.19702379`;
- OpenTimestamps public proof reference;
- benchmark artifact hash reference;
- neutrality statement;
- distinction between open-source SAS code and hosted API service access.

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
- Python client: [https://pypi.org/project/sas-client/](https://pypi.org/project/sas-client/)
- DOI: [https://doi.org/10.5281/zenodo.19702379](https://doi.org/10.5281/zenodo.19702379)

---

<div align="center">

[Back to language selector](#language--idioma)

</div>

---

# Español

## Descripción general

`/sas-landing` es la landing page pública oficial de **SAS — Symbiotic Autoprotection System** y de su umbral central **κD = 0.56**, también denominado **Durante Constant**.

El sitio presenta SAS como **candidato a estándar técnico abierto** para auditoría de coherencia estructural en salidas de IA generativa. Conecta en una única web estática de GitHub Pages la API pública, la demo sin API key, la evidencia de benchmark, la trazabilidad legal, el anclaje OpenTimestamps, la actividad pública anonimizada, el acceso hosted a la API, el onboarding por CLI, billing y el contacto comercial.

Esta versión H0 agrega una capa operacional sobria:

- estado público de plataforma;
- visibilidad de `/readyz`;
- estadísticas agregadas de interaction stability;
- flags de privacidad;
- mejor UX de Free Key;
- cero conclusiones estadísticas prematuras con bajo volumen de datos de interacción.

**Sitio en vivo:**  
[https://leesintheblindmonk1999.github.io/sas-landing/](https://leesintheblindmonk1999.github.io/sas-landing/)

**API pública:**  
[https://sas-api.onrender.com](https://sas-api.onrender.com)

**Repositorio principal de SAS:**  
[https://github.com/Leesintheblindmonk1999/SAS](https://github.com/Leesintheblindmonk1999/SAS)

**Cliente Python oficial:**  
[https://pypi.org/project/sas-client/](https://pypi.org/project/sas-client/)

---

## Estado H0 actual

La actualización H0 de la landing es intencionalmente conservadora. Busca mejorar confianza, onboarding y verificabilidad pública sin convertir la landing en un dashboard pesado.

### Cambios funcionales H0

| Área | Estado |
|---|---|
| Sección Platform Status / Estado | Agregada |
| Display público de `/readyz` | Agregado |
| Display de `/public/interaction/stats?days=7` | Agregado |
| `total_analyses` | Agregado |
| `avg_latency_ms` | Agregado |
| Display de privacy flags | Agregado |
| UX de solicitud de Free Key | Endurecida |
| Falso éxito verde en key request | Evitado |
| Escape HTML en actividad pública | Endurecido |
| Fetches duplicados iniciales | Eliminados |
| Lenguaje “open standard” | Cambiado a “open standard candidate” |
| Cambios de backend | Ninguno |

### Regla de diseño importante

La landing puede mostrar:

- readiness;
- stats públicas agregadas;
- total de análisis de interacción;
- latencia media de interacción;
- flags de privacidad.

La landing **no debería** presentar `dominant_states_distribution`, `sigma_buckets` o `demand_peak_buckets` como conclusiones hasta tener volumen real suficiente.

Umbral recomendado:

```text
50+ análisis de interacción  -> distribución útil para dashboard
100+ análisis de interacción -> snapshot empírico / candidato a publicación
```

---

## Ecosistema de repositorios

| Repositorio | Función |
|---|---|
| [`SAS`](https://github.com/Leesintheblindmonk1999/SAS) | Servicio FastAPI core, motor de coherencia estructural, artefactos de benchmark, rutas API, lógica del servicio alojado, privacidad, observabilidad y licencia. |
| [`sas-landing`](https://github.com/Leesintheblindmonk1999/sas-landing) | Sitio público estático para el candidato a estándar, demo, resumen de benchmark, actividad pública, estado de plataforma, onboarding por CLI y contacto comercial. |
| [`sas-client`](https://github.com/Leesintheblindmonk1999/sas-client) | Paquete Python y CLI oficial para desarrolladores que integran la API SAS alojada o autoalojada. |

---

## Objetivo estratégico

Esta landing no es solo una presentación visual. Es la capa pública de legitimidad, verificación y acceso de SAS.

Su función es:

1. Presentar SAS como candidato a estándar abierto de auditoría estructural.
2. Dar a los usuarios una demo sin API key de la implementación pública de referencia.
3. Mostrar validación empírica y límites claros de las afirmaciones.
4. Mostrar que la API está viva, observable y consciente de privacidad.
5. Reforzar la autoría y trazabilidad de **Gonzalo Emir Durante**.
6. Dirigir desarrolladores hacia la API, repositorio, cliente Python, DOI y documentación.
7. Reducir fricción de entrada mediante formulario web, CLI, curl y PowerShell.
8. Dirigir usuarios comerciales hacia acceso hosted, pilotos, licencias o despliegue privado.
9. Preservar neutralidad evitando exclusividad geopolítica o control institucional cerrado.

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
- disponible mediante demo pública sin key;
- accesible mediante Free API key;
- observable mediante métricas públicas agregadas;
- disponible para organizaciones públicas o privadas bajo reglas simétricas de atribución.

SAS no se presenta como oráculo factual universal, motor de certificación legal, certificación médica ni garantía absoluta contra toda alucinación. Se presenta como una **capa técnica de evidencia para auditoría estructural de coherencia**.

---

## Inicio rápido

### Opción A — Probar la demo sin key

Usar la landing:

```text
https://leesintheblindmonk1999.github.io/sas-landing/#demo
```

O llamar al endpoint público:

```bash
curl -X POST https://sas-api.onrender.com/public/demo/audit \
  -H "Content-Type: application/json" \
  -d '{
    "source": "The Eiffel Tower is located in Paris, France.",
    "response": "The Eiffel Tower is located in Berlin, Germany."
  }'
```

### Opción B — Pedir una Free API key desde terminal

```bash
pip install sas-client
sas request-key --email you@example.com --name "Your Name"
```

Después de recibir la key por email:

```bash
export SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
sas whoami
sas diff "Paris is in France." "Paris is in Germany."
```

### Opción C — Windows PowerShell

```powershell
pip install sas-client
sas request-key --email you@example.com --name "Your Name"

$env:SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
sas whoami
sas diff "Paris is in France." "Paris is in Germany."
```

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
| Public interaction stats | [https://sas-api.onrender.com/public/interaction/stats?days=7](https://sas-api.onrender.com/public/interaction/stats?days=7) |
| Ayuda de demo pública | `GET https://sas-api.onrender.com/public/demo/audit` |
| Demo pública de auditoría | `POST https://sas-api.onrender.com/public/demo/audit` |
| Ayuda de Free key | `GET https://sas-api.onrender.com/public/request-key` |
| Solicitud de Free key | `POST https://sas-api.onrender.com/public/request-key` |
| Identidad autenticada | `GET https://sas-api.onrender.com/v1/whoami` |
| Diff autenticado | `POST https://sas-api.onrender.com/v1/diff` |
| Batch autenticado | `POST https://sas-api.onrender.com/v1/batch` |
| Ejemplo de interacción | `GET https://sas-api.onrender.com/v1/interaction/stability/example` |
| Estabilidad interaccional | `POST https://sas-api.onrender.com/v1/interaction/stability` |

---

## Platform Status / Snapshot H0

La landing H0 incluye una sección pública de estado alimentada por:

```text
GET /readyz
GET /public/interaction/stats?days=7
```

Muestra:

- readiness;
- disponibilidad de `interaction_db`;
- disponibilidad del router `public_interaction_stats`;
- total de análisis de interacción;
- latencia media de interacción;
- estado de privacidad.

### Garantías de privacidad mostradas en H0

La landing expone flags agregados de privacidad desde `/public/interaction/stats`:

```json
{
  "privacy": {
    "raw_text_stored": false,
    "raw_api_keys_stored": false,
    "public_stats_are_aggregated": true
  }
}
```

La página pública no debe exponer:

- texto crudo enviado;
- API keys;
- hashes de API keys;
- request IDs;
- input hashes;
- content fingerprints;
- filas por usuario.

### Degradación segura

La sección de estado debe degradar de forma segura:

| Falla | Comportamiento esperado |
|---|---|
| `/readyz` no disponible | card de readiness muestra unavailable |
| `/public/interaction/stats` no disponible | cards de interaction muestran `n/a` |
| `total_analyses = 0` | muestra `0`, no error |
| timeout de red | muestra fallback y warning en consola |
| falla un endpoint | el otro endpoint sigue renderizando |

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

---

## Acceso hosted a la API / Billing

La landing dirige usuarios hacia el modelo actual de acceso a la API alojada.

| Vía de acceso | Descripción |
|---|---|
| **Free key** | Los usuarios pueden pedir una API key gratuita mediante formulario web, CLI, curl, PowerShell o `POST /public/request-key`. La key se genera y envía automáticamente por email cuando el backend confirma delivery. |
| **Acceso Pro** | El acceso pago puede manejarse mediante Polar para tarjetas internacionales y Mercado Pago para usuarios LATAM. |
| **Provisionamiento automático de keys** | Tras confirmación de pago, el servicio alojado puede generar y enviar automáticamente la API key correspondiente. |
| **Enterprise / Piloto** | Despliegues grandes, pilotos, integraciones privadas y licencias on-premise se derivan a contacto comercial directo. |

### UX del formulario Free Key

La landing H0 no debe mostrar falso éxito verde.

Comportamiento esperado:

| Resultado backend | Comportamiento UI |
|---|---|
| `HTTP 200` + `email_delivery.sent === true` | Éxito verde: API key enviada |
| `HTTP 200` + `delivery.sent === true` | Éxito verde: API key enviada |
| `HTTP 200` sin confirmación de delivery | Warning: solicitud recibida, delivery no confirmado |
| señal de key existente/duplicada | Warning: revisar correo previo o reintentar luego |
| `HTTP 400` / `422` | Error con mensaje del backend |
| `HTTP 429` | Warning: rate limited / reintentar luego |
| error de red | Error: API no disponible |

El formulario debe usar:

```text
POST https://sas-api.onrender.com/public/request-key
Content-Type: application/json
```

con body:

```json
{
  "email": "you@example.com",
  "name": "Your Name"
}
```

No debe usar:

```text
/public/request-key?email=...
```

---

## Caminos de onboarding para Free key

La landing expone varias formas equivalentes de pedir una Free API key:

| Método | Mejor para | Notas |
|---|---|---|
| Formulario web | Usuarios no técnicos | Completar nombre/email y enviar. |
| CLI | Desarrolladores usando `sas-client` | Camino recomendado para usuarios de terminal. |
| curl | Pruebas HTTP/API manuales | Útil para Linux/macOS y clientes API. |
| PowerShell | Usuarios Windows | Evita problemas de comillas con ejemplos Unix. |

### CLI

```bash
pip install sas-client
sas request-key --email you@example.com --name "Your Name"
```

Después de recibir la key:

```bash
export SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
sas whoami
sas diff "Paris is in France." "Paris is in Germany."
```

### curl

```bash
curl -X POST https://sas-api.onrender.com/public/request-key \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","name":"Your Name"}'
```

Después de recibir la key:

```bash
curl -X POST https://sas-api.onrender.com/v1/diff \
  -H "X-API-Key: sas_xxxxxxxxxxxxxxxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{"text_a":"Paris is in France.","text_b":"Paris is in Germany.","experimental":true}'
```

### PowerShell

```powershell
pip install sas-client
sas request-key --email you@example.com --name "Your Name"

$env:SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
sas whoami
sas diff "Paris is in France." "Paris is in Germany."
```

> La landing debe describir el acceso hosted como una capa de servicio. No debe sugerir que pagar cambia o relaja la licencia open source del repositorio SAS.

---

## Ruta para desarrolladores

La landing dirige desarrolladores hacia el cliente Python oficial:

```bash
pip install sas-client
```

Comandos principales:

```bash
sas health
sas readyz
sas plans
sas public-stats
sas public-activity --limit 10
sas request-key --email you@example.com --name "Your Name"
sas demo-audit "The Eiffel Tower is in Paris." "The Eiffel Tower is in Berlin."
sas whoami
sas diff "Python is a programming language." "A python is a snake."
sas audit "Text to audit"
sas chat "Explain SAS in one paragraph"
```

Variable de entorno:

```bash
export SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
```

Windows PowerShell:

```powershell
$env:SAS_API_KEY="sas_xxxxxxxxxxxxxxxxxxxxx"
```

Soporte para API autoalojada:

```bash
sas --base-url http://localhost:8000 health
```

---

## UX de errores y onboarding

La landing refleja el comportamiento de onboarding de la API alojada:

| Situación | Comportamiento UX |
|---|---|
| Usuario visita `/public/request-key` con GET | La API devuelve ayuda con CLI, curl, PowerShell, plan y próximos pasos. |
| Usuario visita `/public/demo/audit` con GET | La API devuelve ayuda de uso de la demo. |
| Usuario manda body inválido | La API devuelve `422` con ejemplos accionables y comandos de corrección. |
| Usuario manda payload demasiado grande | La API devuelve `413 Payload Too Large`. |
| Usuario pide una key correctamente | La API envía una Free key por email si el delivery se confirma. |
| Usuario tiene una key | `sas whoami` confirma plan y cuota. |

El objetivo es convertir errores comunes en onboarding en lugar de callejones sin salida.

---

## Trazabilidad legal y criptográfica

| Registro | Valor |
|---|---|
| Autor | Gonzalo Emir Durante |
| TAD Argentina | `EX-2026-18792778` |
| Zenodo DOI | `10.5281/zenodo.19702379` |
| Hash público OpenTimestamps | `5a434d7234fd55cb45829d539eee34a5ea05a3c594e26d76bb41695c46b2a996` |
| SHA-256 del artefacto benchmark | `0713acbbf50e1a0054f545e5eb68078744f9c5a09d4bc370b5224bb81183a6fe` |
| API pública | `https://sas-api.onrender.com` |
| Repositorio principal | `https://github.com/Leesintheblindmonk1999/SAS` |
| Repositorio landing | `https://github.com/Leesintheblindmonk1999/sas-landing` |
| Cliente Python | `https://github.com/Leesintheblindmonk1999/sas-client` |
| Licencia | GPL-3.0 + Durante Invariance License |

Nota: el hash público OpenTimestamps y el SHA-256 del artefacto benchmark pueden referirse a artefactos distintos. Mantener etiquetas explícitas para evitar confusión de verificación.

---

## Neutralidad / Blindaje geopolítico

SAS y **κD = 0.56** se presentan como **candidato a estándar técnico abierto** disponible para organizaciones públicas y privadas bajo las mismas reglas de atribución y licencia.

La landing no afirma exclusividades, privilegios ni restricciones geopolíticas de acceso. Las condiciones principales son la atribución explícita a **Gonzalo Emir Durante**, la preservación de la integridad técnica del estándar y el cumplimiento de la licencia aplicable.

Este posicionamiento evita que el estándar candidato sea interpretado como cerrado, partidario, estatal, militar o exclusivo de una región.

---

## Características de la landing

- Interfaz bilingüe: Inglés / Español.
- Selector de tema: `LIGHT`, `DARK`, `TECH`.
- Persistencia de tema mediante `localStorage`.
- Persistencia de idioma mediante `localStorage`.
- Fetch real al endpoint público `/health`.
- Secciones de stats públicas y actividad anonimizada.
- Sección Platform Status usando `/readyz` y `/public/interaction/stats`.
- Flags públicos de privacidad para interaction observability.
- Demo interactiva sin API key usando `/public/demo/audit`.
- Formulario de solicitud de Free key.
- UX de Free key que evita falso éxito verde sin confirmación de delivery.
- Bloque de onboarding CLI / curl / PowerShell dentro de la tarjeta Free Key.
- Botones de copiado para comandos de onboarding.
- Ruta específica para usuarios Windows con PowerShell.
- Checkout Pro mediante Polar y Mercado Pago.
- Fallback controlado si la API no responde o si CORS bloquea la consulta local.
- Visual autocontenido del benchmark.
- Sección de neutralidad / blindaje geopolítico.
- Sección legal con TAD, DOI, aviso OpenTimestamps y hash de benchmark.
- Contacto comercial mediante flujo configurado.
- Despliegue estático.
- Sin framework pesado.
- Sin cookies.
- Sin analytics.
- Sin backend propio de la landing.
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
- usuarios Windows que necesitan ejemplos listos para PowerShell;
- usuarios enterprise que evalúan pilotos o despliegue privado;
- lectores que llegan desde Zenodo DOI, GitHub, LinkedIn, Hacker News o publicaciones.

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

Estructura actual H0:

```text
sas-landing/
├── index.html                  # Landing principal bilingüe y lógica H0
├── css/
│   ├── styles.css              # Layout base, responsive design y componentes si aplica
│   └── themes.css              # Variables de temas: light, dark, tech si aplica
├── assets/
│   ├── logo.svg                # Logo geométrico SAS
│   └── benchmark.png           # Visualización autocontenida del benchmark
├── manifest.json               # Metadata PWA/site si está habilitada
├── .nojekyll                   # Helper para despliegue estático en GitHub Pages
└── .well-known/
    └── ots-proof.txt           # Aviso público OpenTimestamps / referencia hash
```

Nota H0:

```text
La implementación H0 actual mantiene el comportamiento principal dentro de index.html.
Si una futura refactorización mueve el JavaScript a js/main.js, actualizar esta sección.
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

2. Para el update funcional H0, reemplazar:

```text
index.html
```

3. Si se actualiza documentación también, reemplazar:

```text
README.md
```

4. Mantener assets estáticos existentes salvo cambio intencional:

```text
css/
assets/
.well-known/
manifest.json
.nojekyll
```

5. GitHub Pages debería servir desde:

```text
Settings → Pages → Deploy from branch → main → /root
```

6. URL pública:

```text
https://leesintheblindmonk1999.github.io/sas-landing/
```

---

## Plan de prueba manual H0

Después de desplegar `index.html`, probar:

1. Abrir la landing en una sesión limpia.
2. Abrir DevTools → Console.
3. Confirmar que no hay errores JavaScript.
4. Abrir DevTools → Network.
5. Confirmar que estas llamadas no estén duplicadas innecesariamente:
   - `/readyz`
   - `/public/interaction/stats?days=7`
   - `/public/stats`
   - `/public/activity?limit=100`
6. Confirmar que Platform Status renderiza:
   - readiness;
   - análisis de interacción;
   - latencia media;
   - flag de privacidad.
7. Confirmar que la demo funciona:
   - cargar ejemplo;
   - auditar;
   - ver ISI/veredicto/módulos/latencia.
8. Probar input corto en demo y verificar error controlado.
9. Probar Free Key con email nuevo:
   - `POST /public/request-key`;
   - body JSON;
   - sin query string.
10. Probar Free Key con email repetido.
11. Confirmar que el éxito verde solo aparece cuando el delivery está confirmado.
12. Confirmar warning cuando la solicitud fue aceptada pero delivery no está confirmado.
13. Probar email inválido y validación del navegador.
14. Cambiar ES/EN.
15. Cambiar LIGHT/DARK/TECH.
16. Probar layout mobile.
17. Confirmar que los links externos abren correctamente.
18. Confirmar que no hay API keys, secretos, webhook secrets ni archivos privados incluidos.

---

## Privacidad

Este sitio:

- no usa cookies;
- no integra analytics;
- no usa píxeles de seguimiento;
- no almacena datos en un backend propio de la landing;
- no guarda mensajes de contacto en un servidor de la landing;
- no expone IPs reales, API keys, hashes de API keys ni request IDs;
- no publica el texto completo ingresado en la demo;
- no expone input hashes ni content fingerprints de interaction stability.

El flujo de contacto puede usar `mailto:`, FormSubmit u otro flujo externo de contacto/pago explícitamente configurado. Los datos escritos por el usuario solo se envían cuando el usuario confirma el envío mediante el cliente o proveedor elegido.

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

Hash público asociado:

```text
5a434d7234fd55cb45829d539eee34a5ea05a3c594e26d76bb41695c46b2a996
```

Comando sugerido de verificación:

```bash
ots verify .well-known/ots-proof.txt
```

Para una verificación OpenTimestamps completa, conservar el archivo `.ots` correspondiente si fue generado por separado y publicarlo junto al aviso de prueba.

SHA-256 del artefacto benchmark:

```text
0713acbbf50e1a0054f545e5eb68078744f9c5a09d4bc370b5224bb81183a6fe
```

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
- `AbortController`
- `localStorage`
- `IntersectionObserver`
- `navigator.clipboard`
- variables CSS
- CSS Grid / Flexbox responsive

Todas estas funciones están ampliamente soportadas en navegadores modernos. El copiado al portapapeles puede requerir contexto seguro según la política del navegador.

---

## Checklist de mantenimiento

Antes de publicar una nueva versión de la landing:

- [ ] Confirmar que la URL de la API sea correcta.
- [ ] Confirmar que `/health` funcione.
- [ ] Confirmar que `/readyz` funcione.
- [ ] Confirmar que `/public/demo/audit` funcione.
- [ ] Confirmar que `/public/stats` y `/public/activity` funcionen.
- [ ] Confirmar que `/public/interaction/stats?days=7` funcione.
- [ ] Confirmar que el texto de `/public/request-key` coincida con el comportamiento actual de la API alojada.
- [ ] Confirmar que el formulario web envía JSON por POST, no query string.
- [ ] Confirmar que el formulario Free Key solo muestra éxito verde cuando el delivery está confirmado.
- [ ] Confirmar que el comando `sas request-key` coincida con el cliente actual de PyPI.
- [ ] Confirmar que `sas whoami` funcione con una key válida.
- [ ] Confirmar que `sas diff` funcione con una key válida.
- [ ] Probar pestañas CLI / curl / PowerShell en la tarjeta Free Key.
- [ ] Probar botones de copiado.
- [ ] Confirmar que los ejemplos de Windows PowerShell funcionen.
- [ ] Confirmar que los links o referencias de Polar y Mercado Pago coincidan con el flujo productivo actual.
- [ ] Confirmar que el DOI sea el vigente.
- [ ] Confirmar que el registro TAD no cambió.
- [ ] Confirmar que las métricas del benchmark coincidan con el artefacto más reciente.
- [ ] Confirmar que las etiquetas de hashes OpenTimestamps coincidan con sus artefactos.
- [ ] Probar selector Inglés / Español.
- [ ] Probar selector `LIGHT / DARK / TECH`.
- [ ] Probar formulario o ruta comercial.
- [ ] Probar layout mobile.
- [ ] Probar despliegue en GitHub Pages.
- [ ] Verificar que no haya secretos, API keys, archivos privados, webhook secrets ni credenciales de pago.

---

## Licencia

El candidato a estándar SAS y **κD = 0.56** están publicados bajo:

```text
GPL-3.0 + Durante Invariance License
```

La landing page forma parte de la capa pública de comunicación de SAS y debe preservar:

- atribución a Gonzalo Emir Durante;
- referencia al TAD `EX-2026-18792778`;
- referencia al Zenodo DOI `10.5281/zenodo.19702379`;
- referencia a la prueba pública OpenTimestamps;
- referencia al hash de benchmark;
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
- Cliente Python: [https://pypi.org/project/sas-client/](https://pypi.org/project/sas-client/)
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


## H1 update — Developer SDKs and onboarding

The landing now exposes the current SAS developer ecosystem more directly:

| Surface | Package / Link |
|---|---|
| Python client / CLI | `pip install sas-client` |
| Node.js / TypeScript SDK | `npm install sas-audit-client` |
| Node SDK repository | `https://github.com/Leesintheblindmonk1999/sas-js` |
| npm package | `https://www.npmjs.com/package/sas-audit-client` |
| Main SAS API | `https://sas-api.onrender.com` |

Naming note:

```text
npm package: sas-audit-client
GitHub repo: sas-js
Exported class: SASClient
```

Request-key onboarding copy now reminds users to:

- check inbox and spam folder;
- wait a few minutes for email delivery;
- check previous email if they already requested a key.

This H1 update is focused on conversion clarity, not backend changes.

## H1.1 DeepSeek audit fixes

Applied after technical audit:

- Added descriptive `alt` text to the benchmark image.
- Added basic ARIA roles for access tabs:
  - `role="tablist"`
  - `role="tab"`
  - `role="tabpanel"`
  - `aria-controls`
  - `aria-labelledby`
  - `aria-selected`
- Added timeout support to `accessPostJSON` using `AbortController`.
- Hardened module filtering with `String(m)` before `.toLowerCase()`.
- Rechecked and fixed literal `/public/demo/audit)` occurrences.
- Added a limited CSS fallback for browsers without `color-mix()` support.

Deferred intentionally to a later H2 refactor:

- Full CSS unification.
- Moving all inline JavaScript into external files.
- Larger front-end modularization.

Reason: H1.1 focuses on low-risk correctness, accessibility, and robustness without changing backend behavior or restructuring the landing.

# H1 Final Deployable Patch

Applied after Claude audit:

- FIX-1: `sasSyncAccessTabAria(arguments[0])` changed to `sasSyncAccessTabAria(tab)`.
  - Reason: the helper expects a tab key string, not the DOM button element.

- FIX-2: `error.data = data` changed to `error.payload = data` inside `accessPostJSON`.
  - Reason: request-key callers read `err.payload`; keeping this shape preserves API error detail messages.

Result:

- No blockers remaining from Claude audit.
- H1.1 remains deployable.
- Large CSS/JS refactor remains deferred to H2.


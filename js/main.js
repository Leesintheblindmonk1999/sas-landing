const API_URL = "https://sas-api.onrender.com/health";
const CONTACT_EMAIL = "duranteg2@gmail.com";
const CONTACT_ENDPOINT = "https://formsubmit.co/duranteg2@gmail.com";

const dict = {
  es: {
    nav_benchmark: "Benchmark",
    nav_neutrality: "Neutralidad",
    nav_legal: "Registro",
    nav_contact: "Contacto",
    cmd: "run structural_coherence_audit --kappa 0.56",
    title: "SAS: auditoría estructural para detectar ruptura semántica en IA generativa.",
    lead: "Symbiotic Autoprotection System convierte la detección de alucinaciones en evidencia técnica: ISI, κD, trazabilidad legal, benchmark reproducible y API pública.",
    api: "Abrir API Docs",
    repo: "Repositorio GitHub",
    ots: "Ver OTS",
    checking: "Verificando API pública",
    online: "API pública online",
    offline: "API sin respuesta o bloqueada por CORS",
    kdesc: "Constante de Durante: umbral crítico de coherencia estructural.",
    btitle: "2.000 pares evaluados. Cero falsos positivos.",
    btext: "1.000 ejemplos con alucinación y 1.000 ejemplos limpios. Métricas trazables con hash, DOI y prueba OpenTimestamps.",
    bcap: "Benchmark SAS v1.1.0: artefacto visual autocontenido.",
    mtitle: "Matriz de confusión",
    ah: "Alucinación real",
    ac: "Texto limpio real",
    ph: "Predicción: alucinación",
    pc: "Predicción: limpio",
    ntitle: "Neutralidad operativa. Reglas simétricas.",
    np1: "SAS y κD = 0.56 son un estándar abierto disponible para cualquier organización pública o privada bajo las mismas reglas, sin exclusividades ni privilegios.",
    np2: "La condición de uso es atribución explícita a Gonzalo Emir Durante, preservación de la integridad técnica del estándar y respeto a la licencia GPL-3.0 + Durante Invariance License.",
    np3: "SAS no se presenta como certificación legal universal ni como oráculo factual. Es una capa técnica de evidencia para auditoría estructural de coherencia.",
    ltitle: "Registro, DOI y anclaje criptográfico.",
    tad: "Registro administrativo argentino asociado al estándar SAS / κD.",
    anchor: "Anclado a Bitcoin",
    olink: "Abrir prueba OTS",
    ctitle: "Pilotos, licencias y auditorías.",
    ctext: "Para startups RAG, integraciones empresariales, licencias on-premise o auditoría técnica de salidas LLM.",
    name: "Nombre",
    msg: "Mensaje",
    send: "Enviar mensaje",
    note: "El mensaje será enviado a duranteg2@gmail.com mediante FormSubmit. La primera vez puede requerir confirmación del email.",
    sending: "Enviando...",
    foot: "Anclado a Bitcoin"
  },
  en: {
    nav_benchmark: "Benchmark",
    nav_neutrality: "Neutrality",
    nav_legal: "Registry",
    nav_contact: "Contact",
    cmd: "run structural_coherence_audit --kappa 0.56",
    title: "SAS: structural auditing for semantic rupture detection in generative AI.",
    lead: "Symbiotic Autoprotection System turns hallucination detection into technical evidence: ISI, κD, legal traceability, reproducible benchmark, and public API.",
    api: "Open API Docs",
    repo: "GitHub Repository",
    ots: "View OTS",
    checking: "Checking public API",
    online: "Public API online",
    offline: "API unavailable or blocked by CORS",
    kdesc: "Durante Constant: critical threshold for structural coherence.",
    btitle: "2,000 evaluated pairs. Zero false positives.",
    btext: "1,000 hallucination examples and 1,000 clean examples. Metrics traceable through hash, DOI, and OpenTimestamps proof.",
    bcap: "SAS v1.1.0 benchmark: self-contained visual artifact.",
    mtitle: "Confusion matrix",
    ah: "Actual hallucination",
    ac: "Actual clean",
    ph: "Predicted hallucination",
    pc: "Predicted clean",
    ntitle: "Operational neutrality. Symmetric rules.",
    np1: "SAS and κD = 0.56 are an open standard available to any public or private organization under the same rules, without exclusivity or privileges.",
    np2: "The condition of use is explicit attribution to Gonzalo Emir Durante, preservation of the standard's technical integrity, and respect for the GPL-3.0 + Durante Invariance License.",
    np3: "SAS is not presented as universal legal certification or a factual oracle. It is a technical evidence layer for structural coherence auditing.",
    ltitle: "Registry, DOI, and cryptographic anchoring.",
    tad: "Argentine administrative registry associated with the SAS / κD standard.",
    anchor: "Anchored to Bitcoin",
    olink: "Open OTS proof",
    ctitle: "Pilots, licensing, and audits.",
    ctext: "For RAG startups, enterprise integrations, on-premise licensing, or technical auditing of LLM outputs.",
    name: "Name",
    msg: "Message",
    send: "Send message",
    note: "The message will be sent to duranteg2@gmail.com through FormSubmit. The first submission may require email confirmation.",
    sending: "Sending...",
    foot: "Anchored to Bitcoin"
  }
};

function currentLang() {
  return localStorage.getItem("sas-lang") || document.documentElement.lang || "es";
}

function setLang(l) {
  const d = dict[l] || dict.es;
  document.documentElement.lang = l;

  document.querySelectorAll("[data-i18n]").forEach((e) => {
    const k = e.dataset.i18n;
    if (d[k]) e.textContent = d[k];
  });

  document.querySelectorAll("[data-lang]").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === l);
  });

  localStorage.setItem("sas-lang", l);
}

function setTheme(t) {
  if (!["light", "dark", "tech"].includes(t)) t = "tech";

  document.body.className = document.body.className
    .replace(/theme-\w+/g, "")
    .trim();

  document.body.classList.add("theme-" + t);

  document.querySelectorAll("[data-theme]").forEach((b) => {
    b.classList.toggle("active", b.dataset.theme === t);
  });

  localStorage.setItem("sas-theme", t);
}

async function health() {
  const dot = document.querySelector("#api-dot");
  const title = document.querySelector("#api-title");
  const detail = document.querySelector("#api-detail");
  const l = currentLang();

  if (!dot || !title || !detail) return;

  try {
    const r = await fetch(API_URL, { cache: "no-store" });
    if (!r.ok) throw new Error("HTTP " + r.status);

    const j = await r.json();

    dot.className = "dot online";
    title.textContent = dict[l].online;
    detail.textContent = API_URL + " · " + (j.status || "ok");
  } catch (e) {
    dot.className = "dot offline";
    title.textContent = dict[l].offline;
    detail.textContent = API_URL + " · " + e.message;
  }
}

function ensureHiddenInput(form, name, value) {
  let input = form.querySelector(`input[name="${name}"]`);

  if (!input) {
    input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    form.prepend(input);
  }

  input.value = value;
  return input;
}

function repairContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  form.onsubmit = null;

  form.setAttribute("action", CONTACT_ENDPOINT);
  form.setAttribute("method", "POST");

  ensureHiddenInput(form, "_subject", "New SAS Landing contact");
  ensureHiddenInput(form, "_template", "table");
  ensureHiddenInput(form, "_captcha", "false");
  ensureHiddenInput(
    form,
    "_next",
    "https://leesintheblindmonk1999.github.io/sas-landing/?sent=1#contact"
  );

  let honey = form.querySelector('input[name="_honey"]');
  if (!honey) {
    honey = document.createElement("input");
    honey.type = "text";
    honey.name = "_honey";
    honey.tabIndex = -1;
    honey.autocomplete = "off";
    honey.setAttribute("aria-hidden", "true");
    honey.style.position = "absolute";
    honey.style.left = "-9999px";
    form.prepend(honey);
  }

  form.addEventListener("submit", () => {
    const button = form.querySelector('button[type="submit"]');
    const lang = currentLang();
    const d = dict[lang] || dict.es;

    if (button) {
      button.disabled = true;
      button.textContent = d.sending || "Sending...";
      button.style.opacity = "0.75";
      button.style.cursor = "wait";
    }
  });
}

function showSentMessageIfNeeded() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("sent") !== "1") return;

  const form = document.querySelector("#contact-form");
  if (!form) return;

  const lang = currentLang();
  const message =
    lang === "en"
      ? "Message sent. If this is the first submission, FormSubmit may ask to confirm the recipient email."
      : "Mensaje enviado. Si es el primer envío, FormSubmit puede pedir confirmar el email receptor.";

  const box = document.createElement("p");
  box.className = "section-text";
  box.style.color = "var(--accent2)";
  box.style.fontWeight = "900";
  box.textContent = message;

  form.prepend(box);
}

function initNavigation() {
  const mb = document.querySelector("#menu-btn");
  const nl = document.querySelector("#navlinks");

  if (mb && nl) {
    mb.onclick = () => {
      const open = nl.classList.toggle("open");
      mb.setAttribute("aria-expanded", String(open));
    };

    document.querySelectorAll("#navlinks a").forEach((a) => {
      a.onclick = () => nl.classList.remove("open");
    });
  }
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const ob = new IntersectionObserver(
      (entries) =>
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("visible");
            ob.unobserve(x.target);
          }
        }),
      { threshold: 0.12 }
    );

    els.forEach((e) => ob.observe(e));
  } else {
    els.forEach((e) => e.classList.add("visible"));
  }
}

function init() {
  setTheme(localStorage.getItem("sas-theme") || "tech");
  setLang(localStorage.getItem("sas-lang") || "es");

  document.querySelectorAll("[data-theme]").forEach((b) => {
    b.onclick = () => setTheme(b.dataset.theme);
  });

  document.querySelectorAll("[data-lang]").forEach((b) => {
    b.onclick = () => {
      setLang(b.dataset.lang);
      health();
    };
  });

  initNavigation();
  repairContactForm();
  showSentMessageIfNeeded();
  initReveal();
  health();
}

document.addEventListener("DOMContentLoaded", init);

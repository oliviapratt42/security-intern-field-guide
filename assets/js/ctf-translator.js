const translations = {
  web: {
    label: "Web security",
    branches: ["Application Security", "Red Team / Offensive Security", "Security Engineering"],
    translation:
      "Web challenges build skill with HTTP requests, cookies, sessions, parameters, APIs, and trust boundaries. In enterprise work, those skills map to application ownership, authentication and authorization design, exposed data or actions, developer remediation, release risk, and repeatable secure coding patterns."
  },
  traffic: {
    label: "Intercepting communication",
    branches: ["SOC / Detection", "Cloud / Infrastructure Security", "Security Engineering"],
    translation:
      "Traffic challenges build skill with how systems communicate across clients, services, DNS, TLS, proxies, and APIs. In enterprise work, those skills map to telemetry planning, network flow evidence, log source coverage, normal baselines, and investigation signals used by SOC and infrastructure teams."
  },
  crypto: {
    label: "Cryptography",
    branches: ["Security Engineering", "GRC / Risk", "Cloud / Infrastructure Security"],
    translation:
      "Cryptography challenges build precision with encoding, hashing, encryption, signing, randomness, keys, and tokens. In enterprise systems, those concepts map to secrets handling, certificate validation, key management, data protection requirements, integrity checks, and compliance evidence."
  },
  access: {
    label: "Access control",
    branches: ["Application Security", "Cloud / Infrastructure Security", "GRC / Risk"],
    translation:
      "Access-control challenges build skill with who can do what and where that decision is enforced. In enterprise work, those skills map to authorization design, least privilege, cloud IAM, privileged actions, permission reviews, audit evidence, and ownership of access changes."
  },
  reverse: {
    label: "Reverse engineering",
    branches: ["Threat Intelligence", "SOC / Detection", "Red Team / Offensive Security"],
    translation:
      "Reverse-engineering challenges build skill with understanding software behavior when source code or documentation is incomplete. In enterprise work, those skills map to malware triage, suspicious file analysis, behavior summaries, detection ideas, confidence levels, and analysis another person can verify."
  },
  binary: {
    label: "Binary exploitation",
    branches: ["Red Team / Offensive Security", "Security Research", "SOC / Detection"],
    translation:
      "Binary exploitation builds deep understanding of memory, program behavior, unsafe input handling, and exploitability. In enterprise settings, those skills map to vulnerability research, affected-version analysis, exposure review, patch prioritization, compensating controls, and detection coverage."
  },
  integrated: {
    label: "Integrated security",
    branches: ["All branches"],
    translation:
      "Integrated challenges build skill with chaining observations across systems. In enterprise work, those skills map to realistic scenarios where identity, applications, infrastructure, telemetry, ownership, controls, response, and business risk all affect the security decision."
  }
};

const select = document.querySelector("[data-translator-select]");
const title = document.querySelector("[data-translator-title]");
const branches = document.querySelector("[data-translator-branches]");
const body = document.querySelector("[data-translator-body]");

function renderTranslation(key) {
  const item = translations[key] || translations.web;

  title.textContent = item.label;
  branches.textContent = item.branches.join(" | ");
  body.textContent = item.translation;
}

if (select && title && branches && body) {
  select.addEventListener("change", (event) => {
    renderTranslation(event.target.value);
  });

  renderTranslation(select.value);
}

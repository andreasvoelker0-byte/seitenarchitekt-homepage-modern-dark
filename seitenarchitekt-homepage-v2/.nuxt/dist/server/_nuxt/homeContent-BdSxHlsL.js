import { _ as __nuxt_component_0 } from "./nuxt-link-DYbrFFRo.js";
import { defineComponent, ref, watch, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as useRoute } from "../server.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    const mobileOpen = ref(false);
    const route = useRoute();
    const isLinkActive = (to) => {
      if (to === "/") {
        return route.path === "/";
      }
      if (to.startsWith("/#")) {
        return route.path === "/" && route.hash === to.replace("/", "");
      }
      return route.path === to || route.path.startsWith(`${to}/`);
    };
    watch(
      () => route.fullPath,
      () => {
        mobileOpen.value = false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed inset-x-0 top-0 z-50" }, _attrs))}><div class="container-shell pt-5 sm:pt-6"><div data-header class="border border-[rgba(201,167,106,0.12)] bg-[rgba(7,7,7,0.66)] px-5 py-4 backdrop-blur-xl transition-all duration-300 sm:px-7"><div class="flex items-center justify-between gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-baseline gap-0.5 text-lg text-[var(--text)] transition duration-300 hover:opacity-90 sm:text-xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-medium"${_scopeId}>Seiten</span><span class="eyebrow-text"${_scopeId}>Architekt</span>`);
          } else {
            return [
              createVNode("span", { class: "font-medium" }, "Seiten"),
              createVNode("span", { class: "eyebrow-text" }, "Architekt")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden items-center gap-1 lg:flex"><!--[-->`);
      ssrRenderList(__props.links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.label,
          to: link.to,
          class: ["nav-link", { "nav-link-active": isLinkActive(link.to) }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#kontakt",
        class: "gold-button hidden lg:inline-flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kontakt <span${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode(" Kontakt "),
              createVNode("span", null, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="inline-flex h-11 w-11 items-center justify-center border border-[rgba(201,167,106,0.18)] text-[var(--text)] lg:hidden" type="button" aria-label="Navigation öffnen"><span class="space-y-1.5"><span class="block h-px w-5 bg-current"></span><span class="block h-px w-5 bg-current"></span></span></button></div>`);
      if (unref(mobileOpen)) {
        _push(`<nav class="mt-5 grid gap-1 border-t border-[rgba(201,167,106,0.12)] pt-5 lg:hidden"><!--[-->`);
        ssrRenderList(__props.links, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.label,
            to: link.to,
            class: ["nav-link px-0", { "nav-link-active": isLinkActive(link.to) }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#kontakt",
          class: "gold-button mt-3 w-full justify-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Kontakt <span${_scopeId}>→</span>`);
            } else {
              return [
                createTextVNode(" Kontakt "),
                createVNode("span", null, "→")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  props: {
    navigation: {},
    services: {},
    legal: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-[rgba(201,167,106,0.12)] bg-[rgba(7,7,7,0.82)] py-14" }, _attrs))}><div class="container-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]"><div><p class="text-lg text-[var(--text)]"><span class="font-medium">Seiten</span><span class="eyebrow-text">Architekt</span></p></div><div><h3 class="tiny-kicker">Navigation</h3><ul class="mt-5 space-y-3 text-sm text-[var(--muted)]"><!--[-->`);
      ssrRenderList(__props.navigation, (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: "transition hover:text-[var(--text)]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-1"><div><h3 class="tiny-kicker">Leistungen</h3><ul class="mt-5 space-y-3 text-sm text-[var(--muted)]"><!--[-->`);
      ssrRenderList(__props.services, (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: "transition hover:text-[var(--text)]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><h3 class="tiny-kicker">Rechtliches</h3><ul class="mt-5 space-y-3 text-sm text-[var(--muted)]"><!--[-->`);
      ssrRenderList(__props.legal, (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: "transition hover:text-[var(--text)]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeContent = {
  navLinks: [
    { label: "Home", to: "/" },
    { label: "Über mich", to: "/ueber-mich" },
    { label: "Leistungen", to: "/leistungen" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Blog", to: "/blog" },
    { label: "Kontakt", to: "/#kontakt" }
  ],
  hero: {
    title: "Professionelle Website erstellen lassen für Handwerker in Berlin",
    copy: "Für Handwerksbetriebe, die ihre Website professionell erstellen lassen möchten: mit klarer Struktur, lokaler SEO und einem Auftritt, der Vertrauen schafft.",
    primaryCta: { label: "Website prüfen lassen", to: "/#kontakt" },
    secondaryCta: { label: "Portfolio ansehen", to: "/portfolio" },
    image: "/images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
  },
  problems: {
    title: "Warum viele Handwerker-Websites keine Aufträge bringen",
    intro: "Viele Websites wurden vor Jahren erstellt und danach kaum verändert. Sie zeigen zwar den Betrieb – bringen aber keine neuen Kunden.",
    copy: "Der Grund ist selten das Design. Meist liegt es an der Struktur der Website. Wenn Besucher nicht sofort verstehen, welche Leistungen du anbietest, in welcher Region du arbeitest und warum sie dich kontaktieren sollten – verlassen sie die Seite wieder.",
    ctaLabel: "Lösung ansehen →",
    cards: [
      'Viele Websites nennen nur allgemeine Begriffe wie „Renovierung" oder „Installation". Für Kunden ist oft nicht erkennbar, was konkret angeboten wird.',
      'Kunden suchen direkt bei Google nach „Elektriker Berlin" oder „Dachdecker Berlin". Ohne lokale Optimierung wird die Website kaum gefunden.',
      "Ein großer Teil der Besucher kommt heute über das Smartphone. Unübersichtliche Seiten werden sofort wieder verlassen.",
      "Viele Websites erklären zwar Leistungen – führen Besucher aber nicht zur Kontaktaufnahme. Eine klare Struktur fehlt."
    ],
    modal: {
      intro: "Drei Dinge entscheiden, ob eine Handwerker-Website Anfragen bringt oder nicht.",
      steps: [
        "Deine Website sollte auf den ersten Blick zeigen, wofür dein Betrieb steht, wo du arbeitest und wie Interessenten schnell Kontakt aufnehmen können.",
        "Referenzen, regionale Nähe und ein erreichbarer Ansprechpartner machen aus Besuchern zahlende Kunden.",
        "Die Website muss technisch und inhaltlich so aufgebaut sein, dass sie bei lokalen Google-Suchen gefunden wird."
      ],
      outro: "Ich schaue mir deine aktuelle Situation an und gebe dir eine ehrliche Einschätzung.",
      cta: "Jetzt kostenlos anfragen →",
      footnote: "Keine Werbung. Kein Spam. Nur eine ehrliche Einschätzung."
    }
  },
  services: {
    title: "Website erstellen lassen für Handwerker",
    copy: "Wenn du deine Website erstellen lassen willst, sollte sie mehr können als gut aussehen: Sie muss Leistungen verständlich zeigen, Vertrauen aufbauen und Anfragen erleichtern.",
    cta: { label: "Alle Leistungen ansehen", to: "/leistungen" },
    image: "/images/maik-jonietz-_yMciiStJyY-unsplash.jpg",
    items: [
      {
        number: "01",
        title: "Strategie & Struktur",
        copy: "Ich entwickle Inhalte und Seitenstrukturen für Handwerker, Bauunternehmen, Gebäudetechnik und technische Dienstleister. So wird aus dem Wunsch nach einer neuen Website ein klarer und überzeugender Auftritt.",
        linkLabel: "Mehr zu Strategie & Struktur →",
        to: "/leistungen"
      },
      {
        number: "02",
        title: "Professionelle Umsetzung",
        copy: "Die Website funktioniert auf Smartphone, Tablet und Desktop. Besucher können den Betrieb jederzeit erreichen und erleben vom ersten Klick an einen professionellen, sauber aufgebauten Webauftritt.",
        linkLabel: "Mehr zur Umsetzung →",
        to: "/leistungen"
      },
      {
        number: "03",
        title: "SEO mit lokalem Fokus",
        copy: "Damit deine Website gefunden wird, braucht sie mehr als schöne Gestaltung: klare Struktur, regionale Relevanz, saubere Inhalte und eine technische Grundlage, die Sichtbarkeit unterstützt.",
        linkLabel: "Mehr zu SEO mit lokalem Fokus →",
        to: "/leistungen"
      }
    ]
  },
  differentiators: {
    title: "Webdesign für Handwerker funktioniert anders",
    copy: "Eine Website für Handwerksbetriebe muss andere Aufgaben erfüllen als eine klassische Unternehmensseite. Wichtig sind vor allem drei Dinge.",
    backgroundImage: "/images/daniil-komov-RdeKfL3w344-unsplash.jpg",
    items: [
      {
        title: "Klarheit",
        copy: "Besucher müssen sofort verstehen, welche Leistungen du anbietest, in welcher Region du arbeitest und wie sie dich kontaktieren können."
      },
      {
        title: "Vertrauen",
        copy: "Handwerksleistungen sind oft mit größeren Investitionen verbunden. Deshalb achten Kunden besonders auf Referenzen, regionale Nähe und erreichbare Ansprechpartner."
      },
      {
        title: "Sichtbarkeit",
        copy: "Die meisten neuen Kunden suchen online nach einem Handwerksbetrieb. Eine Website muss so aufgebaut sein, dass sie bei Google gefunden werden kann."
      }
    ]
  },
  process: {
    title: "So entsteht deine neue Website",
    copy: "Der Ablauf ist bewusst einfach gehalten. Handwerksbetriebe haben wenig Zeit für Marketingprojekte.",
    cta: { label: "Projekt starten", to: "/#kontakt" },
    steps: [
      { number: "1", title: "Erstgespräch", copy: "Leistungen, Zielkunden und Ziele klären" },
      { number: "2", title: "Struktur & Konzept", copy: "Klare Seitenstruktur für schnelles Verständnis" },
      { number: "3", title: "Design", copy: "Modern, übersichtlich und mobiloptimiert" },
      { number: "4", title: "Umsetzung", copy: "Technische Umsetzung mit schnellen Ladezeiten" },
      { number: "5", title: "Launch", copy: "Finale Prüfung und Veröffentlichung" }
    ]
  },
  portfolio: {
    title: "Projekte für Handwerksbetriebe",
    copy: "Vier Beispielseiten für Handwerksbetriebe mit klarem Fokus auf Nutzerführung, Vertrauen und eine saubere Darstellung der jeweiligen Leistungen.",
    cta: { label: "Portfolio ansehen →", to: "/portfolio" },
    items: [
      {
        label: "Sanitär · Badmodernisierung",
        title: "Klarbad Berlin",
        copy: "Wohnnahe Seite für Badmodernisierung, Sanitärinstallationen und Reparaturservice mit klarer Vertrauensführung."
      },
      {
        label: "Elektro · Installation & Smart Home",
        title: "Voltwerk Berlin",
        copy: "Präzise Seite für Elektroinstallation, Sanierung, Licht und smarte Gebäudetechnik mit technischer Klarheit."
      },
      {
        label: "Maler · Innenräume & Farbkonzepte",
        title: "Atelier Farbe Berlin",
        copy: "Stilvolle Seite für Innenräume, Fassaden und hochwertige Oberflächen mit ruhiger, hochwertiger Wirkung."
      },
      {
        label: "Bau · Rohbau, Sanierung, Umbau",
        title: "Schneider Bau Berlin",
        copy: "Substanzorientierte Seite für Rohbau, Sanierung und Projektabwicklung mit klarer, belastbarer Kommunikation."
      }
    ]
  },
  about: {
    title: "Erfahrener Webdesigner in Berlin",
    paragraphs: [
      "Ich arbeite als Freelancer im Bereich Webdesign mit Fokus auf kleine und mittlere Unternehmen. Ein großer Teil meiner Projekte entsteht für Handwerksbetriebe.",
      "Viele dieser Betriebe stehen vor ähnlichen Herausforderungen: Die Website bringt kaum Anfragen, Leistungen sind unklar dargestellt, und Google-Sichtbarkeit fehlt.",
      "Mein Ansatz ist bewusst einfach. Ich entwickle Websites, die Leistungen verständlich erklären, Vertrauen schaffen und neue Kundenanfragen ermöglichen. Wer eine Website professionell erstellen lassen möchte, braucht keine Show, sondern eine Lösung, die langfristig funktioniert."
    ],
    cta: { label: "Mehr über mich", to: "/ueber-mich" },
    image: "/images/portrait.png",
    skills: [
      "Webdesign",
      "Responsive Design",
      "SEO",
      "HTML / CSS",
      "WordPress",
      "Local SEO",
      "Google Analytics",
      "Page Speed"
    ]
  },
  blog: {
    title: "Tipps rund um Website-Projekte im Handwerk",
    copy: "Themen wie SEO für Handwerksbetriebe, Inhalte, Nutzerführung und alles, was wichtig wird, wenn du eine Website professionell erstellen lassen möchtest.",
    cta: { label: "Alle Artikel ansehen", to: "/blog" },
    posts: [
      {
        title: "SEO für Handwerker: So wirst du bei Google in Berlin gefunden",
        copy: "Lokale Suchmaschinenoptimierung erklärt – ohne technischen Fachjargon.",
        linkLabel: "Mehr zur lokalen Sichtbarkeit →",
        to: "/blog/seo-fuer-handwerker-google-berlin",
        image: "/images/maik-jonietz-_yMciiStJyY-unsplash.jpg"
      },
      {
        title: "5 Fehler, die Handwerker-Websites häufig machen",
        copy: "Die häufigsten Probleme, die dazu führen, dass Websites keine Anfragen bringen.",
        linkLabel: "Mehr zu typischen Website-Fehlern →",
        to: "/blog/5-fehler-handwerker-websites",
        image: "/images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
      },
      {
        title: "Warum eine mobile Website für Handwerker unverzichtbar ist",
        copy: "Mehr als die Hälfte aller Suchanfragen kommen heute vom Smartphone.",
        linkLabel: "Mehr zur mobilen Optimierung →",
        to: "/blog/mobile-website-handwerker",
        image: "/images/daniil-komov-RdeKfL3w344-unsplash.jpg"
      }
    ]
  },
  ctaBand: {
    title: "Website-Projekt starten",
    copy: "Wenn du deine Website erstellen lassen möchtest oder prüfen willst, ob deine bestehende Seite Potenzial hat, schauen wir gemeinsam auf Struktur, Inhalte und sinnvolle nächste Schritte.",
    primaryCta: { label: "Projekt unverbindlich besprechen", to: "/#kontakt" },
    secondaryCta: { label: "Leistungen ansehen", to: "/leistungen" }
  },
  contact: {
    title: "Deine Website professionell planen",
    copy: "Wenn du eine neue Website erstellen lassen möchtest oder deine bestehende Seite verbessern willst, kannst du dich direkt melden. Eine Zusammenarbeit ist auch deutschlandweit möglich.",
    methods: [
      { title: "WhatsApp", copy: "Direkt schreiben", href: "https://wa.me/855974675401" },
      { title: "E-Mail", copy: "kontakt@seitenarchitekt.com", href: "mailto:kontakt@seitenarchitekt.com" }
    ],
    formTitle: "Kostenloses Erstgespräch anfragen",
    buttonLabel: "Nachricht senden →"
  },
  footer: {
    navigation: [
      { label: "Home", to: "/" },
      { label: "Über mich", to: "/ueber-mich" },
      { label: "Leistungen", to: "/leistungen" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Blog", to: "/blog" },
      { label: "Kontaktbereich", to: "/#kontakt" }
    ],
    services: [
      { label: "Webdesign für Handwerker", to: "/leistungen" },
      { label: "Responsive Webseiten", to: "/leistungen" },
      { label: "SEO-Optimierung", to: "/leistungen" }
    ],
    legal: [
      { label: "Impressum", to: "/impressum" },
      { label: "Datenschutz", to: "/datenschutz" },
      { label: "Zum Impressum", to: "/impressum" },
      { label: "Zur Datenschutzerklärung", to: "/datenschutz" }
    ]
  }
};
export {
  _sfc_main$1 as _,
  _sfc_main as a,
  homeContent as h
};
//# sourceMappingURL=homeContent-BdSxHlsL.js.map

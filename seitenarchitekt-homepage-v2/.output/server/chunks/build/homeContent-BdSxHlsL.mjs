import { _ as __nuxt_component_0 } from './nuxt-link-DYbrFFRo.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as useRoute } from './server.mjs';

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
            _push2(` Kontakt <span${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(" Kontakt "),
              createVNode("span", null, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="inline-flex h-11 w-11 items-center justify-center border border-[rgba(201,167,106,0.18)] text-[var(--text)] lg:hidden" type="button" aria-label="Navigation \xF6ffnen"><span class="space-y-1.5"><span class="block h-px w-5 bg-current"></span><span class="block h-px w-5 bg-current"></span></span></button></div>`);
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
              _push2(` Kontakt <span${_scopeId}>\u2192</span>`);
            } else {
              return [
                createTextVNode(" Kontakt "),
                createVNode("span", null, "\u2192")
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
    { label: "\xDCber mich", to: "/ueber-mich" },
    { label: "Leistungen", to: "/leistungen" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Blog", to: "/blog" },
    { label: "Kontakt", to: "/#kontakt" }
  ],
  hero: {
    title: "Professionelle Website erstellen lassen f\xFCr Handwerker in Berlin",
    copy: "F\xFCr Handwerksbetriebe, die ihre Website professionell erstellen lassen m\xF6chten: mit klarer Struktur, lokaler SEO und einem Auftritt, der Vertrauen schafft.",
    primaryCta: { label: "Website pr\xFCfen lassen", to: "/#kontakt" },
    secondaryCta: { label: "Portfolio ansehen", to: "/portfolio" },
    image: "/images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
  },
  problems: {
    title: "Warum viele Handwerker-Websites keine Auftr\xE4ge bringen",
    intro: "Viele Websites wurden vor Jahren erstellt und danach kaum ver\xE4ndert. Sie zeigen zwar den Betrieb \u2013 bringen aber keine neuen Kunden.",
    copy: "Der Grund ist selten das Design. Meist liegt es an der Struktur der Website. Wenn Besucher nicht sofort verstehen, welche Leistungen du anbietest, in welcher Region du arbeitest und warum sie dich kontaktieren sollten \u2013 verlassen sie die Seite wieder.",
    ctaLabel: "L\xF6sung ansehen \u2192",
    cards: [
      'Viele Websites nennen nur allgemeine Begriffe wie \u201ERenovierung" oder \u201EInstallation". F\xFCr Kunden ist oft nicht erkennbar, was konkret angeboten wird.',
      'Kunden suchen direkt bei Google nach \u201EElektriker Berlin" oder \u201EDachdecker Berlin". Ohne lokale Optimierung wird die Website kaum gefunden.',
      "Ein gro\xDFer Teil der Besucher kommt heute \xFCber das Smartphone. Un\xFCbersichtliche Seiten werden sofort wieder verlassen.",
      "Viele Websites erkl\xE4ren zwar Leistungen \u2013 f\xFChren Besucher aber nicht zur Kontaktaufnahme. Eine klare Struktur fehlt."
    ],
    modal: {
      intro: "Drei Dinge entscheiden, ob eine Handwerker-Website Anfragen bringt oder nicht.",
      steps: [
        "Deine Website sollte auf den ersten Blick zeigen, wof\xFCr dein Betrieb steht, wo du arbeitest und wie Interessenten schnell Kontakt aufnehmen k\xF6nnen.",
        "Referenzen, regionale N\xE4he und ein erreichbarer Ansprechpartner machen aus Besuchern zahlende Kunden.",
        "Die Website muss technisch und inhaltlich so aufgebaut sein, dass sie bei lokalen Google-Suchen gefunden wird."
      ],
      outro: "Ich schaue mir deine aktuelle Situation an und gebe dir eine ehrliche Einsch\xE4tzung.",
      cta: "Jetzt kostenlos anfragen \u2192",
      footnote: "Keine Werbung. Kein Spam. Nur eine ehrliche Einsch\xE4tzung."
    }
  },
  services: {
    title: "Website erstellen lassen f\xFCr Handwerker",
    copy: "Wenn du deine Website erstellen lassen willst, sollte sie mehr k\xF6nnen als gut aussehen: Sie muss Leistungen verst\xE4ndlich zeigen, Vertrauen aufbauen und Anfragen erleichtern.",
    cta: { label: "Alle Leistungen ansehen", to: "/leistungen" },
    image: "/images/maik-jonietz-_yMciiStJyY-unsplash.jpg",
    items: [
      {
        number: "01",
        title: "Strategie & Struktur",
        copy: "Ich entwickle Inhalte und Seitenstrukturen f\xFCr Handwerker, Bauunternehmen, Geb\xE4udetechnik und technische Dienstleister. So wird aus dem Wunsch nach einer neuen Website ein klarer und \xFCberzeugender Auftritt.",
        linkLabel: "Mehr zu Strategie & Struktur \u2192",
        to: "/leistungen"
      },
      {
        number: "02",
        title: "Professionelle Umsetzung",
        copy: "Die Website funktioniert auf Smartphone, Tablet und Desktop. Besucher k\xF6nnen den Betrieb jederzeit erreichen und erleben vom ersten Klick an einen professionellen, sauber aufgebauten Webauftritt.",
        linkLabel: "Mehr zur Umsetzung \u2192",
        to: "/leistungen"
      },
      {
        number: "03",
        title: "SEO mit lokalem Fokus",
        copy: "Damit deine Website gefunden wird, braucht sie mehr als sch\xF6ne Gestaltung: klare Struktur, regionale Relevanz, saubere Inhalte und eine technische Grundlage, die Sichtbarkeit unterst\xFCtzt.",
        linkLabel: "Mehr zu SEO mit lokalem Fokus \u2192",
        to: "/leistungen"
      }
    ]
  },
  differentiators: {
    title: "Webdesign f\xFCr Handwerker funktioniert anders",
    copy: "Eine Website f\xFCr Handwerksbetriebe muss andere Aufgaben erf\xFCllen als eine klassische Unternehmensseite. Wichtig sind vor allem drei Dinge.",
    backgroundImage: "/images/daniil-komov-RdeKfL3w344-unsplash.jpg",
    items: [
      {
        title: "Klarheit",
        copy: "Besucher m\xFCssen sofort verstehen, welche Leistungen du anbietest, in welcher Region du arbeitest und wie sie dich kontaktieren k\xF6nnen."
      },
      {
        title: "Vertrauen",
        copy: "Handwerksleistungen sind oft mit gr\xF6\xDFeren Investitionen verbunden. Deshalb achten Kunden besonders auf Referenzen, regionale N\xE4he und erreichbare Ansprechpartner."
      },
      {
        title: "Sichtbarkeit",
        copy: "Die meisten neuen Kunden suchen online nach einem Handwerksbetrieb. Eine Website muss so aufgebaut sein, dass sie bei Google gefunden werden kann."
      }
    ]
  },
  process: {
    title: "So entsteht deine neue Website",
    copy: "Der Ablauf ist bewusst einfach gehalten. Handwerksbetriebe haben wenig Zeit f\xFCr Marketingprojekte.",
    cta: { label: "Projekt starten", to: "/#kontakt" },
    steps: [
      { number: "1", title: "Erstgespr\xE4ch", copy: "Leistungen, Zielkunden und Ziele kl\xE4ren" },
      { number: "2", title: "Struktur & Konzept", copy: "Klare Seitenstruktur f\xFCr schnelles Verst\xE4ndnis" },
      { number: "3", title: "Design", copy: "Modern, \xFCbersichtlich und mobiloptimiert" },
      { number: "4", title: "Umsetzung", copy: "Technische Umsetzung mit schnellen Ladezeiten" },
      { number: "5", title: "Launch", copy: "Finale Pr\xFCfung und Ver\xF6ffentlichung" }
    ]
  },
  portfolio: {
    title: "Projekte f\xFCr Handwerksbetriebe",
    copy: "Vier Beispielseiten f\xFCr Handwerksbetriebe mit klarem Fokus auf Nutzerf\xFChrung, Vertrauen und eine saubere Darstellung der jeweiligen Leistungen.",
    cta: { label: "Portfolio ansehen \u2192", to: "/portfolio" },
    items: [
      {
        label: "Sanit\xE4r \xB7 Badmodernisierung",
        title: "Klarbad Berlin",
        copy: "Wohnnahe Seite f\xFCr Badmodernisierung, Sanit\xE4rinstallationen und Reparaturservice mit klarer Vertrauensf\xFChrung."
      },
      {
        label: "Elektro \xB7 Installation & Smart Home",
        title: "Voltwerk Berlin",
        copy: "Pr\xE4zise Seite f\xFCr Elektroinstallation, Sanierung, Licht und smarte Geb\xE4udetechnik mit technischer Klarheit."
      },
      {
        label: "Maler \xB7 Innenr\xE4ume & Farbkonzepte",
        title: "Atelier Farbe Berlin",
        copy: "Stilvolle Seite f\xFCr Innenr\xE4ume, Fassaden und hochwertige Oberfl\xE4chen mit ruhiger, hochwertiger Wirkung."
      },
      {
        label: "Bau \xB7 Rohbau, Sanierung, Umbau",
        title: "Schneider Bau Berlin",
        copy: "Substanzorientierte Seite f\xFCr Rohbau, Sanierung und Projektabwicklung mit klarer, belastbarer Kommunikation."
      }
    ]
  },
  about: {
    title: "Erfahrener Webdesigner in Berlin",
    paragraphs: [
      "Ich arbeite als Freelancer im Bereich Webdesign mit Fokus auf kleine und mittlere Unternehmen. Ein gro\xDFer Teil meiner Projekte entsteht f\xFCr Handwerksbetriebe.",
      "Viele dieser Betriebe stehen vor \xE4hnlichen Herausforderungen: Die Website bringt kaum Anfragen, Leistungen sind unklar dargestellt, und Google-Sichtbarkeit fehlt.",
      "Mein Ansatz ist bewusst einfach. Ich entwickle Websites, die Leistungen verst\xE4ndlich erkl\xE4ren, Vertrauen schaffen und neue Kundenanfragen erm\xF6glichen. Wer eine Website professionell erstellen lassen m\xF6chte, braucht keine Show, sondern eine L\xF6sung, die langfristig funktioniert."
    ],
    cta: { label: "Mehr \xFCber mich", to: "/ueber-mich" },
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
    copy: "Themen wie SEO f\xFCr Handwerksbetriebe, Inhalte, Nutzerf\xFChrung und alles, was wichtig wird, wenn du eine Website professionell erstellen lassen m\xF6chtest.",
    cta: { label: "Alle Artikel ansehen", to: "/blog" },
    posts: [
      {
        title: "SEO f\xFCr Handwerker: So wirst du bei Google in Berlin gefunden",
        copy: "Lokale Suchmaschinenoptimierung erkl\xE4rt \u2013 ohne technischen Fachjargon.",
        linkLabel: "Mehr zur lokalen Sichtbarkeit \u2192",
        to: "/blog/seo-fuer-handwerker-google-berlin",
        image: "/images/maik-jonietz-_yMciiStJyY-unsplash.jpg"
      },
      {
        title: "5 Fehler, die Handwerker-Websites h\xE4ufig machen",
        copy: "Die h\xE4ufigsten Probleme, die dazu f\xFChren, dass Websites keine Anfragen bringen.",
        linkLabel: "Mehr zu typischen Website-Fehlern \u2192",
        to: "/blog/5-fehler-handwerker-websites",
        image: "/images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
      },
      {
        title: "Warum eine mobile Website f\xFCr Handwerker unverzichtbar ist",
        copy: "Mehr als die H\xE4lfte aller Suchanfragen kommen heute vom Smartphone.",
        linkLabel: "Mehr zur mobilen Optimierung \u2192",
        to: "/blog/mobile-website-handwerker",
        image: "/images/daniil-komov-RdeKfL3w344-unsplash.jpg"
      }
    ]
  },
  ctaBand: {
    title: "Website-Projekt starten",
    copy: "Wenn du deine Website erstellen lassen m\xF6chtest oder pr\xFCfen willst, ob deine bestehende Seite Potenzial hat, schauen wir gemeinsam auf Struktur, Inhalte und sinnvolle n\xE4chste Schritte.",
    primaryCta: { label: "Projekt unverbindlich besprechen", to: "/#kontakt" },
    secondaryCta: { label: "Leistungen ansehen", to: "/leistungen" }
  },
  contact: {
    title: "Deine Website professionell planen",
    copy: "Wenn du eine neue Website erstellen lassen m\xF6chtest oder deine bestehende Seite verbessern willst, kannst du dich direkt melden. Eine Zusammenarbeit ist auch deutschlandweit m\xF6glich.",
    methods: [
      { title: "WhatsApp", copy: "Direkt schreiben", href: "https://wa.me/855974675401" },
      { title: "E-Mail", copy: "kontakt@seitenarchitekt.com", href: "mailto:kontakt@seitenarchitekt.com" }
    ],
    formTitle: "Kostenloses Erstgespr\xE4ch anfragen",
    buttonLabel: "Nachricht senden \u2192"
  },
  footer: {
    navigation: [
      { label: "Home", to: "/" },
      { label: "\xDCber mich", to: "/ueber-mich" },
      { label: "Leistungen", to: "/leistungen" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Blog", to: "/blog" },
      { label: "Kontaktbereich", to: "/#kontakt" }
    ],
    services: [
      { label: "Webdesign f\xFCr Handwerker", to: "/leistungen" },
      { label: "Responsive Webseiten", to: "/leistungen" },
      { label: "SEO-Optimierung", to: "/leistungen" }
    ],
    legal: [
      { label: "Impressum", to: "/impressum" },
      { label: "Datenschutz", to: "/datenschutz" },
      { label: "Zum Impressum", to: "/impressum" },
      { label: "Zur Datenschutzerkl\xE4rung", to: "/datenschutz" }
    ]
  }
};

export { _sfc_main$1 as _, _sfc_main as a, homeContent as h };
//# sourceMappingURL=homeContent-BdSxHlsL.mjs.map

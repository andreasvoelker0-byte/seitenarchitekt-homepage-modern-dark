import { _ as _sfc_main$8, h as homeContent, a as _sfc_main$9 } from "./homeContent-BdSxHlsL.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-DYbrFFRo.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-BVNyuobW.js";
import "../server.mjs";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/unctx/dist/index.mjs";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/defu/dist/defu.mjs";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/ufo/dist/index.mjs";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AboutPageHeroSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden pt-32 sm:pt-36 lg:min-h-screen lg:pt-40" }, _attrs))}><div class="absolute inset-0 overflow-hidden"><div data-about-hero-bg class="absolute inset-0 scale-110 bg-cover bg-center opacity-30" style="${ssrRenderStyle({ backgroundImage: `url(${__props.content.backgroundImage})` })}"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,167,106,0.22),transparent_24%),linear-gradient(180deg,rgba(8,8,8,0.18),rgba(8,8,8,0.9)_68%,rgba(8,8,8,1))]"></div></div><div class="container-shell relative z-10 pb-20 sm:pb-24 lg:pb-28"><div class="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center"><div data-about-hero-content class="max-w-4xl"><span class="section-label">${ssrInterpolate(__props.content.badge)}</span><h1 class="section-title mt-8 max-w-5xl text-5xl sm:text-6xl lg:text-[5.65rem]">${ssrInterpolate(__props.content.titleLead)}<br><em class="font-normal text-[var(--accent)]">${ssrInterpolate(__props.content.titleAccent)}</em></h1><p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">${ssrInterpolate(__props.content.copy)}</p><div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.content.primaryCta.to,
        class: "gold-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content.primaryCta.label)} <span${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.primaryCta.label) + " ", 1),
              createVNode("span", null, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.content.secondaryCta.to,
        class: "ghost-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content.secondaryCta.label)} <span${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.secondaryCta.label) + " ", 1),
              createVNode("span", null, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div data-about-hero-image class="relative mx-auto w-full max-w-[35rem] lg:mx-0"><div class="absolute -left-3 top-14 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"></div><div class="absolute left-9 top-8 h-14 w-14 rounded-full border border-[rgba(213,182,128,0.35)]"></div><div class="absolute -right-6 top-6 h-60 w-60 rounded-full border border-[rgba(255,255,255,0.34)] sm:h-72 sm:w-72"></div><div class="absolute right-12 top-16 h-40 w-40 rounded-full border border-[rgba(201,167,106,0.28)] sm:h-52 sm:w-52"></div><div class="panel relative overflow-hidden p-4 sm:p-5"><div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%)]"></div><img${ssrRenderAttr("src", __props.content.image)} alt="Portrait" class="h-[500px] w-full object-cover object-center sm:h-[620px]"><div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.48)] via-transparent to-transparent"></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutPageHeroSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AboutPageIntroSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell"><div class="max-w-4xl"><span data-reveal class="section-label">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 max-w-4xl text-4xl sm:text-5xl lg:text-[4.3rem]">${ssrInterpolate(__props.content.title)}</h2></div><div class="mt-14 grid gap-8 lg:grid-cols-2"><!--[-->`);
      ssrRenderList(__props.content.columns, (column, columnIndex) => {
        _push(`<div class="panel p-8 sm:p-10"><!--[-->`);
        ssrRenderList(column, (paragraph) => {
          _push(`<p data-reveal class="text-base leading-8 text-[var(--muted)] [&amp;:not(:first-child)]:mt-6">${ssrInterpolate(paragraph)}</p>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutPageIntroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AboutPageApproachSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell"><div class="mx-auto max-w-3xl text-center"><span data-reveal class="section-label justify-center">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">${ssrInterpolate(__props.content.title)}</h2><p data-reveal class="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">${ssrInterpolate(__props.content.copy)}</p></div><div class="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(__props.content.items, (item) => {
        _push(`<article data-reveal class="panel p-8"><div class="split-line mb-8"></div><h3 class="display-face text-2xl text-[var(--text)]">${ssrInterpolate(item.title)}</h3><p class="mt-5 text-sm leading-7 text-[var(--muted)]">${ssrInterpolate(item.copy)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutPageApproachSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AboutPageWhySection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="absolute inset-0 overflow-hidden"><div data-about-why-bg class="absolute inset-0 scale-110 bg-cover bg-center opacity-22" style="${ssrRenderStyle({ backgroundImage: `url(${__props.content.backgroundImage})` })}"></div><div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.92),rgba(7,7,7,0.96))]"></div></div><div class="container-shell relative z-10"><div class="mx-auto max-w-3xl text-center"><span data-reveal class="section-label justify-center">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">${ssrInterpolate(__props.content.title)}</h2></div><div class="mt-14 grid gap-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(__props.content.items, (item) => {
        _push(`<article data-reveal class="panel p-8"><span class="tiny-kicker">${ssrInterpolate(item.title)}</span><p class="mt-5 text-base leading-8 text-[var(--muted)]">${ssrInterpolate(item.copy)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutPageWhySection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AboutPageValuesSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell"><div class="max-w-4xl"><span data-reveal class="section-label">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 max-w-4xl text-4xl sm:text-5xl lg:text-[4.2rem]">${ssrInterpolate(__props.content.title)}</h2></div><div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(__props.content.items, (item) => {
        _push(`<article data-reveal class="panel p-8"><div class="number-box">${ssrInterpolate(item.title.slice(0, 1))}</div><h3 class="mt-8 display-face text-2xl text-[var(--text)]">${ssrInterpolate(item.title)}</h3><p class="mt-5 text-sm leading-7 text-[var(--muted)]">${ssrInterpolate(item.copy)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutPageValuesSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AboutPagePersonalSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div data-reveal class="relative"><div class="absolute -left-5 -top-5 hidden h-20 w-20 rounded-full border border-[rgba(201,167,106,0.24)] lg:block"></div><div class="panel overflow-hidden p-4 sm:p-5"><img${ssrRenderAttr("src", __props.content.image)} alt="Portrait" class="h-[520px] w-full object-cover object-center sm:h-[620px]"></div></div><div><span data-reveal class="section-label">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 max-w-3xl text-4xl sm:text-5xl lg:text-[4.1rem]">${ssrInterpolate(__props.content.title)}</h2><!--[-->`);
      ssrRenderList(__props.content.paragraphs, (paragraph) => {
        _push(`<p data-reveal class="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">${ssrInterpolate(paragraph)}</p>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "data-reveal": "",
        to: __props.content.cta.to,
        class: "gold-button mt-9"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content.cta.label)} <span${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.cta.label) + " ", 1),
              createVNode("span", null, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutPagePersonalSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AboutPageFinalCtaSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-20 pt-6 sm:pb-24 lg:pb-28" }, _attrs))}><div class="container-shell"><div class="panel relative overflow-hidden px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20"><div class="relative max-w-4xl"><h2 data-reveal class="section-title max-w-3xl text-4xl sm:text-5xl lg:text-[4.2rem]">${ssrInterpolate(__props.content.title)}</h2><p data-reveal class="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">${ssrInterpolate(__props.content.copy)}</p><div data-reveal class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.content.primaryCta.to,
        class: "gold-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content.primaryCta.label)} <span${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.primaryCta.label) + " ", 1),
              createVNode("span", null, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.content.secondaryCta.to,
        class: "ghost-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content.secondaryCta.label)} <span${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.secondaryCta.label) + " ", 1),
              createVNode("span", null, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutPageFinalCtaSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const aboutContent = {
  seo: {
    title: "Über mich | SeitenArchitekt Berlin",
    description: "Erfahre mehr über SeitenArchitekt: Webdesign-Freelancer aus Berlin für Handwerksbetriebe, die ihre Website professionell erstellen lassen möchten und Wert auf klare Nutzerführung legen."
  },
  hero: {
    badge: "Über mich · Website-Projekte für Handwerker",
    titleLead: "Ich begleite Betriebe dabei, ihre",
    titleAccent: "Website professionell erstellen zu lassen",
    copy: "Ich unterstütze Handwerksunternehmen dabei, online vertrauenswürdig aufzutreten, klare Leistungen zu zeigen und aus Besuchern konkrete Anfragen zu machen.",
    primaryCta: { label: "Kostenloses Erstgespräch", to: "/#kontakt" },
    secondaryCta: { label: "Referenzen ansehen", to: "/portfolio" },
    image: "/images/portrait.png",
    backgroundImage: "/images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
  },
  intro: {
    label: "Persönliche Vorstellung",
    title: "Strategisches Webdesign für Handwerksbetriebe mit klarem Praxisbezug",
    columns: [
      [
        "Ich arbeite seit mehreren Jahren als Webdesigner in Berlin und unterstütze kleine und mittlere Betriebe dabei, ihre Website strategisch neu aufzustellen. Mein Schwerpunkt liegt auf Unternehmen, die keine Marketingabteilung brauchen, sondern eine klare, funktionierende Lösung.",
        "Gerade im Handwerk entscheidet der erste Eindruck online oft darüber, ob ein Interessent anruft oder weitersucht. Deshalb entwickle ich Seiten, die Leistungen klar erklären, Kompetenz zeigen und den nächsten Schritt zur Kontaktaufnahme einfach machen."
      ],
      [
        "Meine Projekte sind bewusst praxisnah aufgebaut: verständliche Inhalte, saubere Struktur, mobiloptimierte Darstellung und klare Nutzerführung. Kein Design um des Designs willen, sondern eine Website, die im Alltag arbeitet und Vertrauen schafft.",
        "Ich arbeite partnerschaftlich, direkt und transparent. Du weißt jederzeit, was als Nächstes passiert, welche Entscheidungen sinnvoll sind und worauf wir verzichten können."
      ]
    ]
  },
  approach: {
    label: "Meine Arbeitsweise",
    title: "So gehe ich Projekte an",
    copy: "Ein klarer Ablauf sorgt dafür, dass die Website nicht nur gut aussieht, sondern im Alltag Ergebnisse bringt.",
    items: [
      {
        title: "1. Klarheit vor Gestaltung",
        copy: "Wir definieren zuerst Zielgruppe, Leistungen und Kernbotschaften. Danach entsteht ein Design, das diese Inhalte unterstützt."
      },
      {
        title: "2. Vertrauen sichtbar machen",
        copy: "Referenzen, regionale Nähe, nachvollziehbare Leistungsbeschreibungen und klare Kontaktwege stehen im Mittelpunkt."
      },
      {
        title: "3. Nutzerführung mit System",
        copy: "Jede Seite hat ein Ziel. Besucher werden strukturiert von der Information zur konkreten Anfrage geführt."
      },
      {
        title: "4. Saubere technische Umsetzung",
        copy: "Responsives Verhalten, schnelle Ladezeiten und robuste Seitenstruktur sind Pflicht, nicht Zusatz."
      }
    ]
  },
  why: {
    label: "Zusammenarbeit",
    title: "Warum Handwerker mit mir arbeiten",
    items: [
      {
        title: "Spezialisierung statt Bauchladen",
        copy: "Ich kenne die typischen Anforderungen von Handwerksbetrieben und entwickle Seiten, die genau darauf einzahlen."
      },
      {
        title: "Verständliche Kommunikation",
        copy: "Klare Entscheidungen ohne Fachjargon. Du bekommst nachvollziehbare Empfehlungen statt technischer Überfrachtung."
      },
      {
        title: "Professioneller Auftritt",
        copy: "Die Website vermittelt Qualität, Zuverlässigkeit und Struktur. So entsteht Vertrauen bereits vor dem ersten Gespräch."
      }
    ],
    backgroundImage: "/images/daniil-komov-RdeKfL3w344-unsplash.jpg"
  },
  values: {
    label: "Werte und Anspruch",
    title: "Worauf du dich in der Zusammenarbeit verlassen kannst",
    items: [
      {
        title: "Zuverlässigkeit",
        copy: "Verbindliche Absprachen, klare Zeitfenster und transparente Kommunikation."
      },
      {
        title: "Saubere Umsetzung",
        copy: "Technisch solide Seitenstruktur mit Fokus auf Performance, Wartbarkeit und mobile Nutzung."
      },
      {
        title: "Ehrliche Beratung",
        copy: "Ich empfehle nur Maßnahmen, die für dein Unternehmen sinnvoll sind und wirklich Wirkung entfalten."
      },
      {
        title: "Langfristiger Nutzen",
        copy: "Deine Website wird so aufgebaut, dass sie auch in zwei oder drei Jahren noch tragfähig und erweiterbar ist."
      }
    ]
  },
  personal: {
    label: "Persönlich",
    title: "Pragmatisch, strukturiert und nah an deinem Alltag",
    paragraphs: [
      "Ich weiß, dass in Handwerksbetrieben wenig Zeit für lange Abstimmungen bleibt. Deshalb halte ich Prozesse schlank, bereite Entscheidungen sauber vor und arbeite mit klaren Prioritäten.",
      "Mein Anspruch ist, dass du nach dem Projekt nicht nur eine schöne Website hast, sondern ein Werkzeug, das deine Leistungen professionell präsentiert und die Kontaktaufnahme erleichtert. Genau deshalb verbinde ich Strategie, Inhalt und Gestaltung in einem klaren Prozess."
    ],
    cta: { label: "Kontakt aufnehmen", to: "/#kontakt" },
    image: "/images/portrait.png"
  },
  finalCta: {
    title: "Lass uns deine Website professionell aufstellen",
    copy: "Wenn du deine Website erstellen lassen möchtest und eine klare, professionelle Lösung suchst, die zu deinem Betrieb passt und langfristig funktioniert, lass uns sprechen.",
    primaryCta: { label: "Kostenloses Erstgespräch", to: "/#kontakt" },
    secondaryCta: { label: "Leistungen ansehen", to: "/leistungen" }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ueber-mich",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: aboutContent.seo.title,
      meta: [
        {
          name: "description",
          content: aboutContent.seo.description
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$8;
      const _component_AboutPageHeroSection = _sfc_main$7;
      const _component_AboutPageIntroSection = _sfc_main$6;
      const _component_AboutPageApproachSection = _sfc_main$5;
      const _component_AboutPageWhySection = _sfc_main$4;
      const _component_AboutPageValuesSection = _sfc_main$3;
      const _component_AboutPagePersonalSection = _sfc_main$2;
      const _component_AboutPageFinalCtaSection = _sfc_main$1;
      const _component_AppFooter = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        links: unref(homeContent).navLinks
      }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_AboutPageHeroSection, {
        content: unref(aboutContent).hero
      }, null, _parent));
      _push(ssrRenderComponent(_component_AboutPageIntroSection, {
        content: unref(aboutContent).intro
      }, null, _parent));
      _push(ssrRenderComponent(_component_AboutPageApproachSection, {
        content: unref(aboutContent).approach
      }, null, _parent));
      _push(ssrRenderComponent(_component_AboutPageWhySection, {
        content: unref(aboutContent).why
      }, null, _parent));
      _push(ssrRenderComponent(_component_AboutPageValuesSection, {
        content: unref(aboutContent).values
      }, null, _parent));
      _push(ssrRenderComponent(_component_AboutPagePersonalSection, {
        content: unref(aboutContent).personal
      }, null, _parent));
      _push(ssrRenderComponent(_component_AboutPageFinalCtaSection, {
        content: unref(aboutContent).finalCta
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, {
        navigation: unref(homeContent).footer.navigation,
        services: unref(homeContent).footer.services,
        legal: unref(homeContent).footer.legal
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ueber-mich.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ueber-mich-BFTukDYe.js.map

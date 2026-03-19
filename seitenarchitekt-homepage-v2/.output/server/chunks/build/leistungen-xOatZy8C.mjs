import { _ as _sfc_main$1$1, h as homeContent, a as _sfc_main$8 } from './homeContent-BdSxHlsL.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DYbrFFRo.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useHead } from './v3-BVNyuobW.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ServicesPageHeroSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden pt-32 sm:pt-36 lg:min-h-screen lg:pt-40" }, _attrs))}><div class="absolute inset-0 overflow-hidden"><div data-services-hero-bg class="absolute inset-0 scale-110 bg-cover bg-center opacity-28" style="${ssrRenderStyle({ backgroundImage: `url(${__props.content.backgroundImage})` })}"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,167,106,0.22),transparent_24%),linear-gradient(180deg,rgba(8,8,8,0.18),rgba(8,8,8,0.9)_68%,rgba(8,8,8,1))]"></div></div><div class="container-shell relative z-10 pb-20 sm:pb-24 lg:pb-28"><div class="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center"><div data-services-hero-content class="max-w-4xl"><span class="section-label">${ssrInterpolate(__props.content.badge)}</span><h1 class="section-title mt-8 max-w-5xl text-5xl sm:text-6xl lg:text-[5.45rem]">${ssrInterpolate(__props.content.titleLead)}<br><em class="font-normal text-[var(--accent)]">${ssrInterpolate(__props.content.titleAccent)}</em></h1><p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">${ssrInterpolate(__props.content.copy)}</p><div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.content.primaryCta.to,
        class: "gold-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content.primaryCta.label)} <span${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.primaryCta.label) + " ", 1),
              createVNode("span", null, "\u2192")
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
            _push2(`${ssrInterpolate(__props.content.secondaryCta.label)} <span${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.secondaryCta.label) + " ", 1),
              createVNode("span", null, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div data-services-hero-image class="relative mx-auto w-full max-w-[36rem] lg:mx-0"><div class="absolute -left-3 top-12 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"></div><div class="absolute left-9 top-6 h-14 w-14 rounded-full border border-[rgba(213,182,128,0.35)]"></div><div class="absolute -right-6 top-6 h-56 w-56 rounded-full border border-[rgba(255,255,255,0.3)] sm:h-72 sm:w-72"></div><div class="absolute right-12 top-16 h-40 w-40 rounded-full border border-[rgba(201,167,106,0.28)] sm:h-52 sm:w-52"></div><div class="panel relative overflow-hidden p-4 sm:p-5"><div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%)]"></div><img${ssrRenderAttr("src", __props.content.image)} alt="Website-Projekt" class="h-[500px] w-full object-cover object-center sm:h-[620px]"><div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.52)] via-transparent to-transparent"></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServicesPageHeroSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ServicesPageIntroSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell"><div class="max-w-4xl"><span data-reveal class="section-label">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 max-w-5xl text-4xl sm:text-5xl lg:text-[4.25rem]">${ssrInterpolate(__props.content.title)}</h2></div><div class="mt-14 grid gap-8 lg:grid-cols-2"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServicesPageIntroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ServicesPagePackagesSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "pakete",
        class: "py-24 sm:py-28 lg:py-32"
      }, _attrs))}><div class="container-shell"><div class="mx-auto max-w-3xl text-center"><span data-reveal class="section-label justify-center">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">${ssrInterpolate(__props.content.title)}</h2><p data-reveal class="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">${ssrInterpolate(__props.content.copy)}</p></div><div class="mt-14 grid gap-6 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(__props.content.items, (item) => {
        _push(`<article data-reveal class="${ssrRenderClass([item.featured ? "border-[rgba(201,167,106,0.26)] shadow-[0_28px_80px_rgba(0,0,0,0.36)]" : "", "panel relative overflow-hidden p-8 sm:p-10"])}">`);
        if (item.featured) {
          _push(`<div class="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(201,167,106,0.8),transparent)]"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.badge) {
          _push(`<div class="tiny-kicker mb-6">${ssrInterpolate(item.badge)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-end justify-between gap-6 border-b border-[rgba(201,167,106,0.12)] pb-6"><h3 class="display-face text-3xl text-[var(--text)] sm:text-[2rem]">${ssrInterpolate(item.title)}</h3><div class="display-face text-2xl text-[var(--accent)] sm:text-3xl">${ssrInterpolate(item.price)}</div></div><p class="mt-6 text-base leading-8 text-[var(--muted)]">${ssrInterpolate(item.benefit)}</p><ul class="mt-8 space-y-4 text-sm leading-7 text-[var(--muted)]"><!--[-->`);
        ssrRenderList(item.features, (feature) => {
          _push(`<li class="flex gap-3"><span class="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"></span><span>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServicesPagePackagesSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ServicesPageQualitySection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="absolute inset-0 overflow-hidden"><div data-services-quality-bg class="absolute inset-0 scale-110 bg-cover bg-center opacity-20" style="${ssrRenderStyle({ backgroundImage: `url(${__props.content.backgroundImage})` })}"></div><div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.92),rgba(7,7,7,0.96))]"></div></div><div class="container-shell relative z-10"><div class="mx-auto max-w-3xl text-center"><span data-reveal class="section-label justify-center">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">${ssrInterpolate(__props.content.title)}</h2></div><div class="mt-14 grid gap-6 lg:grid-cols-3"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServicesPageQualitySection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ServicesPageExtensionsSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell"><div class="max-w-4xl"><span data-reveal class="section-label">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 max-w-4xl text-4xl sm:text-5xl lg:text-[4.2rem]">${ssrInterpolate(__props.content.title)}</h2></div><div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(__props.content.items, (item) => {
        _push(`<article data-reveal class="panel p-8"><div class="split-line mb-8"></div><h3 class="display-face text-2xl text-[var(--text)]">${ssrInterpolate(item.title)}</h3><p class="mt-5 text-sm leading-7 text-[var(--muted)]">${ssrInterpolate(item.copy)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServicesPageExtensionsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ServicesPageProcessSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell"><div class="mx-auto max-w-3xl text-center"><span data-reveal class="section-label justify-center">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">${ssrInterpolate(__props.content.title)}</h2></div><div class="mt-14 grid gap-6 lg:grid-cols-5"><!--[-->`);
      ssrRenderList(__props.content.steps, (step) => {
        _push(`<article data-reveal class="panel p-7 sm:p-8"><div class="number-box">${ssrInterpolate(step.number)}</div><h3 class="mt-8 display-face text-2xl text-[var(--text)]">${ssrInterpolate(step.title)}</h3><p class="mt-5 text-sm leading-7 text-[var(--muted)]">${ssrInterpolate(step.copy)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServicesPageProcessSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ServicesPageFinalCtaSection",
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
            _push2(`${ssrInterpolate(__props.content.primaryCta.label)} <span${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.primaryCta.label) + " ", 1),
              createVNode("span", null, "\u2192")
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
            _push2(`${ssrInterpolate(__props.content.secondaryCta.label)} <span${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.secondaryCta.label) + " ", 1),
              createVNode("span", null, "\u2192")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServicesPageFinalCtaSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const servicesContent = {
  seo: {
    title: "Leistungen f\xFCr Handwerksbetriebe | SeitenArchitekt",
    description: "Leistungen von SeitenArchitekt f\xFCr Handwerksbetriebe, die ihre Website erstellen lassen m\xF6chten: klare Struktur, professioneller Auftritt und Fokus auf qualifizierte Anfragen."
  },
  hero: {
    badge: "Leistungen \xB7 Website-Projekte f\xFCr Handwerker",
    titleLead: "Leistungen rund um",
    titleAccent: "Website erstellen lassen",
    copy: "F\xFCr Handwerksbetriebe, die eine professionelle Website erstellen lassen m\xF6chten: mit klarer Nutzerf\xFChrung, glaubw\xFCrdigem Auftritt und einer Struktur, die Anfragen unterst\xFCtzt.",
    primaryCta: { label: "Projekt anfragen", to: "/#kontakt" },
    secondaryCta: { label: "Pakete vergleichen", to: "/leistungen#pakete" },
    image: "/images/maik-jonietz-_yMciiStJyY-unsplash.jpg",
    backgroundImage: "/images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
  },
  intro: {
    label: "Leistungsverst\xE4ndnis",
    title: "Was ich umsetze, wenn du deine Website professionell erstellen lassen m\xF6chtest",
    columns: [
      [
        "Eine gute Handwerker-Website muss mehr leisten als nur optisch zu \xFCberzeugen. Wenn dein Betrieb online professionell aufgestellt werden soll, muss sie deine Kompetenz sichtbar machen, Vertrauen aufbauen und Interessenten schnell zur Kontaktaufnahme f\xFChren.",
        "Deshalb verbinde ich professionelles Design mit einer klaren Inhaltsstruktur. Leistungen, Einsatzgebiete, Vorteile und Kontaktwege werden so aufbereitet, dass Besucher sofort verstehen, warum sie mit deinem Betrieb arbeiten sollten."
      ],
      [
        "Im Mittelpunkt stehen Sichtbarkeit, Nutzerf\xFChrung und ein stimmiger Au\xDFenauftritt. So entsteht eine professionelle Website, die nicht nur modern aussieht, sondern dich im Alltag tats\xE4chlich unterst\xFCtzt.",
        "Jedes Projekt wird auf deinen Betrieb zugeschnitten. Kein starres Schema, sondern ein klarer Rahmen mit sinnvollen Entscheidungen f\xFCr nachhaltige Ergebnisse."
      ]
    ]
  },
  packages: {
    label: "Pakete",
    title: "Leistungsmodelle f\xFCr unterschiedliche Ziele",
    copy: "Alle Pakete sind auf Handwerksbetriebe zugeschnitten und k\xF6nnen bei Bedarf erweitert werden.",
    items: [
      {
        title: "Starter",
        price: "1.790 \u20AC",
        benefit: "Ideal f\xFCr Betriebe, die ihre erste professionelle Website erstellen lassen m\xF6chten.",
        featured: false,
        badge: "",
        features: [
          "1 professionelle Startseite",
          "individuelles Design auf Basis des bestehenden Markenauftritts",
          "mobil optimiert",
          "Kontaktformular",
          "Telefon-/WhatsApp-Call-to-Action",
          "Basis-SEO",
          "Impressum und Datenschutz eingebunden",
          "technische Grundeinrichtung"
        ]
      },
      {
        title: "Business",
        price: "2.990 \u20AC",
        benefit: "F\xFCr Betriebe, die ihre Website erstellen lassen und dabei direkt auf mehr Vertrauen und qualifizierte Anfragen setzen m\xF6chten.",
        featured: true,
        badge: "Empfehlung",
        features: [
          "alles aus Starter",
          "plus echte Unterseiten",
          "z. B. \xDCber mich, Leistungen, Kontakt",
          "klarere Conversion-Struktur",
          "st\xE4rkere inhaltliche F\xFChrung",
          "Einbindung von Referenzen oder Vorteilen",
          "lokale SEO-Basis",
          "professionellere Vertrauensstruktur"
        ]
      },
      {
        title: "Premium",
        price: "5.490 \u20AC",
        benefit: "F\xFCr Unternehmen, die eine professionelle Website erstellen lassen und ihre Online-Pr\xE4senz langfristig ausbauen m\xF6chten.",
        featured: false,
        badge: "",
        features: [
          "alles aus Business",
          "plus mehrere individuell ausgearbeitete Unterseiten",
          "Portfolio / Referenzen",
          "Blog oder Ratgeberbereich m\xF6glich",
          "st\xE4rkere Nutzerf\xFChrung",
          "hochwertigere Inhaltsstruktur",
          "mehr Conversion-Elemente",
          "ausbauf\xE4hige Grundlage f\xFCr sp\xE4teres Wachstum"
        ]
      }
    ]
  },
  quality: {
    label: "Website-Qualit\xE4t",
    title: "Was jede gute Website im Handwerk braucht",
    backgroundImage: "/images/daniil-komov-RdeKfL3w344-unsplash.jpg",
    items: [
      {
        title: "Mobile Optimierung",
        copy: "Die Seite muss auf dem Smartphone sofort verst\xE4ndlich und einfach bedienbar sein, weil viele Kontakte mobil starten."
      },
      {
        title: "Klare Nutzerf\xFChrung",
        copy: "Besucher sollen ohne Umwege erkennen, welche Leistungen angeboten werden und wie sie schnell anfragen k\xF6nnen."
      },
      {
        title: "Professioneller Auftritt",
        copy: "Struktur, Text und Gestaltung m\xFCssen Vertrauen vermitteln und die Qualit\xE4t deines Betriebs sichtbar machen."
      }
    ]
  },
  extensions: {
    label: "Individuelle Erweiterungen",
    title: "Wenn dein Projekt mehr braucht als ein Standardpaket",
    items: [
      {
        title: "Zus\xE4tzliche Unterseiten",
        copy: "Leistungsbereiche, regionale Schwerpunkte oder besondere Angebote k\xF6nnen als eigene Seiten ausgearbeitet werden."
      },
      {
        title: "Content-Unterst\xFCtzung",
        copy: "Ich unterst\xFCtze bei Struktur, Formulierung und Priorisierung deiner Inhalte f\xFCr mehr Klarheit und Wirkung."
      },
      {
        title: "SEO und Sichtbarkeit",
        copy: "Lokale Suchbegriffe und sinnvolle Seitenstruktur helfen dabei, in der Region besser gefunden zu werden."
      },
      {
        title: "Langfristige Entwicklung",
        copy: "Die Website wird so aufgebaut, dass du sp\xE4ter Erweiterungen wie Blog, Referenzen oder neue Leistungen erg\xE4nzen kannst."
      }
    ]
  },
  process: {
    label: "Zusammenarbeit",
    title: "So l\xE4uft ein Projekt mit mir ab",
    steps: [
      {
        number: "1",
        title: "Kickoff",
        copy: "Ziele, Zielgruppe und Leistungen klar definieren"
      },
      {
        number: "2",
        title: "Struktur",
        copy: "Inhalte, Seitenaufbau und Nutzerf\xFChrung festlegen"
      },
      {
        number: "3",
        title: "Design",
        copy: "Professionelles Erscheinungsbild passend zu deinem Betrieb"
      },
      {
        number: "4",
        title: "Umsetzung",
        copy: "Responsive, sauber und technisch zuverl\xE4ssig realisiert"
      },
      {
        number: "5",
        title: "Finalisierung",
        copy: "Abstimmung, Feinschliff und Livegang"
      }
    ]
  },
  finalCta: {
    title: "Lass uns die passende L\xF6sung f\xFCr deinen Betrieb planen",
    copy: "Wenn du deine Website erstellen lassen m\xF6chtest und dabei Wert auf Klarheit, Vertrauen und gute Anfragen legst, lass uns dein Projekt besprechen.",
    primaryCta: { label: "Jetzt Kontakt aufnehmen", to: "/#kontakt" },
    secondaryCta: { label: "Mehr \xFCber mich", to: "/ueber-mich" }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "leistungen",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: servicesContent.seo.title,
      meta: [
        {
          name: "description",
          content: servicesContent.seo.description
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1$1;
      const _component_ServicesPageHeroSection = _sfc_main$7;
      const _component_ServicesPageIntroSection = _sfc_main$6;
      const _component_ServicesPagePackagesSection = _sfc_main$5;
      const _component_ServicesPageQualitySection = _sfc_main$4;
      const _component_ServicesPageExtensionsSection = _sfc_main$3;
      const _component_ServicesPageProcessSection = _sfc_main$2;
      const _component_ServicesPageFinalCtaSection = _sfc_main$1;
      const _component_AppFooter = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        links: unref(homeContent).navLinks
      }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_ServicesPageHeroSection, {
        content: unref(servicesContent).hero
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServicesPageIntroSection, {
        content: unref(servicesContent).intro
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServicesPagePackagesSection, {
        content: unref(servicesContent).packages
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServicesPageQualitySection, {
        content: unref(servicesContent).quality
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServicesPageExtensionsSection, {
        content: unref(servicesContent).extensions
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServicesPageProcessSection, {
        content: unref(servicesContent).process
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServicesPageFinalCtaSection, {
        content: unref(servicesContent).finalCta
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/leistungen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=leistungen-xOatZy8C.mjs.map

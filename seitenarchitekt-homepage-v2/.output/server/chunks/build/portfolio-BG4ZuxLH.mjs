import { _ as _sfc_main$1$1, h as homeContent, a as _sfc_main$7 } from './homeContent-BdSxHlsL.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DYbrFFRo.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioPageHeroSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden pt-32 sm:pt-36 lg:min-h-screen lg:pt-40" }, _attrs))}><div class="absolute inset-0 overflow-hidden"><div data-portfolio-hero-bg class="absolute inset-0 scale-110 bg-cover bg-center opacity-28" style="${ssrRenderStyle({ backgroundImage: `url(${__props.content.backgroundImage})` })}"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,167,106,0.22),transparent_24%),linear-gradient(180deg,rgba(8,8,8,0.18),rgba(8,8,8,0.9)_68%,rgba(8,8,8,1))]"></div></div><div class="container-shell relative z-10 pb-20 sm:pb-24 lg:pb-28"><div class="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center"><div data-portfolio-hero-content class="max-w-4xl"><span class="section-label">${ssrInterpolate(__props.content.badge)}</span><h1 class="section-title mt-8 max-w-5xl text-5xl sm:text-6xl lg:text-[5.35rem]">${ssrInterpolate(__props.content.titleLead)}<br><em class="font-normal text-[var(--accent)]">${ssrInterpolate(__props.content.titleAccent)}</em></h1><p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">${ssrInterpolate(__props.content.copy)}</p><p class="mt-5 max-w-2xl text-base leading-8 text-[var(--accent)]/90 sm:text-lg">${ssrInterpolate(__props.content.note)}</p><div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">`);
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
      _push(`</div></div><div data-portfolio-hero-image class="relative mx-auto w-full max-w-[36rem] lg:mx-0"><div class="absolute -left-3 top-12 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"></div><div class="absolute left-9 top-6 h-14 w-14 rounded-full border border-[rgba(213,182,128,0.35)]"></div><div class="absolute -right-6 top-6 h-56 w-56 rounded-full border border-[rgba(255,255,255,0.3)] sm:h-72 sm:w-72"></div><div class="absolute right-12 top-16 h-40 w-40 rounded-full border border-[rgba(201,167,106,0.28)] sm:h-52 sm:w-52"></div><div class="panel relative overflow-hidden p-4 sm:p-5"><div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%)]"></div><img${ssrRenderAttr("src", __props.content.image)} alt="Portfolio Website-Beispiel" class="h-[500px] w-full object-cover object-center sm:h-[620px]"><div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.52)] via-transparent to-transparent"></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PortfolioPageHeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioPageIntroSection",
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PortfolioPageIntroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioPageProjectsSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projekte",
        class: "py-24 sm:py-28 lg:py-32"
      }, _attrs))}><div class="container-shell"><div class="mx-auto max-w-3xl text-center"><span data-reveal class="section-label justify-center">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">${ssrInterpolate(__props.content.title)}</h2></div><div class="mt-14 grid gap-8 lg:grid-cols-2"><!--[-->`);
      ssrRenderList(__props.content.items, (item) => {
        _push(`<article data-reveal class="panel overflow-hidden p-0"><div class="relative border-b border-[rgba(201,167,106,0.12)]"><img${ssrRenderAttr("src", item.previewImage)} alt="Konzept-Vorschau" class="h-56 w-full object-cover sm:h-64"><div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.18),rgba(8,8,8,0.82))]"></div><div class="absolute inset-x-0 bottom-0 p-6 sm:p-8"><div class="tiny-kicker">${ssrInterpolate(item.chip)}</div><div class="mt-3 display-face text-2xl text-[var(--text)] sm:text-[2rem]">${ssrInterpolate(item.previewTitle)}</div></div></div><div class="px-7 py-8 sm:px-9 sm:py-10"><h3 class="display-face text-3xl text-[var(--text)]">${ssrInterpolate(item.heading)}</h3><p class="mt-5 text-base leading-8 text-[var(--muted)]">${ssrInterpolate(item.intro)}</p><!--[-->`);
        ssrRenderList(item.paragraphs, (paragraph) => {
          _push(`<p class="mt-5 text-base leading-8 text-[var(--muted)]">${ssrInterpolate(paragraph)}</p>`);
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: "ghost-button mt-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.linkLabel)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.linkLabel), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PortfolioPageProjectsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioPageQualitySection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="absolute inset-0 overflow-hidden"><div data-portfolio-quality-bg class="absolute inset-0 scale-110 bg-cover bg-center opacity-20" style="${ssrRenderStyle({ backgroundImage: `url(${__props.content.backgroundImage})` })}"></div><div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.92),rgba(7,7,7,0.96))]"></div></div><div class="container-shell relative z-10"><div class="mx-auto max-w-3xl text-center"><span data-reveal class="section-label justify-center">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">${ssrInterpolate(__props.content.title)}</h2></div><div class="mt-14 grid gap-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(__props.content.items, (item) => {
        _push(`<article data-reveal class="panel p-8"><h3 class="display-face text-2xl text-[var(--text)]">${ssrInterpolate(item.title)}</h3><p class="mt-5 text-base leading-8 text-[var(--muted)]">${ssrInterpolate(item.copy)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PortfolioPageQualitySection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioPageApproachSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell"><div class="mx-auto max-w-4xl text-center"><span data-reveal class="section-label justify-center">${ssrInterpolate(__props.content.label)}</span><h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">${ssrInterpolate(__props.content.title)}</h2><p data-reveal class="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">${ssrInterpolate(__props.content.copy)}</p></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PortfolioPageApproachSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioPageFinalCtaSection",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PortfolioPageFinalCtaSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const portfolioContent = {
  seo: {
    title: "Portfolio f\xFCr Handwerksbetriebe | SeitenArchitekt",
    description: "Portfolio von SeitenArchitekt mit Beispielprojekten f\xFCr Handwerksbetriebe, die eine professionelle Website erstellen lassen m\xF6chten. Konzeptseiten f\xFCr klare Nutzerf\xFChrung und mehr Anfragen."
  },
  hero: {
    badge: "Portfolio \xB7 Website-Beispiele",
    titleLead: "Beispiele f\xFCr Betriebe, die eine",
    titleAccent: "professionelle Website erstellen lassen",
    copy: "Diese Arbeiten sind bewusst als Konzeptseiten angelegt. Sie zeigen, wie eine professionelle Website f\xFCr unterschiedliche Gewerke aussehen und funktionieren kann.",
    note: "Hinweis: Es handelt sich um Beispielprojekte, nicht um ver\xF6ffentlichte Kundenreferenzen.",
    primaryCta: { label: "Projekt besprechen", to: "/#kontakt" },
    secondaryCta: { label: "Beispiele ansehen", to: "/portfolio#projekte" },
    image: "/images/christopher-gower-m_HRfLhgABo-unsplash.jpg",
    backgroundImage: "/images/daniil-komov-RdeKfL3w344-unsplash.jpg"
  },
  intro: {
    label: "Einordnung",
    title: "Warum Beispielprojekte bei der Website-Planung helfen",
    columns: [
      [
        "Beispielprojekte helfen, Qualit\xE4t greifbar zu machen, bevor ein echtes Projekt live geht. Wer eine Website erstellen lassen m\xF6chte, bekommt so ein besseres Gef\xFChl f\xFCr Designniveau, Struktur und Tonalit\xE4t im Handwerk.",
        "Im Fokus stehen ein professioneller Au\xDFenauftritt, klare Nutzerf\xFChrung und eine mobile Darstellung, die auch unterwegs \xFCberzeugt."
      ],
      [
        "Jedes Konzept ist darauf ausgerichtet, Vertrauen aufzubauen und den Weg zur Kontaktaufnahme kurz zu halten. So wird aus einer Website ein verl\xE4sslicher Vertriebsbaustein.",
        "Die Beispiele sind absichtlich realit\xE4tsnah, aber transparent als Entw\xFCrfe formuliert, damit sie Orientierung geben, ohne etwas vorzut\xE4uschen."
      ]
    ]
  },
  projects: {
    label: "Projekt\xFCbersicht",
    title: "Vier Konzeptseiten f\xFCr unterschiedliche Gewerke",
    items: [
      {
        chip: "Elektrobetrieb",
        previewTitle: "Konzept: Elektrokompetenz Berlin",
        previewImage: "/images/christopher-gower-m_HRfLhgABo-unsplash.jpg",
        heading: "Modern, technisch pr\xE4zise, schnell erreichbar",
        intro: "Diese Konzeptseite stellt einen Elektrobetrieb als strukturierten und zuverl\xE4ssigen Partner f\xFCr private und gewerbliche Kunden dar.",
        paragraphs: [
          "Die Seitenlogik priorisiert Elektroinstallationen, Smart-Home-L\xF6sungen, Altbausanierung und Kundendienst. Wichtig war eine klare Hierarchie mit schnellen Kontaktoptionen f\xFCr dringende Anfragen.",
          "Wichtig in diesem Konzept: saubere Kompetenzdarstellung, kurze Entscheidungswege und starke Erreichbarkeit."
        ],
        linkLabel: "Konzeptseite ansehen \u2192",
        to: "/portfolio/webdesign-elektrobetrieb"
      },
      {
        chip: "Sanit\xE4rtechnik",
        previewTitle: "Konzept: Sanit\xE4r & Badmodernisierung",
        previewImage: "/images/maik-jonietz-_yMciiStJyY-unsplash.jpg",
        heading: "Ruhig, hochwertig, wohnnah gef\xFChrt",
        intro: "Diese Konzeptseite zeigt einen Sanit\xE4rbetrieb als vertrauensvollen Partner f\xFCr Badmodernisierung, Installationen und alltagsnahe Reparaturen in Berlin.",
        paragraphs: [
          "Die Seitenarchitektur priorisiert Erreichbarkeit, saubere Abl\xE4ufe und hochwertige Badqualit\xE4t. Reparaturservice bleibt glaubw\xFCrdig pr\xE4sent, ohne dass die Seite in eine laute Notdienst-Optik kippt.",
          "Wichtig in diesem Konzept: Calm Domestic Confidence, klare Servicef\xFChrung und ein sichtbar kuratiertes Premium-Niveau."
        ],
        linkLabel: "Konzeptseite ansehen ?",
        to: "/portfolio/webdesign-sanitaerbetrieb"
      },
      {
        chip: "Malerbetrieb",
        previewTitle: "Konzept: Farbwerk & Raumgestaltung",
        previewImage: "/images/daniil-komov-RdeKfL3w344-unsplash.jpg",
        heading: "Hochwertig, \xE4sthetisch, detailbewusst",
        intro: "Diese Konzeptseite ist visuell klarer und emotionaler aufgebaut, um die handwerkliche Qualit\xE4t eines Malerbetriebs zu transportieren.",
        paragraphs: [
          "Schwerpunkte sind Innenr\xE4ume, Fassaden, Renovierung und Farbkonzepte. Die Gestaltung betont Sauberkeit und Stil, ohne die Nutzerf\xFChrung oder Kontaktbarkeit zu vernachl\xE4ssigen.",
          "Wichtig in diesem Konzept: starke Bildwirkung, klare Leistungsdarstellung und professionelle Gesamtanmutung."
        ],
        linkLabel: "Konzeptseite ansehen \u2192",
        to: "/portfolio/webdesign-malerbetrieb"
      },
      {
        chip: "Bauunternehmen",
        previewTitle: "Konzept: Bauplan Projektpartner",
        previewImage: "/images/christopher-gower-m_HRfLhgABo-unsplash.jpg",
        heading: "Strukturiert, belastbar, unternehmerisch",
        intro: "Das Bauunternehmen-Konzept legt den Fokus auf Verl\xE4sslichkeit, Leistungsst\xE4rke und projektorientierte Kommunikation.",
        paragraphs: [
          "Themen wie Rohbau, Sanierung, Umbau und Projektbegleitung werden in einem robusten Aufbau pr\xE4sentiert. Der Eindruck ist klar, organisiert und auf langfristige Zusammenarbeit ausgelegt.",
          "Wichtig in diesem Konzept: starke Struktur, klarer Leistungsrahmen und ein professioneller Vertrauensaufbau."
        ],
        linkLabel: "Konzeptseite ansehen ?",
        to: "/portfolio/webdesign-bauunternehmen"
      }
    ]
  },
  quality: {
    label: "Qualit\xE4tsfaktoren",
    title: "Was bei diesen Websites besonders z\xE4hlt",
    backgroundImage: "/images/maik-jonietz-_yMciiStJyY-unsplash.jpg",
    items: [
      {
        title: "Vertrauen auf den ersten Blick",
        copy: "Design, Sprache und Struktur m\xFCssen die Qualit\xE4t des Betriebs sofort erkennbar machen."
      },
      {
        title: "Mobile Nutzbarkeit",
        copy: "Die wichtigsten Informationen und Kontaktwege m\xFCssen auf Smartphones unmittelbar verf\xFCgbar sein."
      },
      {
        title: "Klare Nutzerf\xFChrung",
        copy: "Besucher brauchen eine nachvollziehbare Route von der Leistung bis zur konkreten Anfrage."
      }
    ]
  },
  approach: {
    label: "Arbeitsansatz",
    title: "So entstehen diese Konzepte",
    copy: "Ich starte mit Zielgruppe, Leistungsprofil und Positionierung. Darauf aufbauend entwickle ich Seitenstruktur, Inhalte und Design in einem klaren Ablauf, der auf Vertrauen und Kontaktanfragen ausgerichtet ist."
  },
  finalCta: {
    title: "Wenn dir diese Richtung gef\xE4llt, lass uns dein Projekt planen",
    copy: "Wir entwickeln gemeinsam eine Website, die zu deinem Gewerk passt und deine Leistungen professionell nach au\xDFen tr\xE4gt - klar, glaubw\xFCrdig und ohne unn\xF6tige Spielereien.",
    primaryCta: { label: "Kostenloses Erstgespr\xE4ch", to: "/#kontakt" },
    secondaryCta: { label: "Leistungen ansehen", to: "/leistungen" }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: portfolioContent.seo.title,
      meta: [
        {
          name: "description",
          content: portfolioContent.seo.description
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1$1;
      const _component_PortfolioPageHeroSection = _sfc_main$6;
      const _component_PortfolioPageIntroSection = _sfc_main$5;
      const _component_PortfolioPageProjectsSection = _sfc_main$4;
      const _component_PortfolioPageQualitySection = _sfc_main$3;
      const _component_PortfolioPageApproachSection = _sfc_main$2;
      const _component_PortfolioPageFinalCtaSection = _sfc_main$1;
      const _component_AppFooter = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        links: unref(homeContent).navLinks
      }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PortfolioPageHeroSection, {
        content: unref(portfolioContent).hero
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioPageIntroSection, {
        content: unref(portfolioContent).intro
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioPageProjectsSection, {
        content: unref(portfolioContent).projects
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioPageQualitySection, {
        content: unref(portfolioContent).quality
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioPageApproachSection, {
        content: unref(portfolioContent).approach
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioPageFinalCtaSection, {
        content: unref(portfolioContent).finalCta
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portfolio-BG4ZuxLH.mjs.map

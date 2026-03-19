import { _ as _sfc_main$7, h as homeContent, a as _sfc_main$8 } from "./homeContent-Bg8Wqbvz.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-C-_xpD1r.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { p as portfolioContent } from "./portfolioContent-CXEWjwjS.js";
import { u as useResolvedSiteAssets } from "./useResolvedSiteAssets-DGE9ycQl.js";
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PortfolioPageFinalCtaSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const resolvedPortfolioContent = useResolvedSiteAssets(portfolioContent);
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
      const _component_AppHeader = _sfc_main$7;
      const _component_PortfolioPageHeroSection = _sfc_main$6;
      const _component_PortfolioPageIntroSection = _sfc_main$5;
      const _component_PortfolioPageProjectsSection = _sfc_main$4;
      const _component_PortfolioPageQualitySection = _sfc_main$3;
      const _component_PortfolioPageApproachSection = _sfc_main$2;
      const _component_PortfolioPageFinalCtaSection = _sfc_main$1;
      const _component_AppFooter = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        links: unref(homeContent).navLinks
      }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_PortfolioPageHeroSection, {
        content: unref(resolvedPortfolioContent).hero
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioPageIntroSection, {
        content: unref(resolvedPortfolioContent).intro
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioPageProjectsSection, {
        content: unref(resolvedPortfolioContent).projects
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioPageQualitySection, {
        content: unref(resolvedPortfolioContent).quality
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioPageApproachSection, {
        content: unref(resolvedPortfolioContent).approach
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioPageFinalCtaSection, {
        content: unref(resolvedPortfolioContent).finalCta
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
export {
  _sfc_main as default
};
//# sourceMappingURL=portfolio-C8LRIpEy.js.map

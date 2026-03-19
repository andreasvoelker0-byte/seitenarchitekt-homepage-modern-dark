import { _ as _sfc_main$1$1, a as _sfc_main$c, h as homeContent } from './homeContent-Bg8Wqbvz.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-C-_xpD1r.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/vue/server-renderer/index.mjs';
import { u as useResolvedSiteAssets } from './useResolvedSiteAssets-DGE9ycQl.mjs';
import { u as useHead } from './v3-BVNyuobW.mjs';
import './server.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/h3/dist/index.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/destr/dist/index.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/hookable/dist/index.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/unstorage/dist/index.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/ohash/dist/index.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/klona/dist/index.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/defu/dist/defu.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/scule/dist/index.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/pathe/dist/index.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/unhead/dist/server.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/devalue/index.js';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/unhead/dist/utils.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/unhead/dist/plugins.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/unctx/dist/index.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden pt-36 sm:pt-40 lg:pt-44" }, _attrs))}><div class="container-shell relative"><div class="grid gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"><div class="relative z-10 max-w-4xl"><div class="absolute -left-24 top-2 hidden lg:block"><div class="h-2.5 w-2.5 rounded-full bg-[var(--accent)]"></div><div class="mt-5 h-11 w-11 rounded-full border border-[rgba(201,167,106,0.35)]"></div></div><h1 data-reveal class="section-title max-w-5xl text-5xl sm:text-6xl lg:text-[6.1rem]">${ssrInterpolate(__props.content.title)}</h1><p data-reveal class="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">${ssrInterpolate(__props.content.copy)}</p><div data-reveal class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">`);
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
            _push2(`${ssrInterpolate(__props.content.secondaryCta.label)} <span${_scopeId}>\u2193</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.secondaryCta.label) + " ", 1),
              createVNode("span", null, "\u2193")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div data-hero-image class="relative mx-auto w-full max-w-[36rem] lg:mx-0"><div class="absolute -left-10 top-10 hidden h-28 w-28 rounded-full border border-white/10 lg:block"></div><div class="absolute -right-4 -top-8 h-56 w-56 rounded-full border border-[rgba(255,255,255,0.58)] opacity-80 sm:h-72 sm:w-72"></div><div class="absolute right-10 top-10 h-40 w-40 rounded-full border border-[rgba(255,255,255,0.46)] opacity-85 sm:h-52 sm:w-52"></div><div class="relative overflow-hidden border border-[rgba(201,167,106,0.16)] bg-[rgba(7,7,7,0.72)] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)]"><img${ssrRenderAttr("src", __props.content.image)} alt="Technischer Arbeitsplatz" class="h-[440px] w-full object-cover sm:h-[560px]"><div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.72)] via-transparent to-transparent"></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HeroSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ProblemSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  emits: ["openModal"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell"><div class="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start"><div><h2 data-reveal class="section-title max-w-xl">${ssrInterpolate(__props.content.title)}</h2></div><div><p data-reveal class="section-copy">${ssrInterpolate(__props.content.intro)}</p><p data-reveal class="mt-5 section-copy">${ssrInterpolate(__props.content.copy)}</p><button data-reveal class="ghost-button mt-7" type="button">${ssrInterpolate(__props.content.ctaLabel)}</button></div></div><div class="mt-14 grid gap-px bg-[rgba(201,167,106,0.12)] md:grid-cols-2"><!--[-->`);
      ssrRenderList(__props.content.cards, (card, index) => {
        _push(`<article data-reveal class="bg-[rgba(7,7,7,0.62)] px-7 py-8 sm:px-10 sm:py-10"><div class="flex items-start justify-between gap-6"><div class="split-line mt-4 w-9"></div><span class="tiny-kicker">0${ssrInterpolate(index + 1)}</span></div><p class="mt-8 max-w-xl text-base leading-8 text-[var(--muted)]">${ssrInterpolate(card)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ProblemSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ServicesSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell grid gap-14 xl:grid-cols-[0.86fr_1.14fr]"><div class="xl:sticky xl:top-28 xl:self-start"><h2 data-reveal class="section-title max-w-xl">${ssrInterpolate(__props.content.title)}</h2><p data-reveal class="mt-7 section-copy">${ssrInterpolate(__props.content.copy)}</p><div data-reveal class="mt-9 overflow-hidden border border-[rgba(201,167,106,0.12)]"><img${ssrRenderAttr("src", __props.content.image)} alt="Laptop am Arbeitsplatz" class="h-80 w-full object-cover sm:h-[25rem]"></div></div><div class="border border-[rgba(201,167,106,0.12)] bg-[rgba(7,7,7,0.45)]"><!--[-->`);
      ssrRenderList(__props.content.items, (item) => {
        _push(`<article data-reveal class="grid gap-8 border-b border-[rgba(201,167,106,0.12)] px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[72px_minmax(0,1fr)_auto] lg:items-start last:border-b-0"><div class="tiny-kicker pt-1">${ssrInterpolate(item.number)}</div><div><h3 class="display-face text-3xl font-normal tracking-[-0.03em] text-[var(--text)] sm:text-[2.45rem]">${ssrInterpolate(item.title)}</h3><p class="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">${ssrInterpolate(item.copy)}</p></div><div class="flex items-start justify-start lg:justify-end">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: "ghost-button whitespace-nowrap py-2"
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
      _push(`<!--]--></div><div data-reveal class="xl:col-start-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.content.cta.to,
        class: "gold-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content.cta.label)} <span${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.cta.label) + " ", 1),
              createVNode("span", null, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServicesSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DifferentiatorsSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden py-28 sm:py-32 lg:py-36" }, _attrs))}><div class="absolute inset-0"><div class="absolute inset-0 overflow-hidden"><div data-parallax-bg class="absolute -inset-y-[18%] inset-x-0 scale-110 bg-cover bg-center opacity-30" style="${ssrRenderStyle({ backgroundImage: `url(${__props.content.backgroundImage})` })}"></div></div><div class="absolute inset-0 bg-[rgba(7,7,7,0.78)]"></div><div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.15),rgba(8,8,8,0.82))]"></div></div><div class="container-shell relative"><div class="max-w-3xl"><h2 data-reveal class="section-title max-w-2xl">${ssrInterpolate(__props.content.title)}</h2><p data-reveal class="mt-7 section-copy">${ssrInterpolate(__props.content.copy)}</p></div><div class="mt-14 grid gap-px bg-[rgba(201,167,106,0.14)] lg:grid-cols-3"><!--[-->`);
      ssrRenderList(__props.content.items, (item) => {
        _push(`<article data-reveal class="bg-[rgba(8,8,8,0.7)] px-7 py-8 sm:px-8 sm:py-10"><div class="split-line w-10"></div><h3 class="mt-8 display-face text-3xl font-normal tracking-[-0.03em] text-[var(--text)]">${ssrInterpolate(item.title)}</h3><p class="mt-5 text-base leading-8 text-[var(--muted)]">${ssrInterpolate(item.copy)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/DifferentiatorsSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ProcessSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell"><div class="grid gap-12 lg:grid-cols-[0.94fr_1.06fr]"><div><h2 data-reveal class="section-title max-w-xl">${ssrInterpolate(__props.content.title)}</h2><p data-reveal class="mt-7 section-copy max-w-lg">${ssrInterpolate(__props.content.copy)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "data-reveal": "",
        to: __props.content.cta.to,
        class: "gold-button mt-9"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content.cta.label)} <span${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.cta.label) + " ", 1),
              createVNode("span", null, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative border border-[rgba(201,167,106,0.12)] bg-[rgba(7,7,7,0.4)] px-6 py-4 sm:px-10 sm:py-6"><div class="absolute bottom-0 right-4 hidden display-face text-[12rem] leading-none text-white/[0.03] sm:block lg:text-[18rem]">05</div><!--[-->`);
      ssrRenderList(__props.content.steps, (step) => {
        _push(`<article data-reveal class="grid gap-5 border-b border-[rgba(201,167,106,0.12)] py-8 sm:grid-cols-[64px_minmax(0,1fr)] sm:py-10 last:border-b-0"><div class="number-box">${ssrInterpolate(step.number)}</div><div><h3 class="display-face text-3xl font-normal tracking-[-0.03em] text-[var(--text)]">${ssrInterpolate(step.title)}</h3><p class="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">${ssrInterpolate(step.copy)}</p></div></article>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ProcessSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell"><div class="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><div><h2 data-reveal class="section-title max-w-2xl">${ssrInterpolate(__props.content.title)}</h2><p data-reveal class="mt-7 section-copy">${ssrInterpolate(__props.content.copy)}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "data-reveal": "",
        to: __props.content.cta.to,
        class: "ghost-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content.cta.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.cta.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-14 grid gap-px bg-[rgba(201,167,106,0.14)] md:grid-cols-2"><!--[-->`);
      ssrRenderList(__props.content.items, (item) => {
        _push(`<article data-reveal class="bg-[rgba(8,8,8,0.62)] px-7 py-8 sm:px-9 sm:py-10"><p class="tiny-kicker">${ssrInterpolate(item.label)}</p><h3 class="mt-6 display-face text-3xl font-normal tracking-[-0.03em] text-[var(--text)] sm:text-[2.45rem]">${ssrInterpolate(item.title)}</h3><p class="mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">${ssrInterpolate(item.copy)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PortfolioSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AboutSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center"><div data-reveal class="relative order-2 lg:order-1"><div class="absolute -left-6 -top-6 hidden h-20 w-20 rounded-full border border-[rgba(201,167,106,0.24)] lg:block"></div><div class="overflow-hidden border border-[rgba(201,167,106,0.12)] bg-[rgba(7,7,7,0.6)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.42)]"><img${ssrRenderAttr("src", __props.content.image)} alt="Portrait" class="h-[520px] w-full object-cover object-center"></div></div><div class="order-1 lg:order-2"><h2 data-reveal class="section-title max-w-xl">${ssrInterpolate(__props.content.title)}</h2><!--[-->`);
      ssrRenderList(__props.content.paragraphs, (paragraph) => {
        _push(`<p data-reveal class="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">${ssrInterpolate(paragraph)}</p>`);
      });
      _push(`<!--]--><div class="mt-9 flex flex-wrap gap-3"><!--[-->`);
      ssrRenderList(__props.content.skills, (skill) => {
        _push(`<span data-reveal class="border border-[rgba(201,167,106,0.18)] px-4 py-2 text-sm text-[var(--muted)]">${ssrInterpolate(skill)}</span>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "data-reveal": "",
        to: __props.content.cta.to,
        class: "gold-button mt-9"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content.cta.label)} <span${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.cta.label) + " ", 1),
              createVNode("span", null, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BlogSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell"><div class="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><div><h2 data-reveal class="section-title max-w-3xl">${ssrInterpolate(__props.content.title)}</h2><p data-reveal class="mt-7 section-copy">${ssrInterpolate(__props.content.copy)}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "data-reveal": "",
        to: __props.content.cta.to,
        class: "ghost-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content.cta.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.cta.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-14 grid gap-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(__props.content.posts, (post) => {
        _push(`<article data-reveal class="overflow-hidden border border-[rgba(201,167,106,0.12)] bg-[rgba(8,8,8,0.62)]"><img${ssrRenderAttr("src", post.image)} alt="Artikelbild" class="h-60 w-full object-cover"><div class="px-6 py-7 sm:px-8 sm:py-8"><h3 class="display-face text-[2rem] font-normal tracking-[-0.03em] text-[var(--text)]">${ssrInterpolate(post.title)}</h3><p class="mt-5 text-base leading-8 text-[var(--muted)]">${ssrInterpolate(post.copy)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post.to,
          class: "ghost-button mt-5 py-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(post.linkLabel)}`);
            } else {
              return [
                createTextVNode(toDisplayString(post.linkLabel), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BlogSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CtaBandSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28 lg:py-32" }, _attrs))}><div class="container-shell"><div class="relative overflow-hidden border border-[rgba(201,167,106,0.16)] bg-[linear-gradient(135deg,rgba(12,12,12,0.92),rgba(18,15,10,0.96),rgba(10,10,10,0.92))] px-7 py-10 sm:px-12 sm:py-14 lg:px-16"><div class="absolute -right-8 -top-10 h-44 w-44 rounded-full border border-white/10"></div><div class="absolute right-10 top-10 h-28 w-28 rounded-full border border-white/10"></div><div class="relative max-w-4xl"><h2 data-reveal class="section-title max-w-3xl">${ssrInterpolate(__props.content.title)}</h2><p data-reveal class="mt-7 section-copy">${ssrInterpolate(__props.content.copy)}</p></div><div data-reveal class="relative mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">`);
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
            _push2(`${ssrInterpolate(__props.content.secondaryCta.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content.secondaryCta.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CtaBandSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "kontakt",
        class: "pb-24 pt-8 sm:pb-28 lg:pb-32"
      }, _attrs))}><div class="container-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]"><div class="border border-[rgba(201,167,106,0.12)] bg-[rgba(8,8,8,0.6)] px-7 py-8 sm:px-10 sm:py-10"><h2 data-reveal class="section-title max-w-xl text-4xl sm:text-5xl">${ssrInterpolate(__props.content.title)}</h2><p data-reveal class="mt-7 max-w-xl text-base leading-8 text-[var(--muted)]">${ssrInterpolate(__props.content.copy)}</p><div class="mt-10 grid gap-px bg-[rgba(201,167,106,0.12)]"><!--[-->`);
      ssrRenderList(__props.content.methods, (method) => {
        _push(`<a${ssrRenderAttr("href", method.href)} data-reveal class="bg-[rgba(7,7,7,0.62)] px-6 py-6 transition duration-300 hover:bg-[rgba(12,12,12,0.92)]"><p class="tiny-kicker">${ssrInterpolate(method.title)}</p><p class="mt-3 text-lg text-[var(--text)]">${ssrInterpolate(method.copy)}</p></a>`);
      });
      _push(`<!--]--></div></div><div class="border border-[rgba(201,167,106,0.12)] bg-[rgba(8,8,8,0.6)] px-7 py-8 sm:px-10 sm:py-10"><h3 data-reveal class="display-face text-4xl font-normal tracking-[-0.03em] text-[var(--text)]">${ssrInterpolate(__props.content.formTitle)}</h3><form class="mt-8 grid gap-4"><input data-reveal type="text" placeholder="Name" class="border border-[rgba(201,167,106,0.12)] bg-[rgba(5,5,5,0.52)] px-5 py-4 text-[var(--text)] outline-none transition placeholder:text-[rgba(183,171,154,0.55)] focus:border-[rgba(201,167,106,0.35)]"><input data-reveal type="email" placeholder="E-Mail" class="border border-[rgba(201,167,106,0.12)] bg-[rgba(5,5,5,0.52)] px-5 py-4 text-[var(--text)] outline-none transition placeholder:text-[rgba(183,171,154,0.55)] focus:border-[rgba(201,167,106,0.35)]"><textarea data-reveal rows="6" placeholder="Nachricht" class="border border-[rgba(201,167,106,0.12)] bg-[rgba(5,5,5,0.52)] px-5 py-4 text-[var(--text)] outline-none transition placeholder:text-[rgba(183,171,154,0.55)] focus:border-[rgba(201,167,106,0.35)]"></textarea><button data-reveal type="button" class="gold-button mt-2 w-full sm:w-auto">${ssrInterpolate(__props.content.buttonLabel)} <span>\u2192</span></button></form></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ContactSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SolutionModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    content: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (__props.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur-sm" }, _attrs))}><div class="w-full max-w-3xl border border-[rgba(201,167,106,0.18)] bg-[rgba(8,8,8,0.96)] px-6 py-7 shadow-[0_25px_80px_rgba(0,0,0,0.48)] sm:px-10 sm:py-10"><div class="flex items-start justify-between gap-6"><p class="max-w-2xl display-face text-3xl font-normal tracking-[-0.03em] text-[var(--text)] sm:text-4xl">${ssrInterpolate(__props.content.intro)}</p><button class="border border-[rgba(201,167,106,0.18)] px-4 py-3 text-[var(--muted)] transition hover:text-[var(--text)]" type="button" aria-label="Modal schlie\xDFen"> \u2715 </button></div><div class="mt-8 grid gap-px bg-[rgba(201,167,106,0.12)]"><!--[-->`);
        ssrRenderList(__props.content.steps, (step, index) => {
          _push(`<div class="bg-[rgba(7,7,7,0.72)] px-5 py-5 sm:px-6 sm:py-6"><p class="tiny-kicker">0${ssrInterpolate(index + 1)}</p><p class="mt-3 text-base leading-8 text-[var(--muted)]">${ssrInterpolate(step)}</p></div>`);
        });
        _push(`<!--]--></div><p class="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">${ssrInterpolate(__props.content.outro)}</p><div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#kontakt",
          class: "gold-button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.content.cta)} <span${_scopeId}>\u2192</span>`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.content.cta) + " ", 1),
                createVNode("span", null, "\u2192")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="text-sm text-[rgba(183,171,154,0.72)]">${ssrInterpolate(__props.content.footnote)}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/SolutionModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const modalOpen = ref(false);
    const resolvedHomeContent = useResolvedSiteAssets(homeContent);
    useHead({
      title: "Website erstellen lassen in Berlin | Seiten Architekt",
      meta: [
        {
          name: "description",
          content: "Seiten Architekt Berlin erstellt professionelle Websites f\xFCr Handwerksbetriebe: klare Struktur, starke Nutzerf\xFChrung und SEO f\xFCr mehr qualifizierte Anfragen."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1$1;
      const _component_HeroSection = _sfc_main$b;
      const _component_ProblemSection = _sfc_main$a;
      const _component_ServicesSection = _sfc_main$9;
      const _component_DifferentiatorsSection = _sfc_main$8;
      const _component_ProcessSection = _sfc_main$7;
      const _component_PortfolioSection = _sfc_main$6;
      const _component_AboutSection = _sfc_main$5;
      const _component_BlogSection = _sfc_main$4;
      const _component_CtaBandSection = _sfc_main$3;
      const _component_ContactSection = _sfc_main$2;
      const _component_AppFooter = _sfc_main$c;
      const _component_SolutionModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        links: unref(resolvedHomeContent).navLinks
      }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_HeroSection, {
        content: unref(resolvedHomeContent).hero
      }, null, _parent));
      _push(ssrRenderComponent(_component_ProblemSection, {
        content: unref(resolvedHomeContent).problems,
        onOpenModal: ($event) => modalOpen.value = true
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServicesSection, {
        content: unref(resolvedHomeContent).services
      }, null, _parent));
      _push(ssrRenderComponent(_component_DifferentiatorsSection, {
        content: unref(resolvedHomeContent).differentiators
      }, null, _parent));
      _push(ssrRenderComponent(_component_ProcessSection, {
        content: unref(resolvedHomeContent).process
      }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioSection, {
        content: unref(resolvedHomeContent).portfolio
      }, null, _parent));
      _push(ssrRenderComponent(_component_AboutSection, {
        content: unref(resolvedHomeContent).about
      }, null, _parent));
      _push(ssrRenderComponent(_component_BlogSection, {
        content: unref(resolvedHomeContent).blog
      }, null, _parent));
      _push(ssrRenderComponent(_component_CtaBandSection, {
        content: unref(resolvedHomeContent).ctaBand
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContactSection, {
        content: unref(resolvedHomeContent).contact
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, {
        navigation: unref(resolvedHomeContent).footer.navigation,
        services: unref(resolvedHomeContent).footer.services,
        legal: unref(resolvedHomeContent).footer.legal
      }, null, _parent));
      _push(ssrRenderComponent(_component_SolutionModal, {
        open: unref(modalOpen),
        content: unref(resolvedHomeContent).problems.modal,
        onClose: ($event) => modalOpen.value = false
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-XwswV1Hk.mjs.map

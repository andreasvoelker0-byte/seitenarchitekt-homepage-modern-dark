import { _ as _sfc_main$1$1, h as homeContent, a as _sfc_main$6 } from './homeContent-Bg8Wqbvz.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-C-_xpD1r.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/vue/server-renderer/index.mjs';
import { b as blogContent } from './blogContent-Bm8yKDK7.mjs';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BlogPageHeroSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden pt-32 sm:pt-36 lg:min-h-screen lg:pt-40" }, _attrs))}><div class="absolute inset-0 overflow-hidden"><div data-blog-hero-bg class="absolute inset-0 scale-110 bg-cover bg-center opacity-30" style="${ssrRenderStyle({ backgroundImage: `url(${__props.content.backgroundImage})` })}"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,167,106,0.22),transparent_24%),linear-gradient(180deg,rgba(8,8,8,0.2),rgba(8,8,8,0.9)_68%,rgba(8,8,8,1))]"></div></div><div class="container-shell relative z-10 pb-20 sm:pb-24 lg:pb-28"><div class="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"><div data-blog-hero-content class="max-w-4xl"><span class="section-label">${ssrInterpolate(__props.content.badge)}</span><h1 class="section-title mt-8 max-w-5xl text-5xl sm:text-6xl lg:text-[5.45rem]">${ssrInterpolate(__props.content.titleLead)}<br><em class="font-normal text-[var(--accent)]">${ssrInterpolate(__props.content.titleAccent)}</em><br> ${ssrInterpolate(__props.content.titleEnd)}</h1><p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">${ssrInterpolate(__props.content.copy)}</p><div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">`);
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
      _push(`</div></div><div data-blog-hero-image class="relative mx-auto w-full max-w-[35rem] lg:mx-0"><div class="absolute -left-3 top-14 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"></div><div class="absolute left-9 top-8 h-14 w-14 rounded-full border border-[rgba(213,182,128,0.35)]"></div><div class="absolute -right-6 top-6 h-60 w-60 rounded-full border border-[rgba(255,255,255,0.34)] sm:h-72 sm:w-72"></div><div class="absolute right-12 top-16 h-40 w-40 rounded-full border border-[rgba(201,167,106,0.28)] sm:h-52 sm:w-52"></div><div class="panel relative overflow-hidden p-4 sm:p-5"><div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%)]"></div><img${ssrRenderAttr("src", __props.content.image)} alt="Blog" class="h-[500px] w-full object-cover object-center sm:h-[620px]"><div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.48)] via-transparent to-transparent"></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BlogPageHeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BlogPageIntroSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative py-24 sm:py-28" }, _attrs))}><div class="container-shell"><div data-reveal class="mx-auto max-w-4xl text-center"><span class="section-label justify-center">${ssrInterpolate(__props.content.label)}</span><h2 class="section-title mt-8">${ssrInterpolate(__props.content.title)}</h2><p class="section-copy mx-auto mt-8 text-center">${ssrInterpolate(__props.content.copy)}</p></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BlogPageIntroSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BlogPageFeaturedSection",
  __ssrInlineRender: true,
  props: {
    post: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden py-8 sm:py-10" }, _attrs))}><div class="container-shell"><div data-reveal class="panel relative overflow-hidden"><div data-blog-featured-bg class="absolute inset-y-0 right-0 hidden w-1/2 scale-110 bg-cover bg-center opacity-30 lg:block" style="${ssrRenderStyle({ backgroundImage: `url(${__props.post.image})` })}"></div><div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,167,106,0.12),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]"></div><div class="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12 xl:p-14"><div class="max-w-2xl"><span class="section-label">Empfohlener Beitrag</span><p class="mt-8 tiny-kicker text-[var(--accent)]">${ssrInterpolate(__props.post.category)}</p><h2 class="display-face mt-5 text-3xl leading-tight text-[var(--text)] sm:text-4xl lg:text-5xl">${ssrInterpolate(__props.post.title)}</h2><p class="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">${ssrInterpolate(__props.post.excerpt)}</p><div class="mt-8 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-[rgba(242,236,226,0.54)]"><span>${ssrInterpolate(__props.post.readingTime)}</span><span class="h-px w-8 bg-[rgba(201,167,106,0.25)]"></span><span>SeitenArchitekt</span></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/blog/${__props.post.slug}`,
        class: "gold-button mt-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Beitrag \xF6ffnen <span${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(" Beitrag \xF6ffnen "),
              createVNode("span", null, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative hidden min-h-[18rem] lg:block"><div class="absolute right-10 top-8 h-20 w-20 rounded-full border border-[rgba(201,167,106,0.25)]"></div><div class="absolute right-20 top-20 h-3 w-3 rounded-full bg-[var(--accent)]"></div><div class="absolute inset-x-10 bottom-0 top-12 overflow-hidden rounded-[1.75rem] border border-[rgba(255,255,255,0.08)]"><img${ssrRenderAttr("src", __props.post.image)} alt="Featured" class="h-full w-full object-cover object-center opacity-80"><div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.8)] via-[rgba(8,8,8,0.18)] to-transparent"></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BlogPageFeaturedSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BlogPageListSection",
  __ssrInlineRender: true,
  props: {
    header: {},
    posts: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28" }, _attrs))}><div class="container-shell"><div data-reveal class="text-center"><span class="section-label justify-center">${ssrInterpolate(__props.header.label)}</span><h2 class="section-title mt-8">${ssrInterpolate(__props.header.title)}</h2></div><div class="mt-14 grid gap-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(__props.posts, (post) => {
        _push(`<article data-reveal class="lux-card group relative overflow-hidden p-[1px]"><div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,167,106,0.22),transparent_36%,transparent_64%,rgba(255,255,255,0.06))] opacity-70 transition duration-300 group-hover:opacity-100"></div><div class="relative h-full bg-[linear-gradient(180deg,rgba(14,14,14,0.92),rgba(9,9,9,0.88))] p-5 sm:p-6"><div class="overflow-hidden rounded-[1.5rem] border border-[rgba(255,255,255,0.08)]"><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="h-56 w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"></div><div class="mt-6 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.28em] text-[rgba(242,236,226,0.52)]"><span class="text-[var(--accent)]">${ssrInterpolate(post.category)}</span><span>${ssrInterpolate(post.readingTime)}</span></div><h3 class="display-face mt-5 text-2xl leading-tight text-[var(--text)] sm:text-[2rem]">${ssrInterpolate(post.title)}</h3><p class="mt-4 text-base leading-8 text-[var(--muted)]">${ssrInterpolate(post.excerpt)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/blog/${post.slug}`,
          class: "ghost-button mt-7"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Artikel lesen <span${_scopeId}>\u2192</span>`);
            } else {
              return [
                createTextVNode(" Artikel lesen "),
                createVNode("span", null, "\u2192")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BlogPageListSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlogPageFinalCtaSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-28" }, _attrs))}><div class="container-shell"><div data-reveal class="panel relative overflow-hidden px-8 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16"><div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,167,106,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_52%)]"></div><div class="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"><div class="max-w-3xl"><span class="section-label">N\xE4chster Schritt</span><h2 class="section-title mt-8">${ssrInterpolate(__props.content.title)}</h2><p class="section-copy mt-8">${ssrInterpolate(__props.content.copy)}</p></div><div class="flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BlogPageFinalCtaSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const resolvedBlogContent = useResolvedSiteAssets(blogContent);
    useHead({
      title: blogContent.seo.title,
      meta: [
        {
          name: "description",
          content: blogContent.seo.description
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1$1;
      const _component_BlogPageHeroSection = _sfc_main$5;
      const _component_BlogPageIntroSection = _sfc_main$4;
      const _component_BlogPageFeaturedSection = _sfc_main$3;
      const _component_BlogPageListSection = _sfc_main$2;
      const _component_BlogPageFinalCtaSection = _sfc_main$1;
      const _component_AppFooter = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        links: unref(homeContent).navLinks
      }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_BlogPageHeroSection, {
        content: unref(resolvedBlogContent).hero
      }, null, _parent));
      _push(ssrRenderComponent(_component_BlogPageIntroSection, {
        content: unref(resolvedBlogContent).intro
      }, null, _parent));
      _push(ssrRenderComponent(_component_BlogPageFeaturedSection, {
        post: unref(resolvedBlogContent).posts[0]
      }, null, _parent));
      _push(ssrRenderComponent(_component_BlogPageListSection, {
        header: unref(resolvedBlogContent).listHeader,
        posts: unref(resolvedBlogContent).posts
      }, null, _parent));
      _push(ssrRenderComponent(_component_BlogPageFinalCtaSection, {
        content: unref(resolvedBlogContent).finalCta
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CtsLKe-g.mjs.map

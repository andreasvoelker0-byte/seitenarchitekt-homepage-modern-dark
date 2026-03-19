import { _ as _sfc_main$1$1, h as homeContent, a as _sfc_main$4 } from './homeContent-Bg8Wqbvz.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-C-_xpD1r.mjs';
import { defineComponent, computed, watchEffect, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/vue/server-renderer/index.mjs';
import { b as blogContent } from './blogContent-Bm8yKDK7.mjs';
import { a as useRouter, c as createError } from './server.mjs';
import { u as useResolvedSiteAssets } from './useResolvedSiteAssets-DGE9ycQl.mjs';
import { u as useHead } from './v3-BVNyuobW.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/ufo/dist/index.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/h3/dist/index.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BlogPostHeroSection",
  __ssrInlineRender: true,
  props: {
    post: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden pt-32 sm:pt-36 lg:pt-40" }, _attrs))}><div class="absolute inset-0 overflow-hidden"><div data-blog-post-hero-bg class="absolute inset-0 scale-110 bg-cover bg-center opacity-24" style="${ssrRenderStyle({ backgroundImage: `url(${__props.post.image})` })}"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,167,106,0.18),transparent_22%),linear-gradient(180deg,rgba(8,8,8,0.18),rgba(8,8,8,0.92)_68%,rgba(8,8,8,1))]"></div></div><div class="container-shell relative z-10 pb-16 sm:pb-20">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "ghost-button mb-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u2190</span> Zur Blog-\xDCbersicht `);
          } else {
            return [
              createVNode("span", null, "\u2190"),
              createTextVNode(" Zur Blog-\xDCbersicht ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-end"><div data-blog-post-hero-content class="max-w-4xl"><p class="tiny-kicker">${ssrInterpolate(__props.post.category)}</p><h1 class="section-title mt-6 text-5xl sm:text-6xl lg:text-[5rem]">${ssrInterpolate(__props.post.title)}</h1><p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">${ssrInterpolate(__props.post.excerpt)}</p><div class="mt-8 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-[rgba(242,236,226,0.54)]"><span>${ssrInterpolate(__props.post.readingTime)}</span><span class="h-px w-8 bg-[rgba(201,167,106,0.25)]"></span><span>SeitenArchitekt</span></div></div><div data-blog-post-hero-image class="relative mx-auto w-full max-w-[35rem] lg:mx-0"><div class="absolute -left-3 top-14 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"></div><div class="absolute left-9 top-8 h-14 w-14 rounded-full border border-[rgba(213,182,128,0.35)]"></div><div class="panel relative overflow-hidden p-4 sm:p-5"><img${ssrRenderAttr("src", __props.post.image)}${ssrRenderAttr("alt", __props.post.title)} class="h-[420px] w-full object-cover object-center sm:h-[520px]"><div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.55)] via-transparent to-transparent"></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BlogPostHeroSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BlogPostContentSection",
  __ssrInlineRender: true,
  props: {
    post: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-24 pt-8 sm:pb-28 sm:pt-10" }, _attrs))}><div class="container-shell"><div class="grid gap-10 lg:grid-cols-[0.68fr_0.32fr] lg:items-start"><div class="space-y-8"><div data-reveal class="panel p-8 sm:p-10 lg:p-12"><span class="section-label">Einordnung</span><p class="mt-8 text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">${ssrInterpolate(__props.post.intro)}</p></div><!--[-->`);
      ssrRenderList(__props.post.sections, (section) => {
        _push(`<article data-reveal class="panel p-8 sm:p-10 lg:p-12"><h2 class="display-face text-3xl leading-tight text-[var(--text)] sm:text-4xl">${ssrInterpolate(section.title)}</h2><div class="mt-6 space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg"><!--[-->`);
        ssrRenderList(section.paragraphs, (paragraph) => {
          _push(`<p>${ssrInterpolate(paragraph)}</p>`);
        });
        _push(`<!--]--></div></article>`);
      });
      _push(`<!--]--></div><aside class="lg:sticky lg:top-32"><div data-reveal class="panel p-8 sm:p-10"><span class="section-label">Kernaussagen</span><ul class="mt-8 space-y-4"><!--[-->`);
      ssrRenderList(__props.post.bullets, (bullet) => {
        _push(`<li class="flex gap-4 text-base leading-7 text-[var(--muted)]"><span class="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"></span><span>${ssrInterpolate(bullet)}</span></li>`);
      });
      _push(`<!--]--></ul><div class="mt-10 split-line"></div><p class="mt-8 text-sm leading-7 text-[rgba(242,236,226,0.58)]"> Wenn du deine Website professionell planen m\xF6chtest, l\xE4sst sich genau aus diesen Punkten ableiten, welche Struktur, Inhalte und Priorit\xE4ten f\xFCr deinen Betrieb sinnvoll sind. </p></div></aside></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BlogPostContentSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlogPostFinalCtaSection",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-24 sm:pb-28" }, _attrs))}><div class="container-shell"><div data-reveal class="panel relative overflow-hidden px-8 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16"><div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,167,106,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_52%)]"></div><div class="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"><div class="max-w-3xl"><span class="section-label">Fragen zum Website-Projekt?</span><h2 class="section-title mt-8">${ssrInterpolate(__props.content.title)}</h2><p class="section-copy mt-8">${ssrInterpolate(__props.content.copy)}</p></div><div class="flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BlogPostFinalCtaSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const resolvedPosts = useResolvedSiteAssets(blogContent.posts);
    const slug = computed(() => {
      var _a;
      const value = router.currentRoute.value.params.slug;
      return Array.isArray(value) ? (_a = value[0]) != null ? _a : "" : value != null ? value : "";
    });
    const post = computed(() => {
      var _a;
      return (_a = resolvedPosts.find((item) => item.slug === slug.value)) != null ? _a : null;
    });
    useHead(() => {
      var _a, _b, _c, _d;
      return {
        title: (_b = (_a = post.value) == null ? void 0 : _a.seo.title) != null ? _b : "Blog | SeitenArchitekt",
        meta: [
          {
            name: "description",
            content: (_d = (_c = post.value) == null ? void 0 : _c.seo.description) != null ? _d : "Blogbeitrag von SeitenArchitekt"
          }
        ]
      };
    });
    const articleCta = {
      title: "Blog-Artikel von SeitenArchitekt",
      copy: "Wenn du deine Website erstellen lassen m\xF6chtest und herausfinden willst, wie dein Betrieb online klarer und vertrauensw\xFCrdiger auftreten kann, lass uns sprechen.",
      primaryCta: { label: "Kontakt aufnehmen", to: "/#kontakt" },
      secondaryCta: { label: "Leistungen ansehen", to: "/leistungen" }
    };
    watchEffect(() => {
      if (slug.value && !post.value) {
        throw createError({ statusCode: 404, statusMessage: "Beitrag nicht gefunden" });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1$1;
      const _component_BlogPostHeroSection = _sfc_main$3;
      const _component_BlogPostContentSection = _sfc_main$2;
      const _component_BlogPostFinalCtaSection = _sfc_main$1;
      const _component_AppFooter = _sfc_main$4;
      if (unref(post)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_AppHeader, {
          links: unref(homeContent).navLinks
        }, null, _parent));
        _push(`<main>`);
        _push(ssrRenderComponent(_component_BlogPostHeroSection, { post: unref(post) }, null, _parent));
        _push(ssrRenderComponent(_component_BlogPostContentSection, { post: unref(post) }, null, _parent));
        _push(ssrRenderComponent(_component_BlogPostFinalCtaSection, { content: articleCta }, null, _parent));
        _push(`</main>`);
        _push(ssrRenderComponent(_component_AppFooter, {
          navigation: unref(homeContent).footer.navigation,
          services: unref(homeContent).footer.services,
          legal: unref(homeContent).footer.legal
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-NveKFoRC.mjs.map

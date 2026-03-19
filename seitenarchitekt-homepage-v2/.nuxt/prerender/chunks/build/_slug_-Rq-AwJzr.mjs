import { _ as _sfc_main$1, h as homeContent, a as _sfc_main$2 } from './homeContent-Bg8Wqbvz.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-C-_xpD1r.mjs';
import { defineComponent, computed, watchEffect, unref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'file://D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/vue/server-renderer/index.mjs';
import { p as portfolioContent } from './portfolioContent-CXEWjwjS.mjs';
import { u as useRoute, c as createError } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const resolvedProjects = useResolvedSiteAssets(portfolioContent.projects.items);
    const slug = computed(() => {
      var _a;
      const value = route.params.slug;
      return Array.isArray(value) ? (_a = value[0]) != null ? _a : "" : value != null ? value : "";
    });
    const project = computed(() => {
      var _a;
      return (_a = resolvedProjects.find((item) => item.to.split("/").filter(Boolean).at(-1) === slug.value)) != null ? _a : null;
    });
    useHead(() => {
      var _a, _b;
      return {
        title: project.value ? `${project.value.previewTitle} | Portfolio | SeitenArchitekt` : "Portfolio | SeitenArchitekt",
        meta: [
          {
            name: "description",
            content: (_b = (_a = project.value) == null ? void 0 : _a.intro) != null ? _b : "Portfolio-Konzeptseite von SeitenArchitekt"
          }
        ]
      };
    });
    watchEffect(() => {
      if (slug.value && !project.value) {
        throw createError({ statusCode: 404, statusMessage: "Projekt nicht gefunden" });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AppFooter = _sfc_main$2;
      if (unref(project)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_AppHeader, {
          links: unref(homeContent).navLinks
        }, null, _parent));
        _push(`<main><section class="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40"><div class="absolute inset-0 overflow-hidden"><div class="absolute inset-0 scale-110 bg-cover bg-center opacity-24" style="${ssrRenderStyle({ backgroundImage: `url(${unref(project).previewImage})` })}"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,167,106,0.18),transparent_22%),linear-gradient(180deg,rgba(8,8,8,0.18),rgba(8,8,8,0.92)_68%,rgba(8,8,8,1))]"></div></div><div class="container-shell relative z-10 pb-20 sm:pb-24">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/portfolio",
          class: "ghost-button mb-10"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u2190</span> Zur Portfolio-\xDCbersicht `);
            } else {
              return [
                createVNode("span", null, "\u2190"),
                createTextVNode(" Zur Portfolio-\xDCbersicht ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-end"><div class="max-w-4xl"><p class="tiny-kicker">${ssrInterpolate(unref(project).chip)}</p><h1 class="section-title mt-6 text-5xl sm:text-6xl lg:text-[5rem]">${ssrInterpolate(unref(project).previewTitle)}</h1><p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">${ssrInterpolate(unref(project).heading)}</p><p class="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">${ssrInterpolate(unref(project).intro)}</p></div><div class="relative mx-auto w-full max-w-[35rem] lg:mx-0"><div class="absolute -left-3 top-14 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"></div><div class="absolute left-9 top-8 h-14 w-14 rounded-full border border-[rgba(213,182,128,0.35)]"></div><div class="panel relative overflow-hidden p-4 sm:p-5"><img${ssrRenderAttr("src", unref(project).previewImage)}${ssrRenderAttr("alt", unref(project).previewTitle)} class="h-[420px] w-full object-cover object-center sm:h-[520px]"><div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.55)] via-transparent to-transparent"></div></div></div></div></div></section><section class="py-24 sm:py-28 lg:py-32"><div class="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div class="panel p-8 sm:p-10"><p class="section-label">Konzeptgedanke</p><h2 class="section-title mt-6 text-4xl sm:text-5xl">${ssrInterpolate(unref(project).heading)}</h2><p class="mt-6 text-base leading-8 text-[var(--muted)]"> Diese Portfolio-Seite ist als statisch ver\xF6ffentlichbares Konzept f\xFCr GitHub Pages aufbereitet und bleibt damit direkt verlinkbar. </p></div><div class="panel p-8 sm:p-10"><!--[-->`);
        ssrRenderList(unref(project).paragraphs, (paragraph) => {
          _push(`<p class="text-base leading-8 text-[var(--muted)]">${ssrInterpolate(paragraph)}</p>`);
        });
        _push(`<!--]--><div class="mt-8 flex flex-col gap-4 sm:flex-row">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#kontakt",
          class: "gold-button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Projekt anfragen <span${_scopeId}>\u2192</span>`);
            } else {
              return [
                createTextVNode(" Projekt anfragen "),
                createVNode("span", null, "\u2192")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/leistungen",
          class: "ghost-button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Leistungen ansehen `);
            } else {
              return [
                createTextVNode(" Leistungen ansehen ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></section></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-Rq-AwJzr.mjs.map

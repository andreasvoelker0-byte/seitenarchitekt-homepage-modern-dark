import { _ as _sfc_main$1, h as homeContent, a as _sfc_main$2 } from "./homeContent-Bg8Wqbvz.js";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-BVNyuobW.js";
import "./nuxt-link-C-_xpD1r.js";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/hookable/dist/index.mjs";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/unctx/dist/index.mjs";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/defu/dist/defu.mjs";
import "D:/SeitenArchitekt/seitenarchitekt-homepage-modern-dark/seitenarchitekt-homepage-v2/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "impressum",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Impressum | SeitenArchitekt",
      meta: [
        {
          name: "description",
          content: "Impressum der SeitenArchitekt Projektseite."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_AppFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        links: unref(homeContent).navLinks
      }, null, _parent));
      _push(`<main class="pt-32 sm:pt-36 lg:pt-40"><section class="pb-24 sm:pb-28 lg:pb-32"><div class="container-shell"><div class="panel max-w-4xl p-8 sm:p-10"><p class="section-label">Rechtliches</p><h1 class="section-title mt-6 text-4xl sm:text-5xl">Impressum</h1><div class="mt-8 space-y-5 text-base leading-8 text-[var(--muted)]"><p>Dies ist eine Projektseite für GitHub Pages und ein Portfolio-Demoprojekt.</p><p>Bitte ergänze hier vor der Veröffentlichung die vollständigen Pflichtangaben für dein Impressum.</p><p>Typischerweise gehören dazu Name, ladungsfähige Anschrift, Kontaktangaben und gegebenenfalls weitere gesetzlich erforderliche Informationen.</p></div></div></div></section></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/impressum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=impressum-BqJ3TR5v.js.map

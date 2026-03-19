import { b as useRuntimeConfig } from './server.mjs';

const publicAssetPattern = /^\/(?:images\/|favicon\.ico$|robots\.txt$|sitemap\.xml$|site\.webmanifest$|apple-touch-icon)/i;
const absoluteUrlPattern = /^(?:[a-z]+:)?\/\//i;
const withAppBase = (path, baseURL) => {
  if (!path.startsWith("/")) {
    return path;
  }
  const normalizedBase = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;
  return `${normalizedBase}${path.slice(1)}`;
};
const mapSiteAssets = (value, baseURL) => {
  if (typeof value === "string") {
    if (absoluteUrlPattern.test(value) || !publicAssetPattern.test(value)) {
      return value;
    }
    return withAppBase(value, baseURL);
  }
  if (Array.isArray(value)) {
    return value.map((item) => mapSiteAssets(item, baseURL));
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, mapSiteAssets(entry, baseURL)])
    );
  }
  return value;
};
const useResolvedSiteAssets = (value) => {
  const {
    app: { baseURL }
  } = useRuntimeConfig();
  return mapSiteAssets(value, baseURL);
};

export { useResolvedSiteAssets as u };
//# sourceMappingURL=useResolvedSiteAssets-DGE9ycQl.mjs.map

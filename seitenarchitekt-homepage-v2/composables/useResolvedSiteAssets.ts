const publicAssetPattern = /^\/(?:images\/|favicon\.ico$|robots\.txt$|sitemap\.xml$|site\.webmanifest$|apple-touch-icon)/i
const absoluteUrlPattern = /^(?:[a-z]+:)?\/\//i

const withAppBase = (path: string, baseURL: string) => {
  if (!path.startsWith('/')) {
    return path
  }

  const normalizedBase = baseURL.endsWith('/') ? baseURL : `${baseURL}/`

  return `${normalizedBase}${path.slice(1)}`
}

const mapSiteAssets = <T>(value: T, baseURL: string): T => {
  if (typeof value === 'string') {
    if (absoluteUrlPattern.test(value) || !publicAssetPattern.test(value)) {
      return value as T
    }

    return withAppBase(value, baseURL) as T
  }

  if (Array.isArray(value)) {
    return value.map(item => mapSiteAssets(item, baseURL)) as T
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, mapSiteAssets(entry, baseURL)])
    ) as T
  }

  return value
}

export const useResolvedSiteAssets = <T>(value: T): T => {
  const {
    app: { baseURL }
  } = useRuntimeConfig()

  return mapSiteAssets(value, baseURL)
}

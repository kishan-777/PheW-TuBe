export const getAssetUrl = (url) => {
  if (!url) return '';
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  ) {
    return url;
  }
  const base = import.meta.env.BASE_URL || '/';
  if (base !== '/' && url.startsWith(base)) {
    return url;
  }
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  return `${base}${cleanPath}`;
};

export const DEFAULT_AVATAR = getAssetUrl('/images/user_avatar.svg');

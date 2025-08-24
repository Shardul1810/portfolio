// utils/assetPath.js

const isProd = typeof window !== 'undefined' ? window.location.pathname.startsWith('/portfolio') : process.env.NODE_ENV === 'production';
const ASSET_PREFIX = isProd ? '/portfolio/assets/' : '/assets/';

export function getAssetPath(path) {
  return `${ASSET_PREFIX}${path}`;
}

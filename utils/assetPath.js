// utils/assetPath.js

const isProd = typeof window !== 'undefined' ? window.location.pathname.startsWith('/Portfolio') : process.env.NODE_ENV === 'production';
const ASSET_PREFIX = isProd ? '/Portfolio/assets/' : '/assets/';

export function getAssetPath(path) {
  return `${ASSET_PREFIX}${path}`;
}

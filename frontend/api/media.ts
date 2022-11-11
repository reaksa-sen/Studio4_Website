import { getStaticURL } from './api';

export function getStrapiMedia(media: any, size: 'S' | 'M' | 'T') {
  const { url = '', formats = '' } = media?.data?.attributes || {};
  const { url: smallImgUrl = '' } = formats?.small || {};
  const { url: mediumImgUrl = '' } = formats?.medium || {};
  const { url: thumbnailUrl = '' } = formats?.thumbnail || {};
  const imgUrl =
    size === 'M'
      ? mediumImgUrl || url
      : size === 'S'
      ? smallImgUrl || url
      : size === 'T'
      ? thumbnailUrl || url
      : url;

  return url.startsWith('/') ? getStaticURL(imgUrl) : imgUrl;
}

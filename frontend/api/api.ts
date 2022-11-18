import qs from 'qs';

export const getStaticURL = (path = '') => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`;
};

export const fetchAPI = async (path: string, urlParamsObject = {}, options = {}) => {
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    },
    ...options
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStaticURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occurred please try again`);
  }

  return response.json();
};

export const getCounter = async () => {
  const response = await fetch(process.env.NEXT_COUNT_API_URL);
  const { value } = (await response.json()) as { value: number };
  return value;
};

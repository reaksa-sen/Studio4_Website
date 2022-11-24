import { fetchAPI } from './api';
import * as I from './interface';

export function getAbout(): Promise<I.AboutResponse> {
  return fetchAPI('/about', {});
}

export function getTermAndPrivacy(): Promise<I.TermAndPrivacyResponse> {
  return fetchAPI('/term-and-privacy', {});
}

export function getContact(): Promise<I.ContactResponse> {
  return fetchAPI('/contact', {});
}

export function getArtists(pagination: I.Pagination): Promise<I.ArtistsResponse> {
  return fetchAPI('/artists', {
    sort: ['id:desc'],
    fields: ['fullname', 'roles'],
    pagination,
    populate: {
      image: { fields: ['name', 'url', 'formats'] }
    }
  });
}

export function getArtist(id: string): Promise<I.ArtistsResponse> {
  return fetchAPI(`/artists/${id}`, {
    populate: {
      image: { fields: ['name', 'url', 'formats'] },
      fields: ['title'],
      populate: {
        poster: { fields: ['name', 'url', 'formats'] }
      }
    }
  });
}

export function getWorkShowcases(pagination: I.Pagination): Promise<I.WorkShowcasesResponse> {
  return fetchAPI('/work-showcases', {
    sort: ['id:desc'],
    pagination,
    populate: {
      image: { fields: ['name', 'url', 'formats'] }
    }
  });
}

export function getBlogCategories(pagination: I.Pagination): Promise<I.BlogCategoriesResponse> {
  return fetchAPI(`/blog-categories`, {
    sort: ['id:desc'],
    fields: ['name'],
    pagination
    // Do not populate blogs, use getBlogs instead
  });
}

export function getBlogs(
  pagination: I.Pagination,
  filters?: Record<string, any>
): Promise<I.BlogsResponse> {
  return fetchAPI('/blogs', {
    filters,
    pagination,
    sort: ['id:desc'],
    fields: ['title', 'description', 'slug', 'createdAt'],
    populate: {
      localizations: {
        fields: ['title', 'description', 'locale', 'createdAt', 'slug']
      },
      image: { fields: ['name', 'url', 'formats'] },
      categories: { fields: ['name'] }
    }
  });
}

export function getBlog(id: string): Promise<I.BlogResponse> {
  return fetchAPI(`/blogs/${id}`, { populate: '*' });
}

export const sendMessage = async (data: any) => {
  await fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};

export function getClients(): Promise<I.ClientsResponse> {
  return fetchAPI('/Clients', {
    populate: '*'
  });
}

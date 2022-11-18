import { fetchAPI } from './api';
import * as I from './interface';

export function getAbout(): Promise<I.AboutResponse> {
  return fetchAPI('/about', {});
}

export function getContact(): Promise<I.ContactResponse> {
  return fetchAPI('/contact', {});
}

export function getMembers(pagination: I.Pagination): Promise<I.MembersResponse> {
  return fetchAPI('/artists', {
    sort: ['id:desc'],
    fields: ['fullname', 'roles'],
    pagination,
    populate: {
      localizations: {
        fields: ['fullname', 'roles', 'locale']
      },
      image: { fields: ['name', 'url', 'formats'] }
    }
  });
}

export function getMember(id: string): Promise<I.MemberResponse> {
  return fetchAPI(`/members/${id}`, {
    populate: {
      localizations: {
        fields: ['*']
      },
      image: { fields: ['name', 'url', 'formats'] },
      movies: {
        fields: ['title'],
        populate: {
          poster: { fields: ['name', 'url', 'formats'] }
        }
      }
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

export function getPartners(): Promise<I.PartnersResponse> {
  return fetchAPI('/partners', {
    populate: '*'
  });
}

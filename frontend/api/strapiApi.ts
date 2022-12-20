import { fetchAPI } from './api';
import * as I from './interface';

export function getAbout(): Promise<I.AboutResponse> {
  return fetchAPI('/about', {
    populate: {
      localizations: {
        fields: ['*']
      }
    }
  });
}

export function getContact(): Promise<I.ContactResponse> {
  return fetchAPI('/contact', {});
}

export function getTermAndPrivacy(): Promise<I.TermAndPrivacyResponse> {
  return fetchAPI('/term-and-privacy', {
    populate: {
      localizations: {
        fields: ['*']
      }
    }
  });
}

export function getCarousel(): Promise<I.CarouselsResponse> {
  return fetchAPI('/sliders', {
    populate: {
      image: { fields: ['name', 'url', 'formats'] }
    }
  });
}

export function getArtists(pagination: I.Pagination): Promise<I.ArtistsResponse> {
  return fetchAPI('/artists', {
    sort: ['id:desc'],
    fields: ['fullname', 'roles'],
    pagination,
    populate: {
      image: { fields: ['name', 'url', 'formats'] },
      localizations: {
        fields: ['*'],
        populate: {
          image: { fields: ['name', 'url', 'formats'] }
        }
      }
    }
  });
}

export function getArtist(id: string): Promise<I.ArtistResponse> {
  return fetchAPI(`/artists/${id}`, {
    populate: {
      fields: ['*'],
      image: { fields: ['name', 'url', 'formats'] },
      localizations: {
        fields: ['*'],
        populate: {
          image: { fields: ['name', 'url', 'formats'] }
        }
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

export function getMovies(pagination: I.Pagination): Promise<I.MoviesResponse> {
  return fetchAPI('/movies', {
    sort: ['id:desc'],
    pagination,
    populate: {
      image: { fields: ['name', 'url', 'formats'] },
      localizations: {
        fields: ['*'],
        populate: {
          image: { fields: ['name', 'url', 'formats'] }
        }
      }
    }
  });
}

export function getNews(pagination: I.Pagination): Promise<I.NewsResponses> {
  return fetchAPI('/news', {
    sort: ['id:desc'],
    pagination,
    populate: {
      image: { fields: ['name', 'url', 'formats'] },
      localizations: {
        fields: ['*'],
        populate: {
          image: { fields: ['name', 'url', 'formats'] }
        }
      }
    }
  });
}

export function getNew(id: string): Promise<I.NewsResponse> {
  return fetchAPI(`/news/${id}`, {
    fields: ['title', 'content', 'createdAt'],
    populate: {
      image: { fields: ['name', 'url', 'formats'] },
      localizations: {
        fields: ['*'],
        populate: {
          image: { fields: ['name', 'url', 'formats'] }
        }
      }
    }
  });
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

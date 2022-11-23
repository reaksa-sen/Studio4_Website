type IAttribute<T> = { id: number; attributes: T };
type IResponse<T> = { data: T[]; meta: Meta };

interface Image {
  name: string;
  url: string;
  formats?: {
    large?: Image;
    medium?: Image;
    small?: Image;
    thumbnail?: Image;
  };
}

interface IAbout {
  title: string;
  description: string;
  image: { data?: IAttribute<Image> };
  content: string;
  locale: string;
  localizations: { data?: IAttribute<IAbout>[] };
}

interface IContact {
  phone: string;
  email: string;
  telegram: string;
  address: string;
  google_map_url: string;
  facebook_url: string;
  youtube_url: string;
  instagram_url: string;
  tiktok_url: string;
  twitter_url: string;
}

interface IBlogCategory {
  name: string;
  // ----
  blogs: BlogsResponse;
}

interface IBlog {
  title: string;
  description: string;
  slug: string;
  image?: { data?: IAttribute<Image> };
  // ----
  content: string;
  createdAt: string;
  locale: string;
  localizations: { data?: BlogAttribute[] };
}

interface IGenre {
  name: string;
}

interface IMovie {
  title: string;
  description: string;
  trailerUrl: string;
  poster: { data: IAttribute<Image> };
  // --
  movie_categories?: IResponse<IAttribute<IGenre>>;
  release: string;
  duration: string;
  artists?: ArtistsResponse;
}

interface IClient {
  name: string;
  image: { data?: IAttribute<Image> };
  link?: string;
  moreWidth: boolean;
  moreHeight: boolean;
  ordering: number;
}

interface IArtist {
  fullname: string;
  image: { data?: IAttribute<Image> };
  // --
  roles: string;
  bio: string;
  date_of_birth: string;
  height: number;
  movies: IResponse<IAttribute<IMovie>>;
  facebook: string;
  instagram: string;
  youtube: string;
  tiktok: string;
  locale: string;
  // localizations: { data?: ArtistAttribute[] };
}

export type AboutResponse = { data: IAttribute<IAbout> };
export type ContactResponse = { data: IAttribute<IContact> };

export type ArtistAttribute = IAttribute<IArtist>;
export type ArtistsResponse = IResponse<ArtistAttribute>;
export type ArtistResponse = { data: ArtistAttribute; meta: Meta };

export type BlogAttribute = IAttribute<IBlog>;
export type BlogsResponse = IResponse<BlogAttribute>;
export type BlogResponse = { data: BlogAttribute; meta: Meta };

export type BlogCategoryAttribute = IAttribute<IBlogCategory>;
export type BlogCategoriesResponse = IResponse<BlogCategoryAttribute>;

export type ClientAttribute = IAttribute<IClient>;
export type ClientsResponse = IResponse<ClientAttribute>;
export type ClientResponse = { data: ClientAttribute; meta: Meta };

export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface Pagination {
  page: number;
  pageSize: number;
}

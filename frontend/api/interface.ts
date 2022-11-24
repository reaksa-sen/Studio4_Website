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
  content: string;
}
interface ITermAndPrivacy {
  content: string;
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
  description: string;
  fullname: string;
  image: { data?: IAttribute<Image> };
  // --
  roles: string;
  age: string;
  height: number;
  email: string;
  movies: IResponse<IAttribute<IMovie>>;
  facebook: string;
  instagram: string;
  youtube: string;
  tiktok: string;
}

interface IWorkShowcase {
  image: { data?: IAttribute<Image> };
  link: string;
  title: string;
  ordering: number;
}

export type AboutResponse = { data: IAttribute<IAbout> };
export type ContactResponse = { data: IAttribute<IContact> };
export type TermAndPrivacyResponse = { data: IAttribute<ITermAndPrivacy> };

export type ArtistAttribute = IAttribute<IArtist>;
export type ArtistsResponse = IResponse<ArtistAttribute>;
export type ArtistResponse = { data: ArtistAttribute; meta: Meta };

export type WorkShowcaseAttribute = IAttribute<IWorkShowcase>;
export type WorkShowcasesResponse = IResponse<WorkShowcaseAttribute>;
export type WorkShowcaseResponse = { data: WorkShowcaseAttribute; meta: Meta };

export type ClientAttribute = IAttribute<IClient>;
export type ClientsResponse = IResponse<ClientAttribute>;
export type ClientResponse = { data: ClientAttribute; meta: Meta };

export type BlogAttribute = IAttribute<IBlog>;
export type BlogsResponse = IResponse<BlogAttribute>;
export type BlogResponse = { data: BlogAttribute; meta: Meta };

export type BlogCategoryAttribute = IAttribute<IBlogCategory>;
export type BlogCategoriesResponse = IResponse<BlogCategoryAttribute>;

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

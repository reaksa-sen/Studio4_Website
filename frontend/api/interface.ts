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

interface IMember {
  fullname: string;
  image: { data: IAttribute<Image> };
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
  localizations: { data?: MemberAttribute[] };
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
  artists?: MembersResponse;
}

interface IPartner {
  name: string;
  image: IAttribute<Image>;
  link?: string;
}

export type AboutResponse = { data: IAttribute<IAbout> };
export type ContactResponse = { data: IAttribute<IContact> };

export type MemberAttribute = IAttribute<IMember>;
export type MembersResponse = IResponse<MemberAttribute>;
export type MemberResponse = { data: MemberAttribute; meta: Meta };

export type BlogAttribute = IAttribute<IBlog>;
export type BlogsResponse = IResponse<BlogAttribute>;
export type BlogResponse = { data: BlogAttribute; meta: Meta };

export type BlogCategoryAttribute = IAttribute<IBlogCategory>;
export type BlogCategoriesResponse = IResponse<BlogCategoryAttribute>;

export type PartnerAttribute = IAttribute<IPartner>;
export type PartnerResponse = { data: PartnerAttribute; meta: Meta };
export type PartnersResponse = IResponse<PartnerAttribute>;

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

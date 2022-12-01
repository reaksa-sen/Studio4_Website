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

interface ICarousel {
  image: { data?: IAttribute<Image> };
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
  slogan: string;
}
interface INews {
  image: { data?: IAttribute<Image> };
  title: string;
  content: string;
  createdAt: string;
}
interface IMovie {
  image: { data?: IAttribute<Image> };
  title: string;
  description: string;
  link: string;
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
  image: { data?: IAttribute<Image> };
  fullname: string;
  roles: string;
  age: string;
  description: string;
  height: number;
  email: string;
  facebook: string;
  instagram: string;
  youtube: string;
  tiktok: string;
  twitter: string;
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

export type CarouselAttribute = IAttribute<ICarousel>;
export type CarouselsResponse = IResponse<CarouselAttribute>;
export type CarouselResponse = { data: CarouselAttribute; meta: Meta };

export type MovieAttribute = IAttribute<IMovie>;
export type MoviesResponse = IResponse<MovieAttribute>;
export type MovieResponse = { data: MovieAttribute; meta: Meta };

export type NewsAttribute = IAttribute<INews>;
export type NewsResponses = IResponse<NewsAttribute>;
export type NewsResponse = { data: NewsAttribute; meta: Meta };

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

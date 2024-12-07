import {PlaceType} from './enums';

export type TUser = {

}

export type TOfferFeatures = {
  type: PlaceType;
  bedrooms: number;
  capacity: number;
}

export type THost = {
  name: string;
  isPro: boolean;
}

export type TReview = {
  rating: number;
  authorName: string;
  text: string;
  dateTime: string;
}

export type TOffer = {
  imageUrls: string[];
  isPremium: boolean;
  name: string;
  rating: number;
  features: TOfferFeatures;
  price: number;
  accomodations: string[];
  host: THost;
  description: string;
  text: string;
  reviews: TReview[];
}

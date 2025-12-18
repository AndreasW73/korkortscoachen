import type { IDateValue } from './common';

// ----------------------------------------------------------------------

export type IProductFilters = {
  rating: string;
  gender: string[];
  category: string;
  colors: string[];
  priceRange: number[];
};

export type IProductTableFilters = {
  stock: string[];
  publish: string[];
};

export type IProductReview = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  helpful: number;
  avatarUrl: string;
  postedAt: IDateValue;
  isPurchased: boolean;
  attachments?: string[];
};

export type IProductItem = {
  id: string;
  sku: string;
  name: string;
  slug: string;
  code: string;
  price: number;
  taxes: number;
  tags: string[];
  logisticsNote :any;
  producers :any;
  producer_tags :string[];
  box_content :any;
  sizes: string[];
  publish: string;
  gender: string[];
  coverUrl: string;
  images: string[];
  colors: string[];
  quantity: number;
  category: string;

  availableForSale: boolean;
  quantityAvailable: number;
  totalSold: number;
  description: string;
  totalRatings: number;
  totalReviews: number;
  createdAt: IDateValue;
  inventoryType: string;
  subDescription: string;
  priceSale: number | null;
  reviews: IProductReview[];
  newLabel: {
    content: string;
    enabled: boolean;
  };
  saleLabel: {
    content: string;
    enabled: boolean;
  };
  ratings: {
    name: string;
    starCount: number;
    reviewCount: number;
  }[];
};

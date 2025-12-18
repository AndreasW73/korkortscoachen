import type { Dayjs } from 'dayjs';

// ----------------------------------------------------------------------

export type IPaymentCard = {
  id: string;
  cardType: string;
  primary?: boolean;
  cardNumber: string;
};

export type IAddressItem = {
  id?: string;
  name?: string;
  company?: string;
  primary?: boolean;
  fullAddress?: string;
  phoneNumber?: string;
  addressType?: string;
};


export type IComment = {
  id: string;
  name: string;
  message: string;
  avatarUrl: string;
  postedAt: IDateValue;
  users: {
    id: string;
    name: string;
    avatarUrl: string;
  }[];
  replyComment: {
    id: string;
    userId: string;
    message: string;
    tagUser?: string;
    postedAt: IDateValue;
  }[];
};

export type IDateValue = string | number | Date | null;

export type IDatePickerControl = Dayjs | null;

export type ISocialLink = {
  twitter: string;
  facebook: string;
  linkedin: string;
  instagram: string;
};

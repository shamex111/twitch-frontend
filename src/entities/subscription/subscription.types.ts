export interface ICreateSubscription {
  price?: string;
}

export interface IEditSubscription {
  price?: string;
}

export interface IBuySubscription {
  userId: string;
  callbackUrl: string;
}

export interface IUserSubscription {
  id: string;
  createdAt: string;
  updatedAt: string;
  price: number;
  icon: string;
  userId: string;
}

export interface ISubscription {
  id: string;
  subscriberId: string;
  subscribedId: string;
  createdAt: string;
  updatedAt: string;
  expiredIn: string;
}

export interface IPaymentAmount {
  value: string;
  currency: string;
}

export interface IPaymentRecipient {
  account_id: string;
  gateway_id: string;
}

export interface IPaymentMethod {
  type: string;
  id: string;
  saved: boolean;
  status: string;
}

export interface IPaymentConfirmation {
  type: string;
  return_url: string;
  confirmation_url: string;
}

export interface IPaymentMetadata {
  userId: string;
  targetUserForSubscribeId: string;
}

export interface IPaymentStatus {
  id: string;
  status: string;
  amount: IPaymentAmount;
  description: string;
  recipient: IPaymentRecipient;
  payment_method: IPaymentMethod;
  created_at: string;
  confirmation: IPaymentConfirmation;
  test: boolean;
  paid: boolean;
  refundable: boolean;
  metadata: IPaymentMetadata;
}

export interface ISubscriber {
  id: string;
  createdAt: string;
  updatedAt: string;
  subscriberId: string;
  subscribedId: string;
}

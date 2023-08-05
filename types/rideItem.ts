export type RideItemPrice = {
  perKm: number;
  perMinute: number;
  currency: string;
};

export type RideItem = {
  id: string;
  type: string;
  maxPassengers: number | null;
  price: RideItem;
  eta: number;
  description: string;
};

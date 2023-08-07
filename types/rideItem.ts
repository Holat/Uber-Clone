export type RideItemPrice = {
  perKm: number;
  perMinute: number;
  currency: string;
};

export type RideItem = {
  id: string;
  type: string;
  maxPassengers: number | null;
  price: RideItemPrice;
  eta: number;
  description: string;
};

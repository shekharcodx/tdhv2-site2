export interface CarTypes {
  _id: string;
  vendor: {
    vendorDetails: {
      contact: {
        whatsappNum: string;
        landlineNum: string;
        mobileNum: string;
      };
      businessName: string;
    };
  };
  rentPerDay: number;
  rentPerWeek: number;
  rentPerMonth: number;
  title: string;
  minRentalDays: number;
  isPremium: boolean;
  car: {
    carBrand: {
      name: string;
      logo: {
        url: string;
      };
    };
    category: string;
    tankCapacity: number;
    transmission: string;
    seatingCapacity: number;
    carInsurance: string;
    dailyMileage: number;
    monthlyMileage: number;
    coverImage: { url: string };
    images: [{ url: string }];
  };
}

export interface Car {
  id: number;
  name: string;
  brand: string;
  dailyPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
  image: string;
  rating: number;
  reviews: number;
  seats: number;
  transmission: string;
  providerName: string;
  providerLogo: string;
  isVerified: boolean;
}

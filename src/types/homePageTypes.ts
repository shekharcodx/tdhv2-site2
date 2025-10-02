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
  rentPerMonth: number;
  title: string;
  minRentalDays: number;
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

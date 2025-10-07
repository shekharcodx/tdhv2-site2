import { CarTypes } from "@/types/homePageTypes";
import HorizontalCarCard from "./HorizontalCarCard";

interface CarCardsProps {
  data: { docs: CarTypes[] };
}

const CarCards = ({ data }: CarCardsProps) => {
  console.log("CarCards:data", data);
  return data?.docs?.length > 0 ? (
    data.docs.map((car) => <HorizontalCarCard key={car._id} car={car} />)
  ) : (
    <h1 className="text-2xl font-bold text-primary mb-1 text-center mt-20">
      No Cars Found!
    </h1>
  );
};

export default CarCards;

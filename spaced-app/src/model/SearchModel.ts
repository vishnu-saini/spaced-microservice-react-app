type SearchModel = {
  origin: { name: string; code: string };
  destination: { name: string; code: string };
  departDate: string;
  passenger: {
    adults: number;
    children: number;
    infants: number;
    total: number;
  };
  class: string;
  flightId: string;
};

export default SearchModel;

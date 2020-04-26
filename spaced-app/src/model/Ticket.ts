type Ticket = {
  origin: { name: string; code: string };
  destination: { name: string; code: string };
  startTime: string;
  endTime: string;
  departDate: string;
  seat: string;
  flight: string;
  passenger: string;
  gate: string;
  terminal: string;
};

export default Ticket;

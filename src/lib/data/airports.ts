/** Common UK airports for quick airport-transfer quotes (postcode → geocoded). */
export interface Airport {
  code: string;
  name: string;
  postcode: string;
}

export const airports: Airport[] = [
  { code: "BHX", name: "Birmingham Airport", postcode: "B26 3QJ" },
  { code: "LHR", name: "London Heathrow", postcode: "TW6 1EW" },
  { code: "LGW", name: "London Gatwick", postcode: "RH6 0NP" },
  { code: "MAN", name: "Manchester Airport", postcode: "M90 1QX" },
  { code: "EMA", name: "East Midlands Airport", postcode: "DE74 2SA" },
  { code: "LTN", name: "London Luton", postcode: "LU2 9QT" },
  { code: "STN", name: "London Stansted", postcode: "CM24 1RW" },
  { code: "LPL", name: "Liverpool John Lennon", postcode: "L24 1YD" },
];

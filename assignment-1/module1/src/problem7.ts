{
  class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarAge(): string {
      let currentYear = new Date().getFullYear();
      const carAge = currentYear - this.year;
      if (currentYear >= this.year) {
        return `${carAge}  (assuming current year is ${currentYear})`;
      } else {
        throw new Error("something went wrong");
      }
    }
  }
}

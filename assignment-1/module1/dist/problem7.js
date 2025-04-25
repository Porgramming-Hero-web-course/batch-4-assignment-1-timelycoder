"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            let currentYear = new Date().getFullYear();
            const carAge = currentYear - this.year;
            if (currentYear >= this.year) {
                return `${carAge}  (assuming current year is ${currentYear})`;
            }
            else {
                throw new Error("something went wrong");
            }
        }
    }
}

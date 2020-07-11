class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passengers = [];
    }

    getAvailableSeatCount() {
        let openSeats = this.capacity - this.passengers.length;
        return openSeats;
    }

    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler);
        }
    }

    shouldQuarantine() {
        return this.passengers.some(passengers => passengers.isHealthy === false);
    }

    totalFood() {
        let foodTotal = 0;
        for (let index = 0; index < this.passengers.length; index += 1) {
            foodTotal += this.passengers[index].food;
        }
        return foodTotal;
    }
}
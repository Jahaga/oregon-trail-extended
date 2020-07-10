class Wagon {
    constructor(capacity, passengers) {
        this.capacity = 0
        this.passengers = []
    }

    getAvailableSeatCount() {
        openSeats = this.capacity - this.passengers.length
        return openSeats
    }

    join(traveler) {
        if (this.capacity < 6) {
            this.passengers.push(traveler)
        } else {
            return 'You must construct additional pylons.'
        }
    }

    shouldQuarantine() {

    }

    totalFood() {

    }
}
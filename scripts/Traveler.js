class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

    hunt() {
        this.food += 2;
    }

    eat() {
        if (this.food > 0) {
            this.food -= 1;
        } else if (this.food === 0)
            this.isHealthy = false;
    }
}

class Doctor extends Traveler {
    constructor(name) {
        super(name)
    }

    heal(traveler) {
        if (traveler.isHealthy === false)
            traveler.isHealthy = true;
    }
}

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2;
    }

    hunt() {
        this.food += 5;
    }

    eat() {
        if (this.food >= 2) {
            this.food -= 2;
        } else if (this.food <= 1) {
            this.food = 0;
            this.isHealthy = false;
        }
    }

    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            this.food -= numOfFoodUnits;
            traveler.food += numOfFoodUnits;
        }
    }

}
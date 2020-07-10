class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

    hunt() {
        food += 2;
    }

    eat() {
        food -= 1;
        if (food <= 0) {
            this.isHealthy = false;
            food -= 1;
        }
    }
}
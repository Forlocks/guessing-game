class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min + 1;
        this.max = max - 1;
    }

    guess() {
        this.mid = Math.round(((this.min + this.max) / 2));
        return this.mid;
    }

    lower() {
        this.max = this.mid - 1;
    }

    greater() {
        this.min = this.mid + 1;
    }
}

module.exports = GuessingGame;

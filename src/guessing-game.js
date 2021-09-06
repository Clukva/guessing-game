class GuessingGame {
    constructor() {
        this.compare = [];
        this.middle;
    }

    setRange(min, max) {
        this.compare =[min, max];

    }

    guess() {
        this.middle =Math.ceil((this.compare[1]-this.compare[0])
        /2 + this.compare[0]);
        return this.middle;
    }

    lower() {
        this.compare[1] = this.middle;
       

    }

    greater() {
        this.compare[0] = this.middle;
        
    }
}

module.exports = GuessingGame;

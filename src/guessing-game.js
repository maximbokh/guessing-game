class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minNumber = min;
    this.maxNumber = max;
  }

  guess() {
    this.currentNumber =
      this.minNumber + Math.round((this.maxNumber - this.minNumber) / 2);
    return this.currentNumber;
  }

  lower() {
    this.maxNumber = this.currentNumber;
  }

  greater() {
    this.minNumber = this.currentNumber;
  }
}

module.exports = GuessingGame;

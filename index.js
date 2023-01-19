class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (pos < 0 || pos > this.items.length) {
      throw new Error('OutOfBounds')
    } else return this.items[pos]
  }

  max() {
    if (this.items) {
      return this.items.reduce((a, b) => Math.max(a, b))
    } else throw new Error('EmptySortedList')
  }

  min() {
    if (this.items) {
      return this.items.reduce((a, b) => Math.min(a, b))
    } else throw new Error('EmptySortedList')
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList')
    } else return this.sum() / this.items.length;
  }
}

module.exports = SortedList;

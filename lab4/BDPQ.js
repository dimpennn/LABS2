class BDPQ {
    constructor() {
        this.s = new Set();
    }

    size() {
        return this.s.size;
    }

    isEmpty() {
        return this.s.size === 0;
    }

    enqueu(element, priority) {
        const newElement = { element, priority };
        this.s.add(newElement);
    }

    peekHighest() {
        const arr = Array.from(this.s.values());
        const size = this.s.size;
        let index = 0;
        for (let i = 1; i < size; i++) {
            if (arr[i].priority > arr[index].priority) {
                index = i;
            }
        }
        return arr[index];
    }

    peekLowest() {
        const arr = Array.from(this.s.values());
        const size = this.s.size;
        let index = 0;
        for (let i = 1; i < size; i++) {
            if (arr[i].priority < arr[index].priority) {
                index = i;
            }
        }
        return arr[index];
    }

    peekNewest() {
        const arr = Array.from(this.s.values());
        return arr[arr.length - 1];
    }

    peekOldest() {
        const arr = Array.from(this.s.values());
        return arr[0];
    }

    dequeueHighest() {
        const element = this.peekHighest();
        this.s.delete(element);
        return element;
    }

    dequeueLowest() {
        const element = this.peekLowest();
        this.s.delete(element);
        return element;
    }

    dequeueNewest() {
        const element = this.peekNewest();
        this.s.delete(element);
        return element;
    }

    dequeueOldest() {
        const element = this.peekOldest();
        this.s.delete(element);
        return element;
    }
}

const penis = new BDPQ;

penis.enqueu("chlen", 10);
penis.enqueu("banan", 15);
penis.enqueu("ogirok", 42);
penis.enqueu("kovbasa", 7);
penis.enqueu("sosiska", 99);

console.log(penis.peekOldest().element);
console.log(penis.peekNewest().element);
console.log(penis.peekLowest().element);
console.log(penis.peekHighest().element);

console.log(penis.dequeueOldest().element);
console.log(penis.dequeueNewest().element);
console.log(penis.dequeueLowest().element);
console.log(penis.dequeueHighest().element);

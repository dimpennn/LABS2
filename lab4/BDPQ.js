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

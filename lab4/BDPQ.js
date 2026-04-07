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
        const newElement = {element, priority};
        this.s.add(newElement);
    }

    peekHighestPriority() {

    }

    peekLowestPriority() {

    }

    peekNewest() {
        const arr = Array.from(this.s.values());
        return arr[arr.length - 1];
    }

    peekOldest() {
        const arr = Array.from(this.s.values());
        return arr[0];
    }

    dequeueHighestPriority() {

    }

    dequeueLowestPriority() {

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
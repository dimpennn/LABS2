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

    }

    peekOldest() {

    }

    dequeueHighestPriority() {

    }

    dequeueLowestPriority() {

    }

    dequeueNewest() {

    }

    dequeueOldest() {

    }
}
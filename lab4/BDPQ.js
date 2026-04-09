class BDPQ {
    constructor() {
        this.elements = [];
    }

    size() {
        return this.elements.length;
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    enqueue(element, priority) {
        const newElement = { element, priority };
        this.elements.push(newElement);
    }

    peekHighest(returnIndex = 0) {
        if (this.isEmpty()) return undefined;
        let index = 0;
        for (let i = 1; i < this.size(); i++) {
            if (this.elements[i].priority > this.elements[index].priority) {
                index = i;
            }
        }
        if (returnIndex) {
            return index;
        }
        return this.elements[index];
    }

    peekLowest(returnIndex = 0) {
        if (this.isEmpty()) return undefined;
        let index = 0;
        for (let i = 1; i < this.size(); i++) {
            if (this.elements[i].priority < this.elements[index].priority) {
                index = i;
            }
        }
        if (returnIndex) {
            return index;
        }
        return this.elements[index];
    }

    peekNewest() {
        if (this.isEmpty()) return undefined;
        return this.elements[this.size() - 1];
    }

    peekOldest() {
        if (this.isEmpty()) return undefined;
        return this.elements[0];
    }

    dequeueHighest() {
        if (this.isEmpty()) return undefined;
        const index = this.peekHighest(1);
        const element = this.elements[index];
        this.elements.splice(index, 1);
        return element;
    }

    dequeueLowest() {
        if (this.isEmpty()) return undefined;
        const index = this.peekLowest(1);
        const element = this.elements[index];
        this.elements.splice(index, 1);
        return element;
    }

    dequeueNewest() {
        if (this.isEmpty()) return undefined;
        return this.elements.pop();
    }

    dequeueOldest() {
        if (this.isEmpty()) return undefined;
        return this.elements.shift();
    }
}

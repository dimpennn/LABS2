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

    peekHighest() {
        let index = 0;
        for (let i = 1; i < this.size(); i++) {
            if (this.elements[i].priority > this.elements[index].priority) {
                index = i;
            }
        }
        return this.elements[index];
    }

    peekLowest() {
        let index = 0;
        for (let i = 1; i < this.size(); i++) {
            if (this.elements[i].priority < this.elements[index].priority) {
                index = i;
            }
        }
        return this.elements[index];
    }

    peekNewest() {
        return this.elements[this.size() - 1];
    }

    peekOldest() {
        return this.elements[0];
    }

    dequeueHighest() {
        const element = this.peekHighest();
        const index = this.elements.indexOf(element);
        this.elements.splice(index, 1);
        return element;
    }

    dequeueLowest() {
        const element = this.peekLowest();
        const index = this.elements.indexOf(element);
        this.elements.splice(index, 1);
        return element;
    }

    dequeueNewest() {
        return this.elements.pop();
    }

    dequeueOldest() {
        return this.elements.shift();
    }
}

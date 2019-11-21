class B {
    constructor() {
        this.x = 1;
    }

    getX() {
        return this.x;
    }

    static add(a, b) {
        return a.getX() + b.getX();
    }
}

module.exports = B;

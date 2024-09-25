class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate Shape directly.");
        }
    }
}

class Rectangle extends Shape {
    static count = 0;

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        Rectangle.count++;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    displayInfo() {
        console.log(`Rectangle: Width = ${this.width}, Height = ${this.height}, Area = ${this.area()}, Perimeter = ${this.perimeter()}`);
    }

    toString() {
        return `Rectangle: Width = ${this.width}, Height = ${this.height}, Area = ${this.area()}, Perimeter = ${this.perimeter()}`;
    }

    static getCount() {
        return Rectangle.count;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side); 
    }
}


try {
    const rect = new Rectangle(5, 10);
    rect.displayInfo();
    console.log(rect.toString());
    console.log(`Total Rectangles created: ${Rectangle.getCount()}`);

    const square = new Square(4);
    square.displayInfo();
    console.log(square.toString());
    console.log(`Total Rectangles created: ${Rectangle.getCount()}`);
    
    
} catch (error) {
    console.error(error.message);
}
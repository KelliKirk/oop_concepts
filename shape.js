// Üldine kujundi klass
class Shape {
    constructor(color) {
        this.color = color;  // Värv salvestatakse kujundi külge
    }

    // Määrab kujundi värvi
    setColor(color) {
        this.color = color;
    }

    // Tagastab kujundi värvi
    getColor() {
        return this.color;
    }

    // Abstraktne meetod, mida kõik alamklassid peavad üle kirjutama
    getArea() {
        throw new Error('getArea() peab olema määratud alamklassides!');
    }
}

// Alamklass: Ring
class Circle extends Shape {
    constructor(color, radius) {
        super(color);  // Kutsume ülemklassi konstruktorit
        this.radius = radius;
    }

    // Kirjutame üle getArea meetodi, et arvutada ringi pindala
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);  // Pindala = π * r²
    }
}

// Alamklass: Ruut
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);  // Kutsume ülemklassi konstruktorit
        this.width = width;
        this.height = height;
    }

    // Kirjutame üle getArea meetodi, et arvutada ruudu pindala
    getArea() {
        return this.width * this.height;  // Pindala = laius * kõrgus
    }
}

// Kasutamine:

// Loome ringi objekti
const circle = new Circle('red', 5);
console.log(`Ring: Värv: ${circle.getColor()}, Pindala: ${circle.getArea()}`);

// Loome ruudu objekti
const rectangle = new Rectangle('blue', 4, 6);
console.log(`Ruut: Värv: ${rectangle.getColor()}, Pindala: ${rectangle.getArea()}`);

// Muudame ringi värvi
circle.setColor('green');
console.log(`Ring pärast värvimuutust: ${circle.getColor()}`);

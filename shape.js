// Abstraktne klass, mis sisaldab kujundite värvi
class Shape {
    constructor(color) {
        this.color = color; // Salvestame värvi
    }
// getColor on getter värvi jaoks. Getter on meetod, mis tagastab omaduse väärtuse. Seda kasutatakse andmete lugemiseks.
    getColor() {
        return this.color; // Tagastame värvi
    }
}

// Alamklass Circle
// Circle pärib Shape'i omadused sõna 'extends' kasutades
class Circle extends Shape {
    constructor(color, radius) {
        super(color); // Kutsub välja ülemklassi `Shape` konstruktori ja salvestab värvi
        this.radius = radius; // Salvestame raadiuse
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2); // Pindala valem: π * r²
    }
    // print on meetod, mis tagab vormindatud teksti
    print() {
        return `Circle (r: ${this.radius}, color: ${this.color})`;
    }
}
    // Alamklass Square
    class Square extends Shape {
        constructor(color, side) {
            super(color); // Kutsub välja ülemklassi konstruktori
            this.side = side; // Salvestame külje pikkuse
        }
    
        getArea() {
            return this.side * this.side; // Pindala: külg * külg
        }
    
        print() {
            return `Square (a: ${this.side}, color: ${this.color})`;
        }
    }

    // Alamklass Rectangle
    class Rectangle extends Shape {
        constructor(color, length, width) {
            super(color); // Kutsub välja ülemklassi konstruktori
            this.length = length; // Salvestame pikkuse
            this.width = width; // Salvestame laiuse
        }
    
        getArea() {
            return this.length * this.width; // Pindala: pikkus * laius
        }
    
        print() {
            return `Rectangle (l: ${this.length}, w: ${this.width}, color: ${this.color})`;
        }
    }

    // Paint - kujunditega opereerimine
    class Paint {
        constructor() {
            this.shapes = []; // Hoiab kujundite massiivi
        }
    
        addShape(shape) {
            this.shapes.push(shape); // Lisab kujundi massiivi
        }
    
        getShapes() {
            return this.shapes; // Tagastab kõik kujundid
        }

        calculateTotalArea() {
            return this.shapes.reduce((total, shape) => total + shape.getArea(), 0);
            // Summeerib kõikide kujundite pindalad
        }
        // instanceof on JavaScripti operaator, mida kasutatakse selleks, et kontrollida, kas konkreetne objekt kuulub teatud klassi (ehk on selle klassi eksemplar) või pärineb sellest klassist. See on kasulik näiteks siis, kui soovitakse filtreerida või kontrollida objektide tüüpe.
        getCircles() {
            return this.shapes.filter(shape => shape instanceof Circle);
            // Filtreerib välja kõik ringid
        }
    
        getSquares() {
            return this.shapes.filter(shape => shape instanceof Square);
            // Filtreerib välja kõik ruudud
        }
    
        getRectangles() {
            return this.shapes.filter(shape => shape instanceof Rectangle);
            // Filtreerib välja kõik ristkülikud
        }
    }
    


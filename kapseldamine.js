class Student {
    // Konstruktor aktsepteerib nime ja id
    constructor(name, id) {
        this.#name = name;  // Privaatne nimi
        this.#id = id;      // Privaatne id
        this.#status = 'Active';  // Vaikimisi staatus
    }

    // Privaatne id, nimi ja staatus
    #name;
    #id;
    #status;

    // Tagastab tudengi id
    getId() {
        return this.#id;
    }

    // Määrab tudengile uue nime
    setName(name) {
        this.#name = name;
    }

    // Tagastab tudengi hetke nime
    getName() {
        return this.#name;
    }

    // Määrab tudengi uue staatuse
    setStatus(status) {
        const validStatuses = ['Active', 'Expelled', 'Finished', 'Inactive'];

        // Kui staatuse väärtus on lubatud, siis määrame selle
        if (validStatuses.includes(status)) {
            this.#status = status;
        }
    }

    // Tagastab tudengi hetke staatuse
    getStatus() {
        return this.#status;
    }
}

// Kasutamine
const student1 = new Student('Alex', 123);
console.log(student1.getName());  // Alex
console.log(student1.getId());    // 123
console.log(student1.getStatus());  // Active

student1.setName('Max');
student1.setStatus('Finished');
console.log(student1.getName());  // Max
console.log(student1.getStatus());  // Finished

student1.setStatus('Inactive');
console.log(student1.getStatus());  // Inactive

student1.setStatus('Graduated');  // Ei tee midagi, sest 'Graduated' pole lubatud staatus
console.log(student1.getStatus());  // Inactive

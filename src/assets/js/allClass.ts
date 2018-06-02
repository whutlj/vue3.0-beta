export class  Person {
    name: string;
    age: number;
    readonly read:string = 'readonly'
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greeting(): string {
        return `Hello ${this.name}, 你都${this.age}岁了啊 ${this.read}`;
    }
}


export class Animal {
    constructor(private name: string) {}
    greeting(): string {
        return `Hello ${this.name}`;
    }
}
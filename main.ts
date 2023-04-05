

const func = (str: number): number | string => {
    const s = str.toFixed();
    return s;
}

func(6);

interface IUser<T> {
    name: string,
    age: number,
    status: boolean,
    body: T
}

const user1: IUser<string> = {name: 'Alex', age: 26, status: true, body: 'lorem skljkl kjlskecc'};
const user2: IUser<number[]> = {name: 'MA[', age: 18, status: false, body: [1, 3, 8, 19, 543]};
console.log(user1);
console.log(user2);

const user3: Partial<IUser<number>> = {name: 'Petro', body: 38};
console.log(user3);


class User {
    constructor(protected id: number, protected name: string, protected age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}

const user: User = new User(15, 'Oleg', 27);
console.log(user.getName());

interface IShapeActions {
    area: () => number;
    perimeter: () => number;
}

class Rectangle implements IShapeActions {
    constructor(private a: number, private b: number) {
    }

    area(): number {
        return this.a * this.b;
    }

    perimeter(): number {
        return (this.a + this.b) * 2;
    }

}

class Triangle implements IShapeActions {
    constructor(private a: number, private b: number, private c: number) {
    }

    area(): number {
        return this.a * this.b / this.c;
    }

    perimeter(): number {
        return this.a + this.b + this.c;
    }

}

const shapes:IShapeActions[]=[
    new Triangle(1,2,6),
    new Rectangle(4,7),
    new Triangle(3,9,2)
]

interface IUser11{
    sum: ()=>string
}

class FullMame implements IUser11{
    constructor(private a: string, private b: string) {
    }

    sum(): string {
        return this.a + this.b;
    }
}

const result: IUser11[] =[
    new FullMame('Andrey', 'Levchenko'),
    new FullMame('Evcheniya', 'Levchenko')
]

for (let iUser of result) {
    console.log(iUser.sum());

    for (let shape of shapes) {
        console.log(shape.area());
        console.log(shape.perimeter());
    }
}
import {userService} from './services/user-service';

userService.getAll().then(value => value.data).then(users =>{
    for (let user of users) {
        console.log(user.website);
    }
})

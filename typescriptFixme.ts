// add the type annotation to explicitly specify the type of the variable:
var isDone : boolean = false;
var lines : number = 42;
var name1 : string = "Anders";

// annotate the type as when it's not known
let unknownTypeVariable: unknown;

//annotate this array
var list : number[] = [1, 2, 3];

// implement color in typescript
enum Color {
  Red = 0, Green = 1, Blue = 2
  };
var c : Color = Color.Green;
console.log(Object.keys(Color)[c]); // "Green"

function littleHorribleAlert(): void {
  alert("I am a little annoying box!!");
}

var f1 = function (i:number): number {
  return i * i;
};
// as f1 just don't specify the return type here
var f2 = function (i:number) {
  return i * i;
};

const f3 = (i: number): number => {
  return i * i;
};

//change f4 to accept a string or a number as a parameter
function f4(i: number|string) {
  console.log("The value was " + i);
}

// Annotate the person objects with an interface. Some properties are optional
interface Person {
  name: string;
  age?: number;
  move: () => void;
}

var person1 = { name: "Bobby", move: function () {} };
var person2 = { name: "Bobby", age: 42, move: function () { } };


// Annotate mySearch to describe a function that accepts two string parameters
var mySearch: (src: string, sub: string) => boolean = function (src, sub) {
  return src.search(sub) != -1;
};
//annotate the constructor arguments and properties
class Point {
  x: number = 0;
  y: number = 0;

  constructor(x: number, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  dist(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}


// annotate `PointPerson` to use all properties of `Person` and then add the missing required property
class PointPerson implements Person {
  name: string;
  age?: number;
  move(): void {}
  constructor(name: string) {
    this.name = name;
  }
}

// Inheritance
// Make `Point3D` inherit from `Point`
// Don't forget to call the parent constructor
class Point3D extends Point {
  z: number;
  constructor(x: number, y: number, z: number = 0) {
    super(x, y);
    this.z = z;
  }
  dist(): number {
    var d = super.dist();
    return Math.sqrt(d * d + this.z * this.z);
  }
}

// Make `Tuple` Generic that it accepts to generic types as arguments

class Tuple<T, U> {
  item1: T;
  item2: U;
  constructor(item1: T, item2: U) {
    this.item1 = item1;
    this.item2 = item2;
  }
}

// create a generic interface called Pair that accepts one generic type for two properties named item1 and item2

interface Pair<T> {
  item1: T;
  item2: T;
}

// create a function that will take a pair with a generic argument and return a `Tuple`
function pairToTuple<T>(pair: Pair<T>): Tuple<T, T> {
  return new Tuple(pair.item1, pair.item2);
}

var tuple = pairToTuple({ item1: "hello", item2: "world" });

// annotate `make`, `model`, and `year` to be not mutable (read only) outside the constructor
class Car {
  readonly make: string;
  readonly model: string;
  readonly year: number;

  constructor() {
    this.make = "Unknown Make";
    this.model = "Unknown Model";
    this.year = 2018;
  }
}


// annotate this array
var arrayOfAnyType: any[] = [1, "string", false];

// fix the foo object so bar and baz can be added
interface Foo {
  bar: number;
  baz: string;
}
let foo: Foo = { bar: 123, baz: "hello world" };
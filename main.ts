export{}
let message = 'welcome back';
console.log(message);

let isBegginer: boolean = true;
let total: number = 10;
let name:string = "sabina";
console.log(total);

let sentance: string =`My name is ${name}
I am a begginer in Typescript`;
console.log(sentance);

let list1: Array<number> = [1,2,3];
let list2: Number[] = [1,2,5];

let list3 : [number, string] = [20, "sabina"];

enum color{Red, Green , Blue};

let c: color = color.Green;
console.log(c);

let myVariable: any = 10;
console.log(myVariable.name);
myVariable();
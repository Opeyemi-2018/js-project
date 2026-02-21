// const fetchPost = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!res.ok) {
//       throw new Error(`HTTP error${(await res).status}`);
//     }
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchPost();

// const fetchPost = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`http s error ${res.status}`);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => console.log(error));
// };
// fetchPost();

// let name = "john";
// name = "shade";

// const age = 20;

// console.log(age);

// function demo() {
//   if (true) {
//     console.log(name);
//   }
//   let name = paga;
// }(

// function demo2() {
//   if (true) {
//     console.log(age);
//   }
//   var age = 2;
// }

// co)nst demo = () => {
//   if (true) {
//     let letName = "page";
//     var varName = "page";
//     console.log(letName);
//     console.log(varName);
//   }
//   // console.log(letName);
//   // console.log(varName);
// };

// demo();

// demo();
// demo2();

// asynchronous tasks by checking if the call stack is empty,
// running all microtasks (like Promises) first,
// then picking the next macrotask (like setTimeout or I/O).
// This is why async code doesn’t block synchronous execution.”

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// Promise.resolve().then(() => console.log("promise"));
// console.log("End");

// console.log(this);
// function foo() {
//   console.log(this);
// }
// foo();

// const numbers = [1,2,3,4,5,6, 7, 8, 9]

// const total = numbers.reduce((num, all) => (all % 2 === 0) + num, 0)
// console.log(total);

// const fetUser = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
// };

// fetUser();

// const nums = [1, 2, 3, 4, 5];

// const sumNum = nums.reduce((num, n) => num + n, 0);
// console.log(sumNum);

// function sayHello(name, callBack) {
//   console.log("hello", name);
//   callBack();
// }

// function sayBye() {
//   console.log("bye");
// }
// sayHello("ope", sayBye);

// let name
// console.log(name);

// const child = document.getElementById("child");
// const parent = document.getElementById("parent");

// child.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("child clicked");
// });
// parent.addEventListener("click", () => {
//   console.log("parent clicked");
// });

// const name = "school";
// console.log(name.charAt(2));

// const userInfo = { name: "ope", age: 20, height: 20 };
// const jsonData = JSON.stringify(userInfo);
// console.log(jsonData);

// const num = [1, 2, 3, 4, 5, 6];

// const maxNum = Math.max(...num);

// console.log(maxNum);

// const update = new Date();

// const getFullDate = update.getFullYear()

// console.log(update.toLocaleTimeString());

// const amount = 234.495;

// const formater = new Intl.NumberFormat("en-NG", {
//   style: "currency",
//   currency: "NGN",
// });

// console.log(formater.format(amount));


// const fullYear = update.getFullYear();
// const fullMonth = update.getMonth();
// console.log(`${fullYear} ${fullMonth}`);


console.log(a);

var a = 10;

function test() {
  console.log(b);
  var b = 20;
}

test();

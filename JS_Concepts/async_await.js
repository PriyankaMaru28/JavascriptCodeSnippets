// const newPromise = new Promise((resolve, reject) => {
//   var x = true;
//   if (x) {
//     resolve("Promise reolved");
//   } else {
//     reject("Prmose Rejected");
//   }
// });

// async function updateAsyncData() {
//   console.log("Start updateAsyncData");

//   await newPromise
//     .then((x) => {
//       return x;
//     })
//     .then((x) => {
//       console.log(`updateAsyncData ${x}`);
//     });

//   console.log("In between 1 updateAsyncData");
//   await newPromise
//     .then((x) => {
//       return x;
//     })
//     .then((x) => {
//       console.log(`updateAsyncData ${x}`);
//     });
//   console.log("In between 2 updateAsyncData");

//   console.log("End updateAsyncData");
// }

// function updateData() {
//   console.log("Start Update Data");

//   newPromise
//     .then((x) => {
//       return x;
//     })
//     .then((x) => {
//       console.log(x);
//     });

//   console.log("In between 1");
//   newPromise
//     .then((x) => {
//       return x;
//     })
//     .then((x) => {
//       console.log(x);
//     });
//   console.log("In between 2");

//   console.log("End update Data");
// }

// updateAsyncData();
// console.log("------------");
// updateData();

const P1 = new Promise((resolve, reject) => {
  console.log("inside p1");
  setTimeout(() => {
    resolve("p1 resolved");
  }, 10000);
});

const P2 = new Promise((resolve, reject) => {
  console.log("inside p2");
  setTimeout(() => {
    resolve("p2 resolved");
  }, 1000);
});
async function getData() {
  console.log("Start");

  const p1 = await P1;

  console.log(p1);

  console.log("In between p1 and p2");

  const p2 = await P2;
  console.log(p2);

  console.log("End");
}

getData();

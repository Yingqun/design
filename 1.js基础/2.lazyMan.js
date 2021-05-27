// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!
// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
// LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper


// function debounce(fn, delay, leading) {
//   var timer = null
//   return function () {
//     if (leading) {
//       fn.apply(this)
//       leading = false
//     }
//     if (timer) clearTimeout(timer)
//     timer = setTimeout(fn, delay)
//   }
// }

// function test() {
//   console.log(Math.random())
// }


// const runQuick = async (promiseFuncList) => {
// };
// const promise1 = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });
// const promise2 = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 2000);
//   });
// const promise3 = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 4000);
//   });
// const promise4 = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(4);
//     }, 3000);
//   });
// runQuick([promise1, promise2, promise3, promise4]);

// const arr = [1, 2, 3, 4]
// const arr2 = arr.reduce((res, v) => (res[v] = v, res), {})
// console.log(arr2)

// 实现promiseall
function myPromiseAll(promises) {

  if (!Array.isArray(promises)) {
    return;
  }

  return new Promise((resolve, reject) => {

    let result = [];
    let asyncLength = promises.length;

    for (let i = 0; i < asyncLength; i++) {

      Promise.resolve(promises[i]).then(value => {
        result[i] = value;
        if (result.length == asyncLength) {
          resolve(result)
        }
      }, err => {
        reject(err)
      })
    }
  })
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "P1 reject")
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "P2 reject")
})

let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "P3 reject")
})

let pResult = myPromiseAll([p1, p2, p3])
pResult.then(value => {
  console.log(value)
}, err => {
  console.log(err)
})
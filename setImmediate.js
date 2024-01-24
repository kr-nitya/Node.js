// A process.nextTick callback is added to process.nextTick queue. A Promise.then() callback is added to promises microtask queue. A setTimeout, setImmediate callback is added to macrotask queue.
// Event loop executes tasks in process.nextTick queue first, and then executes promises microtask queue, and then executes macrotask queue.
// Priority
// 1.process.nextTick
// 2.promises
// 3.setTimeout, setImmediate
//setImmediate
const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');
const start = () => {
  console.log('start');
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then(resolve => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
start();
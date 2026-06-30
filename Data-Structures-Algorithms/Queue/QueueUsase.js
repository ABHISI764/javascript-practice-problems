import Queue from "./Queue.js";



const queueInstance = new Queue;
queueInstance.enqueue(2);
const item = queueInstance.dequeue();
console.log("dequeue item is ", item)
// const item2 = queueInstance.dequeue();
// console.log("dequeue ", item2)
queueInstance.enqueue(3);
const peakItem1 = queueInstance.peek();
console.log("peakitem", peakItem1)
console.log("queue 1 empty result is ", queueInstance.isEmpty())
queueInstance.dequeue();
console.log("queue 2 empty result is ", queueInstance.isEmpty())
queueInstance.enqueue(4);
console.log("size of queue is", queueInstance.size())

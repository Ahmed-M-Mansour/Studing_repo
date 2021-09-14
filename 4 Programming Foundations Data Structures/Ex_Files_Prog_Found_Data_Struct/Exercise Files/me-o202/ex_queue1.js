const queue = [] ; 
// to enqueue   --> add item  to the end 
queue.push(5) ; 
queue.push(7) ; 
queue.push(6) ; 
queue.push(9) ; 
// to dequeue  --> remove item  from the start point 
queue.shift() ; 

console.log(queue) ;  



// implement queue in JS 
class queue {
    constructor(){
        this.items ={}  ; 
        this.headIndex = 0  ; 
        this.tailIndex = 0  ; 
    }
    
    enqueue(item){
        this.items[this.tailIndex] = item 
        this.tailIndex++ ; 
    }
    
    dequeue(){
        const item = this.items[this.headIndex] ; 
        delete this.items[this.headIndex] ; 
        this.headIndex ++ ; 
        return item ; 
    }
    
    peak(){
        return this.items[this.headIndex] ; 
    }
    get length() {
    return this.tailIndex - this.headIndex;
  }
}

const  myQueue = new queue() ; 

myQueue.enqueue(10) ; 
myQueue.enqueue(48) ; 
myQueue.enqueue(156) ; 
myQueue.enqueue(7989) ; 
myQueue.enqueue(153456876) ; 

myQueue.dequeue() ; 

console.log(myQueue.peak()) ; 

console.log(myQueue) ; 

const len = myQueue.length ; 
console.log(len) ; 

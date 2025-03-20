class LRUCache {
    constructor(capacity) {
        //Checking for positive capacity
        if(isNaN(capacity)||capacity<=0){
            console.log('invalid input')
        }
        else{
            this.capacity=capacity;
            this.queue=[]
        }
    }
    get(key) {
        //Checking for the key input
        if(isNaN(key)){ 
            console.log(null);
            return;
        }
        for(let i=0;i<this.queue.length;i++){
            //Found in the first element
            if(this.queue[i].key==key && i==0){
                let temp=this.queue[i];  
                //Shifting elements
                this.queue.shift();
                this.queue.push(temp);
                //Updating the recently used and returning the element needed
                console.log(temp.key);
                return;
            }
            //Found in the middle
            else if(this.queue[i].key==key && i>=1&&i<=this.queue.length-2){
                let temp=this.queue[i];
                //Shifting elements
                for(let k=i;k<this.queue.length-1;k++){
                    this.queue[k]=this.queue[k+1];
                }
                //Updating the recently used and returning the element needed
                this.queue[this.queue.length-1]=temp;
                console.log(this.queue[this.queue.length-1].key);
                return;
            }
            //Found at the end
            else if(this.queue[i].key==key && i==this.queue.length-1){
                console.log(this.queue[this.queue.length-1].key);
                return;
            }
        }
        //Not found
        console.log(null)
        return null;
    }
    put(key, value) {
        //Checking for valid inputs
        if(isNaN(key)||isNaN(value)) return;
        else{
            for(let i=0;i<this.queue.length;i++){
                //if found at the end of the list, we do nothing
                if(this.queue[i].key==key && i==this.queue.length-1){
                    return;
                }
                //if found in the middle or in the begining of list
                else if(this.queue[i].key==key){
                    let temp=this.queue[i];  
                    //Shifting and updating the recently used
                    for(let k=i;k<this.queue.length-1;k++){
                        this.queue[k]=this.queue[k+1]
                    }
                    this.queue.pop();
                    this.queue.push(temp);
                }
            }
            //Key not in list
            const index=key;
            let newObject={key:index,value}
            if(this.capacity>=1){
                this.capacity=this.capacity-1;
                this.queue.push(newObject)
            }
            //Capacity full
            else{
                this.queue.shift()
                this.queue.push(newObject)
            }
        }
    }
}
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);
cache.put(3, 3);
cache.get(2);
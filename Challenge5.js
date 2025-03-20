function deepEqual(obj1, obj2) {
    //Checking if the types of both inputs are equal
    if((typeof(obj1)!=typeof(obj2))||(obj1==null||obj2==null)){
        return false;
    }
    else{
        let equalObjects=true;
        //Looping through one of them
        for(key in obj1){
            //Checking the types of their values
            if(typeof(obj1[key])!=typeof(obj2[key])){
                equalObjects=false
            }
            //Checking for innner objects and comparing their inner values
            if(typeof(obj1[key])!='object' && obj1[key]!==obj2[key]){
                equalObjects=false
            }
            else{
                //Getting the inner objects and then comparing each one 
                let innerObject1=obj1[key]
                let innerObject2=obj2[key]
                for(innerKey in innerObject1){
                    //Comparing their types and values
                    if((typeof(innerObject1)!=typeof(innerObject2))||
                        (innerObject1[innerKey]!==innerObject2[innerKey])){
                        equalObjects=false
                    }
                }
            }
        }   
    return equalObjects
    }
}
    
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }));
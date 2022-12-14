import React,{useState, useEffect} from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log('UseEffect');
    },[])

    return (
        <div>
            {
                console.log('rendering')
            }
            <h1>Count : {count}</h1>
            <button onClick={() => {setCount((count) => count+1);}}>+</button>
        </div>
    );
};

export default UseEffect;
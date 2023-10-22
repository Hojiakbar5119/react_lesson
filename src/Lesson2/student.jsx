import React from "react";

class Student extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counts : 1, 
        }

    }
    render(){
        let counts = 0;
        const plus=()=>{
            console.log(counts)
            counts = counts +1;
        }
        const minus=()=>{
            console.log(counts)
            counts = counts -1;
        }

        const timeout = setTimeout((a)=>{
            console.log("Vaqt hisoblandi",a);
        },2000,"Rostan shunaqami")

        timeout
        // time settimeout  bu bir marta ishlaydi 
        //? time setinterval bu nir necha marta ishlash mumkin
        // const timeInterval = setInterval(()=>{
        //     for(let i=0; i<100; i++){
        //         console.log(i++);
        //     }
        // },3000)


        return(
            <div>
                {/* <h1>Student Component</h1> */}
                <h1>State {this.state.counts}</h1>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>

            </div>
        )
    }
}
export default Student
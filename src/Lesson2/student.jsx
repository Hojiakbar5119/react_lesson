import React from "react";

class Student extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counts : 0, 
            title: 'webbrain academy'
        }

    }
    render(){
        let counts = 0;
        const plus=()=>{
            this.setState({counts: this.state.counts+1})
        }
        const minus=()=>{
            this.setState({counts: this.state.counts-1})
        }

        // const timeout = setTimeout((a)=>{
        //     console.log("Vaqt hisoblandi",a);
        // },2000,"Rostan shunaqami")

        // timeout
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
                <div style={{margin:'0 auto'}}>
                <button onClick={plus}>+</button>
                <button onClick={minus} style={{margin:'20px'}}>-</button>
                </div>

                <h4>{this.state.title}</h4>

            </div>
        )
    }
}
export default Student
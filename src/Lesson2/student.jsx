import React from "react";

class Student extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counts : 0, 
            title: ' ',
            option:'male',
            checkeds:true
        }

    }
    render(){
        // let counts = 0;
        const plus=()=>{
            this.setState({counts: this.state.counts+1})
        }
        const minus=()=>{
            this.state.counts>0? this.setState({counts: this.state.counts-1}): window.alert("manfiy son qo'yib bo'lmaydi")
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

        const ChangeText =(changing)=>{
            // console.log(changing.target.value);
            this.setState({title: changing.target.value})
        }
        const selectChange = (vl)=>{
            console.log(vl.target.value);
            this.setState({option: vl.target.value})
        }

        const Check = (ch)=>{

            console.log(ch.target.checked);
            this.setState({checkeds: ch.target.checked })
        }


        return(
            <div>
                {/* <h1>Student Component</h1> */}

                <h1>State {this.state.counts}</h1>
                <input onChange={ChangeText} type="text" placeholder="name" style={{width:'300px', height:'40px',fontSize:'22px', fontWeight:'600', paddingLeft:'20px'}} />
                <h4>{this.state.title}</h4>
                <div style={{margin:'0 auto'}}>
                <button onClick={plus}>+</button>
                <button onClick={minus} style={{margin:'20px'}}>-</button>
                <select onChange={selectChange} name="jinsi" id="" style={{ height:'40px',fontSize:'22px', fontWeight:'600',padding:'5px'}}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <input type="checkbox" name="check" onChange={Check} style={{height:'40px',fontSize:'22px', fontWeight:'600', marginLeft:'20px'}} />
                </div>
                <p>{this.state.checkeds}</p>

            </div>
        )
    }
}
export default Student
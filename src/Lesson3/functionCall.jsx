import React from "react";
import { student } from "./mock";

class FunctionCall extends React.Component{
   
    constructor(props){
        super(props)
        this.state = {
            data:student,
            name:' ',
            surname:' '
        }       
    }



    render(){
        const onChange=(e)=>{
            console.log(e.target.name);
            this.setState({[e.target.name]:e.target.value})
        }
        const onFilter = (e)=>{
            console.log(e.target.value);
            // console.log();
            let res = student.filter((value) => value.name.includes(e.target.value));
            this.setState({data: res})
        }
        return(
            <div>
                <h1>Salom dunyo Function call objecti </h1>
                <h3>{this.state.name}</h3>
                <h3>{this.state.surname}</h3>
                <input onChange={onChange} name='name' type="text" placeholder="name" style={{width:'300px', height:'40px',fontSize:'22px', fontWeight:'600', paddingLeft:'20px' ,marginRight:'20px'}} />
                <input onChange={onChange} name='surname' type="text" placeholder="Surname" style={{width:'300px', height:'40px',fontSize:'22px', fontWeight:'600', paddingLeft:'20px'}} />
                <hr style={{margin:'20px 0'}} />
                <input onChange={onFilter} type="text" placeholder="filter" style={{width:'300px', height:'40px',fontSize:'22px', fontWeight:'600', paddingLeft:'20px'}} />
                {this.state.data.map(({id,name,status})=>{
                    return(
                        <h1 key={id}>
                            {id}.  {name} =={">"} {status}
                        </h1>
                    )
                })}
            </div>
        )
    }
}

export default FunctionCall
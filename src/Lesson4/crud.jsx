import React from "react";
// import { ReactDOM } from "react";
import './crud.css'
import { student } from "../Lesson3/mock";


class Crud extends React.Component{
    constructor(props){
        super(props)
        this.state={
            base: student,
            name:'',
            surname:''
        }
    }
    render(){
        const onChange = (e)=>{
            console.log(e.target.name);
            this.setState({[e.target.name]:e.target.value})
        }
        const Ondelete = (id)=>{
            console.log(id);
        }
        const onFilter = (e)=>{
            console.log(e.target.value)
        }
        return(
          <div className="container">
            <div className="content">
            <h1>Salom dunyo men Crudni yasashni o'rganamiz</h1>
            </div>
            <div className="content2">
                <input onChange={onChange} type="text" name='name' placeholder="name" />
                <input onChange={onChange} type="text" name='surname' placeholder="surname" />
                <input onChange={onFilter} type="text" name='filter' placeholder="filter" />
            </div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.surname}</h1>
            <div className="table">
                <table border={'1'}>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </thead>
                    <tbody>
                        {this.state.base.map(({id,name,status})=>{
                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{status}</td>
                                    <td><button onClick={() => Ondelete(id)}>Delete</button></td>
                                    <td><button>Edit</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
          </div>
        )
    }
}

export default Crud
import React from "react";
import './crud.css'
import { student } from "../Lesson3/mock";


class Crud extends React.Component{
    constructor(props){
        super(props)
        this.state={
            base: student,

        }
    }
    render(){
        return(
            <h1>Salom dunyo men Crudni yasashni o'rganamiz</h1>
            
        )
    }
}

export default Crud
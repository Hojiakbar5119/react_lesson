import React, { Component } from 'react'

export default class Lifecycyle extends Component {

    constructor(props){
        super(props)
        console.log("this consturcotr")
    }

    componentWillMount(){
        console.log("salom bu birinchi ishlaydi ")
    }


  render() {
    console.log("this render function");
    return (
      <div>Llifecycyle</div>
    )
  }
}

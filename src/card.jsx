import React, { Component } from "react";
import { Circle, Reactangle, Image, Comments } from "./style";
export default class Card extends Component {
  render() {
    console.log(this.props)
    return (
      <>
        <Reactangle>
          <Circle style={{backgroundColor: this.props.color}}>
            <Image src={this.props.Icon} alt={this.props.title}/>
            {/* <Image src={require("./img/" + this.props.Icon + ".svg")} /> */}
          </Circle>
          <Comments>{this.props.title}</Comments>
        </Reactangle>
      </>
    );
  }
}

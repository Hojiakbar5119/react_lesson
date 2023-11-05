import React, { Component } from "react";
import { Circle, Reactangle, Image, Comments } from "./style";


export default class Card extends Component {
  render() {
    return (
      <>
        <Reactangle>
          <Circle>
            <Image src={this.props.Icon} alt="" />
          </Circle>
        <Comments>{this.props.title}</Comments>
        </Reactangle>
      </>
    );
  }
}

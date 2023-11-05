import React, { Component } from "react";
import { Container, Fruit, Grids, Wrapper } from "./style";
import Card from "./card";
import { base } from "./base";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Container>
        <Wrapper>
          <Fruit>Fruit</Fruit>
          <Grids>
          {base.map((value)=>(
            <Card key={value.id} title={value.title} Icon= {value.Icon} />
          ))}
          </Grids>
        </Wrapper>
      </Container>
    );
  }
}

export default App;

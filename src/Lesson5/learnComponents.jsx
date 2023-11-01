import React from "react";
import { Title, Wrapper, Container } from "./style";
class LearnComponent extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>
      </Container>
    );
  }
}
export default LearnComponent;

import React from "react";
import { Container } from "./style";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import Navigation from "./components/Navigation";
// Navigation

export default class YouTube extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Navigation></Navigation>
          <Container flex>
            <Sidebar>
              
            </Sidebar>
            <Body></Body>
          </Container>
        </Container>
      </>
    );
  }
}

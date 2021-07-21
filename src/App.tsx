import "bulma/css/bulma.min.css";
import { useState } from "react";
import { Container, Heading, Hero } from "react-bulma-components";
import { useHotkeys } from "react-hotkeys-hook";
import "./App.css";

function App() {
  const [state, setState] = useState("?");
  useHotkeys("*", (event: KeyboardEvent) =>
    setState((prevState) => {
      const newState = event.key;
      return newState.match(/^[a-z0-9]$/i) ? newState : prevState;
    })
  );

  return (
    <Hero color={"dark"} size={"fullheight"}>
      <Hero.Body>
        <Container textAlign={"center"}>
          <Heading>
            <div>{state}</div>
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

export default App;

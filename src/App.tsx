import "bulma/css/bulma.min.css";
import { useState } from "react";
import { Container, Heading, Hero } from "react-bulma-components";
import { useHotkeys } from "react-hotkeys-hook";
import "./App.css";

const resetKeys = ["Enter", "Escape"];

function isAlphaNumeric(key: string) {
  return key.match(/^[a-z0-9]$/i);
}

function App() {
  const [state, setState] = useState("");
  useHotkeys("*", (event: KeyboardEvent) =>
    setState((prevState) => {
      const newState = event.key;

      if (resetKeys.includes(newState)) {
        return "";
      }

      if (newState === "Backspace") {
        return prevState.slice(0, -1);
      }

      if (isAlphaNumeric(newState)) {
        const totalState = prevState + newState;
        if (totalState.length <= 10) {
          return prevState + newState;
        }

        return totalState.substr(1);
      }

      return prevState;
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

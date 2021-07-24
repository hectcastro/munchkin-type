import "bulma/css/bulma.min.css";
import { useState } from "react";
import { Container, Heading, Hero } from "react-bulma-components";
import { useHotkeys } from "react-hotkeys-hook";
import Sparkle from "react-sparkle";
import "./App.css";

const initialState = "< Type >";
const resetKeys = ["Enter", "Escape"];
const backspaceKeys = ["Backspace"];

function isAlphaNumeric(key: string) {
  return key.match(/^[a-z0-9]$/i);
}

function App() {
  const [state, setState] = useState(initialState);

  // Reset the state to the initial state.
  useHotkeys(resetKeys.join(","), () => {
    setState(() => initialState);
  });

  // Under most conditions, delete the last character of state.
  useHotkeys(backspaceKeys.join(","), () => {
    setState((prevState: string) => {
      if (prevState === initialState || prevState.length === 1)
        return initialState;

      return prevState.slice(0, -1);
    });
  });

  // Add a new alphanumeric characters to the end of the state.
  useHotkeys("*", (event: KeyboardEvent) => {
    const newState = event.key;

    setState((prevState: string) => {
      if (isAlphaNumeric(newState)) {
        const combinedState = prevState + newState;

        if (prevState === initialState) return newState;

        return combinedState.length <= 10
          ? prevState + newState
          : combinedState.substr(1);
      }

      return prevState;
    });
  });

  return (
    <Hero color={"dark"} size={"fullheight"}>
      <Hero.Body>
        <Container textAlign={"center"}>
          <Heading>
            <div>
              <Sparkle color={"white"} fadeOutSpeed={50} />
              {state}
            </div>
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

export default App;

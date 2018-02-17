// @flow

import React, { Component } from 'react';
import { Container, Hero, Title } from 'reactbulma'
import keydown, { ALL_PRINTABLE_KEYS } from 'react-keydown'
import { CSSTransitionGroup } from 'react-transition-group'
import './App.css';

type Props = {
  keydown: {
    event: {
      which: number
    }
  }
};

type State = {
  char: string,
};

const App = keydown(ALL_PRINTABLE_KEYS)(class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { char: '?' };
  }

  componentWillReceiveProps({ keydown }) {
    if (keydown.event) {
      const k = keydown.event.which;

      if (k >= 48 && k <= 90) {
        this.setState({ char: String.fromCharCode(k) })
      }
    }
  }

  render() {
    return (
      <Hero dark={true} fullheight={true}>
        <Hero.Body>
          <Container hasTextCentered={true}>
            <Title>
              <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeave={false}>
                <div key={this.state.char}>
                  {this.state.char}
                </div>
              </CSSTransitionGroup>
            </Title>
          </Container>
        </Hero.Body>
      </Hero>
    );
  }
})

export default App;

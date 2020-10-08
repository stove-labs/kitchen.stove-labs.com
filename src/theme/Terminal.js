import React, { Component } from 'react';
import {ReactTerminal,ReactThemes, EmulatorState, OutputFactory, CommandMapping, EnvironmentVariables, FileSystem, History, Outputs, defaultCommandMapping} from 'react-terminal-component';


class Terminal extends Component {
  render() {
    return (
      <div>
        <ReactTerminal inputStr='print hello world!' theme={{ ...ReactThemes.dye, height: '25vh', width: '70%' } }/>
      </div>
    );
  }
}


export default Terminal
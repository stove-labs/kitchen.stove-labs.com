import React, { Component } from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import defaultTheme from 'prism-react-renderer/themes/palenight';

let API;

class Fetch extends Component {
  
  constructor(props) {
    super(props);
    API = props.URL

    this.state = {
        data: null,
        isLoading: true,
      };
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => response.json())
      .then(data => {
          console.log(data)
        this.setState({data: data, isLoading: false })
      }).catch(error => console.log(error));
  }

  
  render() {
    const { data, isLoading } = this.state;
    if (isLoading){
      return <p>Loading ... Are you connected to the network?</p>;    
    } 
    
      return  <Highlight theme={defaultTheme} {...defaultProps} code={JSON.stringify(data,undefined,2)} language="json">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
    
}
    
 
}
 
export default Fetch;
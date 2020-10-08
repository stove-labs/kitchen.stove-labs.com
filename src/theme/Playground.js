import React, { useEffect, useRef, useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';


class CustomLiveProvider extends LiveProvider {
    constructor() {
        super();
    
        this.onChange = code => {
          // Override to prevent LiveProvider transpiling code on every change but
          // keep the code. We will need it later.
          this.code = code;
        }
      }
    
      UNSAFE_componentWillMount() {
        // Override to prevent LiveProvider transpiling code on mount but
        // keep the code. We will need it later.
        this.code = this.props.code;
      }
    
      componentDidUpdate() {
        // Override to prevent LiveProvider transpiling code on update but
        // keep the code. We will need it later.
      }
    
    return (){
        <LiveProvider code={code} scope={scope}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
        <Result />
      </LiveProvider>
    }
        
    
}

export default CustomLiveProvider;
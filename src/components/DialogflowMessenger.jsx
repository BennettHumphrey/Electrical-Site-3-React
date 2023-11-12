import React, { useEffect, useLayoutEffect } from 'react'
import { useWindowWidth } from './useWindowWidth';



const DialogflowMessenger = () => {

    const width = useWindowWidth();

    useEffect(() => {
        function initDfMessenger() {
  
          const dfMessenger = document.querySelector('df-messenger');
  
            dfMessenger.addEventListener('df-messenger-loaded', function (event) {
  
                dfMessenger.renderCustomText('Welcome to electrical company');
                console.log('trigger')
  
                const widget = document.querySelector('df-messenger')
                .shadowRoot.querySelector('.df-messenger-wrapper')
                .querySelector('#widgetIcon');
  
                widget.style.right = '0px';
            });
        }
      
        window.addEventListener('load', initDfMessenger);
      
      }, []);


  return (
    <div>
    <df-messenger
        style={{right:'300px'}}
        intent="WELCOME"
        chat-title="Test-Project-Agent"
        agent-id="6d41f97b-4b20-4a88-bcf5-fd9659b02425"
        language-code="en"
      >
      </df-messenger>    
    </div>
  )
}

export default DialogflowMessenger
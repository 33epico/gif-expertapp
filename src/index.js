import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';
import './index.css';

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );


//crear un componente
//giftExpertApp
//tiene un H2 que dice <giftExpertApp>
//>hr/>

const divRoot = document.querySelector('#root')

ReactDOM.render(<GifExpertApp />,divRoot);



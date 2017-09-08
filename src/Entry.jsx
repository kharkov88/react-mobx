import React from 'react';
import { render } from 'react-dom';
import Store from './State/Index';


import Main from './Components/Main' 

const store = new Store();
render(
    <Main store={store}/>,
    document.getElementById('app'),
);

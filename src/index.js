import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"

import 'playbook-ui/dist/fonts/fontawesome-min';
import 'playbook-ui/dist/fonts/regular-min';
import 'playbook-ui/dist/playbook.css';


ReactDOM.render(
<Router>
<App />
</Router>, document.getElementById('root')
)



import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import UserProvider from './Context/UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
<UserProvider> 
<BrowserRouter > 
  <App />
 </BrowserRouter>
</UserProvider>
  //</React.StrictMode>
);
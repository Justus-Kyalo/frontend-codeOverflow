import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';


const store = configureStore();



function Root() {
  return (
      <Provider store={store}>
        <BrowserRouter>
         
            <App />
          
        </BrowserRouter>
      </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApplication = () => {
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
}


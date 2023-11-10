import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@/providers/ThemeProvider/ThemeProvider";
import './types/index'
import {Provider} from "react-redux";
import {store} from "@/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <ThemeProvider>
                <Suspense fallback="Loading...">
                  <App />
                </Suspense>
              </ThemeProvider>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

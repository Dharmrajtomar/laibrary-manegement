// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { RouterProvider } from 'react-router-dom';
// import router from './router';
// import store from './Store/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store} >
//     <RouterProvider router={router} />
//       <App/>
//     </RouterProvider>
//   </Provider>
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './Store/store';
import router from './router'; // assuming it's setup with createBrowserRouter
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// Optional: For performance measurement
reportWebVitals();

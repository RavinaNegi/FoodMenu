import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainContainer from './component/MainContainer';
import ResData from './component/ResData';
import Error from './component/Error';
import Cart from './component/Cart';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Grocery = lazy(() => import('./component/Grocery'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
        errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Grocery />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResData />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={appRouter} />
  
);

reportWebVitals();

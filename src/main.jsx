import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import AuthProvider from './ContextApi/AuthProvider';
import { router } from './Routes/Router';
import './index.css';
// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <QueryClientProvider client={queryClient}>
     
        <RouterProvider router={router} />
   
    </QueryClientProvider>
    </AuthProvider>


  </React.StrictMode>
  ,
)

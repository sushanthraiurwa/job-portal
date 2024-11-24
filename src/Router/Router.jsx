import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home'; // Updated path to reflect the Pages folder
import About from '../Pages/About'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

export default router;

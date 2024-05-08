import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/Home';
import ExerciseDetails from '@/pages/ExerciseDetails';
import Layout from '@/components/Layout/Layout';

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/exercise/:id',
        element: <ExerciseDetails />,
      },
    ],
  },
]);

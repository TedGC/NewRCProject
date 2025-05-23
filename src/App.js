
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import PostDetailPage from './pages/PostDetail';
import RootLayout from './routes/Root';
import PostLayout from './routes/PostRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'post',
        element: <PostLayout />,
        children: [
          {
            path: 'posts',
            element: <PostDetailPage />
          }
        ]
      }


    ]
  }

])
export default function App() {

  return (

    <RouterProvider router={router} />
  )
}





/**
 * git branch -M main
git push -u origin main
 */
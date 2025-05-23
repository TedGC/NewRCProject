
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import PostDetailPage from './pages/PostDetail';
import RootLayout from './routes/Root';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        children: [
          {
            path: '/post',
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
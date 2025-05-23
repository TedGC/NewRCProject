
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
imp

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  }

])
export default function App() {


  return (

    <Router router={router} />

  )
}





/**
 * git branch -M main
git push -u origin main
 */
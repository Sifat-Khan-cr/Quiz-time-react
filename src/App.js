import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Header from './Components/Header/Header';
import Blog from './Components/Blog/Blog';
import Stats from './Components/Stats/Stats';
import Quiz from './Components/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/stats',
          element: <Stats></Stats>
        },
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Header></Header>
        },
        {
          path: '/topic/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`);
          },
          element: <Quiz></Quiz>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>

  );
}

export default App;

import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './Routes/routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { useContext } from 'react';
import { RouterProvider } from 'react-router';
import './App.css';
import { AuthContext } from './Contexts/AuthProvider/AuthProvider';
import { router } from './Routes/routes';

function App() {
  const { day } = useContext(AuthContext)
  console.log(day)
  return (
    <div className={`${day ? 'bg-gray-200' : 'bg-slate-800'}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

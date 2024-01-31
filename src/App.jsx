import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import './App.css';
import AllRoutes from './Pages/AllRoutes';
import { getCartItems } from './Redux/Cart/action';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(getCartItems())
  },[dispatch])

  return (
    <Box className="App">
      <AllRoutes/>
    </Box>
  );
}

export default App;

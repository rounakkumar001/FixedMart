import { Box } from '@mui/material';

// There are usable Components list written below.
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DataProvider from './context/dataProvider';

import Detailsviews from './components/details/Detailsviews';

import Cart from './components/cart/Cart';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: ' 55px' }}>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Detailsviews />} />
            <Route path='/cart' element={<Cart/>} />
            
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { Orders } from '@react-monorepo/orders';
import { Products } from '@react-monorepo/products';
import { Route, Routes } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/products' element={<Products />}></Route>
      <Route path='/orders' element={<Orders />}></Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;

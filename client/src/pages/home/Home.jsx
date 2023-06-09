import { useEffect, useState } from 'react';
import Body from '../../components/organisms/layout/Body';
import axios from 'axios';

// https://e-commerce-ietl.onrender.com/

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProduct = async () => {
      const res = await axios.get(
        'https://e-commerce-ietl.onrender.com/products'
      );
      setProducts(res.data);
    };

    getAllProduct();
  }, []);

  return (
    <Body>
      home
      <div>
        {products.map((p) => {
          return (
            <div key={p.title}>
              <h2>{p.title}</h2>
            </div>
          );
        })}
      </div>
    </Body>
  );
}

export default Home;

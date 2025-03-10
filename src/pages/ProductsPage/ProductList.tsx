import { Link } from 'react-router-dom';
import { productList } from './ProductsPage.const.ts';

export const ProductList = () => {
  return (
    <div>
      <h2>ProductList</h2>
      <ol className="">
        {productList.map((product) => (
          <li key={product.id}><Link to={`/products/${product.id}`}>{product.name}</Link></li>
        ))}
      </ol>
    </div>
  );
};


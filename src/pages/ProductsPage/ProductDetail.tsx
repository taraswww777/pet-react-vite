import { Link, Route, Switch, useParams } from 'react-router-dom';
import { productList } from './ProductsPage.const.ts';
import { PAGE_UI_ROUTES } from '../../constants/pageUiLinks.ts';
import { PAGE_NAMES } from '../../constants/pageNames.ts';
import { ProductEdit } from './ProductEdit.tsx';

interface WithProductId {
  productId: string;
}

export const ProductDetail = () => {
  const params = useParams<WithProductId>();

  const product = productList.find((product) => product.id === params.productId);

  if (!product) {
    return <div>нет ничего</div>;
  }

  return (
    <div>
      <h2>ProductDetail</h2>
      <Link to={`/products/${product.id}/edit`}>edit {product.name}</Link>
      <pre>{JSON.stringify(params, undefined, 2)}</pre>
      <Switch>
        <Route path={`${PAGE_UI_ROUTES[PAGE_NAMES.ProductsEdit]}`}>
          <ProductEdit />
        </Route>
      </Switch>
    </div>
  );
};


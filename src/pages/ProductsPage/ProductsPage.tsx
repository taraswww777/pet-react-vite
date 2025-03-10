import { ProductList } from './ProductList.tsx';
import { ProductDetail } from './ProductDetail.tsx';
import { Route, Switch } from 'react-router-dom';
import { PAGE_UI_ROUTES } from '../../constants/pageUiLinks.ts';
import { PAGE_NAMES } from '../../constants/pageNames.ts';

const ProductsPage = () => {
  return (
    <div>
      <h1>ProductsPage</h1>
      <div className="">
        <ProductList />
      </div>
      <div className="">
        <Switch>
          <Route path={`${PAGE_UI_ROUTES[PAGE_NAMES.ProductsDetail]}`}>
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default ProductsPage;

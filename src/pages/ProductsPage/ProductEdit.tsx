import { Route, useParams } from 'react-router-dom';
import { PAGE_UI_ROUTES } from '../../constants/pageUiLinks.ts';
import { PAGE_NAMES } from '../../constants/pageNames.ts';

export const ProductEdit = () => {
  const params = useParams();

  return (
    <div>
      <h2>ProductEdit</h2>
      <pre>{JSON.stringify(params, undefined, 2)}</pre>
    </div>
  );
};


import {PAGE_NAMES} from './pageNames.ts';

export const PAGE_UI_ROUTES: Record<PAGE_NAMES, string> = {
  [PAGE_NAMES.AntdForm]: `/${PAGE_NAMES.AntdForm}`,
  [PAGE_NAMES.Home]: `/`,
  [PAGE_NAMES.RtkQuery]: `/${PAGE_NAMES.RtkQuery}`,
  [PAGE_NAMES.Products]: `/${PAGE_NAMES.Products}`,
  [PAGE_NAMES.ProductsDetail]: `/${PAGE_NAMES.Products}/:productId`,
  [PAGE_NAMES.ProductsEdit]: `/${PAGE_NAMES.Products}/:productId/edit`,
}

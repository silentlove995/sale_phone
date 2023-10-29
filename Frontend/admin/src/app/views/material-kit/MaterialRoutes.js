import {lazy} from 'react';
import Loadable from 'app/components/Loadable';

const CategoryList = Loadable(lazy(() => import('./tables/CategoryList')));
const ProductList = Loadable(lazy(() => import('./tables/ProductList')));
const OrderList = Loadable(lazy(() => import('./tables/OrderList')));
const VoucherList = Loadable(lazy(() => import('./tables/VoucherList')));

const materialRoutes = [
  {path: '/material/tables', element: <CategoryList/>},
];

export default materialRoutes;

import Home from '../views/pages/home';
import DetailMenu from '../views/pages/detail-menu';
import FavoriteMenu from '../views/pages/favorite-menu';

const routes = {
    '/': Home,
    '/menu': DetailMenu,
    '/favorite': FavoriteMenu,
};

export default routes;
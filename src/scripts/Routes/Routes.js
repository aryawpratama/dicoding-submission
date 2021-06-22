import Detail from './List/Detail'
import Root from './List/Root'
import Favorite from './List/Favorite'
const Routes = {
  '/': Root,
  '/detail/:id': Detail,
  '/favorite': Favorite
}
export default Routes

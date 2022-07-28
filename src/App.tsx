import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { APP_ROUTES } from './consts';
import './App.css';
import { Home } from './pages/home/Home';
import { MyDemands } from './pages/myDemands/MyDemands';
import {MyAds} from './pages/myAds/MyAds';
import {NewDemand} from './pages/myDemands/NewDemand'
import { NewAds } from './pages/myAds/NewAds';
import { Keywords } from './pages/keywords/Keywords';
import { Favourites } from './pages/favourites/Favourites';
import { AllNotifications } from './pages/allNotifications/AllNotifications';

function App() {
  return (
    <>
      <Routes>
        <Route path={APP_ROUTES.HOME.PATH} element={<Home/>}>
        </Route>
        <Route path={APP_ROUTES.DEMANDS.PATH} element={<MyDemands/>}>
        </Route>
        <Route path={APP_ROUTES.DEMANDS.CREATE_PATH} element={<NewDemand/>}>
        </Route>
        <Route path={APP_ROUTES.ADS.PATH} element={<MyAds/>}>
        </Route>
        <Route path={APP_ROUTES.ADS.CREATE_PATH} element={<NewAds/>}>
        </Route>
        <Route path={APP_ROUTES.KEYWORDS.PATH} element={<Keywords/>}>
        </Route>
        <Route path={APP_ROUTES.FAVOURITES.PATH} element={<Favourites/>}>
        </Route>
        <Route path={APP_ROUTES.NOTIFICATIONS.PATH} element={<AllNotifications/>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;

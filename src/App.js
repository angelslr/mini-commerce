import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderApp } from './components/HeaderApp';
import { Home } from './views/Home';
import { Switch, Route } from 'react-router-dom';
import { ProductView } from './views/ProductView';
import { PurchaseView } from './views/PurchaseView';

const App = () => {
  return (
    <>
      <HeaderApp />
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/purchase'} exact component={PurchaseView} />
        <Route path={'/product/:id'} exact component={ProductView} />
        <Route render={() => <div>404 Pagina no Encontrada</div>} />
      </Switch>
    </>
  );
}

export default App;

import Layout from 'components/Layout';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageRoutes } from 'assets/constants/PageRoutes';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route strict path={PageRoutes.MAIN}>
        <Layout>
          <MainPage/>
        </Layout>
      </Route>

      <Route path={PageRoutes.NOT_FOUND}>
        <NotFoundPage/>
      </Route>

      <Redirect to={PageRoutes.NOT_FOUND}/>
    </Switch>
  );
}

export default Routes;

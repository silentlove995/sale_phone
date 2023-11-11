import {CssBaseline} from '@mui/material';
import {useRoutes} from 'react-router-dom';
import {MatxTheme} from './components';
import {AuthProvider} from './contexts/JWTAuthContext';
import {SettingsProvider} from './contexts/SettingsContext';
// import React from 'react';
import routes from './routes';
import '../fake-db';
import {Provider} from "react-redux";
import configureStore from "./configureStore";

const store = configureStore()

const App = () => {
  const content = useRoutes(routes);
  // const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
//     const Login = React.lazy(() => import('./views/pages/login/Login'))
  // const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))

  return (
      <Provider store={store}>
        <SettingsProvider>
          <AuthProvider>
            <MatxTheme>
              <CssBaseline/>
              {content}
            </MatxTheme>
          </AuthProvider>
        </SettingsProvider>
      </Provider>
  );
};

export default App;

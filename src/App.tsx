import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './rootReducer';

const Auth = lazy(() => import('../src/features/auth/Auth'));
const Home = lazy(() => import('../src/features/home/Home'));

const App: FC = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <Router>
        <Route path="/">
          <Suspense fallback={<p>Loading...</p>}>
            {isLoggedIn ? <Home /> : <Auth />}
          </Suspense>
        </Route>
    </Router>
  );
};

export default App;

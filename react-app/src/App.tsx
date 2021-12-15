import React, { createElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './assets/scss/index.scss';
import Layout from './layout';
import Day1 from './pages/Day1';
import NotFound from './pages/NotFound';
import routes from './pages/routes';

const App = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Advent Of CSS & JavaScript</title>
        <meta name="description" content="Phuc - Advent Of CSS & JavaScript" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Day1 />} />
            {routes.map(({ path, component }) =>
              <Route
                path={path}
                key={path}
                element={
                  <React.Suspense fallback={<>...</>}>
                    {createElement(component)}
                  </React.Suspense>
                }
              />,
            )}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

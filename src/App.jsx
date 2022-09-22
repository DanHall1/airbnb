import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { useGoTop } from "./hooks/useGoTop";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import routes from "./router";
const App = memo(() => {
  useGoTop();
  return (
    <div>
      <AppHeader />
      <Suspense fallback={<h2>loading</h2>}>
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  );
});

export default App;

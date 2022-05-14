import { Fragment, Suspense, useState } from "react";
import "swiper/scss";
import AppRouter from "./AppRouter";
import { OpenAdsProvider } from "./contexts/openAdsContext";
function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <OpenAdsProvider>
          <AppRouter></AppRouter>
        </OpenAdsProvider>
      </Suspense>
    </Fragment>
  );
}

export default App;

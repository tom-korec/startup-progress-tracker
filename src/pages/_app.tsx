import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import { StoreProvider } from "~/core/store";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default MyApp;

import { type AppType } from "next/dist/shared/lib/utils";
import { Toaster } from "react-hot-toast";

import "~/styles/globals.css";
import { StoreProvider } from "~/core/store";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <Toaster />
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default MyApp;

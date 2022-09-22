import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/useAuth";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //high order components (recoil and auth)- revise this Josh!
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />{" "}
      </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/useAuth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //high order component - revise this Josh!
    <AuthProvider>
      <Component {...pageProps} />{" "}
    </AuthProvider>
  );
}

export default MyApp;

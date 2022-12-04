import 'focus-visible'
import '@/styles/tailwind.css'
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthContextProvider from "../context/AuthContext";

const noAuthRequired = ["/login", "/register", "/index"];

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}
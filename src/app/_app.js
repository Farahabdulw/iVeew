import { AuthProvider } from "@/contexts/AuthContext";

const MyApp = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default MyApp; 
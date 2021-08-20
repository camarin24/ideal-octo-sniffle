import '../styles/app.css'
import { AppProps } from 'next/app'

// https://wityan.medium.com/next-js-project-structure-1531610bed71

export default function App({ Component, pageProps }: AppProps) {
    return <Component { ...pageProps } />
}

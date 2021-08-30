import '../styles/app.css'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

// https://wityan.medium.com/next-js-project-structure-1531610bed71

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider session={ pageProps.session } >
            <Component { ...pageProps } />
        </Provider>
    )
}

import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'

const providers = [
    Providers.Credentials({
        name: 'Credentials',
        credentials: {
            username: { label: "Username", type: "text", placeholder: "User Name" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            const res = await fetch("http://localhost:8080/auth/login", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
            })
            const user = await res.json()
            if (res.ok && user) {
                return { name: `${user.firstName} ${user.lastName}`, email: "", token: user.token }
            }
            return null
        }
    }),

]


const callbacks = {
    async jwt(token, user) {
        if (user) {
            token.accessToken = user.token
        }
        return token
    },

    async session(session, user) {
        session.user.accessToken = user.accessToken
        return session
    }
}

const options: NextAuthOptions = {
    providers,
    callbacks,
    pages: {
        error: '/login'
    }
}
export default (req, res) => NextAuth(req, res, options)

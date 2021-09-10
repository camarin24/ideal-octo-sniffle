import { GetServerSidePropsContext } from "next";
import { getCsrfToken, getSession } from "next-auth/client";
import React from "react";
import ErrorAlert from "../components/elements/error-alert";
import Layout from "@components/templates/simple-layout";

export interface LoginProps {
    csrfToken: string,
    error?: string
}

const Login: React.FunctionComponent<LoginProps> = ({ csrfToken, error }) => {

    return (
        <Layout home={ false } >
            <div className="max-w-sm mx-auto shadow-md bg-white dark:bg-gray-800 rounded-lg">
                <ErrorAlert visibleError={ error != null } />
                <div className="px-6 py-4">
                    <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>
                    <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>
                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>
                    <form method='post' action='/api/auth/callback/credentials'>
                        <input name='csrfToken' type='hidden' defaultValue={ csrfToken } />
                        <div className="w-full mt-4">
                            <input name="username" className="block dark:text-white w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" placeholder="Email Address" aria-label="Email Address" />
                        </div>
                        <div className="w-full mt-4">
                            <input name="password" className="block dark:text-white w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password" />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>
                            <button type='submit' className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex rounded-b-md items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
                    <a href="#" className="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">Register</a>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getSession(context);
    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {
            csrfToken: await getCsrfToken(context),
            error: context.query.error || null,
        }
    }
}

export default Login;

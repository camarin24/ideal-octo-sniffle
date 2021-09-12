import Head from 'next/head'
import Layout from '@components/templates/layout'
import Link from 'next/link'
import { GetServerSideProps, GetStaticProps } from 'next'
import { requirePageAuth } from '../lib/auth/auth'
import { Session } from '../types/session'

type HomeProps = {
    allPostsData: Array<{ date: string, title: string, id: string }>,
    user: Session
}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <Layout>
            <section >
                <p>
                    (This is a sample website - you’ll be building a site like this in{ ' ' }
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section >
                <h2 >Blog</h2>
                <ul >

                </ul>
            </section>
        </Layout>
    )
}

// export const getServerSideProps: GetServerSideProps = requirePageAuth(async (ctx, session) => {
//     console.log(session);

//     return { props: { user: session } }
// })
export default Home;

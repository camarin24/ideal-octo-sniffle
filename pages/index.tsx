import Head from 'next/head'
import Layout, { siteTitle } from '../components/layouts/layout'
import Link from 'next/link'
import Date from '../components/elements/date'
import { GetServerSideProps, GetStaticProps } from 'next'
import { requirePageAuth } from '../lib/auth/auth'

type HomeProps = {
    allPostsData: Array<{ date: string, title: string, id: string }>
}

const Home: React.FunctionComponent<HomeProps> = ({ allPostsData }) => {
    return (
        <Layout home>
            <Head>
                <title>{ siteTitle }</title>
            </Head>
            <section >
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this in{ ' ' }
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section >
                <h2 >Blog</h2>
                <ul >
                    { allPostsData.map(({ id, date, title }) => (
                        <li key={ id }>
                            <Link href={ `/posts/${id}` }>
                                <a>{ title }</a>
                            </Link>
                            <br />
                            <small >
                                <Date dateString={ date } />
                            </small>
                        </li>
                    )) }
                </ul>
            </section>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = requirePageAuth(async (ctx) => {
    return { props: {} }
})


export default Home;

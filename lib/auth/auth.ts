import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from 'next-auth/client'
import { ParsedUrlQuery } from "querystring";
import { Session } from "../../types/session";

type Callback = (
    ctx: GetServerSideProps<ParsedUrlQuery> | GetServerSidePropsContext<ParsedUrlQuery>,
    session: Session
) => any

export function requirePageAuth<P>(getServerSidePropsFunc?: Callback): GetServerSideProps {
    const withPrivateSSP: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
        const session = await getSession(ctx);
        if (!session) {
            return {
                redirect: {
                    destination: `/login`,
                    permanent: false,
                },
            };
        }
        if (getServerSidePropsFunc) {
            return await getServerSidePropsFunc(ctx, session.user as Session);
        }
        return { props: {} };
    };

    return withPrivateSSP;
}

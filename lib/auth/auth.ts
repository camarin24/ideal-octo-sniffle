import { GetServerSideProps, GetServerSidePropsContext } from "next";


type Callback = (
    ctx: GetServerSidePropsContext,
    user: any
) => any


type AuthorizeProps = {
    context: GetServerSidePropsContext
}


export function requirePageAuth<P>(getServerSidePropsFunc?: GetServerSideProps): GetServerSideProps {
    const withPrivateSSP: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
        const _isAuthenticated = false;

        // If not authenticated, we return a redirect object that instructs
        // Next.js to redirect to our login page.
        if (!_isAuthenticated) {
            return {
                redirect: {
                    destination: `/login`,
                    permanent: false,
                },
            };
        }

        if (getServerSidePropsFunc) {
            return await getServerSidePropsFunc(ctx);
        }
        return { props: {} };
    };

    return withPrivateSSP;
}

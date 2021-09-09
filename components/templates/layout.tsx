import Navbar from '@components/layouts/navbar';
import SideBar from '@components/layouts/side-bar';
import ThemeChanger from '../elements/theme-changer';

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode
    home?: boolean
}) {
    return (
        <div className="w-full overflow-hidden bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-wrap">
            <Navbar />
            {/* <SideBar /> */ }
            <ThemeChanger />
            { children }

        </div>
    )
}

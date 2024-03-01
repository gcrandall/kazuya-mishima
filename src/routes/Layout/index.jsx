// React
import { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";

// Bootstrap
import { ThemeProvider } from 'react-bootstrap';

// Custom Components
import TitleBar from "../../components/Layout/TitleBar";
import Footer from "../../components/Layout/Footer";

// Analytics
import ReactGA from "react-ga4";

function Layout() {

    let location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);

    return (
        <>
            <ThemeProvider
                breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
                minBreakpoint="xs"
            >
                <TitleBar />
                <Outlet />
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default Layout;

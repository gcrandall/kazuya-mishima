import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom';

// CSS
import './styles/skin.css';

// Routes
import Layout from './routes/Layout';
import MainApp from './routes/MainApp';
import FighterDetails, {
    loader as fighterDetailsLoader
} from './routes/FighterDetails';

// Analytics
import ReactGA from "react-ga4";
ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_API_KEY);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Navigate to="/" replace={true} />,
        children: [
            {
                path: "/",
                element: <MainApp />,
                children: [
                    {
                        path: "details/:fighterId",
                        element: <FighterDetails />,
                        loader: fighterDetailsLoader
                    }
                ]
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="body">
            {/* <App /> */}
            <RouterProvider router={router} />
        </div>
    </React.StrictMode>,
)

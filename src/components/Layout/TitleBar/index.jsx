// React
import { useState } from 'react';

// Custom Components
import HelpModal from './HelpModal';

// Images
import logo from '../../../assets/images/logo.svg';


function TitleBar() {

    const [showHelp, setShowHelp] = useState(false);

    return (
        <>
            <header className="l-header">
                <img src={logo} className="l-header__logo" alt="KAZUYA MISHIMA"/>
                <button className="l-header__help" title="Help" onClick={() => setShowHelp(true)}>
                    <i className="icon-help"></i>
                </button>

                <HelpModal
                    show={showHelp}
                    handleClose={() => setShowHelp(false)}
                />
            </header>
        </>
    );
}

export default TitleBar;

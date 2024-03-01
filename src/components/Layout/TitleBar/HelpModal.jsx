// React
import React from 'react';

// Bootstrap
import Modal from 'react-bootstrap/Modal';

// Data
import { getContributionCredits, getDeveloperCredit } from '../../../data/dataContributions';


function FighterDetails(props) {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const { show, handleClose } = props;

    const devCredit = getDeveloperCredit();
    const credits = getContributionCredits();

    return (
        <>
            <Modal className="c-help-modal" show={show} onHide={handleClose} animation={true} aria-labelledby="helpModal-title">
                <button className="c-help-modal__close" title="Close" onClick={handleClose}>
                    <i className="icon-close"/>
                </button>
                <Modal.Header>
                    <h1 className="h4" id="helpModal-title">About</h1>
                </Modal.Header>
                <Modal.Body>
                    <h2>What is this?</h2>
                    <p>KazuyaMishima.com is a web app meant to provide easy access to matchup-specific information for Kazuya in Super Smash Bros. Ultimate.</p>
                    <p>To see how it works, check out the public <a href="https://github.com/gcrandall/kazuya-mishima" target="_blank">GitHub repository</a>.</p>
                    <br />

                    <h2>How to use</h2>
                    <p>
                        Simply choose a character from the grid, using search and filter options if needed. Clicking a character's tile will bring up their details page with all of the information related to that character.
                    </p>
                    <br />

                    <h2>How to read character tiles</h2>
                    <p>Each character tile shows that character's release number and name, along with two other quickly accessible pieces of information.</p>
                    <p>In the bottom right corner, you can find the startup of their fastest escape option.</p>
                    <p>If the tile has a star in the top right corner, it means that all of the standard go-to options work on that character. These include:</p>
                    <ul>
                        <li>DThrow -&gt; EWGF</li>
                        <li>NAir -&gt; EWGF</li>
                        <li>NAir -&gt; UTilt</li>
                        <li>NAir -&gt; C.Jab</li>
                        <li>C.Jab -&gt; EWGF</li>
                        <li>Tsunami -&gt; EWGF</li>
                        <li>DGF -&gt; FSmash</li>
                    </ul>
                    <br />

                    <h2>A piece of information is wrong, how do I report it?</h2>
                    <p>If there is a mistake and a piece of information within the app is wrong, please report it using the <a href="https://forms.gle/WXSeXQtbrv418qs5A" target="_blank" rel="noreferrer">KazuyaMishima.com Error Report form</a>, ideally with evidence that it is incorrect. If it can be verified to be wrong, it will be corrected as soon as possible.</p>
                    <br />
                    
                    <h2>Credits</h2>
                    <p>
                        This app was designed &amp; developed by {devCredit}.
                    </p>
                    <div className="c-help-modal__credits">
                        <p className="mb-0">
                            Data contributed by
                        </p>
                        {credits}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FighterDetails;
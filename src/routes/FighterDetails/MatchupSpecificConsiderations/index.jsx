// React
import React from 'react';
import { useState } from 'react';

// Bootstrap
import Collapse from 'react-bootstrap/Collapse';

// Character Notes
import ConsiderationsShulk from './ConsiderationsShulk';


function MatchupSpecificConsiderations(props) {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const { fighterId } = props;

    const [expand, setExpand] = useState(true);

    const characterNotes = {
        "shulk":    <ConsiderationsShulk />
    }

    if (characterNotes[fighterId] == null) {
        return <></>;
    }

    return (
        <>
            <button
                className="c-fighter-details__body-heading"
                onClick={() => setExpand(!expand)}
                aria-controls="details-specific-considerations"
                aria-expanded={expand}
            >
                <h3>Matchup-Specific Considerations</h3>
            </button>

            <Collapse in={expand}>
                <div id="details-specific-considerations" className="c-fighter-details__body-section">
                    {characterNotes[fighterId]}
                </div>
            </Collapse>
        </>
    );
}

export default MatchupSpecificConsiderations;
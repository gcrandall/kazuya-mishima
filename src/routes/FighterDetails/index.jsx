// React
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLoaderData } from "react-router-dom";

// Bootstrap
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';

// Custom Components
import ValueIcon from '../../components/Details/ValueIcon';
import MatchupSpecificConsiderations from './MatchupSpecificConsiderations';

// Data
import {
    getFighter,
    getFighterDetails,
    getValueTypes
} from '../../data/fighterData';

export async function loader({ params }) {
    return getFighter(params.fighterId);
}


function FighterDetails(props) {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const fighter = useLoaderData();

    const navigate = useNavigate();

    const VALUES = getValueTypes();

    const [expandComboTree, setExpandComboTree] = useState(true);
    const [expandOtherInfo, setExpandOtherInfo] = useState(true);
    const [expandElectricNairDgf, setExpandElectricNairDgf] = useState(true);

    useEffect(() => {
        if (fighter != null) {
            document.title = `${fighter.name} - KazuyaMishima.com`;
        }
    });

    if (!fighter) {
        navigate("/");
        return <></>;
    }

    const fighterDetails = getFighterDetails(fighter.id);

    const portrait = `/images/fighters/portrait/${fighter?.image}`;
    const stage = `/images/stages/${fighter?.stage}`;


    //--------------------------------------------------
    // HANDLERS
    //--------------------------------------------------

    const handleClose = () => {
        document.title = `KazuyaMishima.com`;
        navigate("/");
    }


    return (
        <>
            <Modal className="c-fighter-details" show={true} onHide={handleClose} animation={true}>
                <button className="c-fighter-details__close" title="Close" onClick={handleClose}>
                    <i className="icon-close"/>
                </button>
                <div className="c-fighter-details__header">
                    <img src={portrait} className="c-fighter-details__portrait" alt=""/>
                    <img src={stage} className="c-fighter-details__stage" alt=""/>
                    <h2 className="c-fighter-details__title">
                        <span className="c-fighter-details__num">{fighter?.number}</span>
                        <span className="c-fighter-details__name">{fighter?.name}</span>
                    </h2>
                    <ul className="c-fighter-details__stats">
                        <li>
                            <a href={fighter?.ufd} target="_blank" rel="noreferrer" className="c-fighter-details__header-link">
                                <i className="icon-ufd" title="Ultimate Frame Data"></i>
                            </a>
                            <a href={fighter?.dragdown} target="_blank" className="c-fighter-details__header-link">
                                <i className="icon-dragdown" title="Dragdown"></i>
                            </a>
                        </li>
                        <li>
                            <strong>weight:</strong> {fighter?.weight}
                        </li>
                        <li>
                            <strong>Fall Speed:</strong> {fighter?.fallSpeed}
                        </li>
                        <li>
                            <strong>Airdodge:</strong> {fighter?.airdodge}
                        </li>
                        <li>
                            <strong>Fastest Escape:</strong> <span className="">({fighter?.escapeName})</span> {fighter?.escape} 
                        </li>
                    </ul>
                </div>

                <div className="c-fighter-details__body">
                    <MatchupSpecificConsiderations fighterId={fighter.id} />

                    <button
                        className="c-fighter-details__body-heading"
                        onClick={() => setExpandComboTree(!expandComboTree)}
                        aria-controls="details-combo-tree"
                        aria-expanded={expandComboTree}
                    >
                        <h3>Combo Tree</h3>
                    </button>

                    <Collapse in={expandComboTree}>
                        <div id="details-combo-tree" className="c-fighter-details__body-section">
                            <table className="c-fighter-details__table">
                                <tbody>
                                    <tr>
                                        <th className="width-66 hidden"></th>
                                        <th className="width-33">Works Normally?</th>
                                    </tr>
                                    <tr>
                                        <td className="width-66">Dthrow -&gt; EWGF</td>
                                        <td className="width-33">
                                            <ValueIcon value={fighterDetails?.dthrow?.ewgf}/>
                                        </td>
                                    </tr>
                                    {
                                        (fighterDetails?.dthrow?.notes != null) &&
                                        <tr>
                                            <td className="c-fighter-details__table-notes text-start" colSpan={2}>
                                                <strong>Notes:</strong> {fighterDetails?.dthrow?.notes}
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>

                            <table className="c-fighter-details__table">
                                <tbody>
                                    <tr>
                                        <th className="width-25 hidden"></th>
                                        <th className="width-25">Electric</th>
                                        <th className="width-25">Utilt</th>
                                        <th className="width-25">C.Jab</th>
                                    </tr>
                                    <tr>
                                        <td>Tsunami</td>
                                        <td>
                                            <ValueIcon value={fighterDetails?.tsunami?.ewgf}/>
                                        </td>
                                        <td>
                                            <span>N/A</span>
                                        </td>
                                        <td>
                                            <span>N/A</span>
                                        </td>
                                    </tr>
                                    {
                                        (fighterDetails?.tsunami?.notes != null) &&
                                        <tr>
                                            <td className="hidden"></td>
                                            <td className="c-fighter-details__table-notes width-66 text-start" colSpan={3}>
                                                <strong>Notes:</strong> {fighterDetails?.tsunami?.notes}
                                            </td>
                                        </tr>
                                    }
                                    <tr>
                                        <td>Nair</td>
                                        <td>
                                            <ValueIcon value={fighterDetails?.nair?.ewgf}/>
                                        </td>
                                        <td>
                                            <ValueIcon value={fighterDetails?.nair?.utilt}/>
                                        </td>
                                        <td>
                                            <ValueIcon value={fighterDetails?.nair?.cjab}/>
                                        </td>
                                    </tr>
                                    {
                                        (fighterDetails?.nair?.notes != null) &&
                                        <tr>
                                            <td className="hidden"></td>
                                            <td className="c-fighter-details__table-notes width-66 text-start" colSpan={3}>
                                                <strong>Notes:</strong> {fighterDetails?.nair?.notes}
                                            </td>
                                        </tr>
                                    }
                                    <tr>
                                        <td>Stature Smash</td>
                                        <td>
                                            <ValueIcon value={fighterDetails?.trip?.ewgf}/>
                                        </td>
                                        <td>
                                            <ValueIcon value={fighterDetails?.trip?.utilt}/>
                                        </td>
                                        <td>
                                            <span>N/A</span>
                                        </td>
                                    </tr>
                                    {
                                        (fighterDetails?.trip?.notes != null) &&
                                        <tr>
                                            <td className="hidden"></td>
                                            <td className="c-fighter-details__table-notes width-66 text-start" colSpan={3}>
                                                <strong>Notes:</strong> {fighterDetails?.trip?.notes}
                                            </td>
                                        </tr>
                                    }
                                    <tr>
                                        <td>Crouch Jab</td>
                                        <td>
                                            <ValueIcon value={fighterDetails?.cjab?.ewgf}/>
                                        </td>
                                        <td>
                                            <span>N/A</span>
                                        </td>
                                        <td>
                                            <span>N/A</span>
                                        </td>
                                    </tr>
                                    {
                                        (fighterDetails?.cjab?.notes != null) &&
                                        <tr>
                                            <td className="hidden"></td>
                                            <td className="c-fighter-details__table-notes width-66 text-start" colSpan={3}>
                                                <strong>Notes:</strong> {fighterDetails?.cjab?.notes}
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>

                            <table className="c-fighter-details__table">
                                <tbody>
                                    <tr>
                                        <th className="width-33 hidden"></th>
                                        <th className="width-33">Hits?</th>
                                        <th className="width-33">Tippers?</th>
                                    </tr>
                                    <tr>
                                        <td className="width-33">DGF -&gt; Fsmash</td>
                                        <td className="width-33">
                                            <ValueIcon value={fighterDetails?.dgf?.hits}/>
                                        </td>
                                        <td className="width-33">
                                            <ValueIcon value={fighterDetails?.dgf?.tippers}/>
                                        </td>
                                    </tr>
                                    {
                                        (fighterDetails?.dgf?.notes != null) &&
                                        <tr>
                                            <td className="width-33 hidden"></td>
                                            <td className="c-fighter-details__table-notes text-start" colSpan={2}>
                                                <strong>Notes:</strong> {fighterDetails?.dgf?.notes}
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Collapse>

                    <button
                        className="c-fighter-details__body-heading"
                        onClick={() => setExpandOtherInfo(!expandOtherInfo)}
                        aria-controls="details-other-info"
                        aria-expanded={expandOtherInfo}
                    >
                        <h3>Other Information</h3>
                    </button>

                    <Collapse in={expandOtherInfo}>
                        <div id="details-other-info" className="c-fighter-details__body-section">
                            <table className="c-fighter-details__table">
                                <tbody>
                                    <tr>
                                        <th className="width-33 hidden"></th>
                                        <th className="width-33">Advantage</th>
                                        <th className="width-33">Chance to Trip?</th>
                                    </tr>
                                    <tr>
                                        <td>EWGF On Block</td>
                                        <td>
                                            {fighterDetails?.electricOnBlock?.advantage}
                                        </td>
                                        <td>
                                            <ValueIcon value={fighterDetails?.electricOnBlock?.canTrip}/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {
                                (fighterDetails?.rapidJabArmor?.hasRapidJab === VALUES.yes) &&
                                <table className="c-fighter-details__table">
                                    <tbody>
                                        <tr>
                                            <th className="width-33 hidden"></th>
                                            <th className="width-33">Can Armor?</th>
                                            <th className="width-33">Armors Until</th>
                                        </tr>
                                        <tr>
                                            <td>Rapid Jab</td>
                                            <td>
                                                <ValueIcon value={(fighterDetails?.rapidJabArmor?.armorsUntil != null) ? VALUES.yes : VALUES.no} />
                                            </td>
                                            <td>
                                                {fighterDetails?.rapidJabArmor?.armorsUntil}%
                                            </td>
                                        </tr>
                                        {
                                            (fighterDetails?.rapidJabArmor?.notes != null) &&
                                            <tr>
                                                <td className="width-33 hidden"></td>
                                                <td className="c-fighter-details__table-notes text-start" colSpan={2}>
                                                    <strong>Notes:</strong> {fighterDetails?.rapidJabArmor?.notes}
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            }

                            <table className="c-fighter-details__table">
                                <tbody>
                                    <tr>
                                        <th className="width-33 hidden"></th>
                                        <th className="width-33">Hits Ledge Hang</th>
                                        <th className="width-33">2-Frames</th>
                                    </tr>
                                    <tr>
                                        <td>Dragon Uppercut</td>
                                        <td>
                                            <ValueIcon value={fighterDetails?.dragonUpperOnLedge?.hits}/>
                                        </td>
                                        <td>
                                            <ValueIcon value={fighterDetails?.dragonUpperOnLedge?.twoFrames}/>
                                        </td>
                                    </tr>
                                    {
                                        (fighterDetails?.dragonUpperOnLedge?.notes != null) &&
                                        <tr>
                                            <td className="width-33 hidden"></td>
                                            <td className="c-fighter-details__table-notes text-start" colSpan={2}>
                                                <strong>Notes:</strong> {fighterDetails?.dragonUpperOnLedge?.notes}
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Collapse>

                    <button
                        className="c-fighter-details__body-heading"
                        onClick={() => setExpandElectricNairDgf(!expandElectricNairDgf)}
                        aria-controls="details-ewgf-nair-dgf"
                        aria-expanded={expandElectricNairDgf}
                    >
                        <h3>EWGF-&gt;Nair-&gt;DGF %s</h3>
                    </button>

                    <Collapse in={expandElectricNairDgf}>
                        <div id="details-ewgf-nair-dgf" className="c-fighter-details__body-section">
                            <table className="c-fighter-details__table">
                                <tbody>
                                    <tr>
                                        <td className="width-66">Lowest Achieved</td>
                                        <td className="width-33">{fighterDetails?.electricNairDgf?.lowest ?? "--"}%{(fighterDetails?.electricNairDgf?.onlyFullHopAtLowest === VALUES.yes) ? "*" : ""}</td>
                                    </tr>
                                    <tr>
                                        <td className="width-66">Consistent Low</td>
                                        <td className="width-33">{fighterDetails?.electricNairDgf?.consistentLow ?? "--"}%</td>
                                    </tr>
                                    <tr>
                                        <td className="width-66">Full Hop Max</td>
                                        <td className="width-33">{fighterDetails?.electricNairDgf?.fullHopMax ?? "--"}%</td>
                                    </tr>
                                    <tr>
                                        <td className="width-66">Short Hop Max</td>
                                        <td className="width-33">{fighterDetails?.electricNairDgf?.shortHopMax ?? "--"}%</td>
                                    </tr>
                                    {
                                        (fighterDetails?.electricNairDgf?.onlyFullHopAtLowest === VALUES.yes) &&
                                        <tr>
                                            <td className="c-fighter-details__table-notes text-end" colSpan={2}>
                                                *Couldn't get SH consistently go for FH almost exclusively
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Collapse>

                </div>
            </Modal>
        </>
    );
}

export default FighterDetails;
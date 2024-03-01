// React
import React  from 'react';
import { Link } from "react-router-dom";


function FighterCard(props) {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const { fighter } = props;

    const portrait = `/images/fighters/thumb/${fighter.image}`;
    const stage = `/images/stages/${fighter.stage}`;


    return (
        <>
            <Link to={`/details/${fighter?.id}`}>
                <div className="c-fighter-card">
                    <img src={portrait} className="c-fighter-card__portrait" alt=""/>
                    <img src={stage} className="c-fighter-card__stage" alt=""/>
                    <h2 className="c-fighter-card__title">
                        <span className="c-fighter-card__num">{fighter?.number}</span>
                        <span className="c-fighter-card__name">{fighter?.name}</span>
                    </h2>
                    {
                        (fighter?.escape != null) &&
                        <span className="c-fighter-card__stat">
                            <span className="visually-hidden">Fastest Escape:</span>
                            <span className="small">{fighter?.escapeName}</span>
                            <br /> Frame {fighter?.escape}
                        </span>
                    }
                    {
                        (fighter?.comboFood === true) &&
                        <span className="c-fighter-card__badge" title="All go-to options work as expected"></span>
                    }
                </div>
            </Link>
        </>
    );
}

export default FighterCard;

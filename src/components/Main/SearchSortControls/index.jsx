// React
import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SearchSortControls(props) {

    const {
        searchTerm,
        sortOrder,
        reverseSort,
        sortOptions,
        searchCallback,
        searchEnterCallback,
        sortCallback,
        reverseSortCallback,
        clearCallback
    } = props;

    let sortOptionsMarkup = [];
    for (let i = 0; i < sortOptions.length; i++) {
        sortOptionsMarkup.push(
            <option key={`sort-option-${i}`} value={i}>{sortOptions[i].name}</option>
        );
    }

    // Callback on pressing enter when searching
    const searchKeyDownHandler = (event) => {
        if (event.key === "Enter") {
            searchEnterCallback(searchTerm);
        }
    }


    return (
        <>
            <div className="c-controls">
                <Container>
                    <Row>
                        <Col xs="12" md="12" xl="4" xxxl="5" className="text-center">
                            <div className="input-container c-controls__search">
                                <label className="input-label" htmlFor="controls-search">
                                    Search
                                </label>
                                <input
                                    type="search"
                                    className="input-field"
                                    id="controls-search"
                                    placeholder=""
                                    value={searchTerm}
                                    onChange={(e) => searchCallback(e.target.value)}
                                    onKeyDown={searchKeyDownHandler}
                                    autoFocus
                                />
                                {/* <button title="Search"></button> */}
                            </div>
                        </Col>
                        <Col xs="8" md="6" xl="4" xxxl="5" className="text-center">
                            <div className="input-container c-controls__sort">
                                <label className="input-label" htmlFor="controls-sort">
                                    Sort
                                </label>
                                <select
                                    id="controls-sort"
                                    className="input-field"
                                    value={sortOrder}
                                    onChange={(e) => sortCallback(parseInt(e.target.value))}
                                >
                                    {sortOptionsMarkup}
                                </select>
                                <button
                                    className={`btn c-controls__sort-reverse ${(reverseSort) ? "reversed" : ""}`}
                                    title={`${(reverseSort) ? "Unreverse" : "Reverse"} Sort Order`}
                                    onClick={reverseSortCallback}
                                >
                                    <i className="icon-arrow-down"/>
                                </button>
                            </div>
                        </Col>
                        <Col xs="4" md="6" xl="4" xxxl="2" className="justify-content-end justify-content-md-center">
                            <div className="input-container c-controls__clear">
                                <button className="btn" onClick={clearCallback}>Clear</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SearchSortControls;

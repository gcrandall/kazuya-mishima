// React
import { useState } from 'react';
import { useNavigate, Outlet } from "react-router-dom";

// Custom Components
import SearchSortControls from "../../components/Main/SearchSortControls";
import FighterGrid from "../../components/Main/FighterGrid";

// Data
import { getFighterList } from "../../data/fighterData";

// Search
import { matchesSearchQuery } from '../../util/utilMethods';

// Sort Orders
import {
    sortFightersByReleaseNumber,
    sortFightersByName,
    sortFightersByWeight,
    sortFightersByFallSpeed,
    sortFightersByEscapeOption
} from '../../util/sortMethods';


function MainApp(props) {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const [searchTerm, setSearchTerm] = useState("");
    const [currentSortOrder, setCurrentSortOrder] = useState(0);
    const [reverseSort, setReverseSort] = useState(false);

    const navigate = useNavigate();

    const sortOptions = [
        {
            name: "Release Number",
            sortOrder: (a, b) => sortFightersByReleaseNumber(a, b, reverseSort)
        },
        {
            name: "Name",
            sortOrder: (a, b) => sortFightersByName(a, b, reverseSort)
        },
        {
            name: "Weight",
            sortOrder: (a, b) => sortFightersByWeight(a, b, reverseSort)
        },
        {
            name: "Fall Speed",
            sortOrder: (a, b) => sortFightersByFallSpeed(a, b, reverseSort)
        },
        {
            name: "Fastest Escape Option",
            sortOrder: (a, b) => sortFightersByEscapeOption(a, b, reverseSort)
        },
    ];


    //--------------------------------------------------
    // FIGHTER DATA
    //--------------------------------------------------

    const fighters = getFighterList();

    // // Filter & Sort fighters
    const filteredFighters = fighters.filter(fighter => matchesSearchQuery(searchTerm, [fighter.name, fighter.searchTerms]));
    filteredFighters.sort(sortOptions[currentSortOrder].sortOrder);


    //--------------------------------------------------
    // HANDLERS
    //--------------------------------------------------

    const handleSearchEnter = () => {
        if ((searchTerm.trim().length <= 0) || (filteredFighters.length <= 0)) {
            return;
        }
        navigate(`/details/${filteredFighters[0]?.id}`);
    }

    const clearSearchSort = () => {
        setSearchTerm("");
        setCurrentSortOrder(0);
        setReverseSort(false);
    }
    

    return (
        <>
            <SearchSortControls
                searchTerm={searchTerm}
                sortOrder={currentSortOrder}
                reverseSort={reverseSort}
                sortOptions={sortOptions}
                searchCallback={setSearchTerm}
                searchEnterCallback={handleSearchEnter}
                sortCallback={setCurrentSortOrder}
                reverseSortCallback={() => setReverseSort(!reverseSort)}
                clearCallback={clearSearchSort}
            />
            <FighterGrid
                fighters={filteredFighters}
            />
            <Outlet />
        </>
    );
}

export default MainApp;
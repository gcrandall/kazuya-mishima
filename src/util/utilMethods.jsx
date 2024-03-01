/**
 * Returns true if the provided string is empty (null or only contains whitespace).
 * @param str String to check
 * @returns {boolean}
 */
 export function stringIsEmpty(str) {
    return (!str || str.trim().length === 0);
}

/**
 * Returns true if the fields provided contain each term in the query.
 * @param query Search query in string format
 * @param fields Fields to search, represented as an array of strings
 * @returns {boolean}
 */
 export function matchesSearchQuery(query, fields) {
    let searchTerms = query.toLowerCase().split(" ");
    let testString = fields.join(" ").toLowerCase();

    let result = true;

    // If fields being searched are empty, return false
    if (stringIsEmpty(testString)) {
        result = false;
    }

    // Loop through terms and test if they are contained in testString
    // Terms that begin with - should NOT be contained
    for (let i = 0; i < searchTerms.length; ++i) {
        let term = searchTerms[i];
        if ((term.charAt(0) === "-") && (term.length > 1)) {
            term = term.substring(1, term.length);
            result = result && !(testString.includes(term));
        } else {
            result = result && testString.includes(term);
        }
    }

    return result;
}
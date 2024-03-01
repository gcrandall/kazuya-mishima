//--------------------------------------------------
// FIGHTER SORT ORDERS
//      Methods for use in Array.prototype.sort()
// 		a = first element
// 		b = comparison element
// 		reverseOrder = true for reversed, false for normal
//--------------------------------------------------

/**
 * Sorts fighters by release number
 * @param a fighter
 * @param b comparison fighter
 * @param reverseOrder boolean to optionally reverse default order
 * @returns {number} sort value
 */
 export function sortFightersByReleaseNumber(a, b, reverseOrder) {
    let returnVal = a.number.localeCompare(b.number);
    return (reverseOrder) ? (returnVal * -1) : returnVal;
}

/**
 * Sorts fighters alphabetically by name
 * @param a fighter
 * @param b comparison fighter
 * @param reverseOrder boolean to optionally reverse default order
 * @returns {number} sort value
 */
export function sortFightersByName(a, b, reverseOrder) {
    let returnVal = a.name.localeCompare(b.name);
    return (reverseOrder) ? (returnVal * -1) : returnVal;
}

/**
 * Sorts fighters by weight, lightest first. Sorts alphabetically by name if weights are even.
 * @param a fighter
 * @param b comparison fighter
 * @param reverseOrder boolean to optionally reverse default order
 * @returns {number} sort value
 */
 export function sortFightersByWeight(a, b, reverseOrder) {
    let returnVal = sortFightersByName(a, b, false);
    if (a.weight > b.weight) {
        returnVal = 1;
    } else if (a.weight < b.weight) {
        returnVal = -1;
    }
    return (reverseOrder) ? (returnVal * -1) : returnVal;
}

/**
 * Sorts fighters by fall speed, lowest first. Sorts alphabetically by name if fall speeds are even.
 * @param a fighter
 * @param b comparison fighter
 * @param reverseOrder boolean to optionally reverse default order
 * @returns {number} sort value
 */
 export function sortFightersByFallSpeed(a, b, reverseOrder) {
    let returnVal = sortFightersByName(a, b, false);
    if (a.fallSpeed > b.fallSpeed) {
        returnVal = 1;
    } else if (a.fallSpeed < b.fallSpeed) {
        returnVal = -1;
    }
    return (reverseOrder) ? (returnVal * -1) : returnVal;
}

/**
 * Sorts fighters by frame of fastest escape option, fastest first. Sorts alphabetically by name if even.
 * @param a fighter
 * @param b comparison fighter
 * @param reverseOrder boolean to optionally reverse default order
 * @returns {number} sort value
 */
export function sortFightersByAirdodge(a, b, reverseOrder) {
    let returnVal = sortFightersByName(a, b, false);
    if (a.airdodge > b.airdodge) {
        returnVal = 1;
    } else if (a.airdodge < b.airdodge) {
        returnVal = -1;
    }
    return (reverseOrder) ? (returnVal * -1) : returnVal;
}

/**
 * Sorts fighters by frame of fastest escape option, fastest first. Sorts alphabetically by name if even.
 * @param a fighter
 * @param b comparison fighter
 * @param reverseOrder boolean to optionally reverse default order
 * @returns {number} sort value
 */
 export function sortFightersByEscapeOption(a, b, reverseOrder) {
    let returnVal = sortFightersByAirdodge(a, b, false);
    if (a.escape > b.escape) {
        returnVal = 1;
    } else if (a.escape < b.escape) {
        returnVal = -1;
    }
    return (reverseOrder) ? (returnVal * -1) : returnVal;
}
const contributors = [
    {
        name: "Turtle",
        link: "https://twitter.com/IVS_Turtle"
    },
    {
        name: "Lernonad",
        link: "https://twitter.com/Lernonad"
    },
    {
        name: "23:50 CST",
        link: "https://twitter.com/2350CST"
    },
    {
        name: "Gohi",
        link: "https://twitter.com/GohiCL"
    },
    {
        name: "Pinky",
        link: "https://twitter.com/PinkyLure"
    },
    {
        name: "Ultimate Frame Data",
        link: "https://ultimateframedata.com/"
    },
]

export function getContributionCredits() {
    const credits = [];
    for (let i = 0; i < contributors.length; i++) {
        credits.push(
            <a href={contributors[i].link} target="_blank" rel="noreferrer" key={`contributions-${i}`}>{contributors[i].name}</a>
        );
    }
    return credits;
}

export function getDeveloperCredit() {
    return <a href="https://linktr.ee/gabrielcrandall" target="_blank" rel="noreferrer">Gabriel</a>;
}
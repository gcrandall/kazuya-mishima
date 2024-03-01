import { getContributionCredits, getDeveloperCredit } from "../../../data/dataContributions";

function Footer() {

    const devCredit = getDeveloperCredit();
    const credits = getContributionCredits();

    return (
        <>
            <footer className="l-footer mt-auto">
                <p>
                    Developed by {devCredit}
                </p>
                <p className="l-footer__credits small">
                    Data contributed by
                    <br />
                    {credits}
                </p>
            </footer>
        </>
    );
}

export default Footer;

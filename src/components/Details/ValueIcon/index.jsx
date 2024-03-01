import { getValueTypes } from "../../../data/fighterData";

function ValueIcon(props) {

    const { value } = props;

    if ( value == null) {
        return (
            <span>---</span>
        );
    }

    const VALUES = getValueTypes();

    const icons = {};
    icons[VALUES.no] = {
        title: "No",
        icon: "icon-false",
        color: "text-no"
    };
    icons[VALUES.yes] = {
        title: "Yes",
        icon: "icon-true",
        color: "text-yes"
    };
    icons[VALUES.depends] = {
        title: "Depends",
        icon: "icon-depends",
        color: "text-depends"
    };

    return (
        <>
            <i className={`${icons[value].icon} ${icons[value].color}`} title={icons[value].title}></i>
        </>
    );
}

export default ValueIcon;

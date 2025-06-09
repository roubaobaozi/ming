import mingLogo from "../../../assets/ming-logo.svg";
import mingLogoLight from "../../../assets/ming-logo-light.svg";
import style from "./style.module.css";

const { siteHeadingCtaSt, logoSt, logoDarkSt, logoLightSt } = style;

export default function AtSiteHeadingCta(): React.ReactNode {
    return (
        <a href="/" className={siteHeadingCtaSt} aria-label="Ming Teo">
            <img src={mingLogo} className={`${logoSt} ${logoDarkSt}`} alt="" />
            <img src={mingLogoLight} className={`${logoSt} ${logoLightSt}`} alt="" />
        </a>
    );
}

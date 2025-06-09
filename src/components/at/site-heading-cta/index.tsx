import mingLogo from "../../../assets/ming-logo.svg";
import style from "./style.module.css";

const { siteHeadingCtaSt, logoSt } = style;

export default function AtSiteHeadingCta(): React.ReactNode {
    return (
        <a href="/" className={siteHeadingCtaSt}>
            <img src={mingLogo} className={logoSt} alt="Ming Teo" />
        </a>
    );
}

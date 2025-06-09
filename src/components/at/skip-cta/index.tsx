import style from "./style.module.css";

const { skipCtaSt } = style;

export default function AtSkipCta(): React.ReactNode {
    return (
        <a href="/#page-content" className={skipCtaSt}>
            Skip to main content
        </a>
    );
}

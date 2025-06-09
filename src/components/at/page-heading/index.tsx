import style from "./style.module.css";

const { pageHeadingSt } = style;

export default function AtPageHeading({ children }: { children: React.ReactNode }): React.ReactNode {
    return <h1 className={pageHeadingSt}>{children}</h1>;
}

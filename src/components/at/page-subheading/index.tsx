import style from "./style.module.css";

const { pageSubheadingSt } = style;

export default function AtPageSubheading({ id, children }: { id: string; children: React.ReactNode }): React.ReactNode {
    return (
        <h2 id={id} className={pageSubheadingSt}>
            {children}
        </h2>
    );
}

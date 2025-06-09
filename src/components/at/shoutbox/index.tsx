import style from "./style.module.css";

const { shoutboxSt } = style;

export default function AtShoutbox({ children }: { children: React.ReactNode }): React.ReactNode {
    return <blockquote className={shoutboxSt}>{children}</blockquote>;
}

import style from "./style.module.css";

const { navSt } = style;

export default function MlNav({ children }: { children: React.ReactNode }): React.ReactNode {
    return <nav className={navSt}>{children}</nav>;
}

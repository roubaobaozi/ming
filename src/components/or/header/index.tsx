import style from "./style.module.css";

const { headerSt } = style;

export default function OrHeader({ children }: { children: React.ReactNode }): React.ReactNode {
    return <header className={headerSt}>{children}</header>;
}

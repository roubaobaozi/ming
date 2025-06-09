import style from "./style.module.css";

const { footerSt, footerContainerSt } = style;

export default function OrFooter({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <footer className={footerSt}>
            <div className={footerContainerSt}>{children}</div>
        </footer>
    );
}

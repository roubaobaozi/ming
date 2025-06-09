import React from "react";
import style from "./style.module.css";

const { footerLinksSt } = style;

export default function AtFooterLinks({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <ul className={footerLinksSt}>
            {React.Children.map(children, (child, index) => (
                <li key={index}>{child}</li>
            ))}
        </ul>
    );
}

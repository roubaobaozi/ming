import React from "react";
import style from "./style.module.css";

const { resumeCardsSt, resumeCardPositionDateSt } = style;

type Card = {
    cardTitle: React.ReactNode;
    cardPosition: React.ReactNode;
    cardDate: React.ReactNode;
    cardChildren: React.ReactNode;
};

export type CardsArray = Array<Card>;

export default function MlResumeCards({ cards }: { cards: CardsArray }): React.ReactNode {
    return (
        <dl className={resumeCardsSt}>
            {!!cards?.length &&
                cards.map(({ cardTitle, cardPosition, cardDate, cardChildren }: Card, index) => (
                    <div key={index}>
                        <dt>{cardTitle}</dt>
                        <dd className={resumeCardPositionDateSt}>
                            <b>{cardPosition}</b>
                            {", "}
                            <i>{cardDate}</i>
                        </dd>
                        <dd>{cardChildren}</dd>
                    </div>
                ))}
        </dl>
    );
}

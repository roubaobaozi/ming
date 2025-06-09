// https://vike.dev/Head

import appleTouchIcon from "../assets/favicons/apple-touch-icon.png";
import favicon32 from "../assets/favicons/favicon-32x32.png";
import favicon16 from "../assets/favicons/favicon-16x16.png";
import favicon from "../assets/favicons/favicon.ico";
import siteManifest from "../assets/favicons/site.webmanifest";

export default function HeadDefault(): React.ReactNode {
    return (
        <>
            <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
            <link rel="manifest" href={siteManifest} />
            <link rel="icon" href={favicon} />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Ancizar+Sans:ital,wght@0,300..600;1,300..600&display=swap"
            />
        </>
    );
}

import PageHeading from "../../components/at/page-heading";
import AtShoutbox from "../../components/at/shoutbox";

export default function ContactPage(): React.ReactNode {
    return (
        <>
            <PageHeading>Contact</PageHeading>
            <p>You can reach out to me for work enquiries here:</p>
            <AtShoutbox>work (at) mingteo (dot) com</AtShoutbox>
        </>
    );
}

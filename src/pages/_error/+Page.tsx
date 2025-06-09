import { usePageContext } from "vike-react/usePageContext";
import PageHeading from "../../components/at/page-heading";

export default function Page(): React.ReactNode {
    const { is404 } = usePageContext();

    if (is404) {
        return (
            <>
                <PageHeading>Page Not Found</PageHeading>
                <p>This page could not be found.</p>
            </>
        );
    }

    return (
        <>
            <PageHeading>Oops</PageHeading>
            <p>Something went wrong ... please try again later, or contact me</p>
        </>
    );
}

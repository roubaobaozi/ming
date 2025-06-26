import "../common/global.css";

import MlNav from "../components/ml/nav";
import AtSiteHeadingCta from "../components/at/site-heading-cta";
import AtSkipCta from "../components/at/skip-cta";
import Footer from "../components/or/footer";
import FooterLinks from "../components/at/footer-links";
import OrHeader from "../components/or/header";

export default function LayoutDefault({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <div id="page-container">
            <OrHeader>
                <MlNav>
                    <AtSkipCta />
                    <AtSiteHeadingCta />
                </MlNav>
            </OrHeader>
            <main id="page-content">{children}</main>
            <Footer>
                <FooterLinks>
                    <a href="/">Home</a>
                    <a href="/humid">Is it humid?</a>
                    <a href="/contact">Contact</a>
                </FooterLinks>
                <p>Copyright &copy; 2025 Ming</p>
            </Footer>
        </div>
    );
}

import PageHeading from "../../components/at/page-heading";
import AtPageSubheading from "../../components/at/page-subheading";
import MlResumeCards, { type CardsArray } from "../../components/ml/resume-cards";
import AtShoutbox from "../../components/at/shoutbox";

const cardsWork: CardsArray = [
    {
        cardTitle: "Fox Sports/Streamotion",
        cardPosition: "Senior Web Engineer",
        cardDate: "Nov 2016–May 2025",
        cardChildren: (
            <>
                <p>
                    I contributed extensively to the{" "}
                    <a href="https://kayosports.com.au/" target="_blank" rel="noopener noreferrer">
                        Kayo Sports
                    </a>{" "}
                    platform, working across the stack on everything from Design System components to Bacon.js
                    (functional reactive programming) data streams powering user onboarding, video playback, and
                    personalised carousels. I repeated this success for the{" "}
                    <a href="https://binge.com.au/" target="_blank" rel="noopener noreferrer">
                        Binge
                    </a>{" "}
                    and{" "}
                    <a href="https://flashnews.com.au/" target="_blank" rel="noopener noreferrer">
                        Flash News
                    </a>{" "}
                    platforms.
                </p>
                <p>
                    I initially joined the Fox Sports’ newly created team to launch their first streaming platform,{" "}
                    <a href="https://www.watchafl.com.au/" target="_blank" rel="noopener noreferrer">
                        Watch AFL
                    </a>
                    , where I built reusable UI components and implemented data handling using Bacon.js. Following its
                    success, I transitioned to the main{" "}
                    <a href="https://www.foxsports.com.au/" target="_blank" rel="noopener noreferrer">
                        Fox Sports
                    </a>{" "}
                    web team, developing dynamic widget components for various Match Centres across multiple sports.
                    Building on the Watch AFL foundation, I themed and launched{" "}
                    <a href="https://www.watchnrl.com/" target="_blank" rel="noopener noreferrer">
                        Watch NRL
                    </a>{" "}
                    using the same codebase, ensuring consistency and efficiency.
                </p>
                <p>
                    Throughout these projects, I focussed on writing performant, scalable, and accessible code to meet
                    high-traffic demands. I developed shared component libraries (Storybook) for close collaboration
                    with design and UX teams, and implemented robust unit, integration, and visual testing practices.
                    Accessibility improvements were a key focus, including reduced motion support and enhanced keyboard
                    navigation.
                </p>
                <p>
                    I also stepped into a temporary team lead role, guiding development on the LifeStyle site, and
                    creating Kayo Sports’ and Binge’s AEM and Adobe Target integrated homepages.
                </p>
                <p>
                    <b>Tech:</b> React, Bacon.js (Functional programming), styled-components, custom HTML5 video player,
                    Webpack, eslint, stylelint, Storybook, Sinon, Jest, AEM, Adobe Target
                </p>
            </>
        ),
    },
    {
        cardTitle: "Racing & Wagering WA",
        cardPosition: "Web Developer",
        cardDate: "May 2013–Nov 2016",
        cardChildren: (
            <>
                <p>
                    Worked on the new TABtouch website and mobile site. Being a high-traffic site (on occasions with
                    millions of active users) code has to be performant and scalable.
                </p>
                <p>
                    I converted a vanilla CSS setup to a modular SMACSS-influenced setup, and developed a component
                    library to maintain a consistent design language and the ability to reuse code.
                </p>
                <p>
                    I was the UI/UX Team lead and organised group learning discussions, the creation of documentation
                    and training for new team members on all things front-end.
                </p>
                <p>
                    <b>Tech:</b> React, SCSS, Gulp
                </p>
            </>
        ),
    },
    {
        cardTitle: "University of Western Australia",
        cardPosition: "Web Developer",
        cardDate: "Jul 2008–Jan 2013",
        cardChildren: (
            <p>
                Cutting up designs, rebranding ASP and .NET web applications, technical client liaison, writing new (and
                rewriting old) code to WCAG Guidelines 2.0 level AA, documenting and training staff members on
                development procedures and correct usage.
            </p>
        ),
    },
    {
        cardTitle: "Highway 1 Internet Solutions",
        cardPosition: "Front-end Web Developer",
        cardDate: "Jun 2004–Feb 2008",
        cardChildren: (
            <>
                <p>
                    Performing a range of tasks including site cutups, drawing code to a number of formats (PHP, ASP,
                    xHTML 1.0 Strict/xHTML 1.1 + CSS, Accessibility Levels 1, 2, 3 and Section 508) as well as graphical
                    design and site maintenance.
                </p>
                <p>
                    In my time at Highway 1 I had managed to completely change the processes behind front-end
                    development, from unsemantic tabled layouts to streamlined CSS, while researching new methods for
                    progressive enhancement.
                </p>
            </>
        ),
    },
];

const cardsFreelance: CardsArray = [
    {
        cardTitle: "C+ Dance Studio",
        cardPosition: "Front-end Web Engineer, Project Manager",
        cardDate: "2020–2023",
        cardChildren: (
            <>
                <p>
                    Developed the{" "}
                    <a href="https://my.cplusdance.com.au/" target="_blank" rel="noopener noreferrer">
                        C+ Dance Studio student portal
                    </a>
                    , a site designed to allow the business and students to track spending, book classes, and top up
                    funds. I created my own mini component library for use within this site.
                </p>
                <p>
                    I was the manager for this project, liaising with the client, and coordinating with the platform
                    developer.
                </p>
                <p>
                    <b>Tech:</b> Preact, RxJS, styled-components, Webpack, React Router, eslint, stylelint, Jest
                </p>
            </>
        ),
    },
    {
        cardTitle: "mingteo.com",
        cardPosition: "Myself",
        cardDate: "2025",
        cardChildren: (
            <>
                <p>
                    Also, you can check out the code for this site on{" "}
                    <a href="https://github.com/roubaobaozi/ming.git" target="_blank" rel="noopener noreferrer">
                        my GitHub
                    </a>
                </p>
                <p>
                    <b>Tech:</b> React, TypeScript, Vike, CSS Modules, eslint, stylelint, Vitest
                </p>
            </>
        ),
    },
];

export default function IndexPage(): React.ReactNode {
    return (
        <>
            <PageHeading>Resum&eacute; of Ming Teo</PageHeading>
            <AtShoutbox>
                I am a Front End Engineer based in Sydney, specialising in CSS/HTML/JavaScript, with a strong interest
                in accessibility and usability, to make websites that can cater to all people, no matter how they choose
                to interact with them, whether by mobile, desktop, screen reader, or text-only browser.
            </AtShoutbox>
            <ul>
                <li>
                    <a href="#work-history">Work history</a>
                </li>
                <li>
                    <a href="#freelance">Freelance/other work</a>
                </li>
                <li>
                    <a href="#technical-skills">Technical skills</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#hobbies">Hobbies</a>
                </li>
                <li>
                    <a href="#references">References</a>
                </li>
                <li>
                    <a href="#contact">Contact me</a>
                </li>
            </ul>
            <AtPageSubheading id="work-history">Work history</AtPageSubheading>
            <MlResumeCards cards={cardsWork} />
            <AtPageSubheading id="freelance">Freelance/other work</AtPageSubheading>
            <MlResumeCards cards={cardsFreelance} />
            <AtPageSubheading id="technical-skills">Technical skills</AtPageSubheading>
            <p>
                <b>JavaScript:</b> ES6, React, Vue.js, Bacon.js, RxJS, Redux, Jest, TypeScript
            </p>
            <p>
                <b>CSS:</b> styled-components, SCSS, LESS, CSS3, CSS Modules
            </p>
            <p>
                <b>Other:</b> HTML 5, Functional programming, Webpack, Accessibility
            </p>
            <AtPageSubheading id="education">Education</AtPageSubheading>
            <p>e-Central TAFE | Diploma in IT (Website Development)</p>
            <p>Central TAFE | Cert IV in IT (Website Design)</p>
            <AtPageSubheading id="hobbies">Hobbies</AtPageSubheading>
            <p>
                I am currently spending most of my free time running, for health and all the delicious carbs.
                Perpetually in a state of brushing up on my Mandarin. I also like to cook (and eat!)
            </p>
            <p>
                I have trained for and received two 2nd Degree Black Belts, one in International Taekwondo Federation-
                and in World Taekwondo Federation-style Taekwondo. I have also studied Shaolin Zhoujia Kung Fu, and
                Iaido.
            </p>
            <AtPageSubheading id="references">References</AtPageSubheading>
            <p>On Request</p>
            <AtPageSubheading id="contact">Contact me</AtPageSubheading>
            <p>You can reach out to me for work enquiries here:</p>
            <AtShoutbox>work (at) mingteo (dot) com</AtShoutbox>
        </>
    );
}

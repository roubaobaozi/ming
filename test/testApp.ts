export { testApp };
export { viteConfig };

import { expect, describe, it } from "vitest";

const viteConfig = {
    logLevel: "warn" as const,
    root: "./",
    configFile: "./vite.config.js",
};

const urlBase = "http://localhost:3000";

function testApp() {
    describe("Vitest", () => {
        it("run Vitest with Vike", { timeout: 10 * 1000 }, async () => {
            {
                const html = await fetchHtml("/");
                expect(html).toContain("Resumé of Ming Teo</h1>");
            }
            {
                const html = await fetchHtml("/contact");
                expect(html).toContain("Contact</h1>");
            }
        });
    });
}

async function fetchHtml(urlPathname: string) {
    const ret = await fetch(urlBase + urlPathname);
    const html = await ret.text();
    return html;
}

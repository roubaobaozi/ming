import { afterAll, beforeAll } from "vitest";
import { testApp, viteConfig } from "./testApp";
import { dev } from "vike/api";

let viteServer: Awaited<ReturnType<typeof dev>>["viteServer"] | undefined = undefined;

beforeAll(async () => {
    const { viteServer: viteServerFromConfig } = await dev({ viteConfig });
    viteServer = viteServerFromConfig;
    await viteServer?.listen();
    await sleep(10); // avoid race condition of server not actually being ready
}, 10 * 1000);

afterAll(async () => {
    await viteServer?.close();
});

testApp();

function sleep(milliseconds: number): Promise<void> {
    return new Promise((r) => setTimeout(r, milliseconds));
}

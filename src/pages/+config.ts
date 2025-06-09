import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
    // https://vike.dev/Layout
    Layout,

    // https://vike.dev/head-tags
    title: "Ming's resumé",
    description: "The resumé of Ming, Senior Front end Engineer based in Sydney, Australia",

    ssr: true,
    prerender: true,
    stream: true,

    extends: vikeReact,
} satisfies Config;

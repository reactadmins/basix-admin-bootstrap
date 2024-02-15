// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "React Admin",
    tagline: "Admin dasboard for easy use.",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://your-docusaurus-site.example.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    plugins: [require.resolve("docusaurus-lunr-search")],

    // scripts: ["./src/css/custom.js"],

    // scripts: [
    //     // "https://docusaurus.io/script.js",
    //     "custom.js",
    //     // {
    //     //     src: "https://plausible.io/js/plausible.js",
    //     //     async: true,
    //     //     defer: true,
    //     //     "data-domain": "docs.plausible.io",
    //     // },
    // ],

    clientModules: ["/notice.js"],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                // title: "React Admin",
                logo: {
                    alt: "React Admin Logo",
                    src: "img/logo.svg",
                },
                items: [
                    // {
                    //     type: "docSidebar",
                    //     sidebarId: "tutorialSidebar",
                    //     position: "left",
                    //     label: "Tutorial",
                    // },
                    {
                        type: "html",
                        // href: "https://github.com/facebook/docusaurus",
                        // label: "Git",
                        position: "right",
                        value: `<a href="#" target="_blank" class="navbar_github"></a>`,
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Templates",
                        items: [
                            {
                                label: "Bootstrap",
                                to: "#",
                            },
                            {
                                label: "Tailwind",
                                to: "#",
                            },
                            {
                                html: `
                                <div id="notice-root"></div>
                              `,
                            },
                        ],
                    },
                    {
                        title: "Resources",
                        items: [
                            {
                                label: "Github",
                                href: "#",
                            },
                            {
                                label: "Support",
                                href: "#",
                            },
                            {
                                label: "Buy Now",
                                href: "#",
                            },
                        ],
                    },
                    // {
                    //     title: "More",
                    //     items: [
                    //         {
                    //             label: "Blog",
                    //             to: "/blog",
                    //         },
                    //         {
                    //             label: "GitHub",
                    //             href: "https://github.com/facebook/docusaurus",
                    //         },
                    //     ],
                    // },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} React Admin. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;

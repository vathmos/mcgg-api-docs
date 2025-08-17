// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: "MCGG API",
  tagline: "An unofficial Public API of Magic Chess : GO GO",
  url: "https://mcgg-api-docs.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/mcgg-api-dark.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vathmos", // Usually your GitHub org/user name.
  projectName: "mcgg-api", // Usually your repo name.

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "MCGG API",
        logo: {
          alt: "My Site Logo",
          src: "img/mcgg-api-dark.svg",
          href: "/"
        },
        items: [
          {
            label: "Docs",
            position: "left",
            to: "/docs",
          },
          {
            href: "https://github.com/vathmos/mcgg-api",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MCGG API. Built with Docusaurus.`,
      },
      prism: {
        darkTheme: prismThemes.oneDark,
        additionalLanguages: [
          "ruby",
          "csharp",
          "php",
          "java",
          "powershell",
          "json",
          "bash",
          "dart",
          "objectivec",
          "r",
        ],
      },
      languageTabs: [
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "bash",
          language: "curl",
          logoClass: "curl",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
        {
          highlight: "powershell",
          language: "powershell",
          logoClass: "powershell",
        },
        {
          highlight: "dart",
          language: "dart",
          logoClass: "dart",
        },
        {
          highlight: "javascript",
          language: "javascript",
          logoClass: "javascript",
        },
        {
          highlight: "c",
          language: "c",
          logoClass: "c",
        },
        {
          highlight: "objective-c",
          language: "objective-c",
          logoClass: "objective-c",
        },
        {
          highlight: "ocaml",
          language: "ocaml",
          logoClass: "ocaml",
        },
        {
          highlight: "r",
          language: "r",
          logoClass: "r",
        },
        {
          highlight: "swift",
          language: "swift",
          logoClass: "swift",
        },
        {
          highlight: "kotlin",
          language: "kotlin",
          logoClass: "kotlin",
        },
        {
          highlight: "rust",
          language: "rust",
          logoClass: "rust",
        },
      ],
    } satisfies Preset.ThemeConfig,

plugins: [
  // OpenAPI Docs plugin
  [
    "docusaurus-plugin-openapi-docs",
    {
      id: "openapi",
      docsPluginId: "classic",
      config: {
        mcgg: {
          specPath: "openapi/mcgg.yaml",
          outputDir: "docs/mcgg",
          downloadUrl:
            "https://raw.githubusercontent.com/vathmos/mcgg-api/openapi/petstore.yaml",
          sidebarOptions: {
            groupPathsBy: "tag",
            categoryLinkSource: "tag",
          },
        },
      },
    },
  ],

  [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {
          to: '/docs/mcgg/mcgg-api.info.mdx',
          from: '/',
        },
      ],
    },
  ],
],
  themes: ["docusaurus-theme-openapi-docs"],
};

export default async function createConfig() {
  return config;
}
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";


const sidebars: SidebarsConfig = {
  openApiSidebar: [
    {
      type: "category",
      label: "Magic Chess : GO GO",
      link: {
        type: "generated-index",
        title: "MCGG API",
        description:
          "This is a sample server MCGG server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/mcgg-api"
      },
      items: require("./docs/mcgg/sidebar.js")
    }
  ]
};

export default sidebars;
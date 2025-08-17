import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "mcgg/mcgg-api",
    },
    {
      type: "category",
      label: "Heroes",
      items: [
        {
          type: "doc",
          id: "mcgg/list-all-heroes",
          label: "List all heroes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "mcgg/get-hero-by-id",
          label: "Get hero by ID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Synergies",
      items: [
        {
          type: "doc",
          id: "mcgg/list-all-synergies",
          label: "List all synergies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "mcgg/get-synergy-by-id",
          label: "Get synergy by ID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Commanders",
      items: [
        {
          type: "doc",
          id: "mcgg/list-all-commanders",
          label: "List all commanders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "mcgg/get-commander-by-id",
          label: "Get commander by ID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "@/components/Studio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHOLOK Category Icon Studio" },
      { name: "description", content: "Preview and download 13 premium purple SVG and PNG e-commerce category icons for Sholok." },
      { property: "og:title", content: "SHOLOK Category Icon Studio" },
      { property: "og:description", content: "13 premium purple category icons — download as SVG or PNG." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Studio,
});

import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
  manifest_version: 3,
  description:  "This is an example extension",
  name: "womanco-app",
  version: "0.1.0",
  icons: {
    128: "icons/icon128.png",
  },
  action: {
    default_icon: "icons/icon128.png",
    default_title: "example",
  },
  background: {
    service_worker: "src/background/index.ts",
  },
});

export default defineConfig({
  plugins: [crx({ manifest })],
});

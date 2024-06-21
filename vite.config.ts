import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
  manifest_version: 3,
  name: "ウーマンコミュニケーション",
  version: "0.2.0",
  description: "ウーマンコミュニケーションが遊べる拡張機能",
  permissions: ["activeTab", "scripting"],
  icons: {
    128: "icons/icon128.png",
  },
  action: {
    default_popup: "src/popup.html",
    default_icon: "icons/icon128.png",
    default_title: "example",
  },
  content_scripts: [
    {
      matches: ["https://*/*"],
      js: ["src/content.ts"],
      run_at: "document_idle",
    }
  ],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});

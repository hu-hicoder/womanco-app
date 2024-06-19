import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
  manifest_version: 3,
  name: "ウーマンコミュニケーション",
  version: "0.1.0",
  description: "ウーマンコミュニケーションが遊べる拡張機能",
  permissions: ["activeTab", "scripting"],
  icons: {
    128: "icons/icon128.png",
  },
  action: {
    default_icon: "icons/icon128.png",
    default_title: "example",
  },
  background: {
    service_worker: "src/background.ts",
  },
  content_scripts: [
    {
      matches: ["https://*/*"],
      run_at: "document_end",
      js: ["src/content.ts"],
    }
  ],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});

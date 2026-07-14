import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// R2 incremental cache can be added later when an R2 bucket + binding exist.
// See: https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig();

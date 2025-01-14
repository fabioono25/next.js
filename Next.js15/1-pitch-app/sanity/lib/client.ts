import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  // useCdn: false,
});

// ISR: Incremental Static Regeneration
// Definition: A Next.js feature that allows you to update static pages after they’ve been built and deployed without requiring a full rebuild.
// Use Case: When you want to update a page that has already been built without rebuilding the entire site.
// Example: Updating a blog post or news article without rebuilding the entire site.
// Tag-based Revalidation: A feature that allows you to update static pages after they’ve been built and deployed without requiring a full rebuild.
// Use Case: When you want to update a page that has already been built without rebuilding the entire site.

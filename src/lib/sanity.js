import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

/**
 * Sanity client — reads project credentials from the Astro env.
 * Set them in `.env` (see `.env.example`).
 */
export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
  useCdn: true, // faster, cached responses. Rebuilds pick up new content.
})

/**
 * Image URL builder — turns a Sanity image ref into a CDN URL you can
 * plug into an `<img src>`. Use like:
 *   urlFor(vehicle.photos[0]).width(800).height(600).fit('crop').url()
 */
const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)

/**
 * GROQ queries — Sanity's query language, kept in one place.
 * Each function returns a query string; the page files run them.
 */

// ---------------------------------------------------------------------------
// VEHICLES
// ---------------------------------------------------------------------------

/**
 * All vehicles, newest first, with featured ones on top.
 * Used by /vehicles.
 */
export const allVehiclesQuery = `
  *[_type == "vehicle"] | order(featured desc, year desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    make,
    year,
    condition,
    status,
    price,
    bodyType,
    fuel,
    drivetrain,
    mileageKm,
    features,
    photos,
    featured
  }
`

/**
 * A single vehicle by slug — used for the detail page /vehicles/[slug].
 */
export const vehicleBySlugQuery = `
  *[_type == "vehicle" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    make,
    year,
    condition,
    status,
    price,
    bodyType,
    fuel,
    drivetrain,
    mileageKm,
    features,
    photos,
    description
  }
`

/**
 * Every slug — used by getStaticPaths() to prebuild every vehicle detail page.
 */
export const allVehicleSlugsQuery = `
  *[_type == "vehicle" && defined(slug.current)][].slug.current
`

// ---------------------------------------------------------------------------
// BLOG POSTS
// ---------------------------------------------------------------------------

/**
 * The featured post — the big card at the top of the blog page.
 * Returns null if no post is marked featured.
 */
export const featuredPostQuery = `
  *[_type == "post" && featured == true] | order(publishedAt desc) [0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    coverImage,
    publishedAt,
    readTime
  }
`

/**
 * All posts except the featured one, newest first.
 * Used for the grid on the blog page.
 */
export const recentPostsQuery = `
  *[_type == "post" && featured != true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    coverImage,
    publishedAt,
    readTime
  }
`

/**
 * A single post by slug — used for /blog/[slug].
 */
export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    coverImage,
    publishedAt,
    readTime,
    body
  }
`

/**
 * Every slug — used by getStaticPaths() to prebuild every post detail page.
 */
export const allPostSlugsQuery = `
  *[_type == "post" && defined(slug.current)][].slug.current
`

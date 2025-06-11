import cacheBuster from '@mightyplow/eleventy-plugin-cache-buster'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(cacheBuster({}))
}

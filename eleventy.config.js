export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets/images/favicon.ico')
  eleventyConfig.addPassthroughCopy('assets/images/logo.png')
  eleventyConfig.addPassthroughCopy('assets/images/star-wars-unlimited-logo.webp')
  eleventyConfig.addPassthroughCopy('assets/css/site.css')
}

import fs from 'node:fs'
import cacheBuster from '@mightyplow/eleventy-plugin-cache-buster'
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img'

export default function (eleventyConfig) {
  eleventyConfig.on('eleventy.before', async ({ directories, runMode, outputMode }) => {
    fs.cpSync('assets', '_site/assets', { recursive: true, force: true })
  })

  eleventyConfig.addWatchTarget('assets')
  eleventyConfig.addPlugin(eleventyImageTransformPlugin)
  eleventyConfig.addPlugin(cacheBuster({}))
}

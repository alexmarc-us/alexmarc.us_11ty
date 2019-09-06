module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('css')

	eleventyConfig.addPassthroughCopy('img')

	eleventyConfig.addLayoutAlias('main', 'main.njk');

	eleventyConfig.addLayoutAlias('post', 'post.njk');

	return {
		passthroughFileCopy: true
	}
};

const moment = require('moment');
const fs = require("fs");
moment.locale('en');

module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('css')

	eleventyConfig.addPassthroughCopy('img')

	eleventyConfig.addPassthroughCopy('js')

	eleventyConfig.addLayoutAlias('main', 'main.njk');

	eleventyConfig.addLayoutAlias('post', 'post.njk');

	eleventyConfig.addFilter('dateIso', date => {
		return moment(date).toISOString();
	});

	eleventyConfig.addFilter('dateReadable', date => {
		return moment(date).format('MMMM Do, YYYY [around] h:mm a');
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});


	return {
		dir: {
			input: ".",
      			includes: "_includes",
      			output: "_site"
    		},
		passthroughFileCopy: true
	}
};

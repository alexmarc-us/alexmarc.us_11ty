// Sets the current body theme to parameter themeName
function setTheme(themeName) {
	console.log("Changing theme to " + themeName);

	removeBodyClassMatch("theme-");

	document.body.classList.add("theme-" + themeName);
}

// Sets the current body color to parameter themeColor
function setThemeColor(colorName) {
	console.log("Changing color to " + colorName);

	removeBodyClassMatch("color-");

	document.body.classList.add("color-" + colorName);
}
	
// Removes all classes matching the parameter classMatch from body
function removeBodyClassMatch (classMatch) {
	var curClasses = document.body.classList;

	// Check for all matching classes
	for (var i = 0; i < curClasses.length; i++) {
		// Remove matching classes
		if ( curClasses[i].includes(classMatch) ) {
			document.body.classList.remove(curClasses[i]);
		}
	}

}

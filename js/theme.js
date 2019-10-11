window.onload = function() {
	// Enable theme and color selection on change
	var themeSelector = document.getElementById("theme-select");
	var colorSelector = document.getElementById("color-select");
	if (themeSelector) themeSelector.onchange = setTheme;
	if (colorSelector) colorSelector.onchange = setThemeColor;

	// Sets the current body theme to themeSelector value
	function setTheme() {
		var themeName = themeSelector.value;
		
		removeBodyClassMatch("theme-");

		document.body.classList.add("theme-" + themeName);
	}

	// Sets the current body color to colorSelector value
	function setThemeColor() {
		var colorName = colorSelector.value;
		
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
}

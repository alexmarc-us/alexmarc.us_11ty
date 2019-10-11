window.onload = function() {
	// Load theme selection from localstorage
	loadThemePrefs();

	// Enable theme selection on change
	var themeSelector = document.getElementById("theme-select");
	var themeColorSelector = document.getElementById("theme-color-select");
	if (themeSelector) themeSelector.onchange = setTheme;
	if (themeColorSelector) themeColorSelector.onchange = setThemeColor;

	function loadThemePrefs() {
		
	}


	// Sets the current body theme to themeSelector value
	function setTheme() {
		var themeName = themeSelector.value;
		
		removeBodyClassMatch("theme-");

		document.body.classList.add("theme-" + themeName);

		// Store selection in localstorage
		localStorage.setItem("theme", themeName);
	}

	// Sets the current body themeColor to themeColorSelector value
	function setThemeColor() {
		var themeColorName = themeColorSelector.value;
		
		removeBodyClassMatch("theme-color-");

		document.body.classList.add("theme-color-" + themeColorName);

		// Store selection in localstorage
		localStorage.setItem("themeColor", themeColorName);
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

/**
 * Functionality related to theme setting and preference storage
 */	

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

// Sets the current body theme to theme parameter
function setTheme(themeName) {
	removeBodyClassMatch("theme-");

	document.body.classList.add("theme-" + themeName);

	// Store selection in localstorage
	localStorage.setItem("theme", themeName);
}

// Once the DOM is loaded but before images, styles, etc. load
window.addEventListener('DOMContentLoaded', event => {
	// Load theme selection from localstorage
	var themePref = localStorage.getItem("theme");

	if (themePref) setTheme(themePref);

	// Enable theme selection on change
	var themeSelector = document.getElementById("theme-select");
	if (themeSelector) {
		themeSelector.onchange = () => setTheme(themeSelector.value);

		// Set theme selector to stored value, or default
		themeSelector.value = themePref || "";
	}
});

// window.onscroll = updateBody;

function updateBody() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.body.classList.add("min");
  } else {
	document.body.classList.remove("min");
  }
} 

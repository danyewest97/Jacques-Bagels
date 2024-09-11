$(document).ready(function() {
	const cart = JSON.parse(localStorage.getItem("cart"));
	localStorage.setItem("cart", JSON.stringify(cart));
	
	
	// const temp = JSON.parse(localStorage.getItem("cart"));
	// for (let i = 0; i < temp.length; i++) {
		// cart[i] = temp[i];
	// }
	
	
	const item = {
		name: "pog"
	};
	
	
	$("p").click(function() {
		cart.push(item.name);
		localStorage.setItem("cart", JSON.stringify(cart));
		console.log(JSON.parse(localStorage.getItem("cart")));
	});
	
	
	// window.onbeforeunload = function() {
		// const emptyArray = [];
		// localStorage.setItem("cart", JSON.stringify(emptyArray));
	// };
	
	// window.onbeforeunload = function () {
		// return "Do you really want to close?";
	// };
	
});
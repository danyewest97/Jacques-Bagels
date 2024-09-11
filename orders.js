$(document).ready(function() {
	
	const cart = [];
	
	//on page load/reload, sets the items of the local cart variable to those saved in the local storage
	//This makes it so the user's cart items stay, even if they reload the page or go to another page
	try {
		const temp = JSON.parse(localStorage.getItem("cart"));
		for (let i = 0; i < temp.length; i++) {
			cart[i] = temp[i];
		}
	} catch(err) {
		
	}
	
	//This is a customBagel object that stores an array of toppings
	const customBagel = {
		toppings: [],
		toasted: true,
		spread: "";
		
	};
	
	
	$("p").click(function() {
		cart.push(item.name);
		localStorage.setItem("cart", JSON.stringify(cart));
		console.log(JSON.parse(localStorage.getItem("cart")));
	});
	
	
	//stores a boolean variable (isMySessionActive) that becomes true when the user loads the page
	//and stays true when the user reloads the page, but becomes false after the user closes the page
	//When the variable becomes false, this code clears the cart in the local storage so that the cart
	//is stored on page reload, but cleared on tab termination
	window.onbeforeunload = function (e) {
		window.onunload = function () {
			localStorage.isMySessionActive = "false";
			localStorage.removeItem("cart");
		}
		return undefined;
	};

	window.onload = function () {
		localStorage.isMySessionActive = "true";
	};
	
});
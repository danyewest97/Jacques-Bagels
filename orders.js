$(document).ready(function() {
	
	//An array of all available toppings (more will be/need to be added)
	const toppings = [
		"lemon pepper",
		"salt",
		"pepper"
	];
	
	//An array of all available spreads (more will be/need to be added)
	const spreads = [
		"butter",
		"cream cheese",
		"lox"
	];
	
	//An array of all available bagel types (more will be/need to be added)
	const types = [
		"plain",
		"sesame",
		"everything"
	];
	
	
	const cart = [];
	
	refreshCart();
	
	
	//This is a list of the available custom items that can be created and purchased by the user
	//For actually ordering, change the properties of these objects to what the user inputs before adding
	//them to the cart 
	//When they are added to the cart, they will be reset so that new custom items can be made by the user
	
	//This is a customBagel object that stores an array of toppings
	const customBagel = {
		//common things on a bagel that can be changed by the user
		toppings: [],
		toasted: true,
		spread: "",
		type: "",
		
		//notes is used for if the user has a specific request for their bagel
		notes: "",
		
		reset: function() {
			toppings = [];
			toasted = true;
			spread = "";
			type = "";
			notes = "";
		}
	};
	
	const customDonut = {
		//common things on a bagel that can be changed by the user
		toppings: [],
		warmed: true,
		filling: "",
		type: "",
		
		//notes is used for if the user has a specific request for their bagel
		notes: "",
		
		reset: function() {
			toppings = [];
			warmed = true;
			filling = "";
			type = "";
			notes = "";
		}
	};
	
	const customCroissant = {
		//common things on a bagel that can be changed by the user
		toppings: [],
		warmed: true,
		spread: "",
		filling: "",
		type: "",
		
		//notes is used for if the user has a specific request for their bagel
		notes: "",
		
		reset: function() {
			toppings = [];
			warmed = true;
			spread = "";
			filling = "";
			type = "";
			notes = "";
		}
	};
	
	//only 1 layer for now, probably won't add multiple layers for this project
	const customSandwich = {
		//common things on a bagel that can be changed by the user
		toppings: [],
		toasted: true,
		topSpread: "",
		bottomSpread: "",
		bread: "",
		
		//notes is used for if the user has a specific request for their bagel
		notes: "",
		
		reset: function() {
			toppings = [];
			toasted = true;
			topSpread = "";
			bottomSpread = "";
			bread = "";
			notes = "";
		}
	};
	
	
	
	//When the order HTML is done, p needs to be changed to a different selector (maybe #customBagel or #customSandwich, etc.)
	$("p").click(function() {
		cart.push(customBagel);
		localStorage.setItem("cart", JSON.stringify(cart));
		//console.log(JSON.parse(localStorage.getItem("cart"))); //for debugging
		customBagel.reset();
	});
	
	
	//When the order HTML is done, p needs to be changed to a different selector (maybe #customBagel or #customSandwich, etc.)
	$("p").click(function() {
		cart.push(customDonut);
		localStorage.setItem("cart", JSON.stringify(cart));
		//console.log(JSON.parse(localStorage.getItem("cart"))); //for debugging
		customDonut.reset();
	});
	
	
	//When the order HTML is done, p needs to be changed to a different selector (maybe #customBagel or #customSandwich, etc.)
	$("p").click(function() {
		cart.push(customCroissant);
		localStorage.setItem("cart", JSON.stringify(cart));
		//console.log(JSON.parse(localStorage.getItem("cart"))); //for debugging
		customCroissant.reset();
	});


	//When the order HTML is done, p needs to be changed to a different selector (maybe #customBagel or #customSandwich, etc.)
	$("p").click(function() {
		cart.push(customSandwich);
		localStorage.setItem("cart", JSON.stringify(cart));
		//console.log(JSON.parse(localStorage.getItem("cart"))); //for debugging
		customSandwich.reset();
		
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
	
	
	
	function refreshCart() {
		//on page load/reload, sets the items of the local cart variable to those saved in the local storage
		//This makes it so the user's cart items stay, even if they reload the page or go to another page
		try {
			const temp = JSON.parse(localStorage.getItem("cart"));
			for (let i = 0; i < temp.length; i++) {
				cart[i] = temp[i];
			}
		} catch(err) {
			
		}
	}
});
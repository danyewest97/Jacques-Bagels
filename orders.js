$(document).ready(function() {
	

	
	
	const cart = [];
	
	refreshCart();
	
	
	//This is a list of the available custom items that can be created and purchased by the user
	//For actually ordering, change the properties of these objects to what the user inputs before adding
	//them to the cart
	//When they are added to the cart, they will be reset so that new custom items can be made by the user
	
	//This is a customBagel object that stores an array of toppings
	const customBagel = {
		name: "bagel", //the name used to refer to this object in the datasets of HTML elements
		//common things on a bagel that can be changed by the user
		toppings: [],
		// toasted: true,
		spreads: [],
		type: [],
		
		//notes is used for if the user has a specific request for their bagel
		notes: [],
		
		reset: function() {
			this.toppings = [];
			// this.toasted = true;
			this.spreads = [];
			this.type = [];
			this.notes = [];
		}
	};
	
	const customDonut = {
		name: "donut", //the name used to refer to this object in the datasets of HTML elements
		//common things on a donut that can be changed by the user
		toppings: [],
		// warmed: true,
		filling: [],
		type: [],
		
		//notes is used for if the user has a specific request for their bagel
		notes: [],
		
		reset: function() {
			this.toppings = [];
			// this.warmed = true;
			this.filling = [];
			this.type = [];
			this.notes = [];
		}
	};
	
	const customCroissant = {
		name: "croissant", //the name used to refer to this object in the datasets of HTML elements
		//common things on a croissant that can be changed by the user
		toppings: [],
		// warmed: true,
		spreads: [],
		filling: [],
		type: [],
		
		//notes is used for if the user has a specific request for their bagel
		notes: [],
		
		reset: function() {
			this.toppings = [];
			// this.warmed = true;
			this.spreads = [];
			this.filling = [];
			this.type = [];
			this.notes = [];
		}
	};
	
	//only 1 layer for now, probably won't add multiple layers for this project
	const customSandwich = {
		name: "sandwich", //the name used to refer to this object in the datasets of HTML elements
		//common things on a sandwich that can be changed by the user
		toppings: [],
		// toasted: true,
		topspreads: [],
		bottomspreads: [],
		bread: [],
		breadType: [],
		
		//notes is used for if the user has a specific request for their bagel
		notes: [],
		
		reset: function() {
			this.toppings = [];
			// this.toasted = true;
			this.topspreads = [];
			this.bottomspreads = [];
			this.bread = [];
			this.breadType = [];
			this.notes = [];
		}
	};
	
	
	//An array of all custom items, used for handling orders
	const availableItems = [
		customBagel,
		customDonut,
		customCroissant,
		customSandwich
	];
	
	
	//When the order HTML is done, p needs to be changed to a different selector (maybe #customBagel or #customSandwich, etc.)
	$(".add-to-cart-bagel").click(function() {
		cart.push(customBagel);
		localStorage.setItem("cart", JSON.stringify(cart));
		console.log(JSON.parse(localStorage.getItem("cart"))); //for debugging
		// customBagel.reset();
		
		//works for now to reset button values in orders.html, but does not look very pretty
		// setTimeout(function() {
			// location.reload();
		// }, 500);
	});
	
	
	//When the order HTML is done, p needs to be changed to a different selector (maybe #customBagel or #customSandwich, etc.)
	$(".add-to-cart-donut").click(function() {
		cart.push(customDonut);
		localStorage.setItem("cart", JSON.stringify(cart));
		console.log(JSON.parse(localStorage.getItem("cart"))); //for debugging
		// customDonut.reset();
		
		//works for now to reset button values in orders.html, but does not look very pretty
		// setTimeout(function() {
			// location.reload();
		// }, 500);
	});
	
	
	//When the order HTML is done, p needs to be changed to a different selector (maybe #customBagel or #customSandwich, etc.)
	$(".add-to-cart-croissant").click(function() {
		cart.push(customCroissant);
		localStorage.setItem("cart", JSON.stringify(cart));
		console.log(JSON.parse(localStorage.getItem("cart"))); //for debugging
		// customCroissant.reset();
		
		//works for now to reset button values in orders.html, but does not look very pretty
		// setTimeout(function() {
			// location.reload();
		// }, 500);
	});


	//When the order HTML is done, p needs to be changed to a different selector (maybe #customBagel or #customSandwich, etc.)
	$(".add-to-cart-sandwich").click(function() {
		cart.push(customSandwich);
		localStorage.setItem("cart", JSON.stringify(cart));
		console.log(JSON.parse(localStorage.getItem("cart"))); //for debugging
		// customSandwich.reset();
		
		//works for now to reset button values in orders.html, but does not look very pretty
		// setTimeout(function() {
			// location.reload();
		// }, 500);
		
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
	
	
	//Here is all the code that actually stores the user's selected items (selected items do not save on page reload)
	
	//When an item (not the customItems, instead things like a topping or bagel type) is clicked on, checks the
	//data of that item and adds it to the appropriate customItem
	$(".item").click(function() {
		var parentType = this.dataset.ancestor; //the parent item type of the item (bagel, donut, croissant, sandwich)
		var type = this.dataset.type; //the actual type of the item (topping, bread, etc.)
		var value = this.dataset.value; //the actual value of the topping (i.e. lemon pepper would have a value of "lemon pepper")
		
		toggleCustomItem(parentType, type, value);
	});
	
	
	
	
	function toggleCustomItem(parentType, type, value) {
		//iterating through the availableItems
		for (let i = 0; i < availableItems.length; i++) {
			
			//checking what customItem parent the given item being added to a customItem has
			if (parentType == availableItems[i].name) {
				
				//new variable containing all of the properties of the parent customItem object
				var properties = Object.keys(availableItems[i]);
				
				//iterating through those properties and checking which property the given item being added affects
				for (const property of properties) {
					//changing the proper property (all the other code should work but I'm not sure if this will)
					if (type == property) {
						if (!checkForValue(availableItems[i][property], value)) {
							var curObj = availableItems[i];
							curObj[property].push(value);
						} else {
							removeValue(availableItems[i][property], value);
						}
					}
				}
			}
		}
	}
	
	
	//checks for a value in a property array for a custom item and returns true if it is found, false if not
	function checkForValue(property, value) {
		for (let i = 0; i < property.length; i++) {
			if (property[i] == value) {
				return true;
			}
		}
		return false;
	}
	
	//checks for a value in a property array for a custom item and removes that value and all instances of it
	function removeValue(property, value) {
		for (let i = 0; i < property.length; i++) {
			if (property[i] == value) {
				property.splice(i, 1);
				i--;
			}
		}
	}
	
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
	
	
	
	$(".card").click(function() {
		if((this).dataset.type == "bagel"){
			$("#bagelDrop").slideToggle();
			$("#donutDrop").slideUp();
			$("#croissantDrop").slideUp();
			$("#sandwichDrop").slideUp();
		} else if((this).dataset.type == "donut"){
			$("#bagelDrop").slideUp();
			$("#donutDrop").slideToggle();
			$("#croissantDrop").slideUp();
			$("#sandwichDrop").slideUp();
		} else if((this).dataset.type == "croissant"){
			$("#bagelDrop").slideUp();
			$("#donutDrop").slideUp();
			$("#croissantDrop").slideToggle();
			$("#sandwichDrop").slideUp();
		} else {
			$("#bagelDrop").slideUp();
			$("#donutDrop").slideUp();
			$("#croissantDrop").slideUp();
			$("#sandwichDrop").slideToggle();
		}
		
		
	});
});
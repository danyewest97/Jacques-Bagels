$(document).ready(function() {
	
	// A variable that contains the HTML for the main navbar
	var nav = '<nav class="navbar navbar-dark navbar-expand-sm bg-dark fixed-top justify-content-center" width="10px">' +
'			<div class="container-fluid">' +
'				<div class="collapse navbar-collapse" id="collapsibleNavbar">' +
'					<!-- Jacques\' Bagels brand logo on the navbar -->' +
'					<a class="navbar-brand" href="index.html"> ' +
'						<img id="nav-logo" src ="logo.png" alt="Jacques\' Bagels logo, stylized JB">' +
'					</a>' +
'					' +
'					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">' +
'					  <span class="navbar-toggler-icon"></span>' +
'					</button>' +
'					' +
'					<!-- Navbar elements -->' +
'					<ul class="navbar-nav">' +
'					' +
'						<!-- Items in the navbar -->' +
'						<li class="nav-item">' +
'							<a class="nav-link" href="index.html">Home</a>' +
'						</li>' +
'						<li class="nav-item">' +
'							<a class="nav-link" href="reservations.html">Reservations</a>' +
'						</li>' +
'						<li class="nav-item">' +
'							<a class="nav-link" href="menu.html">Menu</a>' +
'						</li>' +
'					  	' +
'						' +
'						<!-- Navbar dropdown menu, may get removed later -->' +
'						<li class="nav-item dropdown">' +
'							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">More</a>' +
'							<ul class="dropdown-menu">' +
'								<li><a class="dropdown-item" href="orders.html">Online orders</a></li>' +
'								<li><a class="dropdown-item" href="contacts.html">Contact us</a></li>' +
'							</ul>' +
'						</li>' +
'					</ul>' +
'				</div>' +
'			' +
'			</div>' +
'		</nav>';

	// adding the navbar to any elements with the mainBar id
	$("#mainBar").append(nav);
	
	const cart = [];
	
	$("p").click(function() {
		cart.push("pog");
		localStorage.setItem("cart", cart);
		console.log(localStorage.getItem("cart"));
	});
	
	
	
});
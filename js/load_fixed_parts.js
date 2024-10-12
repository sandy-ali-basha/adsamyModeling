// Dynamic Load Fixed Parts
function includeHTML(url, targetId) {
	$("#"+targetId).load(url);
}


$( window ).on( "load", function() {
  includeHTML('navbar.html', 'navbar_container');
  includeHTML('footer.html', 'footer_container');
  includeHTML('contact_modal.html', 'contact_modal_container');
} );
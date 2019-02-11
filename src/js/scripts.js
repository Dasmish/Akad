$(document).ready(function() {

	if ($('.portfolio__images').length) {
		var isotope = $('.portfolio__images').isotope({
			  // options
			  itemSelector: '.portfolio__image',
			  percentPosition: true,
			  masonry: {}
			});

			$('.portfolio__filter a').on('click', function(event) {
				event.preventDefault();
				$('.portfolio__filter a').removeClass('active');
				$(this).addClass('active');
				var filter = $(this).attr('data-filter');

				filter = (filter == '*') ? filter : '.' + filter;

				isotope.isotope({
					filter: filter
				})
			});
	}
	
	$('[data-toggle="popover"]').popover();

	var forms = document.getElementsByClassName('needs-validation');
	   var validation = Array.prototype.filter.call(forms, function(form) {
	     form.addEventListener('submit', function(event) {
	       event.preventDefault();
	       if (form.checkValidity() === false) {
	         event.stopPropagation();
	       }
	       else{
		       $('#mymodel').modal({
		       	backdrop: 'static',
		       	keyboard: false
		       });
		   }
	       form.classList.add('was-validated');
	     }, false);
	});

	

})
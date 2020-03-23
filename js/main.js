var writeUs = document.querySelector( '.write-us-button' );
var modal = document.querySelector( '.modal-write-us' );
var close = document.querySelector( '.button-write-us-close' );
var form = modal.querySelector( 'form' );

writeUs.addEventListener( 'click', function( evt ) {
  evt.preventDefault();
  modal.classList.add( 'modal-show' );
} );
close.addEventListener( 'click', function( evt ) {
  evt.preventDefault();
  modal.classList.remove( 'modal-show' );
} );

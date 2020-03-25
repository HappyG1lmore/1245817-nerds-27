var writeUs = document.querySelector( ".write-us-button" );
var modal = document.querySelector( ".modal-write-us" );
var close = document.querySelector( ".button-write-us-close" );
var form = modal.querySelector( "form" );
var name = modal.querySelector( "[name=name1]" );
var email = modal.querySelector( "[name=email]" );

writeUs.addEventListener( "click", function( evt ) {
  evt.preventDefault();
  modal.classList.add( "modal-show" );
} );

form.addEventListener( "submit", function( evt ) {
  if ( !name.value || !email.value ) {
    evt.preventDefault();
    modal.classList.remove( "modal-error" );
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add( "modal-error" );
  }
} );

close.addEventListener( "click", function( evt ) {
  evt.preventDefault();
  modal.classList.remove( "modal-show" );
  modal.classList.remove( "modal-error" );
} );

window.addEventListener( "keydown", function( evt ) {
  if ( evt.keyCode === 27 ) {
    evt.preventDefault();

    if ( modal.classList.contains( "modal-show" ) ) {
      modal.classList.remove( "modal-show" );
      modal.classList.remove( "modal-show" );
    }
  }
} );

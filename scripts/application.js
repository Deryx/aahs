/**
 * Created by dscott on 11/7/2015.
 */

$(function() {
    $( 'nav li a' ).on( 'click', function() {
        var section = $( this ).attr( 'id' );
    });

    $( '.links li a' ).on( 'click', function() {
        var link = $( this ).attr( 'href');
        $( '[class=active-link]' ).removeClass( 'active-link' );
        $( this ).addClass( 'active-link' );
        $( '.info div[id]:visible' ).hide();
        $( link ).fadeIn(1500);
    });

    $( '.links li li a' ).on( 'click', function() {
        var link = $( this ).attr( 'href');
        $( '[class=active-link]' ).removeClass( 'active-link' );
        $( this ).addClass( 'active-link' );
        $( '.info div[id]:visible' ).hide();
        $( link ).fadeIn(1500);
    });

    $( '#past li a' ).on( 'click', function() {
        var link = $( this ).attr( 'href' );
        $( '[class=active-link]' ).removeClass( 'active-link' );
        $( this ).addClass( 'active-link');
        $( '#past div[id]:visible' ).hide();
        $( link ).fadeIn(1500).css( {'margin-top': '30px', 'margin-left': '20px'});
    })
})
/**
 * Created by dscott on 11/7/2015.
 */

$(function() {
    $( '.links li a').on( 'click', function() {
        var link = $( this ).attr( 'href');
        $( 'a[class=active-link]' ).removeClass( 'active-link' );
        $( this ).addClass( 'active-link' );
        $( '.info div[id]:visible' ).hide();
        $( link ).fadeIn(1500);
    })

    $( '.links li li a').on( 'click', function() {
        var link = $( this ).attr( 'href');
        console.log(link);
        $( 'a[class=active-link]' ).removeClass( 'active-link' );
        $( this ).addClass( 'active-link' );
        $( '.info div[id]:visible' ).hide();
        $( link ).fadeIn(1500);
    })
})
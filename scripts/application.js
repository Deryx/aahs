/**
 * Created by dscott on 11/7/2015.
 */

$(function() {
    $( '.links li a').on( 'click', function() {
        var link = $( this ).attr( 'href');
        $( '.info div[id]:visible' ).hide();
        $( link ).fadeIn(1500);
    })
})
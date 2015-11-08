/**
 * Created by dscott on 11/7/2015.
 */

$(function() {
    $( '[name=jbrathwaite]' ).show();

    $( '.trustees li a').on( 'click', function() {
        var bio = $( this ).attr( 'href').replace('#', '');
        console.log( bio );
        $( '.bios div[name]:visible' ).hide();
        $( '.bios div[name=' + bio + ']').show();
    })
})
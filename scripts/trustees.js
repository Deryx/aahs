/**
 * Created by dscott on 11/7/2015.
 */

$(function() {
    $( '.trustees li a').on( 'click', function() {
        var bio = $( this ).attr( 'href');
        $( '.bios div[id]:visible' ).hide();
        $( bio ).fadeIn(2000);
    })
})
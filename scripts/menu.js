/**
 * Created by dscott on 11/6/2015.
 */

$(function() {
    $( 'nav ul li a' ).on( 'mouseover', function() {
        var $this = $(this);
        if ( $( $this).closest( 'ul' ) ) {
            $($this).css('background', '#DCBDA9');
            $($this).next().show();
        }
    });

    $( 'nav ul li a' ).on( 'mouseout', function() {
        var $this = $(this);
        if ( $( $this ).has( 'ul' ) ) {
            setTimeout(function () {
                $($this).css('background', '#000');
                $($this).next().hide();
            }, 3000);
        }
    });
});
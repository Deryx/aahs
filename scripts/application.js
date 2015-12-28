/**
 * Created by dscott on 11/7/2015.
 */

$(function() {
    var sectionHeight = $(document).height();
    var sectionWidth = $(window).width;

    $( '#site-overlay' ).css( 'height', sectionHeight );

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

    $( 'div[id^=2] ul li a' ).on( 'click', function() {
        var $link = $( this );
        var linkID = $link.attr( 'id' );
        $( '#site-overlay' ).show();
        $( '[id*=lightbox]').removeClass('animated zoomOut');
        $( '#lightbox-' + linkID ).show().addClass('animated zoomIn');
    });

    $( '#site-overlay' ).on( 'click', function() {
        $( '[id*=lightbox]:visible').removeClass('animated zoomIn');
        $( '[id*=lightbox]:visible').fadeOut(1000);
        $( this ).hide();
    });

    $( '[class*=glyphicon-remove]' ).on( 'click', function() {
        $( '[id*=lightbox]:visible').removeClass('animated zoomIn');
        $( '[id*=lightbox]:visible').fadeOut(1000);
        $( '#site-overlay' ).hide();
    });
})

$(function () {
    selectIcon();
    avModal();  
    avCollpase();  
    avModal(); 
    collapsetbl();
    
    $('.box-tab').tabs();
});

function showMenu() {
    $('.btn-menu .hidden').addClass('dn');
    $('.btn-menu .visible').removeClass('dn');

    $('#sidebar').animate({ 
        right: 0, 
        opacity: 1
    }, 500).show();

    $('ul.menu').animate({ 
        right: 0 
    }, 500);
}
function hideMenu() {
    $('.btn-menu .visible').addClass('dn');
    $('.btn-menu .hidden').removeClass('dn');

    $('#sidebar').animate({ 
        right: '-100%', 
        opacity: 0 
    }, 500);

    setTimeout('$("#sidebar").hide()', 500);

    $('ul.menu').animate({ 
        right: '-100%' 
    }, 500);
}
function selectIcon() {
    $('select').on('click', function() {
        $(this).toggleClass('in');
    }).on('blur', function() {
        $(this).removeClass('in');
    });
}
function toggleBtn(e) {
    $(e).toggleClass('in');
}
function avModal() {
    $('[data-modal]').on('click', function () {
		var target = $(this).attr('data-modal');
		var modal = $('.modal[id="' + target + '"]');		

        $(modal).fadeIn(300).addClass('fade');
    });
    
    $('.modal').on('click', function(event) {
        if (!$(event.target).closest('.modal-dialog').length) {
            $(this).fadeOut(300).removeClass('fade');
        }
    }); 
}
function closeModal(e) {
    $('.modal.fade').fadeOut(300).removeClass('fade');
}
function avCollpase() {
    $('[data-collapse]').on('click', function () {
		var collapse = $(this).attr('data-collapse');
        var dropdowndiv = $('.avCollpase[id="' + collapse + '"]');
        var dropshow = $('.avCollpase.show');
        
        $(dropdowndiv).slideDown(300).addClass('show');
        $(dropshow).slideUp(300).removeClass('show');
	});
}
function collapsetbl() {
    $('[data-tbl="collapse"] > td > .slideTbl').on('click', function () { 
        $('[data-tbl="collapse"]').not($(this).parent('td').parent('[data-tbl="collapse"]')).removeClass('in');
        $(this).parent('td').parent('[data-tbl="collapse"]').toggleClass('in').next().find('.sub-table').slideToggle(500);
        $('.toggle-collapse').not($(this).parent('td').parent('[data-tbl="collapse"]').next()).find('.sub-table').slideUp(500);
    });
}
function userSet() {
    $('.info-box').slideToggle(300).toggleClass('show');
}
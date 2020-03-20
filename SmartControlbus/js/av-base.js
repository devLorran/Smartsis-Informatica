$(function () {
    startTime();
    selectIcon();
    avModal();  
    avCollpase(); 
    collapsetbl();
    sortTable();
    togglePsw();    
    cancelAddNewTypeSlide();
    cancelChangePsw();

    $('.box-tab').tabs();

    $(document).on('click', function (event) {
		if (!$(event.target).closest('.hd-config').length) {
			$('.info-box').slideUp(300).removeClass('show');
        }
        
        if (!$(event.target).closest('.nav-config').length) {
			$('.info-box-mob').slideUp(300).removeClass('show');
		}
    });
});

function checkTime(i) {
	if (i < 10) { i = '0' + i };  // add zero in front of numbers < 10
	return i;
}
function startTime() {
    var today = new Date();
    
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

	var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

	h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('spnTimer').innerHTML = dd + '/' + mm + '/' + yyyy + ' ' + '-' + ' ' + h + ':' + m + ':' + s;    
	var t = setTimeout(startTime, 500);
}
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

        $('#btn-add-new-type-slide span').toggleClass('fa-plus fa-minus');
    });
}
function cancelAddNewTypeSlide() {
    $('#cancel-add-new-type-slide').on('click', function () {
        $('#add-new-type-slide').slideUp(300).removeClass('show');
        $('#btn-add-new-type-slide span').removeClass('fa-minus').addClass('fa-plus');
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
function userSetMob() {
    $('.info-box-mob').slideToggle(300).toggleClass('show');
}
function togglePsw() {
	$('.toggle-psw').on('click', function () {
		$(this).toggleClass('fa-eye fa-eye-slash');

		let input = $($(this).attr('toggle'));

		if (input.attr('type') == 'password') {
			input.attr('type', 'text');
		} else {
			input.attr('type', 'password');
		}
    });

    $('.toggle-psw-mob').on('click', function () {
		$(this).toggleClass('fa-eye fa-eye-slash');

		let inputMob = $($(this).attr('toggle'));

		if (inputMob.attr('type') == 'password') {
			inputMob.attr('type', 'text');
		} else {
			inputMob.attr('type', 'password');
		}
    });
}
function sortTable() {
    var table = $('.table');
    
    $('.sortTb').each(function() {            
        var th = $(this),
            thIndex = th.index(),
            inverse = false;
        
        th.click(function() {                
            th.closest(table).find('td').filter(function() {                    
                return $(this).index() === thIndex;                    
            }).sortElements(function(a, b) {                    
                return $.text([a]) > $.text([b]) ? inverse ? -1 : 1 : inverse ? 1 : -1;                    
            }, function() {
                return this.parentNode;                     
            });            
            inverse = !inverse;                    
        });                
    });   
}
function modalOccurrencyDetails(e) {
    $('#modal-detalhes-ocorrencia').fadeOut(300).removeClass('fade');
}
function modalNewOccurrency(e) {
    $('#modal-nova-ocorrencia').fadeOut(300).removeClass('fade');
}
function cancelChangePsw() {
    $('#cancel-changed-psw').on('click', function () {
        $('#change-psw').slideUp(300).removeClass('show');
        $('.toggle-psw').removeClass('fa-eye-slash').addClass('fa-eye');
        $('.psw').val('').attr('type', 'password');        
    });

    $('#cancel-changed-pswMob').on('click', function () {
        $('#change-psw-mob').slideUp(300).removeClass('show');
        $('.toggle-psw-mob').removeClass('fa-eye-slash').addClass('fa-eye');
        $('.psw-mob').val('').attr('type', 'password');        
    });
}
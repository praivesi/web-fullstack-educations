$('.list').click(function(e){
    openTab(e.target.dataset.id);
});

function openTab(i) {
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(i).addClass('active');
    $('.tab-content').eq(i).addClass('show');
}


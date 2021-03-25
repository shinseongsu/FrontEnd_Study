const $wrapper = $('.wrapper');
const $items = $wrapper.find('.item');


$('body').on('click', function(e) {
    const item = $(e.target);
    if(item.is('.item')) {
        item.toggleClass('open').siblings().removeClass('open');
    } else {
        $items.removeClass('open');
    }
});

// $wrapper.on('click', '.item', function(e) {
//     e.stopPropagation();
//     $(this).toggleClass('open').siblings().removeClass('open');
// });

// $('body').on('click', function(e) {
//     $items.removeClass('open');
// });
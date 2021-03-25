const items = document.querySelectorAll('details');

document.body.addEventListener('click', function(e) {
    if (e.target.nodeName !== 'P' && e.target.nodeName !== 'SUMMARY') {
        items.forEach(function(item) {
            item.removeAttribute('open');
        });
        return;
    }
    items.forEach(function(item) {
        if (item !== e.target.parentElement) {
            item.removeAttribute('open');
        }
    });
});
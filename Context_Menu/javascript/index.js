const items = document.querySelectorAll('.item');
const wrapper = document.querySelector('.wrapper');

// 3. 방법
// 단점 : 이 페이지가 종료될때 까지 이벤트가 존재함.
document.body.addEventListener('click', function(e) {
    const targetClassList = e.target.classList;
    if(targetClassList.contains('context')) return;
    if(targetClassList.contains('item')) {
        targetClassList.toggle('open');
        items.forEach(function(elem) {
            if(elem !== e.target) elem.classList.remove('open');
        });
        return;
    }
    items.forEach(function(elem) {
        elem.classList.remove('open');
    });
});

// 2. 방법
// 이벤트리스너가 2개 사용됨.

// wrapper.addEventListener('click', function(e) {
//     const targetElem = e.target;
//     e.stopPropagation();
//     if(!targetElem.classList.contains('item')) return;
//     targetElem.classList.toggle('open');
//     items.forEach(function(elem) {
//         if(elem !== targetElem) elem.classList.remove('open');
//     });
// });
// 외부를 클릭했을 때 닫기
// document.body.addEventListener('click', function(e) {
//     if(e.target.classList.contains('context')) return;
//     items.forEach(function(elem) {
//         elem.classList.remove('open');
//     });
// });

// 1. 방법
// 이벤트 감지 대상이 너무 많다 -> 성능 저하
// items.forEach(function(item) {
//     item.addEventListener('click', function(e) {
//         item.classList.toggle('open');
//         items.forEach(function(elem) {
//             if (elem !== item) elem.classList.remove('open');
//         })
//     });
// });
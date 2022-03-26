let modal = document.querySelector('#modal');
let modalButton = document.querySelector('#modalButton');
let modalClose = document.querySelector('#modalClose');

modalButton.addEventListener('click',function () {
    modal.classList.add('modal-active');
})
modalClose.addEventListener('click',function () {
    modal.classList.remove('modal-active');

})

let popup = document.querySelector('#popup');
let popupButton = document.querySelector('#buttonPopup');
let popupButtonTablet = document.querySelector('#buttonPopupTablet');
let popupButtonDesign = document.querySelector('#buttonPopupDesign');
let popupButtonShop = document.querySelector('#buttonPopupShop');
let popupButtonProcess = document.querySelector('#buttonPopupProcess');
let popupButtonFooter = document.querySelector('#buttonPopupFooter');
let popupButtonModal = document.querySelector('#buttonPopupModal');
let curtain = document.querySelector('#curtain');
let popupClose = document.querySelector('#popupClose');

popupButton.addEventListener('click',function () {
    popup.classList.add('modal-active')
})
popupButtonTablet.addEventListener('click',function () {
    popup.classList.add('modal-active');
})
popupButtonDesign.addEventListener('click',function () {
    popup.classList.add('modal-active');
})
popupButtonShop.addEventListener('click',function () {
    popup.classList.add('modal-active');
})
popupButtonProcess.addEventListener('click',function () {
    popup.classList.add('modal-active');
})
popupButtonFooter.addEventListener('click',function () {
    popup.classList.add('modal-active');
})
popupButtonModal.addEventListener('click',function () {
    popup.classList.add('modal-active');
})

popupClose.addEventListener('click',function () {
    popup.classList.remove('modal-active')

})
curtain.addEventListener('click',function () {
    popup.classList.remove('modal-active')

})


let modalAccept = document.querySelector('#modalAccept');
let modalButtonAccept = document.querySelector('#modalButtonAccept');
let modalCurtainAccept = document.querySelector('#modalCurtainAccept');
let modalCloseAccept = document.querySelector('#modalCloseAccept');

modalButtonAccept.addEventListener('click',function () {
    popup.classList.remove('modal-active')

})

modalButtonAccept.addEventListener('click',function () {
    modalAccept.classList.add('modal-active')
})

modalCloseAccept.addEventListener('click',function () {
    modalAccept.classList.remove('modal-active')
})

modalCurtainAccept.addEventListener('click',function () {
    modalAccept.classList.remove('modal-active')

})

let header = document.querySelector('.header-js'),
    headerH = document.querySelector('.header-js').clientHeight;

document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headerH ) {
        header.classList.add('header-fixed');
        document.body.style.paddingTop = headerH + 'px';
    } else {
        header.classList.remove('header-fixed');
        document.body.removeAttribute('style');
    }

}

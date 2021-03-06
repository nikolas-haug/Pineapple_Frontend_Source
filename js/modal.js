// get all the modal click  elements in the dom
const modalClicks = document.querySelectorAll('.modal-click');
const modals = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.modal__close');

const closeModals = () => {
    modals.forEach(modal => {
        if(modal.classList.contains('open')) {
            modal.classList.remove('open');
            modal.classList.remove('modal-fade-in');
        }
    });
}

// Open modal on target button click
modalClicks.forEach(modal => {
    modal.addEventListener('click', (e) => {
        let modalTarget = e.target.getAttribute('data-target');
        let modalElement = document.getElementById(modalTarget);
        modalOverlayElement = `<div class="modal-overlay"></div>`;
        modalElement.insertAdjacentHTML('afterend', modalOverlayElement);
        modalElement.classList.toggle('open');
        modalElement.classList.add('modal-fade-in');
    });
});

// When the user clicks on <span> (x), close the modal
modalClose.forEach(item => {
    item.addEventListener('click', (e) => {
        let modalOverlay = document.querySelector('.modal-overlay');
        closeModals();
        modalOverlay.parentNode.removeChild(modalOverlay);
    });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModals();
        e.target.parentNode.removeChild(e.target);        
    }
}
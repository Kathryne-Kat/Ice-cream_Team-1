(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-product]'),
    openModalBtn1: document.querySelector('[data-modal-product1]'),
    openModalBtn2: document.querySelector('[data-modal-product2]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-product-hidden');
  }
})();

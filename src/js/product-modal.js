(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-product1]'),
    openModalBtn2: document.querySelector('[data-modal-product2]'),
    openModalBtn3: document.querySelector('[data-modal-product3]'),
    closeModalBtn: document.querySelector('[data-modal-product-close]'),
    modal: document.querySelector('[data-modal-products]'),
    body: document.querySelector('body'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-product-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

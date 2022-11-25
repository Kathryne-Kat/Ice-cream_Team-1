(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-about__modal-open]'),
    closeModalBtn: document.querySelector('[data-about__modal-close]'),
    modal: document.querySelector('[data-about__modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

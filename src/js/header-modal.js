(() => {
  const refs = {
    openHeaderModalBtn: document.querySelector('[data-header-modal-open]'),
    // openMobileModalBtn: document.querySelector('[data-mobile-modal-open]'),
    closeHeaderModalBtn: document.querySelector('[data-header-modal-close]'),
    headerModal: document.querySelector('[data-header-modal]'),
  };

  refs.openHeaderModalBtn.addEventListener('click', toggleModal);
  // refs.openMobileModalBtn.addEventListener('click', toggleModal);
  refs.closeHeaderModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
    refs.headerModal.classList.toggle('is-hidden');
  }
})();

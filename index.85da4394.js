(()=>{const e={openModalBtn1:document.querySelector("[data-modal-product1]"),openModalBtn2:document.querySelector("[data-modal-product2]"),openModalBtn3:document.querySelector("[data-modal-product3]"),closeModalBtn:document.querySelector("[data-modal-product-close]"),modal:document.querySelector("[data-modal-products]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-product-hidden"),e.body.classList.toggle("no-scroll")}e.closeModalBtn.addEventListener("click",o),e.openModalBtn1.addEventListener("click",o),e.openModalBtn2.addEventListener("click",o),e.openModalBtn3.addEventListener("click",o)})(),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".mobile-menu__list")};function o(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden"),e.body.classList.remove("no-scroll")}))})();new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});(()=>{const e={openHeaderModalBtn:document.querySelector("[data-header-modal-open]"),closeHeaderModalBtn:document.querySelector("[data-header-modal-close]"),headerModal:document.querySelector("[data-header-modal]")};function o(){document.body.classList.toggle("no-scroll"),e.headerModal.classList.toggle("is-hidden")}e.openHeaderModalBtn.addEventListener("click",o),e.closeHeaderModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.85da4394.js.map

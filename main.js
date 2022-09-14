const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach((accordionItemHeader, i) => {
  accordionItemHeader.addEventListener('click', (event) => {
    accordionItemHeader.classList.toggle('active');
    const accordionItemBody1 = document.querySelector('.accordion-item-body1');
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody1.style.maxHeight = 0;
    } else {
      accordionItemBody1.style.maxHeight = accordionItemBody1.scrollHeight + 'px';
    }
  });
});

const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach((accordionItemHeader, i) => {
  accordionItemHeader.addEventListener('click', (event) => {
    // accordionContainer1.classList.toggle('active');
    accordionItemHeader.classList.toggle('active');
    const accordionContainer1 = document.getElementById('container1');

    if (accordionItemHeader.classList.contains('active')) {
      accordionContainer1.style.display = 'none';
    } else {
      accordionContainer1.style.display = 'block';
    }
  });
});

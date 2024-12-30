/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
/*function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  const homepagehero = main.querySelector('.homepage-hero-container');
  // eslint-disable-next-line no-bitwise
  if (homepagehero == '') {
    if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
      const section = document.createElement('div');
      section.append(buildBlock('hero', { elems: [picture, h1] }));
      main.prepend(section);
    }
  }
}*/

/*export default function decorate(block) {
  [...block.children].forEach((row) => {
    // decorate accordion item label
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);
    // decorate accordion item body
    const body = row.children[1];
    body.className = 'accordion-item-body';
    // decorate accordion item
    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);
    row.replaceWith(details);
  });
}*/

import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);

  const footerBlock = document.querySelector('footer');
  const starReviews = footerBlock.querySelector('.information');
  if (starReviews) {
    const informationSection = starReviews.querySelector('.default-content-wrapper');
    if (informationSection) {
      informationSection.insertAdjacentHTML('beforeend', '<div id="pr-reviewsnippet"></div><script type="text/javascript" src="//ui.powerreviews.com/stable/4.0/ui.js"></script><script>POWERREVIEWS.display.render({api_key: "51e40959-7c8c-44f2-a879-8bb40f26029b",locale: "en_US",merchant_group_id: "78934",merchant_id: "934181",page_id: "membership",review_wrapper_url:"https://www.starone.org/reviews/write.php?pr_page_id=membership", style_sheet: "https://www.starone.org/css/pr.css", on_read_reviews_click: read_reviews, product:{ name: "Star One Membership", url: "https://www.starone.org/membership/refer-a-friend/", image_url: "https://www.starone.org/images/star-one-logo.png", description: "As a financial cooperative, Star One exists solely to serve members, and our profits are returned to you in many ways.", category_name: "Membership", }, components: { ReviewSnippet: "pr-reviewsnippet" } }); </script>');
    }
  }
}

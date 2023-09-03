const buttonHTML = `
  <li class="Box-row Box-row--hover-gray p-3 mt-0 f5 rounded-0">
    <a class="d-flex flex-items-center color-fg-default text-bold no-underline" data-action="click:get-repo#showDownloadMessage" href="x-github-client://openRepo/https://github.com/CharaChorder/nexus" style="">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-desktop-download mr-2">
        <path d="m4.927 5.427 2.896 2.896a.25.25 0 0 0 .354 0l2.896-2.896A.25.25 0 0 0 10.896 5H8.75V.75a.75.75 0 1 0-1.5 0V5H5.104a.25.25 0 0 0-.177.427Z"></path>
        <path d="M1.573 2.573a.25.25 0 0 0-.073.177v7.5a.25.25 0 0 0 .25.25h12.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-3a.75.75 0 1 1 0-1.5h3A1.75 1.75 0 0 1 16 2.75v7.5A1.75 1.75 0 0 1 14.25 12h-3.727c.099 1.041.52 1.872 1.292 2.757A.75.75 0 0 1 11.25 16h-6.5a.75.75 0 0 1-.565-1.243c.772-.885 1.192-1.716 1.292-2.757H1.75A1.75 1.75 0 0 1 0 10.25v-7.5A1.75 1.75 0 0 1 1.75 1h3a.75.75 0 0 1 0 1.5h-3a.25.25 0 0 0-.177.073ZM6.982 12a5.72 5.72 0 0 1-.765 2.5h3.566a5.72 5.72 0 0 1-.765-2.5H6.982Z"></path>
      </svg>
      Open with GitHub Desktop
    </a>
  </li>
`;

// Function to insert the button
function insertButton() {
  // Check if the target element matches your XPATH
  const targetElement = document.evaluate('//*[@id="local-panel"]/ul/li[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE);
  if (targetElement.singleNodeValue) {
    // Insert your button HTML
    targetElement.singleNodeValue.insertAdjacentHTML('beforebegin', buttonHTML);
  }
}

// Insert the button when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', insertButton);
} else {
  insertButton();
}

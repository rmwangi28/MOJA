const pages = document.querySelectorAll('.page');
let currentPage = 0;

// Resets the book on load
window.onload = function () {
  pages.forEach(page => page.classList.remove('flipped'));
  currentPage = 0;
};

// Flips only on the current page
pages.forEach((page, index) => {
  page.addEventListener('click', (event) => {
    const clickX = event.clientX;
    const pageRect = page.getBoundingClientRect();
    const pageCenter = pageRect.left + pageRect.width / 2;

    if (clickX > pageCenter && currentPage < pages.length) {
      // if clicked on right half - flip forward
      pages[currentPage].classList.add('flipped');
      currentPage++;
    } else if (clickX < pageCenter && currentPage > 0) {
      // if clicked on the left half - flip backwards
      currentPage--;
      pages[currentPage].classList.remove('flipped');
    }
  });
});

//refresh button to reset the book 
document.getElementById('refreshBtn').addEventListener('click', () => {
  location.reload();
});

    




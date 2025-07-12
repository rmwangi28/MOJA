const pages = document.querySelectorAll('.page');
let currentPage = 0;

// Function to flip the book cover
window.onload = function (){
  pages.forEach(page => page.classsList.remove('flipped'));
  currentPage = 0;
}
//Flips only on the current page
pages.forEach((page, index) => {
  page.addEventListener('click', () => {
    // Flip the current page
    page.classList.add('flipped');
    currentPage++;
  });
});
//refresh button to reset the book 
document.getElementById('refreshBtn').addEventListener('click', () => {
  location.reload();
});

    




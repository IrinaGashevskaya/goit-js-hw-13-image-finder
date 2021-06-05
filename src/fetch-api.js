import template from './templates/photos.hbs';
const refs = {
    input: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
    };
refs.input.addEventListener('input', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
var searchQuery = '';
var page = 1;
function onSearch(e) {
    e.preventDefault(); 

 searchQuery = e.currentTarget.elements.query.value;

//const options = {
    //headers: {
     
    //},

//};

const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=21904508-8c5f9bb97b16d01f890abadf2`;

console.log(url);
fetchPhotos(url);


}
function onLoadMore() {
page+=1;
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=21904508-8c5f9bb97b16d01f890abadf2`;
fetchPhotos(url);


}
function fetchPhotos(url) {
  fetch(url)
  .then(r => r.json())
  .then(result => {
    const hits = result.hits;
    const markup = template(hits);
    console.log(markup);
    refs.gallery.innerHTML = markup; 
    console.log(result)
    
    refs.loadMoreBtn.classList.remove('is-hidden');
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
      block: 'end',
  });
    
    });
}

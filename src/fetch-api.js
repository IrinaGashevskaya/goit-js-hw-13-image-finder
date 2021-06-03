const refs = {
    searchForm: document.querySelector('.js-search-form'),
    //articlesContainer:document.querySelector('.js-articles-container'),
    loadMoreBtn: document.querySelector('{data-action="load-more"')
    };
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
    e.preventDefault();

}
const options = {
    headers: {
        Authorization: '21904508-8c5f9bb97b16d01f890abadf2'
    },

};
fetch('https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12', options)
.then(r => r.json())
.then(console.log);



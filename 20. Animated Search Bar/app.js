const magnifier = document.querySelector('.magnifier ');
const searchBarEl = document.querySelector('.searchBar')


magnifier.addEventListener("click", () => {
    searchBarEl.classList.toggle('animate');
});

console.log(magnifier);

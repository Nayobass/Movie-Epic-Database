function userSearchInput(event) {
    searchInput = event.target.value
    sessionStorage.setItem("searchInput", searchInput)
    window.location.href = "./index.html"
}
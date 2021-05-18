let searchButton = document.getElementById("searchButton")

const getData = async()=>{
    let searchData = document.getElementById("searchBar").value
    let key = "0_j0QHMY_epDTqBtrqRIwWQIvfst8FGs6oQa-VCbLXQ"

    let url = `https://api.unsplash.com/search/photos?query=${searchData}&client_id=${key}`
    try{
        const response = await  fetch(url)
        const data = await response.json()
        console.log(data)
        let html = ''
        for(i in data.results){
            html+=`
            <div class="search-images-div">
                <img src=${data.results[i].urls.regular} alt=img/>
                <p>${data.results[i].alt_description}</p>
            </div>
            `
        }
        document.getElementById("searchResults").innerHTML = html
    }catch(err){
        console.log(err)
    }
}

searchButton.addEventListener("click",getData)
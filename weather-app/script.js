const city = document.getElementById('city').value.trim()
const search = document.getElementById('search')
const result = document.getElementById('result')
const stop = document.getElementById('stop')

search.addEventListener('click', () =>{
    result.innerHTML = `
    <div class="information">
        <p>vile</p>
        <p>temperature</p>
    </div>
    <div class="file">
        <p>image</p>
    </div>
    <div class="description">
        <p>description</p>
    </div>
    `
})
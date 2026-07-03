

const apiKey = "8a2fc3a00a2d9e2bb034190717c689a9";


const search = document.getElementById("search");
const result = document.getElementById("result");

search.addEventListener("click", async () => {
    
    // alert('test')
    const city = document.getElementById("city").value.trim();

    if (!city) {
        result.innerHTML = "<p>Veuillez entrer une ville.</p>";
        return;
    }

    try {
        result.innerHTML = "<p>loading...</p>";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`);

        const data = await response.json();

        if (data.cod !== 200) {
            result.innerHTML = `<p>Ville introuvable.</p>`;
            return;
        }

        const temperature = data.main.temp;
        const description = data.weather[0].description;

        

        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    

        result.innerHTML = `
            <div class="information">
                <p>${city}</p>
                <p>${temperature}°c</p>
            </div>
            <div class="file">
                <p><img src="${iconUrl}" alt="Météo actuelle"></p>
            </div>
            <div class="description">
                <p>${description}</p>
            </div>
            
            `
    } 
    catch (error) {
        responseDiv.innerHTML = "<p>Une erreur est survenue.</p>";
        console.error(error);
    }
});
console.log("Script chargé !");

fetch('data.json')
    .then(response => {
        if (!response.ok) throw new Error("Error loading JSON");
        return response.json();
    })
    .then(data => {
        console.log("Data received :", data);
        const container = document.getElementById('quotes-container');
        
        if (!container) {
            console.error("The element 'quotes-container' is not found in the HTML !");
            return;
        }

        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <p>"${item.quote}"</p>
                <small class="author">- ${item.author}</small>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Erreur :', error));
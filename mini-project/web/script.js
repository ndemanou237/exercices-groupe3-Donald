console.log("Script chargé !");

fetch('data.json')
    .then(response => {
        if (!response.ok) throw new Error("Erreur de chargement du JSON");
        return response.json();
    })
    .then(data => {
        console.log("Données reçues :", data);
        const container = document.getElementById('quotes-container');
        
        if (!container) {
            console.error("L'élément 'quotes-container' est introuvable dans le HTML !");
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
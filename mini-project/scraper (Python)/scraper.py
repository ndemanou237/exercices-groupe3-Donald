import requests
from bs4 import BeautifulSoup
import json
import os

def run_scraper():
    url = "http://quotes.toscrape.com"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    quotes_data = []
    
    # On cherche chaque bloc de citation
    for quote in soup.find_all('div', class_='quote'):
        text = quote.find('span', class_='text').text
        author = quote.find('small', class_='author').text
        quotes_data.append({"quote": text, "author": author})
    
    # Sauvegarde dans le dossier web
    output_path = os.path.join('..', 'web', 'data.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(quotes_data, f, indent=4, ensure_ascii=False)
    
    print("Scraping terminé ! Fichier data.json mis à jour.")

if __name__ == "__main__":
    run_scraper()
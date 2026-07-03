import requests
from bs4 import BeautifulSoup
import json
import os

def run_scraper():
    url = "http://quotes.toscrape.com"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    quotes_data = []
    
    # searching for and saving the quotes contained within these HTML tags
    for quote in soup.find_all('div', class_='quote'):
        text = quote.find('span', class_='text').text
        author = quote.find('small', class_='author').text
        quotes_data.append({"quote": text, "author": author})
    
    # The retrieved data is saved in the data.json file within the web folder.
    output_path = os.path.join('..', 'web', 'data.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(quotes_data, f, indent=4, ensure_ascii=False)
    
    print("Scraping complete! data.json file updated.")

if __name__ == "__main__":
    run_scraper()
import csv

def analyze_sales(file_path):
    total_revenue = 0
    sales_per_product = {}

    try:
        with open(file_path, mode='r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            
            for row in reader:
                product = row['product'].strip()
                quantity = int(row['quantity'])
                price = float(row['price'])
                
                total_revenue += quantity * price
                
                if product in sales_per_product:
                    sales_per_product[product] += quantity
                else:
                    sales_per_product[product] = quantity

        top_product = max(sales_per_product, key=sales_per_product.get)
        max_quantity = sales_per_product[top_product]

        print("--- Sales Summary ---")
        print(f"Total Revenue: ${total_revenue:.2f}")
        print(f"Top Selling Product: {top_product} ({max_quantity} units sold)")

    except FileNotFoundError:
        print(f"Error: The file ${file_path} was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    analyze_sales('sales.csv')
from library import Library

def main():
    my_library = Library()
    
    while True:
        print("\n LIBRARY MENU CREATE BY SHADOW")
        print("1. Add a book")
        print("2. List books")
        print("3. Borrow a book")
        print("4. Return a book")
        print("5. Exit")
        
        choice = input("Choose an option (1-5): ")

        if choice == "1":
            title = input("Book title: ")
            author = input("Book author: ")
            my_library.add_book(title, author)
        elif choice == "2":
            my_library.list_books()
        elif choice == "3":
            title = input("Which book do you want to borrow? ")
            my_library.borrow_book(title)
        elif choice == "4":
            title = input("Which book do you want to return? ")
            my_library.return_book(title)
        elif choice == "5":
            print("Goodbye!")
            break
        else:
            print("Invalid option.")

if __name__ == "__main__":
    main()
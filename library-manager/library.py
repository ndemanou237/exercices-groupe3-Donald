from book import Book

class Library:
    def __init__(self):
        self.books = []

    def add_book(self, title, author):
        new_book = Book(title, author)
        self.books.append(new_book)
        print(f"Book '{title}' added successfully.")

    def list_books(self):
        if not self.books:
            print("The library is empty.")
        for book in self.books:
            print(book)

    def borrow_book(self, title):
        for book in self.books:
            if book.title == title and book.is_available:
                book.is_available = False
                print(f"You have borrowed '{title}'.")
                return
        print("Book not found or already borrowed.")

    def return_book(self, title):
        for book in self.books:
            if book.title == title and not book.is_available:
                book.is_available = True
                print(f"You have returned '{title}'.")
                return
        print("This book is not in our records or is not borrowed.")
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.is_available = True  # By default, the book is available

    def __str__(self):
        status = "Available" if self.is_available else "Borrowed"
        return f"'{self.title}' by {self.author} [{status}]"
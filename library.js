// Classe Book
class Book {
    constructor(title, description, author, id) {
      this.title = title;
      this.description = description;
      this.author = author;
      // O ID pode ser passado para reconstruir um livro, mas será gerado por Library.addBook
      this.id = id || ''; 
    }
  }
  
  // Classe Library para gerenciar os livros
  class Library {
    #books = []; // Array privado para armazenar os livros (usando Private Class Fields, ES2022)
  
    /**
     * Adiciona um novo livro à biblioteca.
     * Gera um ID único para o livro.
     * @param {object} bookInfo - Objeto contendo title, description e author do livro.
     * @param {string} bookInfo.title
     * @param {string} bookInfo.description
     * @param {string} bookInfo.author
     * @returns {Book} O livro adicionado com seu ID.
     */
    addBook(bookInfo) {
      const newBook = new Book(
        bookInfo.title,
        bookInfo.description,
        bookInfo.author,
        this.#generateUniqueId() // Gera um ID único
      );
      this.#books.push(newBook);
      console.log(`Livro "${newBook.title}" adicionado com ID: ${newBook.id}`);
      return newBook;
    }
  
    /**
     * Retorna todos os livros presentes na biblioteca.
     * @returns {Book[]} Um array de objetos Book.
     */
    getBooks() {
      console.log('Listando todos os livros:');
      if (this.#books.length === 0) {
        console.log('Nenhum livro na biblioteca.');
      }
      return [...this.#books]; // Retorna uma cópia para evitar modificações externas diretas
    }
  
    /**
     * Remove um livro da biblioteca pelo seu ID.
     * @param {string} id - O ID do livro a ser removido.
     * @returns {void}
     */
    removeBookById(id) {
      const initialLength = this.#books.length;
      this.#books = this.#books.filter(book => book.id !== id);
      if (this.#books.length < initialLength) {
        console.log(`Livro com ID ${id} removido com sucesso.`);
      } else {
        console.log(`Livro com ID ${id} não encontrado.`);
      }
    }
  
    /**
     * Retorna um livro específico pelo seu ID.
     * @param {string} id - O ID do livro a ser encontrado.
     * @returns {Book | undefined} O objeto Book encontrado ou undefined se não existir.
     */
    getBookById(id) {
      const foundBook = this.#books.find(book => book.id === id);
      if (foundBook) {
        console.log(`Livro encontrado (ID: ${id}): "${foundBook.title}"`);
      } else {
        console.log(`Livro com ID ${id} não encontrado.`);
      }
      return foundBook;
    }
  
    /**
     * Edita as informações de um livro existente pelo seu ID.
     * @param {string} id - O ID do livro a ser editado.
     * @param {object} info - Um objeto com as propriedades (title, description, author) a serem atualizadas.
     * @param {string} [info.title]
     * @param {string} [info.description]
     * @param {string} [info.author]
     * @returns {Book | undefined} O livro atualizado ou undefined se o livro não for encontrado.
     */
    updateBookById(id, info) {
      const bookToUpdate = this.#books.find(book => book.id === id);
      if (bookToUpdate) {
        if (info.title !== undefined) bookToUpdate.title = info.title;
        if (info.description !== undefined) bookToUpdate.description = info.description;
        if (info.author !== undefined) bookToUpdate.author = info.author;
        console.log(`Livro com ID ${id} atualizado: "${bookToUpdate.title}"`);
        return bookToUpdate;
      } else {
        console.log(`Livro com ID ${id} não encontrado para atualização.`);
        return undefined;
      }
    }
  
    /**
     * Gera um ID único simples para um livro.
     * Este é um método privado, acessível apenas dentro da classe Library.
     * @returns {string} Uma string de ID única.
     */
    #generateUniqueId() {
      return Math.random().toString(36).substring(2, 9) + Date.now().toString(36).substring(4, 9);
    }
  }

  // No final de library.js, adicione:
module.exports = { Book, Library };
// --- Código de main.js ---
const { Book, Library } = require('./library.js'); // Importa as classes do arquivo library.js

// 1. Crie uma instância da sua Library
const myLibrary = new Library();

// 2. Adicione Livros usando o método addBook da Library
console.log('\n--- Adicionando Livros ---');
const book1 = myLibrary.addBook({
  title: 'O Senhor dos Anéis',
  description: 'Uma jornada épica pela Terra Média.',
  author: 'J.R.R. Tolkien'
});

const book2 = myLibrary.addBook({
  title: '1984',
  description: 'Um clássico distópico sobre vigilância totalitária.',
  author: 'George Orwell'
});

myLibrary.addBook({
  title: 'O Pequeno Príncipe',
  description: 'Uma fábula poética sobre amizade, amor e perda.',
  author: 'Antoine de Saint-Exupéry'
});

console.log('ID do Livro 1:', book1.id);
console.log('ID do Livro 2:', book2.id);

// 3. Liste todos os Livros
console.log('\n--- Listando Todos os Livros ---');
const allBooks = myLibrary.getBooks();
allBooks.forEach(book => console.log(`ID: ${book.id}, Título: "${book.title}", Autor: ${book.author}`));

// 4. Mostre um Livro Específico pelo ID
console.log('\n--- Buscando um Livro por ID ---');
const foundBook = myLibrary.getBookById(book1.id);
if (foundBook) {
  console.log(`Detalhes do livro encontrado: ${foundBook.title} por ${foundBook.author}`);
}

const nonExistentBook = myLibrary.getBookById('abcde123');
if (!nonExistentBook) {
  console.log('Livro não encontrado (como esperado).');
}

// 5. Edite um Livro pelo ID
console.log('\n--- Editando um Livro ---');
const updatedBook = myLibrary.updateBookById(book2.id, {
  title: 'Mil Novecentos e Oitenta e Quatro',
  description: 'Um romance distópico de George Orwell sobre a vigilância do governo.',
});
if (updatedBook) {
  console.log(`Livro atualizado: Título: "${updatedBook.title}", Descrição: "${updatedBook.description}"`);
}
myLibrary.updateBookById('nonexistent-id', { author: 'Novo Autor' });

// 6. Remova um Livro pelo ID
console.log('\n--- Removendo um Livro ---');
myLibrary.removeBookById(book1.id);
myLibrary.removeBookById(book1.id); // Tentar remover novamente

// 7. Verifique os livros restantes após a remoção
console.log('\n--- Livros Restantes ---');
myLibrary.getBooks().forEach(book => console.log(`ID: ${book.id}, Título: "${book.title}"`));

// --- Fim do código de main.js ---
const bookFirst = {
  title: "Гарри Поттер и узник Азкабана",
  description:
    "Гарри взрослеет, и вместе c тем жить в Хогвартсе всё страшнее. Из тюрьмы для волшебников Азкабан сбежал опасный преступник - Сириус Блэк.",
  author: "Джоан Роулинг",
};

const bookSecond = {
  title: "Зеленая миля",
  description:
    "Стивен Кинг приглашает читателей в жуткий мир тюремного блока смертников, откуда уходят, чтобы не вернуться, приоткрывает дверь",
  author: "Стивен Кинг",
};

const bookThird = {
  title: "Унесенные ветром",
  description:
    "Роман Маргарет Митчелл вышел в свет в 1936 году и имел феноменальный успех у читателей. Только в первые годы его тираж превысил три миллиона",
  author: "Маргарет Митчелл",
};

describe("Favorite book spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
  });

  it("Should add new book", () => {
    cy.addBook(bookFirst);
    cy.get(".card-title").should("contain.text", bookFirst.title);
  });

  it("Should add new book to favorite", () => {
    cy.addFavoriteBook(bookSecond);
    cy.visit("/favorites");
    cy.get(".card-title").should("contain.text", bookSecond.title);
  });

  it("Should add book to favorite through 'Book list' page", () => {
    cy.addBookNoFavorite(bookFirst);
    cy.contains(bookFirst.title)
      .should("be.visible")
      .within(() => cy.get(".card-footer > .btn").click({ force: true }));
    cy.visit("/favorites");
    cy.contains(bookFirst.title).should("be.visible");
  });

  it("Should delete book from favorite", () => {
    cy.visit("/favorites");
    cy.contains(bookSecond.title)
      .should("be.visible")
      .within(() => cy.get(".card-footer > .btn").click({ force: true }));
    cy.contains(bookSecond.title).should("not.exist");
  });
});

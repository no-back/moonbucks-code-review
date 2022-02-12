describe("menu ui test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("메뉴 추가 event", () => {
    it("확인 버튼으로 메뉴를 추가한다.", () => {
      cy.get("#espresso-menu-name").type("카페라떼");
      cy.get("#espresso-menu-submit-button").click();
      cy.get(".menu-list-item").should("contain.text", "카페라떼");
    });

    it("엔터키 입력으로 메뉴를 추가한다.", () => {
      cy.get("#espresso-menu-name").type("아메리카노{enter}");
      cy.get(".menu-list-item").should("contain.text", "아메리카노");
    });

    it("확인 버튼을 누르면 input 값은 빈 값으로 초기화한다.", () => {
      cy.get("#espresso-menu-name").type("카페모카");
      cy.get("#espresso-menu-submit-button").click();
      cy.get("#espresso-menu-name").should("contain.value", "");
    });

    it("사용자 입력값이 빈 값이라면 추가되지 않는다. (click)", () => {
      cy.get("#espresso-menu-submit-button").click();
      cy.get(".menu-list-item").should("not.exist");
    });

    it("사용자 입력값이 빈 값이라면 추가되지 않는다. (enter)", () => {
      cy.get("#espresso-menu-submit-button").type("{enter}");
      cy.get(".menu-list-item").should("not.exist");
    });
  });

  describe("메뉴 수정 event", () => {
    it("prompt 창에 값을 입력하고 확인을 누르면 메뉴가 수정된다.", () => {

      cy.window().then(function (prompt) {
        cy.get("#espresso-menu-name").type("아이스 라떼");
        cy.get("#espresso-menu-submit-button").click();
        cy.get(".menu-edit-button").click();
        cy.stub(prompt, "prompt").returns("카라멜마끼아또");
        cy.get('.menu-edit-button').click()
        cy.get('.menu-name').contains('카라멜마끼아또')
      });
    });
  });

  describe("메뉴 삭제 event", () => {
    it("confirm 창에 확인 버튼을 누르면 메뉴가 삭제된다.", () => {

      cy.window().then(function (confirm) {
        cy.get("#espresso-menu-name").type("아이스 아메리카노");
        cy.get("#espresso-menu-submit-button").click();
        cy.get(".menu-remove-button").click();
        cy.stub(confirm, "confirm").returns(true);
        cy.get('.menu-list-item').should('not.exist')
      });
    });

    it("confirm 창에 취소 버튼을 누르면 메뉴가 남아있다.", () => {
      cy.get("#espresso-menu-name").type("아이스 아메리카노");
      cy.get("#espresso-menu-submit-button").click();
      cy.get(".menu-remove-button").click();
      cy.on('window:confirm', () => false);
      cy.get(".menu-name").should("contain.text", "아이스 아메리카노");
    });
  });

  describe("메뉴 개수 count", () => {
    it("총 메뉴 갯수를 확인한다.", () => {
      const menus = ['아인슈페너', '샤케라또', '연유라떼']
      for (const menu of menus) {
        cy.get("#espresso-menu-name").type(menu);
        cy.get("#espresso-menu-submit-button").click();
      }
      cy.get('#espresso-menu-list').find('li').should('have.length', 3)
    });

    it("총 메뉴 갯수를 count하여 상단에 보여준다.", () => {
      const menus = ['토피넛라떼', '룽고', '리스뜨레또']
      for (const menu of menus) {
        cy.get("#espresso-menu-name").type(menu);
        cy.get("#espresso-menu-submit-button").click();
      }
      cy.get('.menu-count').should("contain.text", "총 3개")
    });
  });
});

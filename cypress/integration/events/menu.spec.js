describe("menu ui test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  /**
   * input id : espresso-menu-name
   * 확인 버튼 id : espresso-menu-submit-button
   *  ul id : espresso-menu-list
   * li class : menu-list-item
   * menu name (span class) : menu-name
   */

  describe("메뉴 추가 event", () => {
    it("확인 버튼으로 메뉴를 추가한다.", () => {});

    it("엔터키 입력으로 메뉴를 추가한다.", () => {});

    it("확인 버튼을 누르면 input 값은 빈 값으로 초기화한다.", () => {});

    it("사용자 입력값이 빈 값이라면 추가되지 않는다.", () => {});
  });

  describe("메뉴 수정 event", () => {
    it("수정 버튼을 누르면 prompt 창이 뜬다.", () => {});

    it("prompt 창에 값을 입력하고 확인을 누르면 메뉴가 수정된다.", () => {});
  });

  describe("메뉴 삭제 event", () => {
    it("삭제 버튼을 누르면 confirm 창이 뜬다.", () => {});

    it("confirm 창에 확인 버튼을 누르면 메뉴가 삭제된다.", () => {});

    it("confirm 창에 취소 버튼을 누르면 메뉴가 남아있다.", () => {});
  });

  describe("메뉴 개수 count", () => {
    it("총 메뉴 갯수를 count하여 상단에 보여준다.", () => {});
  });
});

const $submitButton = document.querySelector("#espresso-menu-submit-button");
const $menuListUl = document.querySelector("#espresso-menu-list");
const $menuNameInput = document.querySelector("#espresso-menu-name");
const $menuCount = document.querySelector(".menu-count");

const createEditButton = () => {
  // Edit Button 생성
  const newEditButton = document.createElement("button");
  newEditButton.className = "bg-gray-50 text-gray-500 text-sm menu-edit-button";
  newEditButton.innerText = "수정";

  return newEditButton;
};

const createRemoveButton = () => {
  // remove button 생성
  const newRemoveButton = document.createElement("button");
  newRemoveButton.className =
    "bg-gray-50 text-gray-500 text-sm menu-remove-button";
  newRemoveButton.innerText = "삭제";

  return newRemoveButton;
};

const createNewMenu = () => {
  if ($menuNameInput.value == "") {
    return;
  }

  // Element 생성
  const newLi = document.createElement("li");
  newLi.className = "menu-list-item d-flex items-center py-2";

  const newSpan = document.createElement("span");
  newSpan.className = "w-100 pl-2 menu-name";

  // Edit Button 이벤트 추가
  const editButton = createEditButton();
  const getEditString = () => window.prompt("바꿀 메뉴 이름을 입력해주세요!");
  const editList = () => (newSpan.innerHTML = getEditString());
  editButton.addEventListener("click", editList);

  // Remove Button 이벤트 추가
  const removeButton = createRemoveButton();
  const removeList = () => {
    window.confirm("해당 메뉴를 삭제하시겠습니까?")
      ? $menuListUl.removeChild(newLi)
      : "";

    // 갯수 변경
    $menuCount.innerHTML = `총 ${document.getElementsByTagName("li").length}개`;
  };
  removeButton.addEventListener("click", removeList);

  // List Setting
  newSpan.innerHTML = $menuNameInput.value;
  newLi.appendChild(newSpan);
  newLi.appendChild(editButton);
  newLi.appendChild(removeButton);
  $menuListUl.appendChild(newLi);

  // value 초기화
  $menuNameInput.value = "";

  // 갯수 출력
  $menuCount.innerHTML = `총 ${document.getElementsByTagName("li").length}개`;
};

$submitButton.addEventListener("click", createNewMenu);
$menuNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") createNewMenu(), event.preventDefault();
});

const $submitButton = document.querySelector("#espresso-menu-submit-button");
const $menuListUl = document.querySelector("#espresso-menu-list");
const $menuNameInput = document.querySelector("#espresso-menu-name");
const $menuCount = document.querySelector(".menu-count");
let listCount = 0;

const createNewMenu = () => {
  if ($menuNameInput.value == "") {
    return;
  }

  // Element 생성
  const newLi = document.createElement("li");
  newLi.className = "menu-list-item d-flex items-center py-2";

  const newSpan = document.createElement("span");
  newSpan.className = "w-100 pl-2 menu-name";

  // Edit Button 생성
  const newEditButton = document.createElement("button");
  newEditButton.className = "bg-gray-50 text-gray-500 text-sm menu-edit-button";
  newEditButton.innerText = "수정";

  const getEditString = () => window.prompt("바꿀 메뉴 이름을 입력해주세요!");
  const editList = () => (newSpan.innerHTML = getEditString());

  newEditButton.addEventListener("click", editList);

  // remove button 생성
  const newRemoveButton = document.createElement("button");
  newRemoveButton.className =
    "bg-gray-50 text-gray-500 text-sm menu-remove-button";
  newRemoveButton.innerText = "삭제";

  const removeList = () => {
    window.confirm("해당 메뉴를 삭제하시겠습니까?")
      ? $menuListUl.removeChild(newLi)
      : "";

    listCount--;
    $menuCount.innerHTML = `총 ${listCount}개`;
  };

  newRemoveButton.addEventListener("click", removeList);

  // List Setting
  newSpan.innerHTML = $menuNameInput.value;
  newLi.appendChild(newSpan);
  newLi.appendChild(newEditButton);
  newLi.appendChild(newRemoveButton);
  $menuListUl.appendChild(newLi);

  listCount++;
  $menuCount.innerHTML = `총 ${listCount}개`;

  // value 초기화
  $menuNameInput.value = "";
};

$submitButton.addEventListener("click", createNewMenu);
$menuNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") createNewMenu(), event.preventDefault();
});

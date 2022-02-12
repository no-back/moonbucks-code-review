/**
 * input id : espresso-menu-name
 * 확인 버튼 id : espresso-menu-submit-button
 *  ul id : espresso-menu-list
 * li class : menu-list-item
 * menu name (span class) : menu-name
 */
const menuForm = document.getElementById("espresso-menu-form");
const menuNameInput = document.getElementById("espresso-menu-name");
const menuSubmitButton = document.getElementById("espresso-menu-submit-button");
const menuList = document.getElementById("espresso-menu-list");
const menuListItem = document.querySelectorAll(".menu-list-item");
const menuName = document.querySelector(".menu-name");

const handleModifiyButtonEvent = (event) => {
  if (event.target && event.target.textContent === "수정") {
    const targetMenuName = prompt("수정 할 메뉴 이름을 입력해주세요 :)");
    const name = event.path[1].querySelector(".menu-name");
    name.textContent = targetMenuName;
  }
}

const handleDeleteButtonEvent = (event) => {
  if (event.target && event.target.textContent === "삭제") {
    const shouldDelete = confirm("메뉴를 삭제하시겠습니까?");
    console.log(event);
    shouldDelete && event.path[1].remove();
  }
}

const handlePreventSubmit = (event) => {
  event.preventDefault();
  return false;
};

const handleCreateMenuUsingEnter = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    menuSubmitButton.click();
  }
};

const handleCreateMenuUsingClick = (event) => {
  if (!menuNameInput.value) {
    return false;
  }
  const menuListItemClasses = [
    "menu-list-item",
    "d-flex",
    "items-center",
    "py-2",
  ];
  const menuNameClasses = ["w-100", "pl-2", "menu-name"];
  const menuEditButtonClasses = [
    "bg-gray-50",
    "text-gray-500",
    "text-sm",
    "mr-1",
    "menu-edit-button",
  ];
  const menuRemoveButtonClasses = [
    "bg-gray-50",
    "text-gray-500",
    "text-sm",
    "menu-remove-button",
  ];
  const { value } = menuNameInput;

  const li = createElement("li", menuListItemClasses);
  const span = createElement("span", menuNameClasses);
  span.textContent = value;
  const EditButton = createElement("button", menuEditButtonClasses);
  EditButton.textContent = "수정";
  const RemoveButton = createElement("button", menuRemoveButtonClasses);
  RemoveButton.textContent = "삭제";
  li.append(span, EditButton, RemoveButton);
  menuList.appendChild(li);

  menuNameInput.value = "";
};

const createElement = (tagName, classArray) => {
  const tag = document.createElement(tagName);
  tag.classList.add(...classArray);
  return tag;
};

menuForm.addEventListener("submit", handlePreventSubmit);
menuNameInput.addEventListener("keyup", handleCreateMenuUsingEnter);
menuSubmitButton.addEventListener("click", handleCreateMenuUsingClick);
menuList.addEventListener("click", (event) => {
  handleModifiyButtonEvent(event)
  handleDeleteButtonEvent(event)
});

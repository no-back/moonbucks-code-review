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

// const createMenuComponent = (name) => {
// };

const createElement = (tagName, classArray) => {
  const tag = document.createElement(tagName);
  tag.classList.add(...classArray);
  return tag;
};

menuForm.addEventListener("submit", handlePreventSubmit);
menuNameInput.addEventListener("keyup", handleCreateMenuUsingEnter);
menuSubmitButton.addEventListener("click", handleCreateMenuUsingClick);

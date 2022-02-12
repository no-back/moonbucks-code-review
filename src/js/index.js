const menuForm = document.getElementById("espresso-menu-form");
const menuNameInput = document.getElementById("espresso-menu-name");
const menuSubmitButton = document.getElementById("espresso-menu-submit-button");
const menuList = document.getElementById("espresso-menu-list");
const menuListItem = document.querySelectorAll(".menu-list-item");
const menuName = document.querySelector(".menu-name");
const menuCount = document.querySelector(".menu-count");


const handlePreventSubmit = (event) => {
  event.preventDefault();
  return false;
};

menuForm.addEventListener("submit", handlePreventSubmit);


const handleCreateMenuUsingEnter = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    menuSubmitButton.click();
  }
};

menuNameInput.addEventListener("keyup", handleCreateMenuUsingEnter);

const createElement = (tagName, classArray) => {
  const tag = document.createElement(tagName);
  tag.classList.add(...classArray);
  return tag;
};

const handleModifiyCountList = () => {
  const count = menuList.querySelectorAll('li').length
  menuCount.textContent = `총 ${count}개`
}

const createMenuList = () => {
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
  const editButton = createElement("button", menuEditButtonClasses);
  editButton.textContent = "수정";
  const removeButton = createElement("button", menuRemoveButtonClasses);
  removeButton.textContent = "삭제";
  li.append(span, editButton, removeButton);
  menuList.appendChild(li);
}

const handleCreateMenuUsingClick = (event) => {
  if (!menuNameInput.value.trim()) {
    return false;
  }

  createMenuList()

  menuNameInput.value = "";
  handleModifiyCountList();
};



menuSubmitButton.addEventListener("click", handleCreateMenuUsingClick);

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
    shouldDelete && event.path[1].remove();
    handleModifiyCountList()
  }
}

menuList.addEventListener("click", (event) => {
  handleModifiyButtonEvent(event)
  handleDeleteButtonEvent(event)
});

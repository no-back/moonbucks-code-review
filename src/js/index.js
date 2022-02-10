const $ = (selector) => {
  return document.querySelector(selector);
};

function App() {
  // init Variables
  const form = $("#espresso-menu-form");
  const list = $("#espresso-menu-list");
  const input = $("#espresso-menu-name");
  const btn = $("#espresso-menu-submit-button");
  const counter = $(".menu-count");

  // Event Handlers
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value !== "") addMenuItem();
  });

  btn.addEventListener("click", () => {
    if (input.value === "") alert("값을 입력해주세요.");
    else if (input.value !== "") addMenuItem();
  });

  // Functions
  function addMenuItem() {
    const menuItemTemplate = `<li class="menu-list-item d-flex items-center py-2">
            <span class="w-100 pl-2 menu-name">${input.value}</span>
            <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
            >
            수정
            </button>
            <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
            >
            삭제
            </button>
        </li>`;

    list.innerHTML += menuItemTemplate;
    input.value = "";

    updateMenuCount();
    input.focus(); // auto focusing
  }

  function updateMenuCount() {
    const menuCount = list.querySelectorAll("li").length;
    counter.innerText = `총 ${menuCount} 개`;
  }
}

App();

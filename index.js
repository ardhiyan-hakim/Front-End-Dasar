import data from "./scripts/data.js";

window.addEventListener("load", () => {
  renderElement();
  scrollToTop();
  getYValue().then((result) => {
    const navBtnList = document.querySelectorAll(".navigation-button");

    navBtnList.forEach((navElement) => {
      let height;
      result.forEach((resultItem) => {
        if (navElement.classList.contains(resultItem.id)) {
          height = resultItem.position;
        }
      });

      navElement.addEventListener("click", () => {
        scrollTo(0, height - 50);
      });
    });
  });
});

window.addEventListener('resize', () => {
  location.reload();
})

function scrollToTop() {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
}

function getYValue() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(checkHeightElement());
    }, 1000);
  });
}

const modals = document.querySelector(".modals");
const header = document.querySelector("header");
const main = document.querySelector("main");
const menuScreen = document.querySelector(".menu_screen-container");

const signInBtn = document.querySelector(".sign_in-button");
signInBtn.addEventListener("click", () => {
  modals.classList.add("show");
  header.classList.add("blur");
  main.classList.add("blur");
  menuScreen.classList.add("blur");
});

const exitModalsBtn = document.querySelector(".modals-header_exit i");
exitModalsBtn.addEventListener("click", () => {
  modals.classList.remove("show");
  header.classList.remove("blur");
  main.classList.remove("blur");
  menuScreen.classList.remove("blur");
});

const signInMenuBtn = document.querySelector('.navigation-button.sign-in');
signInMenuBtn.addEventListener('click', () => {
  modals.classList.add("show");
  header.classList.add("blur");
  main.classList.add("blur");
  menuScreen.classList.add("blur");
})

const navList = document.querySelectorAll(".navigation-item");

navList.forEach((nav, index) => {
  nav.addEventListener("click", () => {
    iterateNav(navList);
    navList[index].classList.add("active");
  });
});

function iterateNav(list) {
  list.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
}

const menuBtn = document.querySelector(".menu-button");
menuBtn.addEventListener("click", () => {
  const menuCtn = document.querySelector(".menu_screen-container");
  menuBtn.classList.toggle("show");
  menuCtn.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  const menuCtn = document.querySelector(".menu_screen-container");
  menuBtn.classList.remove("show");
  menuCtn.classList.remove("show");
});

function checkHeightElement() {
  const patienceEl = document.querySelector("#patience");
  const trustEl = document.querySelector("#trust");
  const consistEl = document.querySelector("#consistency");

  const arrayEl = [patienceEl, trustEl, consistEl];
  const arrayObjEl = [];

  arrayEl.forEach((element) => {
    const position = element.getBoundingClientRect();
    const object = {};

    object.name = element;
    object.position = position.top;
    object.id = element.id;
    arrayObjEl.push(object);
  });
  return arrayObjEl;
}

function renderElement() {
  const dataElement = data;
  const contentCard = document.querySelector(".content-card");
  
  dataElement.forEach((data) => {
    const article = document.createElement('article');
    const h2 = document.createElement("h2");
    h2.setAttribute("id", data.id);
    h2.innerText = data.headingContent;
    article.append(h2);
    
    data.textContent.paragraph.forEach((paragraph) => {
      const p = document.createElement("p");
      p.innerText = paragraph;
      article.append(p);
    });
    
    contentCard.append(article);
  });

}

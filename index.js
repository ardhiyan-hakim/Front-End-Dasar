import data from "./scripts/data.js"

window.addEventListener("load", () => {
  renderElement();
});

const patienceBtn = document.querySelector("#patience-button");
patienceBtn.addEventListener("click", () => {
  scrollTo(0, 215);
});

const trustBtn = document.querySelector("#trust-button");
trustBtn.addEventListener("click", () => {
  scrollTo(0, 460);
});

const consistencyBtn = document.querySelector("#consistency-button");
consistencyBtn.addEventListener("click", () => {
  scrollTo(0, 830);
});

const menuBtn = document.querySelector('.menu-button');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('show');
})

function renderElement() {
  const dataElement = data;
  const contentCard = document.querySelector('.content-card');

  dataElement.forEach((data) => {
    const h2 = document.createElement('h2');
    h2.setAttribute('id', data.id);
    h2.innerText = data.headingContent;
    contentCard.append(h2)

    data.textContent.paragraph.forEach((paragraph) => {
      const p = document.createElement('p');
      p.innerText = paragraph;
      contentCard.append(p)
    })
  })
}
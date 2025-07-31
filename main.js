const itemsList = [
  {
    name: "Tsolikauri",
    tags: ["vine"],
    type: "White dry",
    alcPercent: "13.5",
    description:
      "This wine is made by the traditional method from well-distinguished 100% Tsolikauri grape varieties, hand harvested in Obcha, in the Imereti region. Our wine has been fermented and remained in Quevri for 5 months. After the wine has been remained on yeast sedment (batonage in French) in oak barrels for 12 months. Underlined by intense ouches of citruses and flowers aroma. ",
    id: "0",
  },
  {
    name: "Saperavi Kvevri",
    tags: ["kvevry-vine"],
    type: "Red dry",
    alcPercent: "12.5",
    description:
      "This wine is crafted from the noble Saperavi grape, fermented and aged in traditional qvevri—large clay vessels buried underground, following an 8,000-year-old Georgian winemaking tradition.\n Deep ruby in color, it offers intense aromas of blackberries, wild cherry, and dried plums, with earthy and spicy undertones. Full-bodied and naturally structured, this wine reflects the authenticity and soul of Georgia.",
    id: "1",
  },
  {
    name: "Pirosmani",
    tags: ["vine"],
    type: "Red Semi-dry",
    alcPercent: "11.5",
    description:
      "Semi-dry red table wine is made from Saperavi grape cultivated in Kakheti. It is characterized with red color, unique taste and aroma. Drink with fruits, sweets, nuts and other desserts. ",
    id: "2",
  },
  {
    name: "Kindzmarauli",
    tags: ["vine"],
    type: "Red Semi-sweet",
    alcPercent: "12.5",
    description:
      "This wine is crafted from the noble Saperavi grape, fermented and aged in traditional qvevri—large clay vessels buried underground, following an 8,000-year-old Georgian winemaking tradition.\n Deep ruby in color, it offers intense aromas of blackberries, wild cherry, and dried plums, with earthy and spicy undertones. Full-bodied and naturally structured, this wine reflects the authenticity and soul of Georgia.",
    id: "3",
  },
  {
    name: "Rkatsiteli",
    tags: ["vine"],
    type: "White dry",
    alcPercent: "11.5",
    description:
      "A high quality wine, the pride of georgian wine-makers. The wine is made from the rkatsiteli grape varieties cultivated in telavi and kvareli for three years it matures in oak barrels. The wine has a fine fruity bouquet. A mild and delicate taste.",
    id: "4",
  },
  {
    name: "Saperavi",
    tags: ["vine"],
    type: "Red dry",
    alcPercent: "11.5 ",
    description:
      "This wine is crafted from the noble Saperavi grape, fermented and aged in traditional qvevri—large clay vessels buried underground, following an 8,000-year-old Georgian winemaking tradition.\n Deep ruby in color, it offers intense aromas of blackberries, wild cherry, and dried plums, with earthy and spicy undertones. Full-bodied and naturally structured, this wine reflects the authenticity and soul of Georgia.",
    id: "5",
  },
  {
    name: "tsinandali",
    tags: ["vine"],
    type: "White dry",
    alcPercent: "11.5",
    description:
      'Appellation controlled white dry wine "Tsinandali" is made from Rkatsiteli And Mtsvane grape varieties grown in the Tsinandali specific viticulture district of Kakheti. The wine has a pale-straw color, a fine bouquet and a mild exquisite taste.',
    id: "6",
  },
  {
    name: "Mukuzani",
    tags: ["vine"],
    type: "Red dry",
    alcPercent: "12.5",
    description:
      'Appellation controlled red dry wine "Mukuzani" is made from the Saperavi grape variety  grown in Mukuzani specific viticulture district of Kakheti. This outstanding wine is aged in oak barrels for twelve months. It has a dark-ruby color and is characterized by gentle bouquet and a smooth aroma.',
    id: "7",
  },
  {
    name: "Akhasheni",
    tags: ["vine"],
    type: "Red Semi-sweet",
    alcPercent: "12.5",
    description:
      'Appellation controlled red semi-sweet wine "Akhasheni" is made of selected Saperavi grape cultivated in Kakheti, in specific zone of Akhasheni viticulture. It is characterized with dark red color, strong bouquet, balanced taste and velvet chocolate tones.',
    id: "8",
  },
  {
    name: "Kisi Kvevri",
    tags: ["kvevry-vine"],
    type: "Amber dry",
    alcPercent: "13",
    description:
      "Kisi is an Orange, Dry wine made with oldest Georgian grape variety Kisi grown in the Tsinandali micro-viticulture area of the Kakheti region of Georgia. The wine has straw color, with yellow tones. Aroma is well balanced, pleasant and harmonious. The bouquet of this elegant wine offers pineapple, grapefruit peel and flesh of yellow melon. The fresh fruit flavors persist through to a crisp, lingering finish.",
    id: "9",
  },
  {
    name: "Brandy",
    tags: ["brandy"],
    type: "Aged 3 years",
    alcPercent: "40",
    description:
      "Crafted from only the finest Georgian grapes, XO is Asterly aged in oak barrels resulting its dark, elegant character. Characterized with vanilla, and oak. It finishes With velvet aroma",
    id: "10",
  },
  {
    name: "aladasturi qvevri",
    tags: ["kvevry-vine"],
    type: "Red dry",
    alcPercent: "12.5",
    description:
      "Red Dry Qvevri wine made from 100% Aladasturi sort of grape. Aladasturi Qvevri is a vibrant red wine with aromas of fresh red berries and a hint of floral notes. Its light to medium body offers a smooth, balanced profile with delicate tannins and a refreshing acidity. The finish is clean and crisp, making it an excellent choice for light dishes or enjoyed on its own.",
    id: "11",
  },
  {
    name: "Alazani Valley",
    tags: ["vine"],
    type: "Red Semi-sweet",
    alcPercent: "12.5",
    description:
      "This wine is made by the traditional method from well-distinguished 100% Tsolikauri grape varieties, hand harvested in Obcha, in the Imereti region. Our wine has been fermented and remained in Quevri for 5 months. After the wine has been remained on yeast sedment (batonage in French) in oak barrels for 12 months. Underlined by intense ouches of citruses and flowers aroma. ",
    id: "12",
  },
  {
    name: "Alazani Valley",
    tags: ["vine"],
    type: "White Semi-sweet",
    alcPercent: "12.5",
    description:
      "White semi-sweet table wine Alazani Valley made from Rkatsiteli grape cultivated in Kakheti. It is characterized with light straw-color, variety aroma, soft and cheerful balanced taste.",
    id: "13",
  },
  {
    name: "Khvanchkara Kvevri",
    tags: ["kvevry-vine"],
    type: "Red Semi-sweet",
    alcPercent: "11.5",
    description:
      'Appellation controlled red semi-sweet wine "Khvanchkara" is made from the Mujuretuli and Alexandrouli grape varieties grown in the khvanchkara specific viticulture district of Racha. It has a dark-ruby color, a well-developed varietal aroma and a velvety taste with raspberry flavor.',
    id: "14",
  },
];

const filter = [
  { name: "All", tag: "all" },
  { name: "vine", tag: "vine" },
  { name: "kvevri vine", tag: "kvevry-vine" },
  { name: "brandy", tag: "brandy" },
];

let activeFilter = "all";
let currentPage = 1;
const itemsPerPage = 6;

document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  filterItems();
  handleClicks();
});

function initFilters() {
  const filtersContainer = document.querySelector("#filters");

  filtersContainer.innerHTML = filter
    .map((item) => {
      return `<button class="filter-button${
        activeFilter === item.tag ? " active" : ""
      }" data-tag="${item.tag}"><p>${item.name}</p></button>`;
    })
    .join("");

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.getAttribute("data-tag");
      currentPage = 1;
      document
        .querySelectorAll(".filter-button")
        .forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      filterItems();
    });
  });
}

function filterItems() {
  renderItems();
}

function renderItems() {
  const list = document.querySelector("#products-list");
  const filtered = itemsList.filter(
    (item) => activeFilter === "all" || item.tags.includes(activeFilter)
  );

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = filtered.slice(start, end);

  const html = paginatedItems
    .map((item) => {
      return `
        <div class="product-item">
          <img src="img/itemsimages/${item.id}.webp" alt="${item.name}" />
          <div class="details-container-1">
              <h3>${item.name}</h3>
              <span class="tags">
                  <p>${item.type}</p>
                  <p>Alcohol: ${item.alcPercent}%</p>
              </span>
          </div>
          <div class="details-container-background">
          </div>
          <div class="details-container-2">
              <h3>${item.name}</h3>
              <span class="tags">
                  <p>${item.type}</p>
                  <p>Alcohol: ${item.alcPercent}%</p>
              </span>
              <p class="description">${item.description}</p>
          </div>
        </div>
      `;
    })
    .join("");

  list.innerHTML = html;
  renderPagination(filtered.length);
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function handleClicks() {
  const scrollButtons = document.querySelectorAll(".scroll-to");

  scrollButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = button.getAttribute("data-target");
      scrollToSection(targetId);
    });
  });

  const burgerMenu = document.querySelector(".burger-menu");
  const sidebar = document.querySelector("#sidebar");

  burgerMenu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
  sidebar.addEventListener("click", (event) => {
    if (event.target === sidebar) {
      sidebar.classList.remove("active");
    }
  });

  document.querySelectorAll("sidebar .scroll-to").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = button.getAttribute("data-target");
      scrollToSection(targetId);
      sidebar.classList.remove("active");
    });
  });

  document.querySelector(".close").addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}

function renderPagination(totalItems) {
  const pagination = document.querySelector("#pagination");
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }

  let html = '<ul class="pagination-list">';

  html += `<li><button class="page-button${
    currentPage === 1 ? " disabled" : ""
  }" data-page="${currentPage === 1 ? 1 : currentPage - 1}"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
      <path d="M5 1L1 5L5 9" stroke="#B4B1AE" stroke-linecap="round"/>
    </svg> 
  </button></li>`;

  for (let i = 1; i <= totalPages; i++) {
    html += `<li><button class="page-button${
      i === currentPage ? " active" : ""
    }" data-page="${i}">${i}</button></li>`;
  }

  html += `<li><button class="page-button${
    currentPage === totalPages ? " disabled" : ""
  }" data-page="${currentPage === totalPages ? totalPages : currentPage + 1}"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
      <path d="M1 1L5 5L1 9" stroke="#B4B1AE" stroke-linecap="round"/>
    </svg> 
  </button></li>`;

  html += "</ul>";
  pagination.innerHTML = html;

  document.querySelectorAll(".page-button").forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = parseInt(button.getAttribute("data-page"));
      renderItems();
    });
  });
}

console.log("is this thing on?")

const articles = [
  {
    headline: "J-Law in Flowy Culottes",
    articleImage: 'https://bit.ly/2WKKlbi',
    publishDate: '01/15/20',
    articleURL: 'https://bit.ly/2WqQZod',
  },
  {
    headline: "Mila Kunis in Wide-Leg Pants",
    articleImage: 'https://bit.ly/3dGj8gC',
    publishDate: '12/10/19',
    articleURL: 'https://bit.ly/2WT6m7F',
  },
  {
    headline: "Kate Middleton repping the 'lottes",
    articleImage: 'https://bit.ly/2YWXmBl',
    publishDate: '10/10/19',
    articleURL: 'https://bit.ly/2LpD3UY',
  },
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const articleCardBuilder = (arr) => {
  domString = '';

  for (let i = 0; i < arr.length; i++) {
      domString += `
    <div class="col-5 mx-auto">
    <div class="card mb-3">
      <div class="card-body p-2">
        <h5 class="card-title">${arr[i].headline}</h5>
        <p class="card-text">${arr[i].publishDate}</p>
        <img class="card-img-top" src="${arr[i].articleImage}" alt="">
      </div>
    </div>
    </div>
    `;
  }
  printToDom('#articleCards', domString)
}

const clickEvents = () => {

}

const init = () => {
  articleCardBuilder(articles);
  clickEvents();
}

init();

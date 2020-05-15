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
  if (selectedDiv === null) return;
  selectedDiv.innerHTML = textToPrint;
}

const articleCardBuilder = (arr) => {
  let domString = '';

  for (let i = 0; i < arr.length; i++) {
      domString += `
    <div class="col-5 mx-auto">
    <div class="card mt-3">
      <div class="card-body p-2">
        <h5 class="card-title">${arr[i].headline}</h5>
        <p class="card-text">${arr[i].publishDate}</p>
        <img class="card-img-top" src="${arr[i].articleImage}" alt="">
      </div>
    </div>
    </div>
    `;
  }
  printToDom('#articleCards', domString);
}


// History array and loop to com
const history = [
  {
    imgUrl: 'https://www.traditioninaction.org/Questions/Images/L_005_ancien.jpg',
    altImg: 'French Revolutionaries',
    class: 'revCulottes',
    heading: 'French Revolutionaries inbetween 1789-1799',
    info: 'French revolutionary fighters were called sans-culottes due to the garb they wore.'
  },
  {
    imgUrl: 'https://silhouettetrends.files.wordpress.com/2014/04/0a3ce42990e2072e454ee245e38f121e.jpg',
    altImg: 'woman riding a bike in culottes',
    class: 'bikes',
    heading: 'Woman wearing culottes in 1930s.',
    info: 'Culottes made a come back in womens fashion in the 1930s as it allowed them do more physical things without worry of their skirt lifting.' 
  },
  {
    imgUrl: 'https://i.ebayimg.com/images/g/yBEAAOSwqz9Zwh8Q/s-l1600.jpg',
    altImg: 'japanese male in a hakama',
    class: 'hakama',
    heading: 'Japanese Hakama',
    info: 'The japanese had their own form of culottes that were used to aid in horseback riding and hide their feet from opponents.' 
  }
]

const historyCard = (hist) => {
  let cardString = '';

  for (let i = 0; i < hist.length; i++ ) {
    cardString += `
    <div class="col-3 col-md">
    <div class="card ${hist[i].class} historyCards" style="width: 50%;">
      <img class="card-img-top historyImg" src="${hist[i].imgUrl}" alt="${hist[i].altImg}">
      <div class="card-body">
        <h6 class="card-title">${hist[i].heading}</h6>
      <p class="card-text">${hist[i].info}</p>
      </div>
    </div>
    </div>
    `;
  }
  printToDom('#historical', cardString);
}


const clickEvents = () => {

}

const init = () => {
  articleCardBuilder(articles);
  historyCard(history);
  clickEvents();
}

init();

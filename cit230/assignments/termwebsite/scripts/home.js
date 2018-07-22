(function () {
    var section = document.querySelector('#cities');
    var requestURL = 'js/home.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.onload = function () {
        var towns = request.response;
        information(towns);
    }
    request.send();

    function information(jsonObj) {
        var towns = jsonObj['towns'];

        for (var i = 0; i < towns.length; i++) {
            if (towns[i].name === 'Placerton') continue;
            var myArticle = document.createElement('article');
            myArticle.className = "articles";
            var myDiv1 = document.createElement('div');
            var myDiv2 = document.createElement('div');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myDiv2 = document.createElement('div');
            myDiv2.className = "ImgDiv";
            var myImage = document.createElement('img');
            myImage.setAttribute('width', '100%');
            if (towns[i].name == "Sales") {
                myImage.setAttribute('alt', 'salespic');
                myImage.setAttribute('src', 'images/bike1.jpg');
            } else if (towns[i].name == "Event") {
                myImage.setAttribute('alt', 'eventpic');
                myImage.setAttribute('src', 'images/event-1.jpg');
            } else if (towns[i].name == "Tours") {
                myImage.setAttribute('alt', 'tourpic');
                myImage.setAttribute('src', 'images/tour1.jpg');
            }
            else if (towns[i].name == "Contact") {
                myImage.setAttribute('alt', 'logopic');
                myImage.setAttribute('src', 'images/bike-logo-06.png');
            }

            myH2.textContent = towns[i].name;
            myPara1.textContent = towns[i].motto;
            myPara2.textContent = towns[i].yearFounded;
            myPara3.textContent = towns[i].currentPopulation;
            myPara4.textContent = towns[i].averageRainfall;

            myDiv1.appendChild(myH2);
            myDiv1.appendChild(myPara1);
            myDiv1.appendChild(myPara2);
            myDiv1.appendChild(myPara3);
            myDiv1.appendChild(myPara4);
            myDiv2.appendChild(myImage)
            myArticle.appendChild(myDiv1);
            myArticle.appendChild(myDiv2);

            section.appendChild(myArticle);
        }
    }
})();
(function () {
    var section = document.querySelector('#cities');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
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
            if (towns[i].name == "Springfield") {
                myImage.setAttribute('alt', 'springfield-city');
                myImage.setAttribute('src', 'images/springfield.jpg');
            } else if (towns[i].name == "Greenville") {
                myImage.setAttribute('alt', 'greenville-city');
                myImage.setAttribute('src', 'images/greenville.jpg');
            } else if (towns[i].name == "Franklin") {
                myImage.setAttribute('alt', 'franklin-city');
                myImage.setAttribute('src', 'images/frankline.jpg');
            }

            myH2.textContent = towns[i].name;
            myPara1.textContent = 'Moto: ' + towns[i].motto;
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Population: ' + towns[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

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
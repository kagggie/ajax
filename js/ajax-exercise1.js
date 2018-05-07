
function ajax(method, url) {
    let httpReq = new XMLHttpRequest();
    httpReq.open(method, url);
    
    httpReq.onreadystatechange = function () {
        if(httpReq.readyState == 4){
            if(httpReq.status == 200){
                let returnData = httpReq.responseText;
                httpReq.onsuccess(returnData);
                httpReq = null;
            }
        }
    }
    
    httpReq.onsuccess = function (response) {
            let jsonObj = JSON.parse(response);
            let paragraf = document.createElement('p');
            paragraf.innerText = 'userId: ' + jsonObj.userId + ', userName: ' + jsonObj.userName + ', userURL: ' + jsonObj.userURL;
            document.body.appendChild(paragraf);
    }
    
    httpReq.send();
}

function pobierzDane(){
    ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl');
}

document.querySelector('#btn').addEventListener('click', pobierzDane);

// tutaj nie mozemy podawac nawiasu po pobierz dane! blad skladniowy







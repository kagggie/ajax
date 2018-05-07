//cyfrowa reprezentacja kodu to document, scroll wykonujemy na window
//scrollTop sprawdza ilosc zescrolowanych pixeli od gory okna
//window.innerHeight - wysokosc okna, 
//offsetHeight - wysokosc dokumentu
//jezeli scrolltop + window.innerHeight = offsetHeight wykonaj funkcje ajax


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
    
    httpReq.onsuccess = function(response) {
        let jsonObj = JSON.parse(response);
        for(let i = 0; i < jsonObj.length; i++){
            console.log(jsonObj[i]);
            let paragraf = document.createElement('p');
            paragraf.innerHTML = 'User Id: ' + jsonObj[i].id + ',<br> User Name: ' + jsonObj[i].name + ',<br> User Website: ' + jsonObj[i].website;
            document.body.appendChild(paragraf);
        }

    }
    
    httpReq.send();
}

window.addEventListener('scroll', function(){
    let scrollHeight = Math.ceil(document.documentElement.scrollTop);
//  console.log(scrollDocument);
    let windowHeight = this.innerHeight;
//  console.log(windowHeight);
    let documentHeight = Math.ceil(document.documentElement.offsetHeight);
//  console.log(documentHeight);
    if (scrollHeight + windowHeight === documentHeight){
        ajax('GET', 'https://jsonplaceholder.typicode.com/users');
    }
});

//musze wcisnac blyskawice zeby dzialalo

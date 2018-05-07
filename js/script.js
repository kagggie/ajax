//definicja funkcji ajax - dwuparametrowa funkcja

function ajax(method, url) {
    //tworzymy instancje obiektu xmlhttp request- bez tego nie ma ajax
    let httpReq = new XMLHttpRequest();
    
//    otwieramy polaczenie z serwerem, bez tego sie nie polaczymy
    httpReq.open(method, url);
    
//    jesli statu polaczenia zostal zmieniony --> httpReq.readyState
//    0 polaczenie nie nawiazane
//    1 nawiazane
//    2 zadanie odebrane
//    3 przetwarzanie
//    4 dane zwrocone i gotowe do uzycia
    
//    za kazdym razem kiedy zmienia sie status danych wykonuje sie
    httpReq.onreadystatechange = function () {
//        jezeli 4 : dane zwrocone i gotowe do uzycia
        if(httpReq.readyState == 4){
//            sprawdzamy kod statusu polaczenia - 200OK
            if(httpReq.status == 200){
//                nowa zmienna ktora bedzie przetrzymywac zwrocone dane
                let returnData = httpReq.responseText;
//                jeszcze tych danych w tym momencie nie zobaczymy
//                dodajemy metode do obiektu
                httpReq.onsuccess(returnData);
//                zeby nie tryzmac juz polaczneia z serwerem nulla robimy
                httpReq = null;
            }
        }
    }
    
//    zaraz przed zamknieciem ajaxu definiujemy funkcje w obiekcie
//    responso to to samo co return data, tutaj dzialamy na danych, wyzej jest zagwarantowane otrzymanie danych
    httpReq.onsuccess = function (response) {
//        tworzymy zmienna ktora przetworzy text do formatu json
        let jsonObj = JSON.parse(response);
        console.log(jsonObj.userId);
        
        //js powtorka - pseudokod
        //tworze nowy element 
        //ustawiam atrybut klasy dla nowego elementu
        //ustawiamy tekst html w nowym elemencie (inner tekst)
        //wstawiam element do htmla 

        
        let paragraf = document.createElement('p');
        paragraf.setAttribute('class', 'nowa');
        paragraf.innerText = jsonObj.userId;
        document.body.appendChild(paragraf);
    }
//    wysylamy zadania do serwera
    httpReq.send();
}

//wywolanie funckji

ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl');


//na rozmowie - jesli poprosza o ajax to lepiej skorzystac z jquery, 





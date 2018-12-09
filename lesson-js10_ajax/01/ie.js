if (window.XMLHttpRequest) req = new XMLHttpRequest();      // normal browser
else if (window.ActiveXObject) {                            // IE
    try {
        req = new ActiveXObject('Msxml2.XMLHTTP');          // IE разных версий
    } catch (e){}                                           // может создавать
    try {                                                   // объект по разному
        req = new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e){}
}

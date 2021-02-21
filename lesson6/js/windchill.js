temperature=54
windspeed=12



function doInputOutput() {
    var t = parseFloat(document.getElementById('temperature').value);
    var s = parseFloat(document.getElementById('windchill').value);
    WC= windChill(t,s);

    document.getElementById('wc').innerHTML=WC;
}
function windChill(t,s){
    f=35.74+0.6215*t-35.75*s**0.16+0.4275*t*s**0.16;
    return f;
}




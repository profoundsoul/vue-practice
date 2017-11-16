
let  userAgent = window.navigator.userAgent;
let isIE11 = ()=>{
    return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
}

let isIE10 = ()=>{
    return window.navigator.msPointerEnabled;
}

let isOpera = userAgent.indexOf("Opera") > -1;
let isIE = ()=>{
    return  userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
}

if ((isIE11() || isIE10()) && window.history
) {
    delete history.pushState;
}

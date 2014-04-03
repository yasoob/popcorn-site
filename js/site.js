var userAgent = navigator.platform,
    fileHost = "http://cdn.popcorn-time.tv/";

var mac = /Mac/,
    win = /Win/,
    lin = /Lin/,
    lin64 = /x86_64/;

function setType(t) {
    document.getElementsByTagName('body')[0].className += ' ' + t;
}

if (mac.test(userAgent))
    setType('mac');
else if (win.test(userAgent))
    setType('win');
else if (lin.test(userAgent) && lin64.test(userAgent))
    setType('lin-64');
else if (lin.test(userAgent))
    setType('lin-32');
else 
    setType('nope');


var heroHeight = document.getElementById('header').offsetHeight;

// Disable WOW on small screens.
try {
    if (window.innerWidth > 768) {
        wow = new WOW({
            animateClass: 'animated',
            offset: 100
        });
        wow.init();
    };
} catch (err) {}
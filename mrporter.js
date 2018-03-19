javascript:

var Region = prompt("Please enter your region: ", "US | GB");

if (Region) {
    post('https://www.mrporter.com/changecountry.mrp', {
        language: 'en',
        selCountry: Region + ',am,gbp,true',
        confirmSelection: 'Confirm Selection'
    });
}

function post(a, b) {
    const c = (e, f) => Object.assign(document.createElement(e), f),
        d = c('form', {
            action: a,
            method: 'post',
            style: 'display: none'
        });
    for (const [e, f] of Object.entries(b)) d.appendChild(c('input', {
        name: e,
        value: f
    }));
    document.body.appendChild(d), d.submit()
}

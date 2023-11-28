const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close');


//Display Navbar with diffrent devices

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        console.log('reakb')
    })
}
// close Navbar

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// Product Guides Details 



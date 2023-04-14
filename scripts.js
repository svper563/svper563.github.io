document.addEventListener('DOMContentLoaded', function() {
    console.log('page loaded.')
});

const tab1 = document.getElementById('tab-1');
const tab2 = document.getElementById('tab-2');
const tab3 = document.getElementById('tab-3');
let tabArray = [tab1, tab2, tab3];
tab1.style.backgroundColor = 'white';

const window1 = document.getElementById('project-window-1');
const window2 = document.getElementById('project-window-2');
const window3 = document.getElementById('project-window-3');
let windowArray = [window1, window2, window3];

window1.style.display = 'block';



for (let tab of tabArray) {
    tab.addEventListener('click', function() {
        tab.style.backgroundColor = 'white';
        tab.setAttribute('selected', 'true');
        setWindowContent(tab);
        tabArray.forEach(element => {
            if (element !== tab) {
                element.style.backgroundColor = '#ccc';
                element.setAttribute('selected', 'false');
            }
        });
    })
};

const setWindowContent = (tab) => {
    let id = tab.getAttribute('id');
    if (id === 'tab-1') {
        window1.style.display = 'block';
        window2.style.display = 'none';
        window3.style.display = 'none';
    } else if (id === 'tab-2') {
        window1.style.display = 'none';
        window2.style.display = 'block';
        window3.style.display = 'none';
    } else if (id === 'tab-3') {
        window1.style.display = 'none';
        window2.style.display = 'none';
        window3.style.display = 'block';

}}


const { log } = console;

const showHoverItem = function(e) {
    const siblingArr = e.target.parentElement.children;
    let idx = 0;
    for(let i = 0; i < siblingArr.length; i++) {
        if(siblingArr[i] == e.target) {
            idx = i;
        }
    }
    const classArr = e.target.classList.value;
    let classQuery = '';
    if(classArr.length > 0) {
        '.' + classArr.split(' ').join('.');
    }
    // const text = e.target.textContent.replace(/[</>\s]/g,'');
    // const query = 'desk ' + text + classQuery;
    const target = document.querySelectorAll('desk desk-item *')[idx];
    target.classList.add('selected');
};
const hideHoverItem = function(e) {
    const siblingArr = e.target.parentElement.children;
    let idx = 0;
    for(let i = 0; i < siblingArr.length; i++) {
        if(siblingArr[i] == e.target) {
            idx = i;
        }
    }
    const classArr = e.target.classList.value;
    let classQuery = '';
    if(classArr.length > 0) {
        '.' + classArr.split(' ').join('.');
    }
    const target = document.querySelectorAll('desk desk-item *')[idx];
    target.classList.remove('selected');
};

const gameSetting = () => {
    const htmlDesk = document.querySelector('.html-desk-wrap');
    for(let i = 0; i < htmlDesk.children.length; i++) {
        htmlDesk.children[i].addEventListener('mouseover', showHoverItem);
        htmlDesk.children[i].addEventListener('mouseleave', hideHoverItem);
    }
}

window.onload = () => {
    log('?');
    gameSetting();
};


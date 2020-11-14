const { log } = console;

const addArrow = idx => {
    const target = document.querySelectorAll('.desk .desk-item *')[idx];
    const arrow = document.createElement('img');
    arrow.src = './images/tooltip-arrow.png';
    arrow.classList.add('item-tooltip');
    arrow.style.top = '-60px';
    arrow.style.left = '40px';
    target.parentNode.appendChild(arrow);
}

const removeArrow = () => {
    document.querySelectorAll('.item-tooltip').forEach(v => v.remove());
}

const addFocusClass = idx => {
    document.querySelectorAll('.html-desk-wrap > div')[idx].classList.add('focus');
}

const removeFocusClass = () => {
    document.querySelectorAll('.html-desk-wrap > div').forEach(v => v.classList.remove('focus'));
}

const getSiblingIdx = e => {
    const siblingArr = e.target.parentElement.children;
    let idx = 0;
    for(let i = 0; i < siblingArr.length; i++) {
        if(siblingArr[i] == e.target) {
            idx = i;
        }
    }
    return idx;
}

const addFocused = e => {
    const idx = getSiblingIdx(e);
    addFocusClass(idx);
    addArrow(idx);
};

const removeFocused = () => {
    removeFocusClass();
    removeArrow();
};

const checkInput = () => {
    const target = document.querySelectorAll('.desk .active');
    let check = true;
    if(target) {
        for(let i = 0; i < target.length; i++) {
            if(!target[i].classList.contains('selected')) {
                check = false;
                break;
            }
        }
    } else {
        check = false;
    }
    return check;
};

const levelClear = () => {
    let cleared = JSON.parse(localStorage.getItem('cleared'));
    if(!cleared) {
        cleared = {};
    }
    let now = +(localStorage.getItem('now'));
    cleared[now++] = true;
    const target = document.querySelector('#js-title');
    target.classList.add('cleared');
    localStorage.setItem('cleared', JSON.stringify(cleared));
    localStorage.setItem('now', now);
    log('?');
    gameSetting(now);
}

const submitFailed = () => {
    const target = document.querySelector('.q-answer');
    target.classList.add('failed');
    setTimeout(() => {
        target.classList.remove('failed');
    }, 1500);
}

const submitInput = () => {
    const value = '.desk ' + document.querySelector('#js-answer').value;
    try {
        const target = document.querySelectorAll(value);
        if(target) {
            for(let i = 0; i < target.length; i++) {
                target[i].classList.add('selected');
            }
        }
        const result = checkInput();
        if(result) {
            for(let i = 0; i < target.length; i++) {
                target[i].classList.remove('selected');
                target[i].classList.add('flying');
            }
            setTimeout(levelClear, 300);
        } else {
            for(let i = 0; i < target.length; i++) {
                target[i].classList.remove('selected');
            }
            submitFailed();
        }
    } catch {
        submitFailed();
    }
};

const buttonPress = () => {
    const target = document.querySelector('#js-submit');
    target.classList.add('press');
    submitInput();
    setTimeout(() => target.classList.remove('press'), 1000);
}

const handleInput = e => {
    if(e.key == 'Enter') {
        buttonPress();
    } else if(e.target.value) {
        e.target.classList.remove('empty');
    } else {
        e.target.classList.add('empty');
    }
};

const textSetting = level => {
    let lang = +localStorage.getItem('lang');
    if(!lang) {
        lang = 'ko';
        localStorage.setItem('lang', lang);
    }
    const {title, hint, description} = text[level]['lang'][lang];
    const titleTag = document.querySelector('#js-title');
    document.querySelector('#js-hint').innerHTML = hint;
    document.querySelector('#js-description').innerHTML = description;

    titleTag.innerHTML = `${level}. ${title}`;
    titleTag.classList.remove('cleared');
    const cleared = localStorage.getItem('cleared');
    if(cleared && JSON.parse(cleared)[level]) {
        titleTag.classList.add('cleared');
    }
}

const gameSetting = level => {
    textSetting(level);
    const desk = document.querySelectorAll('.desk > .desk-item');
    const htmlDesk = document.querySelectorAll('.html-desk-wrap > div');
    const input = document.querySelector('#js-answer');
    for(let i = 0; i < desk.length; i++) {
        // 수정 필요
        // desk[i].addEventListener('mouseover', addFocused);
        // desk[i].addEventListener('mouseleave', removeFocused);
    }
    for(let i = 0; i < htmlDesk.length; i++) {
        htmlDesk[i].addEventListener('mouseover', addFocused);
        htmlDesk[i].addEventListener('mouseleave', removeFocused);
    }
    input.addEventListener('keyup', handleInput);
};

window.onload = () => {
    const btn = document.querySelector('#js-submit');
    btn.addEventListener('click', buttonPress);
    let now = +localStorage.getItem('now');
    now = 1;
    if(!now) {
        localStorage.setItem('now', now);
    }
    gameSetting(now);
};


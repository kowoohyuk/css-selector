const { log } = console;

const addArrow = idx => {
    const target = document.querySelectorAll('.desk .desk-item *')[idx];
    const arrow = document.createElement('div');
    arrow.classList.add('item-tooltip');
    arrow.style.top = '-60px';
    arrow.style.left = `${target.parentNode.clientWidth / 2 - 12}px`;
    target.parentNode.appendChild(arrow);
}

const removeArrow = () => {
    document.querySelectorAll('.item-tooltip').forEach(v => v.remove());
}

const addFocusClass = idx => {
    document.querySelectorAll('#js-html-wrap > div')[idx].classList.add('focus');
}

const removeFocusClass = () => {
    document.querySelectorAll('#js-html-wrap > div').forEach(v => v.classList.remove('focus'));
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
            if(!target[i].classList.contains('selected') || target[i].classList.contains('active')) {
                check = false;
                break;
            }
        }
    } else {
        check = false;
    }
    return check;
};

const ending = () => {
    alert('준비한 모든 레벨을 클리어하셨습니다!');
}

const saveStorage = result => {
    let cleared = JSON.parse(localStorage.getItem('cleared'));
    if(!cleared) {
        cleared = {};
    }
    let now = +(localStorage.getItem('now'));
    if(!cleared[now]){
        cleared[now] = result;
    }
    localStorage.setItem('cleared', JSON.stringify(cleared));
}

const levelClear = () => {
    saveStorage(true);
    let now = +(localStorage.getItem('now'));
    if(text[now + 1]) {
        const list = document.querySelector('#js-level-list');
        list.children[now - 1].classList.add('cleared');
        now++;
        localStorage.setItem('now', now);
        const target = document.querySelector('#js-title');
        target.classList.add('cleared');
        gameSetting(now);
    } else {
        ending();
    }
}

const submitFailed = () => {
    saveStorage(false);
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

const toggleMenu = e => {
    e.preventDefault();
    const menuBox = document.querySelector('#js-menu-box');
    menuBox.classList.toggle('active');
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

const changeLevel = e => {
    const level = e.target.dataset.level;
    localStorage.setItem('now', level);
    gameSetting(level);
}

const textSetting = level => {
    let lang = localStorage.getItem('lang');
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

    const desk = text[level]['desk'];
    const htmlWrap = document.querySelector('#js-html-wrap');
    let htmlWrapText = '&lt;desk&gt;';
    desk.forEach(v => {
        let classText = '';
        if(v.length > 2) {
            classText += 'class="';
            for(let i = 2; i < v.length; i++) {
                classText += v[i] + ' ';
            }
            classText += '"';
        }
        htmlWrapText += `<div> &lt;${v[0]} ${classText}/&gt; </div>`;
    });
    htmlWrapText += '&lt;/desk&gt;';
    htmlWrap.innerHTML = htmlWrapText;
}

const deskSetting = level => {
    const desk = text[level]['desk'];
    const jsDesk = document.querySelector('#js-desk');
    let jsDeskText = '';
    desk.forEach(v => {
        let classText = '';
        if(v.length > 1) {
            classText += 'class="';
            for(let i = 1; i < v.length; i++) {
                classText += v[i] + ' ';
            }
            classText += '"';
        }
        jsDeskText += `<div class="desk-item"> <${v[0]} ${classText}></${v[0]}> </div>`;
    });
    jsDesk.innerHTML = jsDeskText;
}

const eventSetting = () => {
    const desk = document.querySelectorAll('.desk > .desk-item');
    const htmlDesk = document.querySelectorAll('#js-html-wrap > div');
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
}

const clearSetting = () => {
    const cleared = JSON.parse(localStorage.getItem('cleared'));
    if(Object.keys(cleared).length) {
        const list = document.querySelectorAll('#js-level-list > li');
        for(const level in cleared) {
            if(cleared[level]) {
                list[level - 1].classList.add('cleared');
            }
        }
    }
}

const listSetting = () => {
    const list = document.querySelector('#js-level-list');
    const cleared = JSON.parse(localStorage.getItem('cleared'));
    const lang = localStorage.getItem('lang');
    for(const level in text) {
        const li = document.createElement('li');
        li.textContent = `${level}. ${text[level]['lang'][lang]['title']}`;
        li.setAttribute('data-level', level);
        li.addEventListener('click', changeLevel);
        list.append(li);
    }
    if(cleared) {
        for(const clearLevel in cleared) {
            if(cleared[clearLevel]) {
                list.children[clearLevel - 1].classList.add('cleared');
            }
        }
    }
}

const gameSetting = level => {
    textSetting(level);
    deskSetting(level);
    eventSetting();
    clearSetting();
    document.querySelector('#js-answer').value = '';
};

const init = () => {
    const btn = document.querySelector('#js-submit');
    const menuBox = document.querySelector('#js-menu-box');
    btn.addEventListener('click', buttonPress);
    menuBox.addEventListener('click', toggleMenu);
    let now = +localStorage.getItem('now');
    if(!now) {
        now = 1;
        localStorage.setItem('now', now);
    }
    const lang = +localStorage.getItem('lang');
    if(!lang) {
        localStorage.setItem('lang', 'ko');
    }
    listSetting();
    gameSetting(now);
}

window.onload = () => {
    init();
};


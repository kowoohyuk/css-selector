const text = {
    '1': {
        'lang': {
            'ko': {
                'title': 'Element Selector - 1',
                'description': '<span class="target-tag">book</span>을 선택하세요.',
                'hint': '<span class="target-tag">div</span>는 모든 <span class="target-tag">div</span>태그를 선택합니다.<br><span class="target-tag">a</span>는 모든 <span class="target-tag">a</span>태그를 선택합니다.',
            }
        },
        'desk': [
            ['book', 'active'],
            ['cup'],
            ['eraser'],
        ],
    },
    '2': {
        'lang': {
            'ko': {
                'title': 'Element Selector - 2',
                'description': '모든 <span class="target-tag">eraser</span>을 선택하세요.',
                'hint': '<span class="target-tag">div</span>는 모든 <span class="target-tag">div</span>태그를 선택합니다.<br><span class="target-tag">a</span>는 모든 <span class="target-tag">a</span>태그를 선택합니다.',
            }
        },
        'desk': [
            ['eraser', 'active'],
            ['book'],
            ['pen'],
            ['eraser', 'active'],
        ],
    },
    '3': {
        'lang': {
            'ko': {
                'title': '.Class Selector - 1',
                'description': '<span class="target-tag">class="target"</span>인 <span class="target-tag">cup</span>을 선택하세요.',
                'hint': '<span class="target-tag">.abc</span>는 클래스가 <span class="target-tag">abc</span>인 모든 태그를 선택합니다.',
            }
        },
        'desk': [
            ['book'],
            ['cup'],
            ['eraser'],
            ['cup', 'active', '.target'],
        ],
    },
    '4': {
        'lang': {
            'ko': {
                'title': '.Class Selector - 2',
                'description': '<span class="target-tag">class="gray"</span>인 <span class="target-tag">cup</span>, <span class="target-tag">pen</span>을 선택하세요.',
                'hint': '<span class="target-tag">.abc</span>는 클래스가 <span class="target-tag">abc</span>인 모든 태그를 선택합니다.',
            }
        },
        'desk': [
            ['pen', 'active', '.gray'],
            ['pen'],
            ['eraser'],
            ['cup', 'active', '.gray'],
        ],
    },
    '5': {
        'lang': {
            'ko': {
                'title': '#ID Selector',
                'description': '<span class="target-tag">id="first"</span>인 <span class="target-tag">book</span>을 선택하세요.',
                'hint': '<span class="target-tag">#abc</span>는 아이디가 <span class="target-tag">abc</span>인 모든 태그를 선택합니다.',
            }
        },
        'desk': [
            ['book', 'active', '#first'],
            ['book'],
            ['book'],
            ['book'],
        ],
    },
    '6': {
        'lang': {
            'ko': {
                'title': 'Element.Class Selector',
                'description': '<span class="target-tag">class="target"</span>인 <span class="target-tag">eraser</span>를 선택하세요.',
                'hint': '<span class="target-tag">a.abc</span>는 클래스가 <span class="target-tag">abc</span>인 모든 a태그를 선택합니다.',
            }
        },
        'desk': [
            ['eraser', 'active', '.target'],
            ['pen'],
            ['cup', '', '.target'],
            ['eraser'],
        ],
    },
    '7': {
        'lang': {
            'ko': {
                'title': 'Element#ID Selector',
                'description': '<span class="target-tag">id="first"</span>인 <span class="target-tag">pen</span>을 선택하세요.',
                'hint': '<span class="target-tag">div#abc</span>는 아이디가 <span class="target-tag">abc</span>인 모든 div태그를 선택합니다.',
            }
        },
        'desk': [
            ['pen', 'active', '#first'],
            ['eraser', '', '#second'],
            ['cup', '', '#first'],
            ['pen'],
        ],
    },
    '8': {
        'lang': {
            'ko': {
                'title': '.Class#ID Selector',
                'description': '<span class="target-tag">class="used"</span>, <span class="target-tag">id="last"</span>인 <span class="target-tag">cup</span>을 선택하세요.',
                'hint': '<span class="target-tag">.small#abc</span>는 클래스가 <span class="target-tag">small</span>이면서 아이디가 <span class="target-tag">abc</span>인 모든 태그를 선택합니다.',
            }
        },
        'desk': [
            ['cup'],
            ['cup', '', '#last'],
            ['cup', 'active', '#last', '.used'],
            ['cup', '', '.used'],
        ],
    },
    '9': {
        'lang': {
            'ko': {
                'title': 'Element.Class#ID Selector',
                'description': '<span class="target-tag">class="front"</span>, <span class="target-tag">id="unique"</span>인 <span class="target-tag">book</span>을 선택하세요.',
                'hint': '<span class="target-tag">div.small#abc</span>는 클래스가 <span class="target-tag">small</span>이면서 아이디가 <span class="target-tag">abc</span>인 모든 div 태그를 선택합니다.',
            }
        },
        'desk': [
            ['book', 'active', '#unique', '.front'],
            ['cup', '', '#unique', '.front'],
            ['pen'],
            ['eraser'],
        ],
    },
    '10': {
        'lang': {
            'ko': {
                'title': '* Selector',
                'description': '모든 태그를 선택하세요.',
                'hint': '<span class="target-tag">*</span>는 모든 태그를 선택합니다.',
            }
        },
        'desk': [
            ['book', 'active'],
            ['cup', 'active'],
            ['pen', 'active'],
            ['eraser', 'active'],
        ],
    },
};
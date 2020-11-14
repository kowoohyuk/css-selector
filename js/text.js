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
                'title': 'Class Selector - 1',
                'description': '<span class="target-tag">class="target"</span>인 <span class="target-tag">cup</span>을 선택하세요.',
                'hint': '<span class="target-tag">.abc</span>는 클래스가 <span class="target-tag">abc</span>인 모든 태그를 선택합니다.',
            }
        },
        'desk': [
            ['book'],
            ['cup'],
            ['eraser'],
            ['cup', 'active', 'target'],
        ],
    },
};
// Create a new 'render' controller method
// /heroes 요청에 따른 실제 로직 처리
exports.getHeroes = function(req, res) {
    let heroes = [
        { id: 1, name: '똘이장군' },
        { id: 2, name: '황금박쥐' },
        { id: 3, name: '태권브이' },
        { id: 4, name: '마징가 제트' },
        { id: 5, name: '몰라' },
        { id: 6, name: '영웅본색' },
        { id: 7, name: '이소룡' },
        { id: 8, name: '도라애몽' },
        { id: 9, name: '로보카폴리' },
        { id: 10, name: '개구리왕눈이' }
    ];
    // json 형식으로 보내준다.
    res.json(heroes);
};

exports.getNewHeroes =  (req, res) => {

    let fromClient = req.body.key; // POST 방식의 파마미터를 받을때는 req.body.전달인자변수
    // req. // Get 방식의 파마미터를 받을때는 req.query.전달인자변수 -> 알아봐야함.

    console.log(fromClient);
    let newHeroes = [
        { id: 1, name: '박세리' },
        { id: 2, name: '박찬호' },
        { id: 3, name: '아이유' },
        { id: 4, name: '박인비' },
        { id: 5, name: '몰라' },
        { id: 6, name: '브래드' },
        { id: 7, name: '스카렛' }
    ];
    res.json(newHeroes);
}

exports.getHiphopHeroes = (req, res) => {
    let hiphopHeroes = [
        { id: 1, name: '박세리' },
        { id: 2, name: '박찬호' },
        { id: 3, name: '아이유' },
        { id: 4, name: '박인비' },
        { id: 5, name: '몰라' },
        { id: 6, name: '브래드' },
        { id: 7, name: '스카렛' }
    ];
    res.json(hiphopHeroes);
}
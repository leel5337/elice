// 합격 여부 확인하기

// 지시사항
//  1. 세 과목의 점수를 각각 확인하고 점수가 40점보다 낮은 과목이 있으면 탈락입니다.
//  2. 세 과목의 평균 점수가 60점보다 낮다면 탈락입니다.
//  3. 세 과목의 점수가 각각 40점 이상이고, 평균이 60점 이상이라면 합격입니다.
//  4. 시험에 합격했다면 pass, 탈락했다면 fail을 웹 화면에 출력하세요.

var scores = {
    "kor": 55,
    "mat": 75,
    "eng": 50
}

if (scores.kor < 40 || scores.mat < 40 || scores.eng < 40) {
    document.write('fail');
} else if ((scores.kor + scores.mat + scores.eng) / 3 < 60) {
    document.write('fail');
} else {
    document.write('pass');
}
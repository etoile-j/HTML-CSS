//연습문제(배열 메서드로 풀이되어 있는 것을 for문으로 풀어주세요.)
let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]

// 1. 중간고사 점수를 하나의 array로 만들어주세요.
console.log(data.map(x => x.중간고사점수))
//for로
arr1 = [];
for (let i = 0; i < data.length; i++) {
    arr1.push(data[i]['중간고사점수']);
}
console.log(arr1);

// 2. 이름과 중간고사 점수를 하나의 array로 만들어주세요.
console.log(data.map(x => [x.이름, x.중간고사점수]))
//for로
arr2 = [];
for (let i = 0; i < data.length; i++) {
    arr2.push([data[i]['이름'], data[i]['중간고사점수']]);
}
console.log(arr2);
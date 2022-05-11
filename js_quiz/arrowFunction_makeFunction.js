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

// 연습문제(배운것을 사용하여 아래 화살표 함수로 되어 있는 것을 일반 함수로 바꿔주세요.)
//1.
console.log(data.map(x => x.중간고사점수))

console.log(data.map(function(x) {
    return x.중간고사점수;
}));

//2.
console.log(data.map(x => [x.이름,x.중간고사점수]))

console.log(data.map(function(x) {
    return [x.이름, x.중간고사점수];
}));


//3.
let data2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let newData = data2.map(a => a.map(n => n * 2));
console.log(newData);

let ArrowFunciton2 = data2.map(function(a) {
    return a.map(function(n){               //여기 리턴 안 썼었음!
        return n * 2;
    })
})
console.log(ArrowFunciton2);


// 함수 만들기
//1. `[10, 20, 30, 40]` 값의 평균을 구하는 **함수**를 만들어주세요.
function average() {
    const value = [10, 20, 30, 40];
    let result = 0;
    for(let i = 0; i < value.length; i++) {
        result += [i]
    }
    console.log(result/value.length);
}
average();

//2. (나아가기) 숫자단위 콤마를 찍는 **함수**를 만들어주세요.
//      ex) 1000000000 -> 1,000,000,000
function comma(num) {
    num = num.toString();      //!!!!!!!!'num =' 을 해줘야한다!!!!!!
    let result2 = [];
    let count = 0;

    for (let i = num.length - 1; i >= 0; i--) {
        count += 1;
        result2.unshift(num[i]);
        // console.log(result);!!!!!!!!!!!!!

        if (count % 3 === 0) {
            result2.unshift(',');
        }
    }

    if (result2[0] === ',') {
        result2.splice(0, 1);
    }

    console.log(result2.join(''));
}
comma(100000);

//숫자는 length가 안 된다
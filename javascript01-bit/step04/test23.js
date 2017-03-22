/* 주제: 함수 - 클로저(closure) II
- 함수 안에서 만든 함수를 클로저라 부른다.
- 클로저에서 사용하는 메모리는 별도 관리한다.
*/
"use strict"

var arr = ["홍길동", "임꺽정", "유관순", "안중근", "윤봉길"]
var count = -1;

// 클로저가 자체 변수를 사용한 후
// - 클로저가 사용하는 변수가 글로벌 변수가 아니라 바깥 함수의 로컬 변수라면,
//   로컬 변수는 함수 호출이 끝나면 제거되기 때문에,
//   나중에 클로저가 호출될 때 사용할 수 없는 문제가 있다.
//   그래서 로컬 변수를 사용할 때는 로컬 변수를 자체 메모리에 복제해 둔다.
//   이렇게 복제해 두면 바깥 함수의 호출이 끝나서 로컬 변수가 제거된다 하더라도
//   자체 복제해둔 변수가 있기 때문에 계속 유효하게 사용할 수 있다.
function outer() {
  var i = ++count;
  return function() {
    console.log(arr[i])
  }
}


var f1 = outer();
var f2 = outer();
var f3 = outer();
var f4 = outer();
var f5 = outer();

f1();
f2();
f3();
f4();
f5();





//

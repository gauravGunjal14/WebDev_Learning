//comparison operator
//number to number
a1 = 1
a2 = 2
// console.log(a1==a2)
// a2 = 1
// console.log(a1==a2)
console.log(a1>a2)
console.log(a1<a2)
console.log(a1>=a2)
console.log(a1<=a2)

// string and number- type comparision is allowed
b1 = "10" //->true comp. by b2
// b1 = "30" //->false comp. by b2
b2 = 10
console.log(b1==b2)


// === is used to check first type, then value.
console.log(b1 === b2)


// rules->> null == undefined  -> true
// rule->> null === undefined -> false
console.log(null==0)
console.log(null<0)
console.log(null>0)
console.log(null<=0)
console.log(null>=0)


// NaN is NaN are not eqal
console.log(NaN==NaN)

// 123 == "123" ->true
//true == 123 ->false
console.log(123 == "123" == 123)
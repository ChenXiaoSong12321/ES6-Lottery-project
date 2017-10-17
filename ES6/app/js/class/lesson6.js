// 数组扩展
// 数组新增特性
// Array.from Array.of copyWithin find\findIndex 
// fill entries\keys\values includes

{
	let arr = Array.of(3,4,7,9,11)
	console.log('arr',arr)

	let empty = Array.of()
	console.log('empty',empty)
}

{
	let arr = document.querySelectorAll('p')
	let pArr = Array.from(arr)
	pArr.forEach(function(item){
		console.log(item.textContent)
	})
}
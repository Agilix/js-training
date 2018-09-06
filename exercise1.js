const list = [
    {
        "name": "john",
        "id": 1
    },
    {
        "name": "paul",
        "id": 2
    },
    {
        "name": "jack",
        "id": 3
    },
    {
        "name": "debbie",
        "id": 4
    },
]

console.log('Print list: \n');
console.log(list);



let flatList = '';
list.forEach((item, i, list)=> {
    flatList += item.name + (i < list.length-1 ? ', ' : '')
});
console.log('\n\n Print just the names as a list through a loop:');
console.log(flatList);



let flatListArray = [];
list.forEach(item=> {
    flatListArray.push(item.name);
});
console.log('\n\n Foreach:');
console.log(flatListArray.join(', '));



const flatListArrayMap = list.map(item => {
    return item.name;
}).join(', ');
console.log('\n\n map:');
console.log(flatListArrayMap);



const flatListArrayMapSimple = list.map(item => item.name).join(', ');
console.log('\n\n Map simple:');
console.log(flatListArrayMapSimple);



const flatListArrayMapNoJack = list
    .filter(item => item.id !== 3)
    .map(item => item.name)
    .join(', ');
console.log('\n\n Filter + map:');
console.log(flatListArrayMapNoJack);


const reduceList = list.reduce((memo, item) => {
    if (item.name === 'jack')
    {
        return memo;
    }
    memo.push(item);

    return memo;
}, []);
console.log('\n\n Reduce:');
console.log(reduceList);


const reduceListTwo = list.reduce((memo, item) => {
    memo[item.id] = item;
    return memo;
}, {});
console.log('\n\n Reduce 2');
console.log(reduceListTwo);


const found = list.find(item => item.name === 'jack');
console.log('\n\n Find');
console.log(found);
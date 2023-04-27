module.exports.items = ['item1', 'item2'];

const person = {
    name: 'bob',
}

module.exports.singlePerson = person;

// 这种导出方法实际上是直接创建了一个对象的键值对，键名为items，键值为['item1', 'item2']，键名为singlePerson，键值为person
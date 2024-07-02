let list = ['patatine', 'caramelle', 'coca-cola', 'salamini', 'sedano'];

console.log(list)

let ul = document.getElementById('ul');

let i = 0;
while (i < list.length) {
    i++;
    console.log(list[i - 1])

    let li = document.createElement('li');

    li.innerText = list[i - 1];

    console.log(li);

    ul.append(li);



}
const numbers = [1, 2, 5, 5, 5, 5, 2, 4];

const numbers1 = numbers.sort();

const numbers2 = [...numbers].sort((a, b) => b - a); //   x < 0  |  x === 0  | x > 0

// metoda sort mutuje dane - mutacje często są powodem do niespodziewanych błędów


// const numbers2 = numbers.filter();

const users = [{ name: "John" }, { name: "Simon" }, { name: "Adrian" }];

// każda literka/każdy znak (,.;'!@#$%^&) ma swój kod numeryczny

// destrukturyzacja tworzy nową tablice i dzięki niemu nie mutujemy danych
const sortedUsers = [...users].sort((user1, user2)=>{
   return user1.name.charCodeAt(0) - user2.name.charCodeAt(0)
});

// slice tworzy nową tablice i dzięki niemu nie mutujemy danych
const sortedUsers1 = users.slice().sort((user1, user2)=>{
    return user1.name.charCodeAt(0) - user2.name.charCodeAt(0)
 });
 

console.log(sortedUsers);


console.log(numbers);

console.log(numbers1);

console.log(numbers2);
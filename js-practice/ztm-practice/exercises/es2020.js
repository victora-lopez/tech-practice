// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER) // -MAX_SAFE_INTEGER

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n // can't add normal integers with BigInts
//fix by adding n after each int or remove n from the BigInt

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard){
        console.log('fight!')
    } else {
        console.log('walk away...')
    }


// Exercise 4: What do these each output?

// only outputs the alternative if first condition is null or undefined
console.log(false ?? 'hellooo') // false 
console.log(null ?? 'hellooo') // 'hellooo'
console.log(null || 'hellooo') // 'hellooo'
console.log((false || null) ?? 'hellooo') // 'hellooo'
console.log(null ?? (false || 'hellooo')) // 'hellooo'
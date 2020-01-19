'use strict'

class StringBuilder {
    constructor(value) {
        this._value = value
    }

    get value() {
        return this._value
    }
    append(str){
        const arr = this._value.split('')
        arr.push(str)
        this._value = arr.join('')
        return 
    }

    prepend(str){
        const arr = this._value.split('')
        arr.unshift(str)
        this._value = arr.join('')
        return 
    }

    pad(str){
        const arr = this._value.split('')
        arr.push(str)
        arr.unshift(str)
        this._value = arr.join('')
        return
    }

}


const builder = new StringBuilder('.');
console.log(builder.value);


builder.append('^');
// console.log(builder.append('^'));
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
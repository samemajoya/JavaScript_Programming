let person = {
    firstName: 'john',
    lastNme: 'smith',
    age: 25,
    greet: function(){
        console.log('hello, ' + this.firstName + ' ' + this.lastNme + '');
    }
};
person.greet();
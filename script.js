// Name definition
let personNames = {
    values: ["Dennis Ritchie", "Charles Simonyi", "Andy Hopper", "Ken Thompson", "Yukihiro Matsumoto",
             "James Gosling", "John Resig", "Brendan Eich", "Mark Adler", "Marc Andreessen",
             "Larry Wall", "Larry Tesler", "Linus Torvalds", "Richard Brodie", "Richard Greenblatt"]
};

// Methods for multiple definitions of functions
function addMethod(object, name, fn) {
    var old = object[name];
    object[name] = function() {
        if (fn.length == arguments.length)
            return fn.apply(this, arguments)
        else if (typeof old == "function")
            return old.apply(this, arguments);
    }
}

// Create a findProgrammer function (no arguments)
addMethod(personNames, "findProgrammer", function(){
    return this.values;
});

// Create a findProgrammer function (with one argument)
addMethod(personNames, "findProgrammer", function(name){
    let ret = [];
    for (let i = 0; i < this.values.length; i++)
        if (this.values[i].indexOf(name) == 0)
            ret.push(this.values[i]);
    return ret;
})

// Create a findProgrammer function (with two arguments)
addMethod(personNames, "findProgrammer", function(first, last){
    let ret = [];
    for (let i = 0; i < this.values.length; i++)
        if (this.values[i] == (first + " " + last))
            ret.push(this.values[i]);
    return ret;
})

console.log("Output all person names");
console.log(personNames.findProgrammer());

console.log("Output people who match the first name");
console.log(personNames.findProgrammer("Larry"));
console.log(personNames.findProgrammer("Richard"));
console.log(personNames.findProgrammer("Mark"));

console.log("Output the people whose first and last names match");
console.log(personNames.findProgrammer("Yukihiro", "Matsumoto"));
console.log(personNames.findProgrammer("Dennis", "Ritchie"));
console.log(personNames.findProgrammer("Charles", "Simonyi"));

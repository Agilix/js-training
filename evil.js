function print(string, input) {
    if (arguments.length === 1)
    {
        input = string;
        string = '';
    }

    if (input === '.')
    {
        return string;
    }

    string = string + ' ' + input;

    return print.bind(null, string);
}


// print "hello world"
console.log(print('hello')('world')('.'));
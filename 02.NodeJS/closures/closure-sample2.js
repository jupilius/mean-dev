
function parent() {
    const message = 'Hello, world';

    function child() {
        console.log(message);
    }

    return child;
}

const child_func = parent();

child_func();
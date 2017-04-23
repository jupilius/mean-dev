

function parent() {
    const message = 'Hello, world';

    function child() {
        console.log(message);
    }

    child();
}

parent();

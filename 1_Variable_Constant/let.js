let a = 10;

function f() {
    let a = 20;
    console.log(a);
    {
    console.log(a);
    }
}
f();
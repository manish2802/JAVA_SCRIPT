let a = 10;

function f() {
    let a = 20;
    {
        let a=30;
    console.log(a);
    }
}
f();
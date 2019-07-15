function Emp(id, name) {
    this.id = id;
    this.name = name;
}
Emp.prototype.info=function() {
    return this.id + '  ' + this.name;
}
let emp1=new Emp(10,'manish');
let info=emp1.info();
console.log("Employee Info: "+info);
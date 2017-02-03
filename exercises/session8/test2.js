Function Student(id, name ){
    // var this={};
    this.id = id ;
    this.name = name ;
    this.getNmae=function(){
        return this.name;
    }
    // return this ;
}

let a = Student(1,'ahmed');
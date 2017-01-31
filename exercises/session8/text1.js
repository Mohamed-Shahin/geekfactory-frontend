function createStudent(id,name){
    let Student = {
        name:name ;
        id:id ;
        getName: function(){
            return this.name;
        }

    }

}
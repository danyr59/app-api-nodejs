class Product{
    constructor(id, name) {
        this.id_ = id
        this.name_ = name        
        
    }

    get id(){
        return this.id_
    }
    get name(){
        return this.name_
    }
    set id(id){
        this.id_ = id
    }
    set name(name){
        this.name_ = name
    }
}

export {
    Product
}
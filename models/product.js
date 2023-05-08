class Product{
    constructor(id, name) {
        this.id = id
        this.name = name        
        
    }

    get id(){
        return this.id
    }
    get name(){
        return this.name
    }
    set id(id){
        this.id = id
    }
    set name(name){
        this.name = name
    }
}

export {
    Product
}
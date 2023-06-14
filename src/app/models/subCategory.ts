// create a model for the subcategories
export class SubCategory {
    constructor(name: string, category: string) {
        this.name = name;
        this.category = category;
    }
    name: string;
    category: string;
}
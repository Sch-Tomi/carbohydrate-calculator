import { Model } from "@vuex-orm/core";

export default class Item extends Model {
    static entity = "mealItem";

    static fields() {
        return {
            id: this.uid(),
            calculable: this.attr(true),
            name: this.attr(""),
            weight: this.attr(0),
            referenceCH: this.attr(0)
        };
    }

    get sumCH() {
        return (this.weight / 100) * this.referenceCH;
    }
}

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    getPrice: function() {
        let prices = [];
        for (let value in this) {
            if (typeof this[value] === "string" && this[value].endsWith(" грн")) {
                let clearPrice = parseFloat(this[value].slice(0, -4).trim());
                prices.push(clearPrice); 
            
            }
        }
        return prices;
    },

    price: function() {
        let sum = 0;
        for (let price of this.getPrice()) {
            sum += price;
        }
        return sum;
    },

    minPrice: function() {
        let min = Infinity;
        for (let price of this.getPrice()) {
            if (price < min) {
                min = price;
            }
        }
        return min;
    },

    maxPrice:function () {
        let max = 0;
        for (let price of this.getPrice()) {
            if (price > max) {
                max = price;
            }
        }
        return max;
    }
};
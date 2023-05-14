const redmi = {
    model: 'Redmi Note 10',
    price: 13999,
    storage: '128GB',
    battery: '5000mAh',
    getPrice: function () {
        return this.price;
    },
    getModel: function () {
        return this.model;
    },
    getStorage: function () {
        return this.storage;
    },
    getBattery: function () {
        return this.battery;
    },
};

const samsung = {
    model: 'Galaxy M31',
    price: 16499,
    storage: '128GB',
    battery: '6000mAh',
    getPrice: function () {
        return this.price;
    },
    getModel: function () {
        return this.model;
    },
    getStorage: function () {
        return this.storage;
    },
    getBattery: function () {
        return this.battery;
    },
   
};

const nokia = {
    model: 'Nokia 5.4',
    price: 13999,
    storage: '64GB',
    battery: '4000mAh',
    getPrice: function () {
        return this.price;
    },
    getModel: function () {
        return this.model;
    },
    getStorage: function () {
        return this.storage;
    },
    getBattery: function () {
        return this.battery;
    },
};

const motorola = {
    model: 'Moto G9 Power',
    price: 12999,
    storage: '64GB',
    battery: '6000mAh',
    getPrice: function () {
        return this.price;
    },
    getModel: function () {
        return this.model;
    },
    getStorage: function () {
        return this.storage;
    },
    getBattery: function () {
        return this.battery;
    },
};

module.exports = { redmi, samsung, nokia, motorola };

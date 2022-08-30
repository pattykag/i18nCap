const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const { Orders, justTest } = this.entities;

    this.before('CREATE', Orders, async (req) => {        
        const {count} = req.data;

        if (count > 10) {
            req.error(400, 'thisErrorMessage');
        }
    });

    this.before('CREATE', justTest, async (req) => {
        const aOrders = await SELECT.one(Orders);
        console.log(aOrders)

        req.reject(400, 'errorVar', [aOrders.count, aOrders.item])
    });
});

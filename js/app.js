
res = "Got Connected";

let costPerProduct = [
    {
        productName : 'Book',
        quantity : 300,
        cost : 1950,
        cpp : function () {
            return this.cost / this.quantity;
        }
    },
    {
        productName : 'Pen',
        quantity : 450,
        cost : 900,
        cpp : function () {
            return this.cost / this.quantity;
        }
    },
    {
        productName : 'Eraser',
        quantity : 300,
        cost : 450,
        cpp : function () {
            return this.cost / this.quantity;
        }
    }
];

let cpp = `<table class="table table-bordered">
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>Total Quantity</td>
                        <td>Total Cost</td>
                        <td>Cost Per Product</td>
                    </tr>
                </thead>
                <tbody>
`;

let totalQuantity = 0;
let totalCost = 0;
let totalCpp = 0;

for ( var i = 0; i < costPerProduct.length; i++ ) {
    
    cpp += `
                    <tr>
                        <td> ${ costPerProduct[i].productName } </td>
                        <td> ${ costPerProduct[i].quantity } </td>
                        <td> ${ costPerProduct[i].cost } </td>
                        <td> ${ costPerProduct[i].cpp().toFixed(2) } </td>
                    </tr>
    `;
    
    totalQuantity = totalQuantity + costPerProduct[i].quantity;
    totalCost = totalCost + costPerProduct[i].cost;
    totalCpp = totalCpp + costPerProduct[i].cpp();

}

    cpp += `
                    <tr>
                        <td> - </td>
                        <td><b> ${ totalQuantity } </b></td>
                        <td><b> ${ totalCost } </b></td>
                        <td><b> ${ ( totalCost / totalQuantity ).toFixed(2) } </b></td>
                    </tr>
                </tbody>
            </table>
    `;


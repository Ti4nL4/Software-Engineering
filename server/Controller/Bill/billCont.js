const bill = require('../../Model/Bill');



module.exports = function (app) {

   app.post('/add-bill', (req, res) => {


      bill.addBill(req.body, (result) => { res.send(result) });

   })
   app.get('/recent-bill', (req, res) => {

      bill.getRecentBill((result) => {

         res.send(result);

      });

   })
   app.get('/recent-bill-with-price', (req, res) => {
      bill.getRecentBillWithTotalPrice((result) => {
         res.send(result);
      });
   })
   app.get('/num-bill', (req, res) => {
      bill.getTotalBill((result) => {
         res.send(result);
      });
   })
   app.get('/profit', (req, res) => {
      bill.getProfit((result) => {
         res.send(result);
      });
   })

    
}
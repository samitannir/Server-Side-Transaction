var express = require('express');
var router = express.Router();
const Tx = require('ethereumjs-tx')
const web3 = require('../web3');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'a' });
});

router.post('/send', function(req, res, next) {
  var rawTx = {
    nonce: '0x00',
    gasPrice: '0x09184e72a000',
    gasLimit: '0x2710',
    to: web3.contract.CONTRACT_ADDRESS,
    value: '0x00',
    data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
  }
  
  var tx = new Tx(rawTx);
  tx.sign(web3.privateKey);
  
  var serializedTx = tx.serialize();
  
  web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
  .on('receipt', console.log);


});

module.exports = router;

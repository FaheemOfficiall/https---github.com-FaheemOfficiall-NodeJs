const { log } = require("console");
const dns=require("dns")

// console.log(dns.lookup("faheemShop.com",function(err,addresses,family)){

// })

const FaheemSite = dns.lookup('Faheem.com', function (err, addresses, family) {
    console.log(addresses);
    // console.log(err);
    // console.log(family);
  });

  
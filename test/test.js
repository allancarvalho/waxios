var waxios = require('../index');

var options = {
	validateStatus: function (status) {
   		return status < 408;
  	},
  	retry: 3	
};

waxios.get('http://localhost:8000/spacey-api/publication/desktop/right2/americanas', options).then(function() {
    console.log('sucesso', arguments);
}).catch(function(res) {
    console.log('erro');
    // console.log(res.config);
});



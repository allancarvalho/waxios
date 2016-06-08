var waxios = require('../index');

waxios.get('http://localhost:8000/').then(function() {
    console.log('sucesso', arguments);
}).catch(function(res) {
    console.log('erro', res.config);
    console.log(res.config);
});

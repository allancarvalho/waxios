var waxios = require('../index');

waxios.get('http://localhost:8000/', {retry: 3}).then(function() {
    console.log('sucesso', arguments);
}).catch(function(res) {
    console.log('erro', res.config);
    console.log(res.config);
});

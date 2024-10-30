// gateway.js
const gateway = require('fast-gateway');
const port = 9001;

const server = gateway({
    routes: [
        {
            prefix: '/auth',
            target: 'https://api-gateway-lii7.onrender.com/login',  
            hooks: {}
        },
        {
            prefix: '/', 
            target: 'https://inicio-6v23.onrender.com',     
            hooks: {}
        },
        {
            prefix: '/modi',
            target: 'https://principal-lqck.onrender.com',  
            hooks: {}
        }
    ]
});

server.start(port).then(() => {
    console.log(`Gateway ejecutándose en el puerto: ${port}`);
});

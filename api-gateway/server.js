// gateway.js
const gateway = require('fast-gateway');
const port = 9001;

const server = gateway({
    routes: [
        {
            prefix: '/auth',
            target: 'https://auth-3q3d.onrender.com/',  
            hooks: {}
        },
        {
            prefix: '/', 
            target: 'https://inicio-6v23.onrender.com',     
            hooks: {}
        },
        {
            prefix: '/modi',
            target: 'https://modi-aj9i.onrender.com',  
            hooks: {}
        }
    ]
});

server.start(port).then(() => {
    console.log(`Gateway ejecutándose en el puerto: ${port}`);
});

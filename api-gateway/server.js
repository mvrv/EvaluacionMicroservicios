// gateway.js
const gateway = require('fast-gateway');
const port = 9001;

const server = gateway({
    routes: [
        {
            prefix: '/auth',
            target: 'https://auth-n1vi.onrender.com/',  
            hooks: {}
        },
        {
            prefix: '/', 
            target: 'https://inicio-kppi.onrender.com',  
            hooks: {}
        },
        {
            prefix: '/pagina',
            target: 'https://principal-lqck.onrender.com',  
            hooks: {}
        }
    ]
});

server.start(port).then(() => {
    console.log(`Gateway ejecutándose en el puerto: ${port}`);
});

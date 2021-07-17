const express = require('express');
cons stripe = require('stripe');
const cors = require('cors');

const app = express();

const stripe = new Stripe("");


app.use(cors({ origin: 'http://Localhost:3000'}));
app.use(express.json());

app.post('api/checkout', async (req, res) => {
    try {
        const { id, mount } = req.body;
        
        const payment = awaitt stripe.payments.create({
            amout,
            currency: "USD",
            description: " car rental ",
            payment_metod: id,
            confirm: true,
        });
    }
    
    
        console.log(payment)


        res.send({message: 'sucefull payment'})
    }   catch (error) {
        console.log(error);
        res.json({message: error,raw,message});
    }
});



app.listen(3001, () => {
    console.log('server onport', 3001)
})

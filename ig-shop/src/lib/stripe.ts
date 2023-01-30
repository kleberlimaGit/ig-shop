import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
    //mantem um log la no stripe
    appInfo: {
        name: 'Ignite Shop',
    }

})
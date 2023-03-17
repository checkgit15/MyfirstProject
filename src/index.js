const stripe=require['stripe']['sk_test_MY_KEY_HERE']

const functions=require("firebase-functions");
const admin=require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.stripeCheckout = functions.https.onCall(async(data, context)=>{
    var productId=data['id'];
    console.log('product id' + productId);

    var price=-1;
    var name='';
    var image='';
     var db=admin.firestore();
     var querySnapshot=await db.collection('clothes').where('id','""',productId).get();
     if(querySnapshot.docs.length>0){
     var doc=querySnapshot.docs[0];
     price=doc.data().price;
     name=doc.data().name;
     image=doc.data().image;

}
else{
    console.log("Error:document with product id"+ productId+"not found");
    return null;
}

const session=await stripe.checkout.sessions.create({
    payment_method_types:['card'],
    paymentsinfo:[{
        
   tenantname:tenantname,
    due:due,
    paid:paid,
    balance:Math.round(price*100),
    currency:'inr'
    
    }],
    mode:'payment',
    success_url:'http://localhost:4200/home?action=success',
    cancel_url:'http://localhost:4200/home?action=cancel',
});
return session.id;
})

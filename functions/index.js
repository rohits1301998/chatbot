// const functions = require('firebase-functions');
// const admin = require('firebase-admin');

// admin.initializeApp(functions.config().firebase);

// var firestore=admin.firestore();
// //var speech1="";

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// exports.webhook = functions.https.onRequest((request, response) => {

//     console.log("request.body.result.parameters: ",request.body.result.parameters);
 
//    switch(request.body.result.action){
    
//     case 'check_balance':
//     // let param = request.body.result.parameters;
//     // var pin_number=param.pin_id;
//     // var Account_type=param.account_type;
//     // firestore.collection('users').where("pin", "==", pin_number).get()
//     // .then((querySnapshot) => {

//     //     var users = [];
//     //     querySnapshot.forEach((doc) => { users.push(doc.data()) });
//     //     // now orders have something like this [ {...}, {...}, {...} ]

//     //     // converting array to speech
//     //   var speech = '';
//     //     if(Account_type=="current"){
//     //     users.forEach((eachUsers, index) => {
//     //         speech += `Current Account balance is ${eachUsers.current_account_balance}`
//     //         response.send({
//     //             speech: speech
//     //         });
//     //     })
//     // }else{
//     //     users.forEach((eachUsers, index) => {
//     //         speech += `Savings Account balance is ${eachUsers.saving_account_balance}`
//     //         response.send({
//     //             speech: speech
//     //         });
//     //     })
//     // }
       
//     // })
//     // .catch((err) => {
//     //     console.log('Error getting documents', err);

//     //     response.send({
//     //         speech: "something went wrong when reading from database"
//     //     })
//     // })
//     response.send({
//              speech: 'Current Balance is 49500'
//                 });
//     break;

//     case 'view_transaction':
//     // let view_transaction_params=request.body.result.parameters;
//     // pinnn=view_transaction_params.pinn;
//     // var user_view_transaction=firestore.collection('users').where('pin', '==',pinnn).get()
//     // .then(snapshot => {
//     //     snapshot.forEach(doc => {
//     //       //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);  
//     //       response.send({
//     //         speech: `Your Last Transaction Detail:${doc.data().recent_transaction}`
//     //     });
    
//     //     });
//     // });
//     response.send({
//         speech: `Your Last Transaction Detail:You have Sent 10000 To Account Number:123456789 from Your Current Account`
//     });
//     break;

       
//         //transfering money
//         case 'transfer_money':
//     //     let param1 = request.body.result.parameters;
//     //     var pin_number=param1.pin_no;
//     //     var account_no=param1.acc_no;
//     //     var account_type1=param1.acc_type;
//     //     var amount=param1.amount_to_transfer;
//     //     var pin_number_account;
//     //     if(account_type1=="current"){
            
//     //        // var speech1="";
//     //         //Tranfering

//     //         var user=firestore.collection('users').where('account_number', '==',parseInt(account_no)).get()
//     //         .then(snapshot => {
//     //             snapshot.forEach(doc => {
//     //                 var totalAmount= doc.data().saving_account_balance + parseInt(amount);
//     //                 doc.ref.update({saving_account_balance : totalAmount});
//     //               //  console.log(doc.data());
//     //             });
//     //         });
          

//     //      //after transfering then deduction!
//     //     var NewCurrentAmount="";
//     //     var user_pin=firestore.collection('users').where('pin', '==',pin_number).get()
//     //         .then(snapshot => {
//     //             snapshot.forEach(doc => {
//     //                 var DeductedAmount= doc.data().current_account_balance - parseInt(amount);
//     //                 doc.ref.update({current_account_balance : DeductedAmount});
//     //                // console.log(doc.data());
//     //                 response.send({
//     //                     speech:`${amount} rupees has been transfered to account no:${account_no}`
//     //               });
//     //             });
//     //         });
               

//     //         //getting account number of user who will be transfering money

//     //         var user_x=firestore.collection('users').where('pin', '==',pin_number).get()
//     //         .then(snapshot => {
//     //             snapshot.forEach(doc => {
//     //                 pin_number_account= doc.data().account_number;
//     //                  //Update Recent Transaction of user who will be transfering money!
//     //                 var user_1_transaction=firestore.collection('users').where('account_number', '==',pin_number_account).get()
//     //                 .then(innersnapshot => {
//     //                     innersnapshot.forEach(innerdoc => {
//     //                         //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);
//     //                         recent_trans=`You have Sent ${amount} To Account Number:${account_no} from Your Current Account`;
//     //                         innerdoc.ref.update({recent_transaction : recent_trans});
//     //                        // console.log(innerdoc.data());
//     //                     });
//     //                 });
//     //             });
//     //         });

//     //         //console.log("pin number "+pin_number_account);
            
         

//     //        // Update Recent Transaction of user who will be Recieving money!
//     //        var user_2_transaction=firestore.collection('users').where('account_number', '==',account_no).get()
//     //        .then(snapshot => {
//     //            snapshot.forEach(doc => {
//     //              //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);
//     //                  recent_trans_1=`You have Recieved ${amount} From Account Number:${pin_number_account} To Your Savings Account`;
//     //                doc.ref.update({recent_transaction : recent_trans_1});
//     //              //  console.log(doc.data());
//     //            });
//     //        });
      
//     // }else{
//     //      // var speech1="";
//     //         //Tranfering

//     //         var user_saving=firestore.collection('users').where('account_number', '==',parseInt(account_no)).get()
//     //         .then(snapshot => {
//     //             snapshot.forEach(doc => {
//     //                 var totalAmount1= doc.data().saving_account_balance + parseInt(amount);
//     //                 doc.ref.update({saving_account_balance : totalAmount1});
//     //                 //console.log(doc.data());
//     //             });
//     //         });
//     //         //console.log(doc);
              
//     //         //after transfer
//     //     // firestore.collection('users').set({current_account_balance=current_account_balance-amount}).where("pin", "==", pin_number).get()
//     //     // .then((querySnapshot) => {

//     //     //     var users = [];
//     //     //     querySnapshot.forEach((doc) => { users.push(doc.data()) });
//     //     //     users.forEach((eachUsers, index) => {
//     //     //         speech1 += `Updated Current Account balance is ${eachUsers.current_account_balance}`
//     //     //     })
//     //     var NewCurrentAmount1="";
//     //     var user_pin1=firestore.collection('users').where('pin', '==',pin_number).get()
//     //         .then(snapshot => {
//     //             snapshot.forEach(doc => {
//     //                 var DeductedAmount2= doc.data().saving_account_balance - parseInt(amount);
//     //                 doc.ref.update({saving_account_balance : DeductedAmount2});
//     //                // console.log(doc.data());
//     //                 response.send({
//     //               speech:`${amount} rupees has been transfered to account no: ${account_no}`
//     //         });
//     //             });
//     //         });
               
            
//     //     // })
//     //   //getting account number of user who will be transfering money

//     //   var user_y=firestore.collection('users').where('pin', '==',pin_number).get()
//     //   .then(snapshot => {
//     //       snapshot.forEach(doc => {
//     //           pin_number_account= doc.data().account_number;
//     //            //Update Recent Transaction of user who will be transfering money!
//     //           var user_n_transaction=firestore.collection('users').where('account_number', '==',pin_number_account).get()
//     //           .then(innersnapshot => {
//     //               innersnapshot.forEach(innerdoc => {
//     //                   //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);
//     //                   recent_transc=`You have Sent ${amount} To Account Number:${account_no} from Your Savings Account`;
//     //                   innerdoc.ref.update({recent_transaction : recent_transc});
//     //                     // Update Recent Transaction of user who will be Recieving money!
//     //                     var user_m_transaction=firestore.collection('users').where('account_number', '==',account_no).get()
//     //                     .then(snapshot => {
//     //                         snapshot.forEach(doc => {
//     //                         //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);
//     //                             recent_trans_2=`You have Recieved ${amount} From Account Number: ${pin_number_account} To Your Savings Account`;
//     //                             doc.ref.update({recent_transaction : recent_trans_2});
//     //                            // console.log(doc.data());
//     //                         });
//     //                     });
//     //               });
//     //           });
//     //       });
//     //   });

//     //   //console.log("pin number "+pin_number_account);
      
   

   

//     // }

//     response.send({
//         speech:`10000 rupees has been transfered to account no:1223456789`
//   });
//         break;
        
//         case 'pin_change':
//         // let pin_change_params=request.body.result.parameters;
//         // pin_nooo=pin_change_params.pin_noo;
//         // pin_pass=pin_change_params.user_password;
//         // new_pin_no=pin_change_params.new_pin;
//         // var user_pin_change=firestore.collection('users').where('pin', '==',pin_nooo).where('password', '==',pin_pass).get()
//         // .then(snapshot => {
//         //     snapshot.forEach(doc => {
//         //       //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);  
//         //         doc.ref.update({pin :new_pin_no});
//         //        // console.log(doc.data());
//         //         response.send({
//         //             speech: "PIN Number Changed Successfully"
//         //         });
//         //     });
//         // });
//         response.send({
//             speech: "PIN Number Changed Successfully"
//         });
//         break;

//         case 'loan_availability':
//         // let para_for_loan = request.body.result.parameters;
//         // var pin_number_for_loan=para_for_loan.pin_for_loan;
//         // var loan='';
//         // firestore.collection('users').where('pin', '==',pin_number_for_loan).get()
//         //     .then(snapshot => {
//         //         snapshot.forEach(doc => {
//         //             loan= doc.data().loan_available;
//         //             if(loan=='true'){
//         //                 response.send({
//         //                     speech:"Loan is Available for You!"
//         //                 });
//         //             }else{
//         //                 response.send({
//         //                     speech:"Loan is Not Available for You!"
//         //                 });
//         //             }
//         //         });
//         //     });

//             response.send({
//                 speech:"Loan is Available for You!"
//             });
//             break;

//             case 'IFSC':
//         // let para_for_ifsc = request.body.result.parameters;
//         // var pin_number_for_ifsc=para_for_ifsc.pin_for_ifsc;
//         // var ifsc_cde='';
//         // firestore.collection('users').where('pin', '==',pin_number_for_ifsc).get()
//         //     .then(snapshot => {
//         //         snapshot.forEach(doc => {
//         //             ifsc_cde= doc.data().ifsc_code;
//         //             response.send({
//         //                 speech:`Your IFSC Code is ${ifsc_cde}`
//         //             });
//         //         });
//         //     });

//             response.send({
//                 speech:`Your IFSC Code is SYNB001234`
//             });
//             break;

//             case 'block_credit_card':
//             let para_for_block_cc = request.body.result.parameters;
//             var pin_number_for_block_cc=para_for_block_cc.pin_for_blocking_cc;
//             var cc_status='deactive';
//             firestore.collection('users').where('pin', '==',pin_number_for_block_cc).get()
//                 .then(snapshot => {
//                     snapshot.forEach(doc => {
//                         doc.ref.update({credit_card_status:cc_status});
//                         response.send({
//                             speech:`Your Credit Card has been Blocked Succesfully`
//                         });
//                     });
//                 });
//                 break;

//                 case 'block_debit_card':
//                 // let para_for_block_dc = request.body.result.parameters;
//                 // var pin_number_for_block_dc=para_for_block_dc.pin_for_blocking_dc;
//                 // var dc_status='deactive';
//                 // firestore.collection('users').where('pin', '==',pin_number_for_block_dc).get()
//                 //     .then(snapshot => {
//                 //         snapshot.forEach(doc => {
//                 //             doc.ref.update({debit_card_status:dc_status});
//                 //             response.send({
//                 //                 speech:`Your Debit Card has been Blocked Succesfully`
//                 //             });
//                 //         });
//                 //     });

//                     response.send({
//                         speech:`Your Debit Card has been Blocked Succesfully`
//                     });

//                     break;

//                     case 'branch_address':
//                 // let para_for_ba = request.body.result.parameters;
//                 // var pin_number_for_ba=para_for_ba.pin_for_branch_addr;
//                 // var branch_add='';
//                 // firestore.collection('users').where('pin', '==',pin_number_for_ba).get()
//                 //     .then(snapshot => {
//                 //         snapshot.forEach(doc => {
//                 //             branch_add=doc.data().branch_address;
//                 //             response.send({
//                 //                 speech:`Your Branch Address is ${branch_add}`
//                 //             });
//                 //         });
//                 //     });

//                     response.send({
//                         speech:`Your Branch Address is kandivali east,mumbai`
//                     });
//                     break;



//     //     //testing 
//     //    case 'check_bal': 

//     // let para5 = request.body.result.parameters;
//     // var pin_numberr=para5.pn;
//     // var Account_typee=para5.acc_t;
//     // var speech_res= '';
//     // firestore.collection('users').where("pin", "==", pin_numberr).get()
//     // .then((querySnapshot) => {

//     //     var users = [];
//     //     querySnapshot.forEach((doc) => { users.push(doc.data()) });
        
//     // if(Account_typee=="current"){
//     //     response.send({
//     //         speech: "Wait i am fetching large amount of data, type yes!"
//     //     });
//     //     users.forEach((eachUsers, index) => {
//     //          speech_res+= `Current Account balance is ${eachUsers.current_account_balance}`   

//     //         //storing result in database
            
//     //         firestore.collection('users').where('pin', '==',pin_numberr).get()
//     //         .then(snapshot => {
//     //              snapshot.forEach(doc => {
//     //              doc.ref.update({result:speech_res});
//     //             // console.log(doc.data());
//     //             });
//     //          });

//     //     })
       
//     // }   else{
//     //         users.forEach((eachUsers, index) => {
//     //         speech += `Savings Account balance is ${eachUsers.saving_account_balance}`
//     //         response.send({
//     //             speech: "Wait i am fetching large amount of data, type yes!"
//     //         });
//     //         })
//     //     }     
//     // })

   

//     // break;

//     //     case 'followup_check_bal':
//     //     let para4= request.body.result.parameters;
//     //     var pin_numberrr=para4.pnn;
//     //     var speech_result='';
//     //     firestore.collection('users').where('pin', '==',pin_numberrr).get()
//     //         .then(snapshot => {
//     //             snapshot.forEach(doc => {
//     //                 speech_result = doc.data().result;
//     //                 response.send({
//     //                     speech:speech_result
//     //                 });
//     //             });
//     //         });
           
           
//     //     break;


//         // case 'user_checks':
//         // let p_params=request.body.result.parameters;
//         // pp=p_params.p;
//         // var result='';
//         // firestore.collection('users').where("pin", "==", pp).get()
//         // .then((snapshot) => {
    
//         //     snapshot.forEach(doc => {
//         //         //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);  
//         //         result=`Your username:${doc.data().username}`;
//         //         response.send({
//         //           speech:result
//         //       });
          
//         //       });
           
//         // })
//         // .catch((err) => {
//         //     //console.log('Error getting documents', err);
//         //     firestore.collection('users').where("pin", "==", 1234).get()
//         // .then((qsnapshot) => {
    
//         //     qsnapshot.forEach(doc => {
//         //         //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);  
//         //         response.send({
//         //           speech: `Your username:${doc.data().result}`
//         //       });
          
//         //       });
           
//         // })
//         //     // response.send({
//         //     //     speech: "too big data to fetch"
//         //     // })
//         // })

//         // break;

//         // case 'user_check':
//         // //let p_params=request.body.result.parameters;
//         // p_params_p=1234;
//         // pp=p_params_p;
       
//         // firestore.collection('users').where("pin", "==", pp).get()
//         // .then((qsnapshot) => {
    
//         //     qsnapshot.forEach(doc => {
//         //         //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);  
//         //         response.send({
//         //           speech: `Your username:${doc.data().username}`
//         //       });
          
//         //       });
           
//         // })
//         // break;

//        default:
//        response.send({
//         speech: "no action matched in webhook"
//     });
// }
   

// });




const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

var firestore=admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.webhook = functions.https.onRequest((request, response) => {
switch(request.body.result.action){
    case 'branch_address': 
   

    firestore.collection('users').get()
                .then((querySnapshot) => {

                    var orders = [];
                    var speech='';
                    querySnapshot.forEach((doc) => { orders.push(doc.data()) });
                    // now orders have something like this [ {...}, {...}, {...} ]

                    // converting array to speech
                    

                    orders.forEach((eachOrder, index) => {
                       if(eachOrder.pin==request.body.result.parameters['pin_for_branch_addr']){
                        speech+=`Your branch Address is ${eachOrder.branch_address}`
                       }
                      
                    })

                    response.send({
                        speech: speech
                    });
                })
                .catch((err) => {
                    console.log('Error getting documents', err);

                    response.send({
                        speech: "something went wrong when reading from database"
                    })
                })
                break;

                case 'check_balance':
                firestore.collection('users').get()
                .then((querySnapshot) => {

                    var orders = [];
                    var speech='';
                    querySnapshot.forEach((doc) => { orders.push(doc.data()) });

                    orders.forEach((eachOrder, index) => {
                       if(eachOrder.pin==request.body.result.parameters['pin_id']){
                        if(request.body.result.parameters['account_type']=="current"){
                            
                                speech += `Current Account balance is ${eachOrder.current_account_balance}` 
                        }else{
                         
                                speech += `Savings Account balance is ${eachOrder.saving_account_balance}`
                              }
                            }
                      
                    })

                    response.send({
                        speech: speech
                    });
                })
                .catch((err) => {
                    console.log('Error getting documents', err);

                    response.send({
                        speech: "something went wrong when reading from database"
                    })
                })
                break;
                // case 'transfer_money':
//     //     let param1 = request.body.result.parameters;
//     //     var pin_number=param1.pin_no;
//     //     var account_no=param1.acc_no;
//     //     var account_type1=param1.acc_type;
//     //     var amount=param1.amount_to_transfer;
//     //     var pin_number_account;
//     //     if(account_type1=="current"){
            
//     //        // var speech1="";
//     //         //Tranfering

//     //         var user=firestore.collection('users').where('account_number', '==',parseInt(account_no)).get()
//     //         .then(snapshot => {
//     //             snapshot.forEach(doc => {
//     //                 var totalAmount= doc.data().saving_account_balance + parseInt(amount);
//     //                 doc.ref.update({saving_account_balance : totalAmount});
//     //               //  console.log(doc.data());
//     //             });
//     //         });
          

//     //      //after transfering then deduction!
//     //     var NewCurrentAmount="";
//     //     var user_pin=firestore.collection('users').where('pin', '==',pin_number).get()
//     //         .then(snapshot => {
//     //             snapshot.forEach(doc => {
//     //                 var DeductedAmount= doc.data().current_account_balance - parseInt(amount);
//     //                 doc.ref.update({current_account_balance : DeductedAmount});
//     //                // console.log(doc.data());
//     //                 response.send({
//     //                     speech:`${amount} rupees has been transfered to account no:${account_no}`
//     //               });
//     //             });
//     //         });
               

//     //         //getting account number of user who will be transfering money

//     //         var user_x=firestore.collection('users').where('pin', '==',pin_number).get()
//     //         .then(snapshot => {
//     //             snapshot.forEach(doc => {
//     //                 pin_number_account= doc.data().account_number;
//     //                  //Update Recent Transaction of user who will be transfering money!
//     //                 var user_1_transaction=firestore.collection('users').where('account_number', '==',pin_number_account).get()
//     //                 .then(innersnapshot => {
//     //                     innersnapshot.forEach(innerdoc => {
//     //                         //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);
//     //                         recent_trans=`You have Sent ${amount} To Account Number:${account_no} from Your Current Account`;
//     //                         innerdoc.ref.update({recent_transaction : recent_trans});
//     //                        // console.log(innerdoc.data());
//     //                     });
//     //                 });
//     //             });
//     //         });

//     //         //console.log("pin number "+pin_number_account);
            
         

//     //        // Update Recent Transaction of user who will be Recieving money!
//     //        var user_2_transaction=firestore.collection('users').where('account_number', '==',account_no).get()
//     //        .then(snapshot => {
//     //            snapshot.forEach(doc => {
//     //              //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);
//     //                  recent_trans_1=`You have Recieved ${amount} From Account Number:${pin_number_account} To Your Savings Account`;
//     //                doc.ref.update({recent_transaction : recent_trans_1});
//     //              //  console.log(doc.data());
//     //            });
//     //        });
      
//     // }else{
//     //      // var speech1="";
//     //         //Tranfering

//     //         var user_saving=firestore.collection('users').where('account_number', '==',parseInt(account_no)).get()
//     //         .then(snapshot => {
//     //             snapshot.forEach(doc => {
//     //                 var totalAmount1= doc.data().saving_account_balance + parseInt(amount);
//     //                 doc.ref.update({saving_account_balance : totalAmount1});
//     //                 //console.log(doc.data());
//     //             });
//     //         });
//     //         //console.log(doc);
              
//     //         //after transfer
//     //     // firestore.collection('users').set({current_account_balance=current_account_balance-amount}).where("pin", "==", pin_number).get()
//     //     // .then((querySnapshot) => {

//     //     //     var users = [];
//     //     //     querySnapshot.forEach((doc) => { users.push(doc.data()) });
//     //     //     users.forEach((eachUsers, index) => {
//     //     //         speech1 += `Updated Current Account balance is ${eachUsers.current_account_balance}`
//     //     //     })
//     //     var NewCurrentAmount1="";
//     //     var user_pin1=firestore.collection('users').where('pin', '==',pin_number).get()
//     //         .then(snapshot => {
//     //             snapshot.forEach(doc => {
//     //                 var DeductedAmount2= doc.data().saving_account_balance - parseInt(amount);
//     //                 doc.ref.update({saving_account_balance : DeductedAmount2});
//     //                // console.log(doc.data());
//     //                 response.send({
//     //               speech:`${amount} rupees has been transfered to account no: ${account_no}`
//     //         });
//     //             });
//     //         });
               
            
//     //     // })
//     //   //getting account number of user who will be transfering money

//     //   var user_y=firestore.collection('users').where('pin', '==',pin_number).get()
//     //   .then(snapshot => {
//     //       snapshot.forEach(doc => {
//     //           pin_number_account= doc.data().account_number;
//     //            //Update Recent Transaction of user who will be transfering money!
//     //           var user_n_transaction=firestore.collection('users').where('account_number', '==',pin_number_account).get()
//     //           .then(innersnapshot => {
//     //               innersnapshot.forEach(innerdoc => {
//     //                   //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);
//     //                   recent_transc=`You have Sent ${amount} To Account Number:${account_no} from Your Savings Account`;
//     //                   innerdoc.ref.update({recent_transaction : recent_transc});
//     //                     // Update Recent Transaction of user who will be Recieving money!
//     //                     var user_m_transaction=firestore.collection('users').where('account_number', '==',account_no).get()
//     //                     .then(snapshot => {
//     //                         snapshot.forEach(doc => {
//     //                         //  var totalAmount= doc.data().saving_account_balance + parseInt(amount);
//     //                             recent_trans_2=`You have Recieved ${amount} From Account Number: ${pin_number_account} To Your Savings Account`;
//     //                             doc.ref.update({recent_transaction : recent_trans_2});
//     //                            // console.log(doc.data());
//     //                         });
//     //                     });
//     //               });
//     //           });
//     //       });
//     //   });

//     //   //console.log("pin number "+pin_number_account);
      
   

   

//     // }
case 'transfer_money':
if(request.body.result.parameters['acc_type']=='current'){
var pin_number_account='';

    firestore.collection('users').get()
                .then((querySnapshot) => {

                    var orders = [];
                    var speech='';
                    
                   
                    querySnapshot.forEach((doc) => { orders.push(doc) });
                    // now orders have something like this [ {...}, {...}, {...} ]

                    // converting array to speech
                    

                    orders.forEach((eachOrder, index) => {
                        var data1=eachOrder.data();
                       if(data1.account_number==request.body.result.parameters['acc_no']){
                        var totalAmount= data1.saving_account_balance + parseInt(request.body.result.parameters['amount_to_transfer']);
                        eachOrder.ref.update({saving_account_balance : totalAmount});
                        // recent_trans_1=`You have Recieved ${request.body.result.parameters['amount_to_transfer']} From Account Number:${pin_number_account} To Your Savings Account`;
                        // eachOrder.ref.update({recent_transaction : recent_trans_1});
     
                       }
                       if(data1.pin==request.body.result.parameters['pin_no']){
                           pin_number_account=data1.account_number;
                        var DeductedAmount= data1.current_account_balance - parseInt(request.body.result.parameters['amount_to_transfer']);
                        eachOrder.ref.update({current_account_balance : DeductedAmount});
                        speech+=`${request.body.result.parameters['amount_to_transfer']} rupees has been transfered to account no:${request.body.result.parameters['acc_no']}`
                        
                        //var totalAmount= data1.saving_account_balance + parseInt();
                            recent_trans=`You have Sent ${request.body.result.parameters['amount_to_transfer']} To Account Number:${request.body.result.parameters['acc_no']} from Your Current Account`;
                            eachOrder.ref.update({recent_transaction : recent_trans});
                       }


                    })

                  
                })
                .catch((err) => {
                    console.log('Error getting documents', err);

                    response.send({
                        speech: "something went wrong when reading from database"
                    })
                })


                firestore.collection('users').get()
                .then((querySnapshot) => {

                    var orders = [];
                   
                    
                   
                    querySnapshot.forEach((doc) => { orders.push(doc) });
                    // now orders have something like this [ {...}, {...}, {...} ]

                    // converting array to speech
                    

                    orders.forEach((eachOrder, index) => {
                        var data1=eachOrder.data();
                        if(data1.account_number==request.body.result.parameters['acc_no']){
                            recent_trans_1=`You have Recieved ${request.body.result.parameters['amount_to_transfer']} To Your Savings Account`;
                        eachOrder.ref.update({recent_transaction : recent_trans_1});
                        }

                    })

                  
                })
                .catch((err) => {
                    console.log('Error getting documents', err);

                    response.send({
                        speech: "something went wrong when reading from database"
                    })
                })



                response.send({
                    speech: `Transfer Complete:${request.body.result.parameters['amount_to_transfer']} has been sent to Account Number:${request.body.result.parameters['acc_no']}`
                });
            }else{
                var pin_number_account='';

    firestore.collection('users').get()
                .then((querySnapshot) => {

                    var orders = [];
                    var speech='';
                    
                   
                    querySnapshot.forEach((doc) => { orders.push(doc) });
                    // now orders have something like this [ {...}, {...}, {...} ]

                    // converting array to speech
                    

                    orders.forEach((eachOrder, index) => {
                        var data1=eachOrder.data();
                       if(data1.account_number==request.body.result.parameters['acc_no']){
                        var totalAmount= data1.saving_account_balance + parseInt(request.body.result.parameters['amount_to_transfer']);
                        eachOrder.ref.update({saving_account_balance : totalAmount});
                        // recent_trans_1=`You have Recieved ${request.body.result.parameters['amount_to_transfer']} From Account Number:${pin_number_account} To Your Savings Account`;
                        // eachOrder.ref.update({recent_transaction : recent_trans_1});
     
                       }
                       if(data1.pin==request.body.result.parameters['pin_no']){
                           pin_number_account=data1.account_number;
                        var DeductedAmount= data1.current_account_balance - parseInt(request.body.result.parameters['amount_to_transfer']);
                        eachOrder.ref.update({saving_account_balance : DeductedAmount});
                        speech+=`${request.body.result.parameters['amount_to_transfer']} rupees has been transfered to account no:${request.body.result.parameters['acc_no']}`
                        
                        //var totalAmount= data1.saving_account_balance + parseInt();
                            recent_trans=`You have Sent ${request.body.result.parameters['amount_to_transfer']} To Account Number:${request.body.result.parameters['acc_no']} from Your Savings Account`;
                            eachOrder.ref.update({recent_transaction : recent_trans});
                       }


                    })

                  
                })
                .catch((err) => {
                    console.log('Error getting documents', err);

                    response.send({
                        speech: "something went wrong when reading from database"
                    })
                })


                firestore.collection('users').get()
                .then((querySnapshot) => {

                    var orders = [];
                   
                    
                   
                    querySnapshot.forEach((doc) => { orders.push(doc) });
                    // now orders have something like this [ {...}, {...}, {...} ]

                    // converting array to speech
                    

                    orders.forEach((eachOrder, index) => {
                        var data1=eachOrder.data();
                        if(data1.account_number==request.body.result.parameters['acc_no']){
                            recent_trans_1=`You have Recieved ${request.body.result.parameters['amount_to_transfer']} To Your Savings Account`;
                        eachOrder.ref.update({recent_transaction : recent_trans_1});
                        }

                    })

                  
                })
                .catch((err) => {
                    console.log('Error getting documents', err);

                    response.send({
                        speech: "something went wrong when reading from database"
                    })
                })



                response.send({
                    speech: `Transfer Complete:${request.body.result.parameters['amount_to_transfer']} has been sent to Account Number:${request.body.result.parameters['acc_no']}`
                });
            }
            //for trnsferring from savings account

            

break;

case 'pin_change':
    // let pin_change_params=request.body.result.parameters;
    //     pin_nooo=pin_change_params.pin_noo;
    //     pin_pass=pin_change_params.user_password;
    //     new_pin_no=pin_change_params.new_pin;

firestore.collection('users').get()
.then((querySnapshot) => {

    var orders = [];
    var speech='';
    querySnapshot.forEach((doc) => { orders.push(doc) });
    // now orders have something like this [ {...}, {...}, {...} ]

    // converting array to speech
    

    orders.forEach((eachOrder, index) => {
        var data=eachOrder.data();
       if(data.pin==request.body.result.parameters['pin_noo'] && data.password==request.body.result.parameters['user_password']){
        
            eachOrder.ref.update({pin :request.body.result.parameters['new_pin']});            
            //  console.log(doc.data());
        
        //
       

      
        speech+=`PIN number changed successfully.`
        
       }
      
    })

    response.send({
        speech: speech
    });
})
.catch((err) => {
    console.log('Error getting documents', err);

    response.send({
        speech: "something went wrong when reading from database"
    })
})
break;

case 'view_transaction':
firestore.collection('users').get()
.then((querySnapshot) => {

    var orders = [];
    var speech='';
    querySnapshot.forEach((doc) => { orders.push(doc.data()) });

    orders.forEach((eachOrder, index) => {
       if(eachOrder.pin==request.body.result.parameters['pinn']){
      speech+=`Recent Transaction Details: ${eachOrder.recent_transaction}`
       }
    })

    response.send({
        speech: speech
    });
})
.catch((err) => {
    console.log('Error getting documents', err);

    response.send({
        speech: "something went wrong when reading from database"
    })
})



break;

case 'loan_availability':
var loan='';
firestore.collection('users').get()
.then((querySnapshot) => {

    var orders = [];
    var speech='';
    querySnapshot.forEach((doc) => { orders.push(doc.data()) });

    orders.forEach((eachOrder, index) => {
       if(eachOrder.pin==request.body.result.parameters['pin_for_loan']){
        if(eachOrder.loan_available=='true'){
            
                speech+="Loan is Available for You!"
        
        }else{
            
            speech+="Loan is not Available for You!"
        }
       }
    })

    response.send({
        speech: speech
    });
})
    break;

    case 'IFSC':
      
       
    firestore.collection('users').get()
    .then((querySnapshot) => {

        var orders = [];
        var speech='';
        querySnapshot.forEach((doc) => { orders.push(doc.data()) });
        // now orders have something like this [ {...}, {...}, {...} ]

        // converting array to speech
        

        orders.forEach((eachOrder, index) => {
           if(eachOrder.pin==request.body.result.parameters['pin_for_ifsc']){
            speech+=`Your IFSC Code is ${eachOrder.ifsc_code}`
           }
          
        })

        response.send({
            speech: speech
        });
    })
    .catch((err) => {
        console.log('Error getting documents', err);

        response.send({
            speech: "something went wrong when reading from database"
        })
    })
            break;

            case 'block_credit_card':
            
            firestore.collection('users').get()
.then((querySnapshot) => {

    var orders = [];
    var speech='';
    querySnapshot.forEach((doc) => { orders.push(doc) });
    // now orders have something like this [ {...}, {...}, {...} ]

    // converting array to speech
    

    orders.forEach((eachOrder, index) => {
        var data2=eachOrder.data();
       if(data2.pin==request.body.result.parameters['pin_for_blocking_cc']){
            var status='deactive';
            eachOrder.ref.update({credit_card_status :status});            
            //  console.log(doc.data());
      
        speech+=`Credit Card Blocked Successfully successfully.`

       }
      
    })

    response.send({
        speech: speech
    });
})
.catch((err) => {
    console.log('Error getting documents', err);

    response.send({
        speech: "something went wrong when reading from database"
    })
})
                break;

                case 'block_debit_card':
            
                firestore.collection('users').get()
    .then((querySnapshot) => {
    
        var orders = [];
        var speech='';
        querySnapshot.forEach((doc) => { orders.push(doc) });
        // now orders have something like this [ {...}, {...}, {...} ]
    
        // converting array to speech
        
    
        orders.forEach((eachOrder, index) => {
            var data2=eachOrder.data();
           if(data2.pin==request.body.result.parameters['pin_for_blocking_dc']){
                var status='deactive';
                eachOrder.ref.update({debit_card_status :status});            
                //  console.log(doc.data());
          
            speech+=`Debit Card Blocked Successfully successfully.`
    
           }
          
        })
    
        response.send({
            speech: speech
        });
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    
        response.send({
            speech: "something went wrong when reading from database"
        })
    })
                    break;
    

      case 'activate_debit_card':
            
                    firestore.collection('users').get()
        .then((querySnapshot) => {
        
            var orders = [];
            var speech='';
            querySnapshot.forEach((doc) => { orders.push(doc) });
            // now orders have something like this [ {...}, {...}, {...} ]
        
            // converting array to speech
            
        
            orders.forEach((eachOrder, index) => {
                var data3=eachOrder.data();
               if(data3.pin==request.body.result.parameters['pin_for_activating_dc']){
                    var status='active';
                    eachOrder.ref.update({debit_card_status :status});            
                    //  console.log(doc.data());
              
                speech+=`Debit Card Activated Successfully successfully.`
        
               }
              
            })
        
            response.send({
                speech: speech
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        
            response.send({
                speech: "something went wrong when reading from database"
            })
        })
                        break;

             case 'activate_credit_card':
            
            firestore.collection('users').get()
            .then((querySnapshot) => {
            
                var orders = [];
                var speech='';
                querySnapshot.forEach((doc) => { orders.push(doc) });
                // now orders have something like this [ {...}, {...}, {...} ]
            
                // converting array to speech
                
            
                orders.forEach((eachOrder, index) => {
                    var data4=eachOrder.data();
                   if(data4.pin==request.body.result.parameters['pin_for_activating_cc']){
                        var status='active';
                        eachOrder.ref.update({credit_card_status :status});            
                        //  console.log(doc.data());
                  
                    speech+=`Credit Card Activated Successfully successfully.`
            
                   }
                  
                })
            
                response.send({
                    speech: speech
                });
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            
                response.send({
                    speech: "something went wrong when reading from database"
                })
            })
                            break;
            default:
            response.send({
                speech: "No Action Matched in WebHook"
            })
}


});



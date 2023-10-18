//  Check-out Cart 
// Happy Path 
    // User is able to check out items with no issue
    // User pays
        // cash
        // card
        // gift card
        // pay app
    // User can see total price of all items
    // Selected items are availble to view
    // User able to delete any items they dont want anymore
    // User able to add last minute items to cart
    // User able to check-out without account
    // User able to login to account 

// ___________________________________________________________________________________________________________________

// Unhappy Path
    // User selects item that is out of stock
    // payment method continues to fail
        // gift card not accepted
        // insufficient funds
    // User unable to log into account
    // user unable to proceed to checkout without an account

// ___________________________________________________________________________________________________________________

// Specs
    // At checkout user should be greeted with the decision to sign up for an account or continue as a guest 
    // Send error message if cart is empty
    // User pay information should be collected 
        // send error if it cant be processed, try a different payment method
        // different pay methods available 
    // User shipping should be collected 
        // send error if address is incorrect or doesnt exist 
    // different shipping days and costs available
    // At checkout subtotal and estimated tax should be included in the total price and shown
    // Purchase summary should be shown before finalizing payment


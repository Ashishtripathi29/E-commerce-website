const express=require("express")
const usercontroller=require("../controller/userController")
const productcontroller=require("../controller/productController")
const cartcontroller=require("../controller/cartController")
const orderController=require("../controller/orderController")
const auth=require("../middle/auth")

const router = express.Router();


// user 
router.post("/register", usercontroller.createUser)
router.post("/login",usercontroller.loginUser)
router.get("/user/:userId/profile",auth.authentication, usercontroller.getById)
router.put("/user/:userId/profile",auth.authentication,auth.Authorization,usercontroller.updateUser)



// product

router.post("/products" ,productcontroller.createProduct)
router.get("/products", productcontroller.getproduct)
router.get("/products/:productId", productcontroller.getProductList)
router.put("/products/:productId", productcontroller.updateProduct)
router.delete("/products/:productId", productcontroller.deleteProduct)


// cart
router.post("/users/:userId/cart",auth.authentication,auth.Authorization,cartcontroller.createCart)
router.put("/users/:userId/cart",auth.authentication,auth.Authorization,cartcontroller.updateCart)
router.get("/users/:userId/cart",auth.authentication,auth.Authorization,cartcontroller.getCartData)
router.delete("/users/:userId/cart",auth.authentication,auth.Authorization,cartcontroller.deleteCartProducts)



// order

router.post("/users/:userId/orders",auth.authentication,auth.Authorization,orderController.createOreder)
router.put("/users/:userId/orders",auth.authentication,auth.Authorization,orderController.updateOrder)

router.all("/**", function (req, res) {         
    res.status(400).send({
        status: false,
        msg: "The api you request is not available"
    })
})




module.exports=router;
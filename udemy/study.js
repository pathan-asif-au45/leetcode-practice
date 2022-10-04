const path = require("path")

const express = require("express")



const app = express()


app.set("view engine", "ejs")
app.set("veiws", "views")

const adminRoutes = require("./routes/admin")

const shopRoutes = require("./routes/shop")

const bodyParser = require("body-parser")
const errorController = require("./controllers/error")


app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)

app.use(shopRoutes)
app.use(express.static(path.join(__dirname, "public")))

app.use(errorController.get404)





app.listen(3000)
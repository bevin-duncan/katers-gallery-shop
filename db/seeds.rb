# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Clearing db..."
User.destroy_all
Product.destroy_all
Order.destroy_all
Cart.destroy_all

puts "Making Users👤..."
User.create(
    username:'Admin1',
    firstname:'Beezle', 
    lastname: "Bub",
    address:'1122 Boogey Boogey Ave',
    city: 'Disneyland', 
    state: 'California', 
    zip: '91521',
    phone:"877-764-2539",
    email: "luciferrocks@hell.com",
    password: 'password', 
    admin:true
)

User.create(
    username:'User2',
    firstname:'Lilith', 
    lastname: "Faire",
    address:'1234 Knocking Door Ave',
    city: 'New York', 
    state: 'New York', 
    zip: '98776',
    phone:"111-111-1111",
    email: "lilithrocks@hell.com",
    password: 'password1'
)

puts "Making Products💄..." 

   Product.create(
    name: "Octo Pack",
    description: "Custom Octo backpack",
    image: "backpack1.jpg",
    price: 150.00,
    quantity: 5,
    sku: "KZ4536"
   )

   Product.create(
    name: "Shroom Pack",
    description: "Custom Shroom backpack",
    image: "Backpack2.jpg",
    price: 150.00,
    quantity: 5,
    sku: "KZ8873"
   )
   Product.create(
    name: "Kater Face Bandanna",
    description: "Custom Kater bandanna for your face or whatever",
    image: "bandanna.png",
    price: 30.00,
    quantity: 10,
    sku: "MZ3563"
   )
   Product.create(
    name: "Kater Beanie (Tan)",
    description: "Way better than Carh*rtt",
    image: "beanie1.jpg",
    price: 60.00,
    quantity: 7,
    sku: "LK8765"
   )
   Product.create(
    name: "Kater Beanie (Blue)",
    description: "Keep your dome warm",
    image: "beanie2.jpg",
    price: 60.00,
    quantity: 7,
    sku: "LK0987"
   )
   Product.create(
    name: "Kater Camper",
    description: "Great for your smallest friends",
    image: "camper.png",
    price: 45.00,
    quantity: 3,
    sku: "FG6353"
   )
   Product.create(
    name: "Alchemist Skateboard Deck",
    description: "Kickflip lead to gold",
    image: "deck1.JPG",
    price: 650.00,
    quantity: 1,
    sku: "MK3455"
   )
   Product.create(
    name: "Centipede Skateboard Deck",
    description: "Creepy Crawly Ollie",
    image: "deck2.jpg",
    price: 650.00,
    quantity: 1,
    sku: "MK9345"
   )
   Product.create(
    name: "Kater Gumball Machine",
    description: "Put a quarter in, see what comes out",
    image: "gumballmachine.jpg",
    price: 75.00,
    quantity: 3,
    sku: "DS7364"
   )
   Product.create(
    name: "Kater Hoodie",
    description: "The cacti are freaking out",
    image: "hoodie.png",
    price: 50.00,
    quantity: 10,
    sku: "RE7363"
   )
   Product.create(
    name: "Kater Keychains",
    description: "Dudding out your house keys",
    image: "keychains.png",
    price: 25.00,
    quantity: 30,
    sku: "WQ9876"
   )
   Product.create(
    name: "Kater Mask",
    description: "For your deadly pandemic style needs",
    image: "mask.jpg",
    price: 40.00,
    quantity: 10,
    sku: "RW2635"
   )
   Product.create(
    name: "Kater Mousepad",
    description: "Pretty sure this is a mousepad",
    image: "mousepad.jpg",
    price: 30.00,
    quantity: 15,
    sku: "XC8374"
   )
   Product.create(
    name: "Kater Cutie Pineapple Pin",
    description: "Cute, no?",
    image: "pin.png",
    price: 25.00,
    quantity: 30,
    sku: "QA8726"
   )
   Product.create(
    name: "Kater Face Sticker Set",
    description: "Makes for easy vandalism",
    image: "sticker2.png",
    price: 25.00,
    quantity: 50,
    sku: "PO8736"
   )
   Product.create(
    name: "Kater Yell Sticker Set",
    description: "Slap it on something, like your bumper",
    image: "sticker3.png",
    price: 25.00,
    quantity: 50,
    sku: "TR8233"
   )
   Product.create(
    name: "Kater Cute Stickers",
    description: "Cute slap vandalism or just decoration if you don't want to go to jail",
    image: "stickers1.png",
    price: 25.00,
    quantity: 50,
    sku: "WT6354"
   )
   Product.create(
    name: "Kater Tank",
    description: "Warm day duds",
    image: "tank1.jpg",
    price: 45.00,
    quantity: 30,
    sku: "CD9374"
   )
   Product.create(
    name: "Kater Tapestry",
    description: "Time to replace that Beiber poster",
    image: "tapestry.png",
    price: 50.00,
    quantity: 20,
    sku: "PM3425"
   )
   Product.create(
    name: "Kater Toy Truck",
    description: "In case you don't have a big one to mural",
    image: "toytruck.png",
    price: 45.00,
    quantity: 10,
    sku: "SA3522"
   )
   Product.create(
    name: "Kater Trash Can Set (Blue & White)",
    description: "Not for putting real trash in",
    image: "trash1.JPG",
    price: 65.00,
    quantity: 5,
    sku: "CV8274"
   )
   Product.create(
    name: "Kater Trash Can Set (Pink & Green)",
    description: "You could probably fit some really small trash inside",
    image: "trash2.JPG",
    price: 65.00,
    quantity: 5,
    sku: "TS8374"
   )
   Product.create(
    name: "Kater Purple Demon Hat",
    description: "Purple demon for your dome",
    image: "truckerhat1.jpg",
    price: 100.00,
    quantity: 10,
    sku: "YS7384"
   )
   Product.create(
    name: "Kater Yellow Demon Hat",
    description: "Yellow demon for your dome",
    image: "truckerhat2.jpg",
    price: 100.00,
    quantity: 10,
    sku: "FD2928"
   )
   Product.create(
    name: "Kater Custom Tee",
    description: "Never the same, always sick",
    image: "tshirt1.jpeg",
    price: 75.00,
    quantity: 30,
    sku: "JD7364"
   )
   Product.create(
    name:"Comissioned Canvas Consultation",
    description: "Consultation fee for custom canvas. Actual price based on size and content",
    image:"custompiece1.jpg",
    price: 50.00,
    quantity: 10000,
    sku: "WY83744"
   )
   Product.create(
    name: "Comissioned Box Truck Mural",
    description: "Let me paint your truck. (Price doesn't include travel/material costs)",
    image: "boxtruck.png",
    price: 3000.00,
    quantity: 1000000,
    sku: "QB6354"
   )
   Product.create(
    name: "Kater Tattooo Consultation",
    description: "Consultation fee for custom tattoo. Actual price depends on size, complexity, and duration of tattoo session",
    image: "tattoo.png",
    price: 50.00,
    quantity: 100000,
    sku: "WE8374"
   )
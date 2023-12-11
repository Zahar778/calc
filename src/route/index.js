// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів

// Підключіть інші файли роутів, якщо є
const calc = require('./calc')
// Об'єднайте файли роутів за потреби

router.use('/calc', calc)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router

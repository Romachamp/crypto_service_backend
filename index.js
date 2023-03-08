const express = require('express');

const app = express();

const mainRoute = require('./routes/main.route');

// app.use('/api', mainRoute);
//
// const PORT = 3000;
//
// app.listen(PORT);



// const cors=require("cors");
// const corsOptions ={
//     origin:'*',
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
// }
//
// app.use(cors(corsOptions)) // Use this after the variable declaration
//


const PORT = process.env.PORT || 3030;

app.use('/api', mainRoute);

app.listen(PORT, function (e) {
    console.log('server started');
});

// !!
// Зробити запити на 3 різних валюти.
// Запит адміна до сервера на відсилання emails має бути з ключем.
// Адмін має вказувати курс яких валют надсилати.
// Зробити кешування курсу у кожного провайдера курсу криптовалюти на 5 хв.
// закинути код на github
// TODO: Захостити веб сторінку на git Pages
// Закинути проект на хостинг.
// !!


// View
// TODO: Зробити «онлайн кабінет» з реєстрацією та відображенням курсом валют, налаштуванням підписок на розсилку.
// TODO: Онлайн кабінет адміна має мати відповідні до аміна можливості.


// Additional
// TODO: ADDITIONAL Зробити логування в файл.
// TODO: ADDITIONAL Додаток має бути покритий тестами

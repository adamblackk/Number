const express=require('express')

const app=express()

const port= process.env.PORT || 3000

app.listen(port)

app.get('/numbers', (req, res) => {

    let numbersArray = [];
    let request1 = req.query
    let rqKeys1 = Object.keys(request1)[1]
    let numberRq=request1[rqKeys1]
    console.log(`sayı:${rqKeys1}`)
    console.log(`sayıııı:${numberRq}`)
    // 1'den 100'e kadar olan sayıları diziye ekle
    for (var i = 1; i <= numberRq; i++) {
        numbersArray.push(i);
    }
    
    //console.log(numbersArray)
    // İstek içerisindeki sayıları içeren dizi
   
    let request2 = req.query
    let rqKeys2 = Object.keys(request2)[0]
    console.log(request2[rqKeys1])
    if(rqKeys2 == 'b'){
        numbersArray = numbersArray.filter(item => item > Number(request2[rqKeys2]))
    }
    else if(rqKeys2 == 'k'){
        numbersArray = numbersArray.filter(item => item < Number(request2[rqKeys2]))
    }
    else{
        //numbersArray = Object.keys(request2).length > 0 ? [] : numbersArray
    }
    console.log(rqKeys1)
    
    res.send({
        numbers: numbersArray
    })
})

    //-------------bu kodlar çalışıyor--------------
/* app.get('/numbers', (req, res) => {

    let numbersArray = [];

    // 1'den 100'e kadar olan sayıları diziye ekle
    for (var i = 1; i <= 100; i++) {
        numbersArray.push(i);
    }
    // İstek içerisindeki sayıları içeren dizi
    let request = req.query
    let rqKeys = Object.keys(request)[0]
    if(rqKeys == 'b'){
        numbersArray = numbersArray.filter(item => item > Number(request[rqKeys]))
    }
    else if(rqKeys == 'k'){
        numbersArray = numbersArray.filter(item => item < Number(request[rqKeys]))
    }
    else{
        numbersArray = Object.keys(request).length > 0 ? [] : numbersArray
    }
    console.log(rqKeys)
    
    res.send({
        numbers: numbersArray
    })
}) */


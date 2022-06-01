const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const aliens = {
    'humans':{
        'homeworld': 'Earth',
        'location': 'Alpha Quadrant',
        'features':'Rounded ears, hair on head and face (sometimes)',
        'interesting fact': 'Founded the United Federation of Planets after first contact with the Vulcans' ,
        'notable examples' : "James T. Kirk, Zephram Cochran, Abraham Lincoln",
        'image': ''
    },
    'vulcans':{
        'homeworld': 'Vulcan',
        'features':'Pointed ears, upward-curving eyebrows',
        'interesting fact': 'Practice an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Vulcan named Surak' ,
        'notable examples' : "Spock, T'Pol, Sarek",
        'image': ''
    },
    'klingons':{
        'homeworld': "Quo'nos",
        'distinguishing physical features':'Large stature, pronounced ridges on the forehead, stylized facial hair',
        'interesting fact': 'Highly skilled in weapons and battle. Their facial ridges were lost as the result of a virus in 2154, but were subsequently restored by 2269.' ,
        'notable examples' : "Worf, Kor, Kang",
        'image': ''
    },
    'romulans':{
        'homeworld': 29,
        'distinguishing physical features':'Shéyaa Bin Abraham-Joseph',
        'interesting fact': 'London, England' 
    },
    'borg':{
        'homeworld': 29,
        'distinguishing physical features':'Shéyaa Bin Abraham-Joseph',
        'interesting fact': 'London, England' 
    },
    'gorn':{
        'homeworld': 29,
        'distinguishing physical features':'Shéyaa Bin Abraham-Joseph',
        'interesting fact': 'London, England' 
    },
    'trill':{
        'homeworld': 29,
        'distinguishing physical features':'Shéyaa Bin Abraham-Joseph',
        'interesting fact': 'London, England' 
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:alienName', (request,response)=>{
    const aliensName = request.params.alienName.toLowerCase()
    if(aliens[aliensName]){
        response.json(aliens[aliensName])
    }else{
        response.json(aliens['humans'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
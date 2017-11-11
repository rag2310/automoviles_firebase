const firebase = require('firebase')

//configuracion de firebase
const config = require('./config')

const menu = require('./menu')

const page = require('page')

if (!firebase.apps.length) {
	firebase.initializeApp(config)
}

var db = firebase.database()

const main = document.querySelector('main')

const header = document.querySelector('header')

header.innerHTML = menu

page('/autos', function () {
		db.ref('automoviles').once('value').then((datos) => {
		const valores = datos.val()

		const keys = Object.keys(valores)
		var html = ''
		for(var i = 0; i < keys.length; i++) {
			const key = keys[i]
			const auto = valores[key]
			array.push(auto)
			html = html + `<h1>ID: ${key}</h1>
				<h2>Votos: ${auto.votos} 
			`
		}
		main.innerHTML = html
})
})

page()
var nicoRosberg = {
	name: "Nico Rosberg",
	nationality: "Germany",
	team: "Mercedes"
}

var lewisHamilton = {
	name: "Lewis Hamilton",
	nationality: "United Kingdom",
	team: "Mercedes"
}

var sebastianVettel = {
	name: "Sebastian Vettel",
	nationality: "Germany",
	team: "Ferrari"
}

var kimiRaikkonen = {
	name: "Kimi R&#228ikk&#246nen",
	nationality: "Finland",
	team: "Ferrari"
}

var maxVerstappen = {
	nationality: "The Netherlands",
	team: "Red Bull"
}

var danielRicciardo = {
	nationality: "Australia",
	team: "Red Bull"
}

var daniilKvyat = {
	name: "Daniil Kvyat",
	nationality: "Russia",
	team: "Red Bull"
}

var sergioPerez = {
	name: "Sergio Perez",
	nationality: "Mexico",
	team: "Force India"
}

var races = [
	{
		date: new Date('03/26/2017 7:00 AM'),
		name: "Australian Grand Prix",
		circuitName: "Melbourne Grand Prix Circuit",
		circuitImg: "melbourne.png",
		circuitLength: "5.303 km",
		laps: 58,
		raceDistance: "307.574 km",
		lapRecord: "1:24.125, Michael Schumacher (2004)",
		lastYear: [nicoRosberg, lewisHamilton, sebastianVettel],
		schedule: {
			practice1: new Date('03/24/2017 2:00 AM'),
			practice2: new Date('03/24/2017 6:00 AM'),
			practice3: new Date('03/25/2017 4:00 AM'),
			qualifying: new Date('03/25/2017 7:00 AM'),
			race: new Date('03/26/2017 7:00 AM')
		}
	},
	{
		date: new Date('04/09/2017 8:00 AM'),
		name: "Chinese Grand Prix",
		circuitName: "Shanghai International Circuit",
		circuitImg: "shanghai.png",
		circuitLength: "5.451 km",
		laps: 56,
		raceDistance: "305.066 km",
		lapRecord: "1:32.238, Michael Schumacher (2004)",
		lastYear: [nicoRosberg, sebastianVettel, daniilKvyat],
		schedule: {
			practice1: new Date('04/07/2017 4:00 AM'),
			practice2: new Date('04/07/2017 8:00 AM'),
			practice3: new Date('04/08/2017 6:00 AM'),
			qualifying: new Date('04/08/2017 9:00 AM'),
			race: new Date('04/09/2017 8:00 AM')
		}
	},
	{
		date: new Date('04/16/2017 5:00 PM'),
		name: "Bahrain Grand Prix",
		circuitName: "Bahrain International Circuit",
		circuitImg: "sakhir.png",
		circuitLength: "5.412 km",
		laps: 57,
		raceDistance: "308.238 km",
		lapRecord: "1:31.447, Pedro de la Rosa (2005)",
		lastYear: [nicoRosberg, kimiRaikkonen, lewisHamilton],
		schedule: {
			practice1: new Date('04/07/2017 1:00 PM'),
			practice2: new Date('04/07/2017 5:00 PM'),
			practice3: new Date('04/08/2017 2:00 PM'),
			qualifying: new Date('04/08/2017 5:00 PM'),
			race: new Date('04/16/2017 5:00 PM')
		}
	},
	{
		date: new Date('04/30/2017 2:00 PM'),
		name: "Russian Grand Prix",
		circuitName: "Sochi Autodrom",
		circuitLength: "5.848 km",
		circuitImg: "sochi.png",
		laps: 53,
		raceDistance: "309.745 km",
		lapRecord: "1:39.094, Nico Rosberg (2016)",
		lastYear: [nicoRosberg, lewisHamilton, kimiRaikkonen],
		schedule: {
			practice1: new Date('04/28/2017 10:00 AM'),
			practice2: new Date('04/28/2017 2:00 PM'),
			practice3: new Date('04/29/2017 11:00 AM'),
			qualifying: new Date('04/29/2017 2:00 PM'),
			race: new Date('04/30/2017 2:00 PM')
		}
	},
	{
		date: new Date('05/14/2017 2:00 PM'),
		name: "Gran Premio de Espa&#241;a",
		circuitName: "Circuit de Barcelona-Catalunya",
		circuitLength: "4.655 km",
		circuitImg: "barcelona.png",
		laps: 66,
		raceDistance: "307.104 km",
		lapRecord: "1:21.670, Kimi Raikkonen (2008)",
		lastYear: [maxVerstappen, kimiRaikkonen, sebastianVettel],
		schedule: {
			practice1: new Date('05/12/2017 10:00 AM'),
			practice2: new Date('05/12/2017 2:00 PM'),
			practice3: new Date('05/13/2017 11:00 AM'),
			qualifying: new Date('05/13/2017 2:00 PM'),
			race: new Date('05/14/2017 2:00 PM')
		}
	},
	{
		date: new Date('05/28/2017 2:00 PM'),
		name: "Monaco Grand Prix",
		circuitName: "Circuit de Monaco",
		circuitLength: "3.337 km",
		circuitImg: "monaco.png",
		laps: 78,
		raceDistance: "260.286 km",
		lapRecord: "1:17.939, Lewis Hamilton (2016)",
		lastYear: [lewisHamilton, danielRicciardo, sergioPerez],
		schedule: {
			practice1: new Date('05/26/2017 10:00 AM'),
			practice2: new Date('05/26/2017 2:00 PM'),
			practice3: new Date('05/27/2017 11:00 AM'),
			qualifying: new Date('05/27/2017 2:00 PM'),
			race: new Date('05/28/2017 2:00 PM')
		}
	},
]


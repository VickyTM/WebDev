
//Created as a solution to "Murder in the Metropolitan" in the amazing book
//"Elemnetary Basic" by Henry Ledgard and Andrew Singer
//originally created to teach BASIC using the stories and elementary reasoning of one
//Sherlock Holmes. Holmes begins using The Analytic Engine to assist in  solving crimes
//and teach Holmes a little BASIC aong the way.
//Adapting the code to Javascript is rather fun and can be a little challenging
//In the early chapters, the code is provided (in BASIC) so trying to sort out their 
//alogorithms and translate them into JS is a great exercise.

/*var arrayOfSuspects = [
	{suspectName: 'col.mustard', color: 'yellow'},
	{suspectName: 'ms.peacock',color: 'purple'}
];

for (var i=0; i<arrayOfSuspects.length; i++) {
 console.log (arrayOfSuspects[i].suspectName)};*/

 //This was my testing of how to create an array of Objects and then disply them by id.

var Murderer = 'unknown';

var arrayOfSuspects = [
 	{'suspectName': 'Col. Woodley', 'attire': 'unknown', 'room': 'unknown', 'hair': 'unknown'}, 
 	{'suspectName': 'Mr. Holman', 'attire': 'Ruby Ring', 'room': 12, 'hair': 'unknown'},
 	{'suspectName': 'Mr. Pope', 'attire': 'Gold Watch','room': 'unknown', 'hair': 'unknown'},
 	{'suspectName': 'Sir Raymond', 'room': 10, 'attire': 'unknown','hair': 'unknown'}
 	];

function aFoot() {
	for (var i=0; i<arrayOfSuspects.length; i++) {
		if (arrayOfSuspects[i].hair === 'brown') {
			Murderer = arrayOfSuspects[i].suspectName;
		}
		else if (arrayOfSuspects[i].room === 14) {
			arrayOfSuspects[i].hair = 'black';
			console.log ('1st test');
		}
		else if (arrayOfSuspects[i].attire === 'pincenez') {
			arrayOfSuspects[i].hair = 'brown';
			console.log ('9th test');
		}

		else if (arrayOfSuspects[i].attire === 'tattered cuffs') {
			arrayOfSuspects[i].hair = 'red';
			console.log ('2nd test');
		}
		else if (arrayOfSuspects[i].room ===12) {
			arrayOfSuspects[i].hair = 'grey';
			console.log ('3rd test');
		}
		else if (arrayOfSuspects[i].attire === 'Gold Watch') {
			arrayOfSuspects[i].room = 14;
			console.log ('4th test');
		}
		else if (arrayOfSuspects[i].room === 16) {
			arrayOfSuspects[i].attire = 'tattered cuffs';
			console.log ('5th test');
		}
		else if (arrayOfSuspects[i].room === 10 && arrayOfSuspects[i].suspectName !== 'Col. Woodley') {
				arrayOfSuspects[0].room = 16;
				console.log ('6th test');
		}
		else if (arrayOfSuspects[i].room === 16 && arrayOfSuspects[i].suspectName !== 'Col. Woodley') {
				arrayOfSuspects[0].room = 10;
				console.log ('7th test');
		}		
		else if (arrayOfSuspects[3].attire === 'unknown') {
			arrayOfSuspects[3].attire = 'pincenez';
			console.log ('8th test');
		}
		else if (arrayOfSuspects[i].attire === 'pincenez') {
			arrayOfSuspects[i].hair = 'brown';
			console.log ('9th test');
		}
		else if (arrayOfSuspects[i].hair === 'brown') {
			Murderer = arrayOfSuspects[i].suspectName;
		}
		else (console.log ("this is turn number " + i))

	
};

console.log ("the murderer is " + Murderer);
console.log (arrayOfSuspects);
};

function myDearWatson() {
	do {
		aFoot();
	}
	while (Murderer === 'unknown');
	console.log ('The murderer is ' + Murderer);
};

myDearWatson();

//well, it will name the murderer but it doesn't loop through as many
//times as it should to complete each of the suspects attributes.
//might need to reorder some of the statements.
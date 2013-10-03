// namespace
var FRISBEEAPP = FRISBEEAPP || {}; //als FRISBEEAPP niet bestaat, wordt nieuw object aangemaakt


//self-invoking anonymous function //local scope == function scope == lexical scope
(function() {	

	// data objecten
	FRISBEEAPP.ranking = {
		teaminfo: [
			{
				team: "Burning Snow", 
				wins: "3",
				loss: "1",
				pointswon: "53",
				pointslost: "30",
				ranking: "+23"
			},{
				team: "Boomsquad",
				wins: "2",
				loss: "2",
				pointswon: "55",
				pointslost: "49",
				ranking: "+6"
			},{
				team: "Chasing",
				wins: "2",
				loss: "2",
				pointswon: "41",
				pointslost: "43",
				ranking: "-2"
			},{
				team: "Beast Amsterdam",
				wins: "2",
				loss: "2",
				pointswon: "46",
				pointslost: "49",
				ranking: "-3"
			},{
				team: "Amsterdam Money Gang",
				wins: "1",
				loss: "3",
				pointswon: "47",
				pointslost: "53",
				ranking: "-6"
			}
		]
	};

	FRISBEEAPP.schedule = {
		scheduleinfo: [
			{ date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
		    { date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
		    { date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
		    { date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
		    { date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},    
		    { date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
		    { date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
		    { date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
		    { date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
		    { date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
		]
	};

	FRISBEEAPP.game = {
		gameinfo: [
			{ score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
	        { score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
	        { score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
	        { score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
	        { score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
	        { score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
	        { score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
	        { score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
	        { score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
	        { score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
	        { score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
	        { score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
	        { score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
	        { score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
	        { score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
	        { score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
	        { score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
	        { score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
	        { score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
	        { score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
	        { score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
	        { score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
	        { score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
	    ]
	};

	// controller init
	FRISBEEAPP.controller = {
		init: function(){
			FRISBEEAPP.guide.init();
		}
	};

	// router
	FRISBEEAPP.guide = {
		init: function(){
			routie({
			    '/ranking': function(){
			    	FRISBEEAPP.page.loadRankingPage();
			    },
			    '/schedule': function(){
			    	FRISBEEAPP.page.loadSchedulePage();
			    },
			    '/game': function(){
			    	FRISBEEAPP.page.loadGamePage();
			    },
			    '*': function(){
			    	FRISBEEAPP.page.loadRankingPage();
			    }
			});
		},

		change: function () {
            var route = window.location.hash.slice(2),
                sections = qwery('section[data-route]'),
                section = qwery('[data-route=' + route + ']')[0];  

            // Show active section, hide all other
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');
            	}
            	section.classList.add('active');
            }

            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }

		}





	};

	// section
	FRISBEEAPP.page = {
		loadRankingPage: function () {
			Transparency.render(qwery('[data-route=ranking]')[0], FRISBEEAPP.ranking);
			FRISBEEAPP.guide.change();
		},

		loadSchedulePage: function () {
			Transparency.render(qwery('[data-route=schedule]')[0], FRISBEEAPP.schedule);
			FRISBEEAPP.guide.change();
		},

		loadGamePage: function () {
			Transparency.render(qwery('[data-route=game]')[0], FRISBEEAPP.game);
			FRISBEEAPP.guide.change();
		}
	}

	// DOM ready
	domready(function(){
		FRISBEEAPP.controller.init();
	});

})();
const typed = new Typed('.typed', {
    strings: ['Random Page...', 'Random Images', 'Random Texts', 'Enjoy it! :)'],
    typeSpeed: 90,
    startDelay: 300,
    backSpeed: 90,
    smartBackspace: true,
    loop: true,
});

Sortable.create(simpleList, {
	sort: true,
	delay: 5,
	dalayOnTouchOnly: false,
	animation: 150,
	easing: "cubic-bezier(1, 0, 0, 1)",
	ghostClass: "sortable-ghost",
	group: 'shared',

});

Sortable.create(simpleList1, {
	sort: true,
	delay: 5,
	dalayOnTouchOnly: false,
	animation: 150,
	easing: "cubic-bezier(1, 0, 0, 1)",
	ghostClass: "sortable-ghost",
	group: 'shared',

});

Sortable.create(simpleList2, {
	sort: true,
	delay: 5,
	dalayOnTouchOnly: false,
	animation: 150,
	easing: "cubic-bezier(1, 0, 0, 1)",
	ghostClass: "sortable-ghost",
	group: 'shared',

});

Sortable.create(simpleList3, {
	sort: true,
	delay: 5,
	dalayOnTouchOnly: false,
	animation: 150,
	easing: "cubic-bezier(1, 0, 0, 1)",
	ghostClass: "sortable-ghost",
	group: 'shared',

});


window.onload = function() {
  var elevator = new Elevator({
  	element: document.querySelector('.elevator-button'),
    mainAudio: 'music/elevator.mp3',
    endAudio: 'music/ding.mp3',
    duration: 8000,
  });
}

elevator.elevate();



<script>
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import DayGrid from '@event-calendar/day-grid';

	export let data;
	const { events } = data;

	let plugins = [TimeGrid, DayGrid];
	let options = {
		view: 'timeGridWeek',
		height: '800px',
		headerToolbar: {
			start: 'prev,next today',
			center: 'title',
			end: 'timeGridDay,timeGridWeek,dayGridMonth'
		},
		scrollTime: '09:00:00',
		views: {
			timeGridWeek: { pointer: true }
		},
		dayMaxEvents: true,
		nowIndicator: true,
		selectable: true,
		events: events
	};
</script>

<Calendar {plugins} {options} />

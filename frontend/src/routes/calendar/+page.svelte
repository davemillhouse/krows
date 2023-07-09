<script>
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import DayGrid from '@event-calendar/day-grid';
    import { redirect } from '@sveltejs/kit';

    function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

  const options = {
        eventClick: async (info) => {
          
            window.location.href = '/sessions/' + info.event.id;
            
        },
        datesSet: async (info) => {
            //TODO: get utc date from local date that is given here
          let startDate = addDays(info.start, 1).toISOString().split('T')[0];
          let endDate = addDays(info.end, 1).toISOString().split('T')[0];
          let callUrl = 'https://localhost:44300/' + 'events?fromDateTimeUtc=' + startDate + '&toDateTimeUtc=' + endDate;

      
            const res = await fetch(callUrl);
            const data = await res.json();
            options.events = data;
        },
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

    };

	let plugins = [TimeGrid, DayGrid];
	


</script>

<Calendar {plugins} {options} />

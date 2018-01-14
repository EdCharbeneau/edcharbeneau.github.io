              
function mapScheduleToTemplate(schedule, itemTemplate, filterBy) {
			return	schedule.filter(filterBy)
  							.sort((a,b) => new Date(a.date) - new Date(b.date))
                .map(i => itemTemplate(i)).join("");
}                
               
  function template(sch) {
  	return [
      '<li>',
       '<span>',
           sch.date,
        '<br/></span>',
      	'<a href="sessions/' + sch.session.url + '">',
          sch.session.title,
        '</a> ',
         ': ',
          sch.event,
          " - ",
        sch.location + ', ',
    	'</li>',
    ].join('');
  }
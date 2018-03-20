const mapScheduleToTemplate = (schedule, itemTemplate) => filterBy => 
        schedule.filter(filterBy)
                .sort((a,b) => new Date(a.date) - new Date(b.date))
                .map(i => itemTemplate(i)).join('');

const templateLiteral = dateFormat => sch =>
       `<li class='schedule-item'>
              <div class='row row-flex'>
              <div class='col-md-4'>
                  <div class='schedule-item-box'>
                   <span class='schedule-date'>${new Date(sch.date).toLocaleDateString("en-US", dateFormat)}</span>
                   <span class='schedule-location'>${sch.location}</span>
                  </div>
                </div>
                <div class='col-md-8'>
                  <div class='schedule-description'>
                    <h3><a href='sessions/${sch.session.url}'>${sch.session.title}</a></h3>
                    <p>${sch.event}</p>
                  </div>
                </div>
              </div>
            </li>`;
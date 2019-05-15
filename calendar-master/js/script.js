const appointment = {
    name: `Interface Development I`,
    day: {
        dayOfWeek: `Wednesday`,
        month: `May`,
        date: `15`,
        year: `2019`,
    },
    
    time: {
        start: `x`,
        end: `x`,

    },
    startTime: `8:00`,
    endTime: `15:00`,
    priority: `High`,
    reminderTime: `7:00`,
    location: {
        streetNum: `3`,
        streetName: `Lower Jarvis`,
        city: `Toronto`,
        country: `Canada`,
        province: `Ontario`,
        postalCode: 'N/A',
    },
    people: {
        firstName: `George`,
        lastName: `Brown`,
        },
    colour: `Red`,
    category: `school`

};

const formatAppointment = (appointment) => {
    return `
    <header class="cal-header">
        <h1 class="full-date">${appointment.day.dayOfWeek}, ${appointment.day.month} ${appointment.day.date}, ${appointment.day.year}</time></h1>
    </header>
    <li class="appt cat-school">${appointment.startTime} ${appointment.name}</li>

    ${appointment.name}
    ${appointment.day.dayOfWeek}, ${appointment.day.month} ${appointment.day.date}, ${appointment.day.year}
    ${appointment.startTime}
    ${appointment.endTime}
    ${appointment.priority}
    ${appointment.reminderTime}
    ${appointment.location.streetNum} ${appointment.location.streetName}
    ${appointment.people.firstName} ${appointment.people.lastName}
    ${appointment.colour}`

}

const convertMinToTime = (minOfDay) => {
    const hr = minOfDay / 60;
    const  
    return min / 60 

}

console.log(`Name: ${appointment.name}`);
console.log(`Day: ${appointment.day.dayOfWeek}, ${appointment.day.month} ${appointment.day.date}, ${appointment.day.year}`)
console.log(`Start time: ${appointment.startTime}`)
console.log(`End time: ${appointment.endTime}`)
console.log(`Priority: ${appointment.priority}`)
console.log(`Reminder time: ${appointment.reminderTime}`)
console.log(`Location: ${appointment.location.streetNum} ${appointment.location.streetName}`)
console.log(`Additional people: ${appointment.people.firstName} ${appointment.people.lastName}`)
console.log(`Appointment colour: ${appointment.colour}`)

// write a function called formatAppointment that takes an appointment object as an argument and returns a String of formatted HTML The return string should have all the relevant properties from the appointment object embedded within it, such that a different string would be returned for each appointment.

/*

<header class="cal-header">
        <h1 class="full-date"><time datetime="2019-05-08">Wednesday, May 8<sup>th</sup>, 2019</time></h1>
      </header>
      
      <main class="cal-main view-day">
        <section class="time-of-day tod-morning">
          <h2>Morning</h2>
          <ol class="appointments">
            <li class="appt cat-school">08:00 Interface Development 1</li>
            <li class="appt cat-social">11:00 Lunch</li>
          </ol>
        </section>
  
        <section class="time-of-day tod-afternoon">
          <h2>Afternoon</h2>
          <ol class="appointments">
            <li class="appt cat-school critical">12:00 Interface Development 1</li>
            <li class="appt">15:00 Commute</li>
          </ol>
        </section>
  
        <section class="time-of-day tod-evening">
          <h2>Evening</h2>
          <ol class="appointments">
            <li class="appt cat-home">17:30 Dinner</li>
            <li class="appt cat-work critical">19:00 Work on some JS Exampes</li>
          </ol>
        </section>
      </main>

      */


      // found at : https://www.w3resource.com/javascript-exercises/javascript-date-exercise-13.php

      function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (horhoururs - s) * 60;
        var rminutes = Math.round(minutes);
        return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
        }
        
        console.log(timeConvert(200));
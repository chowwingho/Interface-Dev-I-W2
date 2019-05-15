const appointment = {
    name: `Interface Development I`,
    day: {
        dayOfWeek: `Wednesday`,
        month: `May`,
        date: `15`,
        year: `2019`,
    },
    startTime: `8:00`,
    endTime: `15:00`,
    priority: `High`,
    reminderTime: `7:00`,
    location: {
        streetNum: `3`,
        streetName: `Lower Jarvis`,
    },
    people: {
        firstName: `George`,
        lastName: `Brown`,
        },
    colour: `Red`,

};

console.log(`Name: ${appointment.name}`);
console.log(`Day: ${appointment.day.dayOfWeek}, ${appointment.day.month} ${appointment.day.date}, ${appointment.day.year}`)
console.log(`Start time: ${appointment.startTime}`)
console.log(`End time: ${appointment.endTime}`)
console.log(`Priority: ${appointment.priority}`)
console.log(`Reminder time: ${appointment.reminderTime}`)
console.log(`Location: ${appointment.location.streetNum} ${appointment.location.streetName}`)
console.log(`Additional people: ${appointment.people.firstName} ${appointment.people.lastName}`)
console.log(`Appointment colour: ${appointment.colour}`)


const vned_is = "Внедрение ИС"
const test_is = "Тестирование ИС"
const techpod_is = "Инженерно-техническая поддержка ИС"
const diplom = "Консультации по дипломным работам"

const prep_pom = "Помыткин В.А."
const prep_sin = "Синенок В.Н."

const schedule = [
    "08:00 - 09:35",
    "09:45 - 11:20",
    "11:40 - 13:15",
    "13:25 - 15:00",
    "15:10 - 16:45",
    "16:55 - 18:30",
    "18:35 - 19:45"
]

const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();

let mainDiv = document.querySelector('#main');
const empty = "-"
/**
 * @param {string} time 
 * @param {string} subject 
 * @param {string} room 
 * @param {string} teacher 
 * @param {string} isBreak 
 */
function CreateCard(time = empty, subject = empty, room = empty, teacher = empty, add = 0) {
    if (add == -1) {

        let break2 = document.createElement("div")
        break2.className = "card break"
        mainDiv.appendChild(break2)

        let innercard2 = document.createElement("div") //перерыв
        innercard2.className = "inner-card ic-b"
        innercard2.id = "time"
        break2.appendChild(innercard2)
    }

    let card1 = document.createElement("div")
    card1.className = "card"
    mainDiv.appendChild(card1)

    let top1 = document.createElement("div")
    top1.className = "top"
    card1.appendChild(top1)
    let bottom1 = document.createElement("div")
    bottom1.className = "bottom"
    card1.appendChild(bottom1)

    let ic1 = document.createElement("div") //время
    ic1.className = "inner-card ic-1"
    ic1.innerText = time
    top1.appendChild(ic1)

    let ic2 = document.createElement("div") //предмет
    ic2.className = "inner-card ic-2"
    ic2.innerText = subject
    top1.appendChild(ic2)

    let ic3 = document.createElement("div") //аудитория
    ic3.className = "inner-card ic-3"
    ic3.innerText = "каб. " + room
    bottom1.appendChild(ic3)

    let ic4 = document.createElement("div") //препод
    ic4.className = "inner-card ic-4"
    ic4.innerText = teacher
    bottom1.appendChild(ic4)

    let ic5 = document.createElement("div") //время
    ic5.className = "inner-card ic-5"
    ic5.id = "time"
    ic5.innerText = "-"
    bottom1.appendChild(ic5)

    let break1 = document.createElement("div")
    break1.className = "card break"
    mainDiv.appendChild(break1)

    let innercard = document.createElement("div") //перерыв
    innercard.className = "inner-card ic-b"
    innercard.id = "time"
    break1.appendChild(innercard)
}

function CreateDay(day) {
    let dayDiv = document.createElement("div")
    dayDiv.className = "day"
    
    let minutes_
    if (minutes<10) minutes_ = `0${minutes}`
    else minutes_ = minutes
    dayDiv.innerText = `${day} ${hours}:${minutes_}`

    mainDiv.appendChild(dayDiv)
}

function Monday() {
    CreateDay("Понедельник")
    CreateCard(schedule[0], empty, empty, empty, -1)
    CreateCard(schedule[1])
    CreateCard(schedule[2])
    CreateCard(schedule[3])
    CreateCard(schedule[4])
    CreateCard(schedule[5])
    CreateCard(schedule[6])
}
function Tuesday() {
    CreateDay("Вторник")
    CreateCard(schedule[0], empty, empty, empty, -1)
    CreateCard(schedule[1])
    CreateCard(schedule[2])
    CreateCard(schedule[3])
    CreateCard(schedule[4], vned_is, 35, prep_sin)
    CreateCard(schedule[5], vned_is, 35, prep_sin)
    CreateCard(schedule[6])
}
function Wednesday() {
    CreateDay("Среда")
    CreateCard(schedule[0], empty, empty, empty, -1)
    CreateCard(schedule[1])
    CreateCard(schedule[2], test_is, 35, prep_pom)
    CreateCard(schedule[3], test_is, 35, prep_pom)
    CreateCard(schedule[4], techpod_is, 43, prep_pom)
    CreateCard(schedule[5], techpod_is, 43, prep_pom)
    CreateCard(schedule[6])
}
function Thursday() {
    CreateDay("Четверг")
    CreateCard(schedule[0], empty, empty, empty, -1)
    CreateCard(schedule[1])
    CreateCard(schedule[2])
    CreateCard(schedule[3])
    CreateCard(schedule[4], techpod_is, 35, prep_pom)
    CreateCard(schedule[5], techpod_is, 35, prep_pom)
    CreateCard(schedule[6])
}
function Friday() {
    CreateDay("Пятница")
    CreateCard(schedule[0], diplom, 35, prep_sin, -1)
    CreateCard(schedule[1], diplom, 35, prep_sin)
    CreateCard(schedule[2])
    CreateCard(schedule[3])
    CreateCard(schedule[4])
    CreateCard(schedule[5])
    CreateCard(schedule[6])
}
function Saturday() {
    CreateDay("Суббота")
    CreateCard(schedule[0], empty, empty, empty, -1)
    CreateCard(schedule[1])
    CreateCard(schedule[2])
    CreateCard(schedule[3])
    CreateCard(schedule[4])
    CreateCard(schedule[5])
    CreateCard(schedule[6])
}


function executeFunctionBasedOnDay() {
    const dayOfWeek = new Date().getDay(); // 0 - воскресенье, 1 - понедельник, ..., 6 - суббота
    const dayFunctions = [
        null, // Индекс 0 не используется, чтобы соответствовать 1-7
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        () => console.log("Воскресенье - нет функции для этого дня.") // Индекс 7 для воскресенья
    ];
    dayFunctions[dayOfWeek]();
}
executeFunctionBasedOnDay()
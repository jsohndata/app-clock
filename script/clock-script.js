/* Site */ 
const projectName = "Clock Project"

const renderTitle = paramWhat => document.title = paramWhat
const renderHTML = (paramWhere,paramWhat) => {
    document.querySelectorAll(paramWhere)[0].innerHTML = paramWhat 
}


/* Clock */ 
const leadingZero = paramWhat => paramWhat < 10 ? `0${paramWhat}` : paramWhat

const displayTime = () => {
    const currentDate = new Date()

    let nowHour   = leadingZero(currentDate.getHours())
    let nowMinute = leadingZero(currentDate.getMinutes())
    let nowSecond = leadingZero(currentDate.getSeconds())

    let nowTime = `${nowHour} <span>:</span> ${nowMinute} <span>:</span> ${nowSecond}`

    renderHTML('h2', nowTime)
    setTimeout(displayTime, 1000)
    
}


renderTitle(projectName)
renderHTML('h1',projectName)
displayTime()




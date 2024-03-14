

function isLeapYear(year) {
    return (year % 4 === 0 );
}

function agec() {
    let d1 = document.getElementById('date').value;
    let m1 = document.getElementById('Month').value;
    let y1 = document.getElementById('year').value;

    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();

    let leapYears = 0;
    for (let i = y1 + 1; i <= y2; i++) {
        if (isLeapYear(i)) {
            leapYears++;
        }
    }

    let totalDays = (y2 - y1 -1) * 365; 
    totalDays += leapYears; 

    
    for (let i = m1; i <= 12; i++) {
        totalDays += new Date(y1, i, 0).getDate();
    }
    totalDays -= d1; 

   
    for (let i = 1; i < m2; i++) {
        totalDays += new Date(y2, i, 0).getDate();
    }
    totalDays += d2; 

    let years =Math.floor(totalDays / 365); 
    let months =Math.floor( (totalDays % 365) / 30); 
    let days =Math.floor( (totalDays % 365) % 30);

    document.getElementById('age').innerHTML = `Your age is ${years} years, ${months} months, and ${days} days.`;
}

document.getElementById('button').addEventListener('click', agec);

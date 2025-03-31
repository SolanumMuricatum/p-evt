function clock(){
  const hourArrow = document.querySelector(".hourArrow");
  const minuteArrow = document.querySelector(".minuteArrow");
  const secondArrow = document.querySelector(".secondArrow");

  setInterval(()=>{

    const data = new Date();

    const hour = data.getHours() * 30;  //часовая стрелка перепрыгивает всегда на 360/12 = 30 градусов
    const minute = data.getMinutes() * 6; // минутная и секундная стрелки перепрыгивают на 360/12/5 = 6 градусов
    const second = data.getSeconds() * 6;

    hourArrow.style.transform = `rotateZ(${hour + (minute/12)}deg)`; //сколько градусов минуты влезут в градусы часа? 30/360 = 1/12, т.е. при + 1 минуте к часовым градусам прибавляем + 1/12 градуса
    minuteArrow.style.transform = `rotateZ(${minute}deg)`;
    secondArrow.style.transform = `rotateZ(${second}deg)`;

  }, 0);
}

clock();
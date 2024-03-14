
const courseOptions = [
    { value: "fullstack", label: "FULL STACK" },
    { value: "web", label: "WEB DEVELOPMENT" },
    { value: "sap", label: "SAP" },
    { value: "ims", label: "IMS" }
];
const createOptions = () => {
    const selectElement = document.getElementById("courseselection");
    courseOptions.forEach(course => {
        const option = document.createElement("option");
        option.value = course.value;
        option.textContent = course.label;
        selectElement.appendChild(option);
    });
};
createOptions();
const calculation = () => {
    let option = document.getElementById("courseselection").value;
    let joindate = new Date(document.getElementById("joindate").value);
    let days;

    switch (option) {
        case "fullstack": {
            joindate.setDate(joindate.getDate() + 90);
            days = 90;
            break;
        }
        case "web": {
            joindate.setDate(joindate.getDate() + 60);
            days = 60;
            break;
        }
        case "sap": {
            joindate.setDate(joindate.getDate() + 30);
            days = 30;
            break;
        }
        case "ims": {
            joindate.setDate(joindate.getDate() + 50);
            days = 50;
            break;
        }
    }
    document.getElementById("duration").innerHTML = `Over all the course ${days} ent of the date ${joindate.toDateString()}`;
};

document.getElementById("btnid").addEventListener("click", calculation);

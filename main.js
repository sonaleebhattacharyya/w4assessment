const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector('#fortuneBtn')
const StudentBtn = document.querySelector("#get-student")
const nameInput = document.querySelector('#name-input')
const foodInput = document.querySelector('#Food-input')
const BaseURL = 'http://localhost:4000'
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get('${BaseURL}/api/fortune')
    .then(res => alert(res.data))
    .catch(err => console.log(err))
}

const displayStudents = (arr) => {
    displaySection.innerHTML = ''
    console.log(arr);
    arr.map(student => {
        let card.innerHTML = document.createElement('div')
        card.innerHTML = '
            <h2>${student.name}</h2>
            <h4>${student.favoriteFood}</h4>
        '
        document.body.appendChild(card)
    })
};

const getStudent = () => {
    axios.get('${BaseURL}/api/students')
    .then(res => displayStudent(res.data))
    .catch(err => console.log(err))
};
const postStudent = {event} => {
    event.preventDefault()
    let body = {
        name:nameInput.ariaValueMax, 
        favoriteFood:foodInput.value
    }
}

fortuneBtn.addEventListener('click',getFortune)
complimentBtn.addEventListener('click', getCompliment)


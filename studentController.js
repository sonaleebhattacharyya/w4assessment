const students = [
    {
        id:1, 
        name:'Kevin', 
        favoriteFood:'Chilli'
    }, 
    {
        id:2, 
        name:'Michael', 
        favoriteFood:'Mcfish'
    }, 
    {
        id:3, 
        name:'Dwight', 
        favoriteFood:'Beets'
    }, 
    {
        id:4, 
        name:'Michael', 
        favoriteFood:'Mcfish'
    }, 
    {
        id:5, 
        name:'Creed', 
        favoriteFood:'Anything and everything'
    }
]
const studentId = 6
module.exports = {
    getStudents:(req, res) => {
        res.status(200).send(students)
    },
    postStudent:(req,res) => {
        const {name,favoriteFood} = req.body
        students.push({
            id:studentId, 
            name, 
            favoriteFood
        })
        res.status(200).send(students)
        studentId++
    }
}


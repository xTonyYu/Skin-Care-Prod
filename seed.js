const db = require('./models')

// ******-------- Starter Data loading - for initial build -------******* /// 
const starter = require('./data/starterData')

db.User.deleteMany({},(err, deletedData) => {
    if (err) console.log(err)
    console.log('Delete all data - resetting collection')
    db.User.create(starter.dataUsers, (err, loadedData) => {
        if (err) console.log(err)
        console.log("User data loaded")
    })
})

console.log('starting')

const note = require('./notes')
const yargs = require('yargs')

const title = yargs.argv.title //process.argv[3]
const body = yargs.argv.body // process.argv[4]
const command = yargs.argv._[0]  //process.process[2]

if(command ==='add') {
    console.log('adding')
    note.add(title,body)
}
else if (command ==='remove')
{
    console.log('removing')
    note.remove(title)
}
else if (command==='list')
{
    note.list()
}
else if (command==='find')
{
    note.find(title)
}
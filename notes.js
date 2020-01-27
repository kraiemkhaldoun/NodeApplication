const fs = require('fs')

const fetch= ()=> {
    try {
        return JSON.parse(fs.readFileSync('notes.txt'))
    } catch {
        return []
    }
}


const add=(title,body)=> {
    const note ={
        title : title ,
        body : body
    }
    const notes = fetch()
    notes.push(note)
    fs.writeFileSync('notes.txt',JSON.stringify(notes))
    console.log(notes)

}
const remove=(title)=>{

    const notes = fetch().filter(el => (el.title!==title))
    
    fs.writeFileSync('notes.txt',JSON.stringify(notes))
    console.log(notes)
    
}
const list=()=>{
    const notes = fetch()
    notes.map(el =>console.log(el) )
    
}
const find=(title)=>{
    const notes = fetch()
    
    console.log(notes.filter(el => (el.title===title)))

}

module.exports ={add,remove,list,find}
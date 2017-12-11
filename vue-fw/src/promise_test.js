

var p1 = new Promise((r) => {
    r({name: 'linq'})
})
p1.then(d => {
    return new Promise(r => {
        r(Object.assign({}, d, {age: 18}))
    })
}).then(d => {
    console.log(1, d)
    tt=2
    return Promise.resolve(Object.assign(d, {addr: 'tttt'}))
}).catch(err=>{
    return new Promise(r=>{
        setTimeout(()=>{
            r({aa:1234})
        },5000)
    })
}).then(d => {
    console.log(2, d)
    Promise.reject({aa:2})
}).catch(err => {
    console.log(3, err)
})
const url = '../../views/pages/layouts/MainLayouts'


let newArray = url.split('/')
newArray = newArray[newArray.length-1]
console.info(path.path('s'))

const FNPath = (path)=>{
    let newPath = path.split('/')
    return newArray[newArray.length - 1]
}

console.info(FNPath('../../views/pages/layouts/MainLayouts'))
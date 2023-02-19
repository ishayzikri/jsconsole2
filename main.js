// משימה מספר 1
var arr = ["Tom","Tamar","Tami","Tomer","Tim"]

for(const name of arr){
    console.log(name)
}

// משימה מספר 2

for(var i = 1; i <=10;i++){
    var line = ""
    for(var j = 1; j<= 10; j++){
        product = (i*j == 72 || i*j == 50 || i*j == 100) ? 
        "*"+(i*j)+"*": 
        (i*j).toString().padEnd(4, ' ')
        line += product
    }
    console.log(line)
}

// 3

var answer = ""
while(answer != "STOP"){
    answer = prompt('Enter STOP to continue\n')
}

// 4

while(isNaN(answer)){
    answer = prompt('Please type a number\n')
}

// 5 

var increment = answer > 0 ? 1 : -1
var newArr = []
for(var i=0; i!=answer; i+=increment){
    newArr.push(i)
}
console.log(newArr)

var nameToSearch = prompt('Type a name to search\n')

console.log(arr.includes(nameToSearch))

var height = 5
var width = 3

for(var i = 0; i < height; i++){
    var line=''
    for(var j = 0 ; j < width; j++){
        line+='*'
    }
    console.log(line)
}
console.log('\n')
height = 7

for(var i = 1; i <= height ; i++){
    var len = (i < ((height/2)+1)) ? i : height-i+1
    console.log('*'.repeat(len))
}
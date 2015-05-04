module.exports = function(){
    return{
        add: function(num1, num2){
            console.log(num1 + num2);
        },
        multiply: function(num1, num2){
            console.log(num1 * num2);
        },
        square: function(num){
            console.log(num * num);
        },
        random: function(num1, num2){
            var rando = Math.floor(Math.random()*num2);
            console.log(rando);
            var array = [];
            for(var i = num1; i <= num2; i++){
                array.push(i);
            }
            if(rando > array.length - 1){
                Math.floor(Math.random()*num2 - 1);
            }
            console.log(array[rando]);
        }
    }
}
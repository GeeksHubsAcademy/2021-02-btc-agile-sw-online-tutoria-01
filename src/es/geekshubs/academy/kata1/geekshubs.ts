export function fizzBuzz(input : number) : string {
    var res = "";

    for(var i = 1; i <= input; i++ ){
        if(i%3 == 0 )
            res += "Fizz"+"\n";
        else 
            res += i+"\n";

    }

    return res;
};
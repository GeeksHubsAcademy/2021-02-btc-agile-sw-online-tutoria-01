const ENTER = "\n";
const FIZZ = "Fizz";
const BUZZ = "Buzz";
const FIZBUZZ = FIZZ + BUZZ;

export function fizzBuzz(input : number) : string {
    var res = "";

    for(var i = 1; i <= input; i++ ){
        if (i%3 == 0 && i%5 == 0)
            res += FIZBUZZ + ENTER;
        else if(i%3 == 0)
            res += FIZZ + ENTER;
        else if(i%5 == 0)
            res += BUZZ + ENTER
        else 
            res += i+"\n";
    }

    return res;
};
const EMPTY = "";
const ENTER = "\n";
const FIZZ = "Fizz";
const BUZZ = "Buzz";
const FIZBUZZ = FIZZ + BUZZ;

export function fizzBuzz(input : Number) : String {
    var res = EMPTY;

    for(var i = 1; i <= input; i++ ) {
        if (isMod_3_or_5(i))
            res += FIZBUZZ + ENTER;
        else if(isMod_3(i))
            res += FIZZ + ENTER;
        else if(isMod_5(i))
            res += BUZZ + ENTER
        else 
            res += i + ENTER;
    }

    return res;
};

function isMod_5(i: number): boolean {
    return i % 5 == 0;
}

function isMod_3(i: number) {
    return i % 3 == 0;
}

function isMod_3_or_5(i: number) {
    return isMod_3(i) && isMod_5(i);
}


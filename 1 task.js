var lLetterCount = (str) => {
    let c = 0;
    for(i=0;i<str.length;i++)
        if(str[i].toLowerCase() == "l") c++;
    return str+" contains "+c+"xL characters";
}
alert(lLetterCount("Hello World")); 
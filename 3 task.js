var vowelsCount = (str) => {
    const vowels = "aeiouyåäö";
    let c = 0;
    for(i=0;i<str.length;i++)
        if(vowels.indexOf(str[i]) !== -1) c++;
    return str+" contains "+c+" vowels."
}
alert(vowelsCount("Hello World!")) 
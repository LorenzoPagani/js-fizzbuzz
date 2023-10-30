let container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {

    const newparagraph = document.createElement("p");
    
    if(i%3 == 0 && i%5 == 0)  {
        newparagraph.innerHTML = "fizzbuzz";
        newparagraph.classList.add("fizzbuzz");
        container.append(newparagraph);
        console.log(`fizzbuzz`);
    }

    else if ( i%3 == 0)  {
        newparagraph.innerHTML = "fizz";
        newparagraph.classList.add("fizz");
        container.append(newparagraph);
        console.log(`fizz`)
    }

    else if(i%5 == 0) {
        newparagraph.innerHTML = "buzz";
        newparagraph.classList.add("buzz");
        container.append(newparagraph);
        console.log(`buzz`)
    }

    else {
        newparagraph.innerHTML = i;
        newparagraph.classList.add("normal");
        container.append(newparagraph);
        console.log(i);
    }
}



container.innerHTML += "fine";
console.log("fine");
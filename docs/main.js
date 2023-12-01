let greetings = "Hello World"
    console.log(greetings)

    const yr = new Date()
    const year = yr.getFullYear()
    document.getElementById('year').outerHTML =  year

    
    const notify = document.querySelector('#alert')
    const me = ('Meow')
    notify.addEventListener('click', () =>{
        alert(me)
       })

    const hover = document.querySelector('#alert')
       hover.addEventListener('mouseover', () =>{
        hover.style.backgroundColor = "pink"
        if(hover.addEventListener('mouseout', () =>{     
           hover.style.backgroundColor = ""
         })){
        }})

    const Meows = document.getElementById('alert')
        Meows.onmouseover = () =>{
            Meows.innerText = "You hear a meow"

           Meows.onmouseout = () =>{
                Meows.innerText = "Meows"
               }
               }

    let number = 0
    let count = document.getElementById('counter')
    let incrementor = document.getElementById('clicker')
        incrementor.addEventListener('click', () =>{
            number++
            count.textContent = number.toString()
            if(number %2 == 0){
                counter.classList.add('even')
                counter.classList.remove('odd')
            } 
            else{
                counter.classList.add('odd')
                counter.classList.remove('even')  
            }
        })

        const numberlist = document.getElementById('numbers')
        for (let i = 1;  i<=100; i++){
            const listitems = document.createElement ('li')
            const even = i % 2 == 0
            listitems.innerHTML = even ? "Even" : "Odd"

        }

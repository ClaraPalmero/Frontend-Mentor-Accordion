const label = document.querySelector('.bloque')
const content = document.querySelector('.content')

content.forEach (cadaLabel, i)=>{
    label[i].addEventListener('click', ()=>){

        content.forEach(( cadaContent, i)=>{
            content[i].classList.remove('activo)')
        })
        bloque[i].classList.add('activo')
    }
}
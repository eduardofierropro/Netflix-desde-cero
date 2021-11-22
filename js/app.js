'use strict'

const btn = document.querySelectorAll('.faq__btn')
const li  = document.querySelectorAll('.faq__li')

btn.forEach( ( v , i )=>{
    btn[i].addEventListener( 'click', ()=>{
  
        if(  li[i].classList.contains('activo') ){
             li[i].classList.remove('activo')
        }else{
            li.forEach( ( v , i )=>{ li[i].classList.remove('activo') }) 
            li[i].classList.add('activo')

        }
    })
})
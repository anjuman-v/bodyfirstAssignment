import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'

function Navbar() {
  return (
    <div>

      <div className={style.navbarHeader}>
      <p className={style.Pn}>𝙵𝚕𝚊𝚜𝚑 𝚂𝚊𝚕𝚎 𝙸𝚜 𝙻𝚒𝚟𝚎. 𝗦𝗮𝘃𝗲 𝗨𝗽𝘁𝗼 70%</p>
        </div> 


        <div className={style.mainNavContainerWrapper}>
         <div className={style.mainNavContainer}>
         <div className={style.logoSearchContainer}>
            <a href="/"><img className={style.elementstyle} src="https://bodyfirst.imgix.net/hosted/BF_Logo-01-75e00a2b76a9-82e05294c789.png?auto=format&fit=max&w=256" alt="" />  </a>
            <input className={style.inputbox} type="text" name="" id="" placeholder='Search Product...'/>
            </div>
            <div className={style.logincart}>
                <ul>
                    <li>login</li>
                    <li>cart</li>
                </ul>
            </div>

        </div> 
        <div>
            <ul className={style.navlist}>
                <li> Best Sellers</li> 
                <li>Flash Sale</li>
                <li>Buy 1 Get 1</li>
                <li>Combos</li>
                <li>Kids</li>
                <li>Shop</li>
            </ul>
        </div>
        </div>
       

    </div>
  )
}

export default Navbar
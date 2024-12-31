import React from 'react'

import Link from "next/link";


export const Sidebar = () => {

  const sidbarItem=[
    {title:"Dashboard", link:"/" },{title:"Customer", link:"/Customer" },{title:"Notification", link:"/Notification" },{title:"Products", link:"Products" }
  ];



  return (
    <aside className='' >
        <div>
            {sidbarItem.map((item,index)=>(
                <div key={index}>
                    <div>
                      <Link href={item.link} >{item.title}</Link>  
                    </div>
                </div>
            ))}
        </div>
    </aside>
  )
}

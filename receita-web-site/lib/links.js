import React from "react"
import { Link } from "next/link"

const data = [
  {
    id: 1,
    text: Home",
    url: "/",
  },
  {
    id: 2,
    text: "YouTube",
    url: "/youtube/",
  },
  {
    id: 3,
    text: "Receita",
    url: "/receita/",
  },
  {
    id: 4,
    text: "Blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "Contacto",
    url: "/contacto/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}

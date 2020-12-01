import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const MenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  // {
  //   path: "/works",
  //   title: "Works",
  // },
  {
    path: "/contato",
    title: "Contato",
  },
]

const ListLink = props => (
  <li onClick={props.handleMenuClick}>
    <AniLink cover direction="left" bg="#fff" duration={1} to={props.to} title={`Ir para ${props.children}`}>
      {props.children}
    </AniLink>
  </li>
)

const Navigation = ({handleMenuClick}) => {
 
  const listMenuItems = MenuItems.map((menuItem, index) => (
    <ListLink key={index} to={menuItem.path} handleMenuClick={handleMenuClick}>
      {menuItem.title}
    </ListLink>
  ))

  return (
    <ul>
      {listMenuItems}
    </ul>
  )
}

export default Navigation

import { useRouter } from "next/router"
import React from "react"

const ActiveLink = ({ handleClick, children, href, className }) => {
  const router = useRouter()

  const handleActiveClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <li onClick={handleClick} className={className}>
      <a
        className={
          router.asPath === href
            ? "text-blue1"
            : "text-black1 hover:text-blue1"
        }
        href={href}
        onClick={handleActiveClick}
        target="_newtab"
      >
        {children}
      </a>
    </li>
  )
}

export default ActiveLink

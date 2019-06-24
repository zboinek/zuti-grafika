import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"

const menuItems = [
  { name: "plakaty | posters", url: "/plakaty" },
  { name: "projekty | works", url: "/projekty" },
  { name: "o mnie | about me", url: "/about" },
  { name: "kontakt | contact", url: "/contact" },
]

const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      marginTop: "20px",
    }}
  >
    {" "}
    <Link to="/" style={{ display: "inline-block", verticalAlign: "text-top" }}>
      <div
        className="logo"
        style={{
          width: `300px`,
          marginBottom: `1.45rem`,
        }}
      >
        <Logo />
      </div>
    </Link>
    <div className="menuContainer">
      {menuItems.map(item => {
        return (
          <Link
            to={item.url}
            key={item.name}
            style={{
              color: `black`,
              textDecoration: `none`,
              display: "inline-block",
              textTransform: "uppercase",
              paddingRight: "40px",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            {item.name}
          </Link>
        )
      })}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

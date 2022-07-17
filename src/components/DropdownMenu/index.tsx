import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import * as React from 'react'
import Link from 'react-scroll'

const options = ['close']

const ITEM_HEIGHT = 24

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const divRef = React.useRef(null)
  function handleClick() {
    setAnchorEl(divRef.current)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  return (
    <div ref={divRef}>
      <Menu
        id={id}
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <>
            <MenuItem>
              <Link spy={true} smooth={true}>
                <div>Home</div>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link activeClass="active" to="AboutSection" spy={true} smooth={true}>
                <div>About us</div>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link activeClass="active" to="PortfolioSection" spy={true} smooth={true}>
                <div>Portfolio</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link activeClass="active" to="AnimeTokenomics" spy={true} smooth={true}>
                <div>AnimeTokenomics</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link activeClass="active" to="TeamSection" spy={true} smooth={true}>
                <div>Our Team</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link activeClass="active" to="FAQPage" spy={true} smooth={true}>
                <div>FAQ</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link activeClass="active" to="Contact" spy={true} smooth={true}>
                <div>Contact Us</div>
              </Link>
            </MenuItem>
          </>
        ))}
      </Menu>
    </div>
  )
}

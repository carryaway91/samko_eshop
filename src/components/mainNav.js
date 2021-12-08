import { Link, NavLink } from 'react-router-dom'
import { Nav, Inner, Item } from './mainNavStyle'
import './styles.css'

const MainNav = ({data, sendCategoryID}) => {
    const generateLists = () => {
        for(let i = 1; i >= 6; i++) {
          return <li>Item { i }</li>
        }
    }

    return (
        <Nav>
            { 
            data && data.map(item => (
                <NavLink exact to={`/category/${item.id}`} onClick={() => sendCategoryID(item.id)} activeClassName="selected">
                    <Inner>
                        <Item> 
                            { item.name }
                        </Item>
                    </Inner>
                </NavLink>
                ))
            }
        </Nav>
    )
}

export default MainNav
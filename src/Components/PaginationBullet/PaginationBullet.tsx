import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface IPaginationBulletProps {
    children: string
}

const PaginationBullet: FC<IPaginationBulletProps> = (props) => {
    return (
        <NavLink
            to={`/simple/${props.children}`}
            className={`pagination-bullet`}>
            {props.children}
        </NavLink>
    )
}

export default PaginationBullet
import { NavLink } from 'react-router-dom'
import s from './ProjectNavigation.module.scss'

const ProjectNavigation = () => {
    return (
        <div className={s.box}>
            <NavLink to='/scroll' className={s.link}>Dynamic Pagination #1 - scroll</NavLink>
            <NavLink to='/interval' className={s.link}>Dynamic Pagination #2 - interval</NavLink>
            <NavLink to='/simple/1' className={s.link}>Simple Pagination with bullets</NavLink>
        </div>
    )
}

export default ProjectNavigation
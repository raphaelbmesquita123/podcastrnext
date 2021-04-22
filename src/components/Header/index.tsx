import format from 'date-fns/format';
import style from './styles.module.scss';

export function Header(){
    const currentDate = format (new Date(), 'EEEEEE, d MMMM')
    return(
        <header className={style.headerContainer}>
            <img src="/logo.svg" alt="podcast-logo"/>

            <p>The best podcast for you to listen</p>

            <span>{ currentDate }</span>
        </header>
    )
}
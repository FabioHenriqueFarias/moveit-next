import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const {level } = useContext(ChallengesContext)


    return(
        <div className={styles.profileContainer}>
            <img src="https://instagram.fplu8-1.fna.fbcdn.net/v/t51.2885-19/s320x320/52920087_2281330398770438_6849802667603001344_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net&_nc_ohc=zuBNZwCvD9wAX93S01c&tp=1&oh=a3ee11e767c5f05f9f4f965f5524039b&oe=605D6B3F" alt="Fábio Farias" />
            <div>
                <strong>Fábio Farias</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}
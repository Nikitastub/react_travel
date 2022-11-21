import tokyo1 from './img/top/tokyo-1.jpeg'
import tokyo2 from './img/top/tokyo-2.jpeg'
import tokyo3 from './img/top/tokyo-3.jpeg'
import kioto1 from './img/top/kioto-1.jpeg'
import kioto2 from './img/top/kioto-2.jpeg'
import kioto3 from './img/top/kioto-3.jpeg'
import sapporo1 from './img/top/sapporo-1.jpeg'
import sapporo2 from './img/top/sapporo-2.jpeg'
import sapporo3 from './img/top/sapporo-3.jpeg'
import osaka1 from './img/top/osaka-1.jpeg'
import osaka2 from './img/top/osaka-2.jpeg'
import osaka3 from './img/top/osaka-3.jpeg'
import nagoya1 from './img/top/nagoya-1.jpeg'
import nagoya2 from './img/top/nagoya-2.jpeg'
import nagoya3 from './img/top/nagoya-3.jpeg'
import fukuoka1 from './img/top/fukuoka-1.jpeg'
import fukuoka2 from './img/top/fukuoka-2.jpeg'
import fukuoka3 from './img/top/fukuoka-3.jpeg'


interface Cards {
    city: string,
    src: Array<string>,
    likes: number,
    comments: number,
}

const cardsArray: Cards[] = [
    {
        city: 'Tokyo',
        src: [tokyo1, tokyo2, tokyo3],
        likes: 8,
        comments: 1,
    },
    {
        city: 'Kioto',
        src: [kioto1, kioto2, kioto3],
        likes: 5,
        comments: 7,
    },
    {
        city: 'Sapporo',
        src: [sapporo1, sapporo2, sapporo3],
        likes: 21,
        comments: 11,
    },
    {
        city: 'Osaka',
        src: [osaka1, osaka2, osaka3],
        likes: 9,
        comments: 2,
    },
    {
        city: 'Nagoya',
        src: [nagoya1, nagoya2, nagoya3],
        likes: 17,
        comments: 6,
    },

    {
        city: 'Fukuoka',
        src: [fukuoka1, fukuoka2, fukuoka3],
        likes: 19,
        comments: 3,
    },
    
]

export default cardsArray
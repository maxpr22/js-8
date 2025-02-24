import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = function(data) {
    localStorage.setItem(CURRENT_TIME, data.seconds);
}

player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(localStorage.getItem(CURRENT_TIME))


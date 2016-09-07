import { SouthHand } from './nsHand.jsx';
import styles from './ewHand.css';

export { WestHand, EastHand };

class WestHand extends SouthHand {
    constructor(props) {
        super(props);
        this.localStyle.metaPosition = {left:'0'};
        this.localStyle.rotate = {};
        this.player = 'West';
        this.imgDir = '/hCards/'
    }
}

class EastHand extends WestHand {
    constructor(props) {
        super(props);
        this.player = 'East';
        this.localStyle.rotate = {transform: 'rotate(-180deg)'};
    }
}

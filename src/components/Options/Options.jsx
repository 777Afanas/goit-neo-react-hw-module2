// import style from "./FriendListItem.module.css";



const Options = ({no, onResetR, onGood, onNeutral, onBad}) => {    
    return (
        <div>
            <button onClick={onGood}>Good</button>
            <button onClick={onNeutral}>Neutral</button>
            <button onClick={onBad}>Bad</button>
            {!no && <button onClick={onResetR}>Reset</button>}
        </div>
    );
};

export default Options;
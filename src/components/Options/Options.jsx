import style from "./Options.module.css";



const Options = ({no, onResetR, onGood, onNeutral, onBad}) => {    
    return (
        <div className={style.container}>
            <button className={style.button} onClick={onGood}>Good</button>
            <button className={style.button} onClick={onNeutral}>Neutral</button>
            <button className={style.button} onClick={onBad}>Bad</button>
            {!no && <button className={style.button} onClick={onResetR}>Reset</button>}
        </div>
    );
};

export default Options;
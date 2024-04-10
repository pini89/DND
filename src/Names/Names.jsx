import s from './Names.module.css';

const Names = () => {
    return (

        <div className={s.Names}>
            <input className={s.name} placeholder="Player Name"></input>
            <br/>
            <input className={s.characterName} placeholder="Character Name"></input>
        </div>
    );
};
export default Names;

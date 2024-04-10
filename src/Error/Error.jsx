import s from './Error.module.css';

const Error = (params) => {

    params.toggleVisibility(params.totalPoints !== params.limits.totalUpper)
    return (
        params.isVisible &&
    <div className={s.error}>
        <span> the sum of the character points must be exactly <span className={s.bold}>{params.limits.totalUpper}.</span><br/>
        the current amount is: <span className={s.bold}>{params.totalPoints}</span></span>
    </div>
    );
};
export default Error;

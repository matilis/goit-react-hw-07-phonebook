import css from './Spinner.module.css';

export const Loader = () => {
  return (
    <div className={css.loader__box}>
      <span className={css.loader}></span>
    </div>
  );
};

export const Error = () => {
  return (
    <div className={css.loader__box}>
      <p className={css.error__icon}></p>
      <span className={css.error__spinner}>Data loading error</span>
    </div>
  );
};

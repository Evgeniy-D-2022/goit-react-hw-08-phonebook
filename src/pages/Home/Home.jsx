import css from './Home.module.css';

const Home = () => {
    return (
        <div className={css.home__wrap}>
            <h1 className={css.home__title}>Welcome</h1>
            <p className={css.home__text}>This is my first React application project</p>
        </div>
    )
};

export default Home;
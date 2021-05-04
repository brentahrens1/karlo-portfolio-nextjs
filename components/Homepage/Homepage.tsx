import Projects from '../Projects/Projects'

const Homepage: React.FC = () => {
    return (
        <div className="homepage">
            <p className="homepage__text">Juan Karlo Muro is a graphic designer and artist based in Fresno, California.
                He is the founder of Studio Mala a collaborative design studio.<br /><br />
                For freelance opportunities, collaborations, and availability<br />
                please email info@juankarlomuro.com
            </p>
            <Projects />
        </div>
    )
}

export default Homepage
import './Hero.css';

export default function Hero() {
    return (
        <section className="container">
                <div className="content">
                    <p className="hello-text">
                        <span className="lightblue">H</span>
                        <span className="darkblue">e</span>
                        <span className="purple">l</span>
                        <span className="lightblue">l</span>
                        <span className="darkblue">o</span>
                        <span className="purple">~</span>
                        <span className="lightblue">!</span>
                    </p>
                    <div className="description">
                        I&rsquo;m Serena and I&rsquo;m a computer science student at the University of Waterloo. I love building and designing things. I&rsquo;m also trying to get more into writing (currently there isn’t anything in <span className="blog">blog</span> but stay tuned)!
                    </div>
                </div>
                <p className="hero-image">
                    Image will go herehfj
                </p>
        </section>
    );
}

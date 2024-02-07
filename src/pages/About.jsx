function About() {
    return (
        <div className="page">
            {/* project description */}
            <p><b>Home Sweet Home</b> was built with React as a mini project during our Web Development Bootcamp at Ironhack.<br/>
            It simulates a holiday rental website admin page where you can add and delete rental listings. The team behind this project:</p>

            {/* team members  */}
            {/* links to your GitHub and LinkedIn profiles. */}
            <div className="teams">
                <div className="team-member">
                    <h2>Erik Busch</h2>
                    <p><a href="https://www.linkedin.com/in/erik-busch-fullstack-development/">LinkedIn</a> | <a href="https://github.com/EazyErik">Github</a></p>
                    <p>Aspiring software developer with a passion for yoga and riding single speed bikes</p>
                </div>
                <div className="team-member">
                    <h2>Laia Navalón</h2>
                    <a href="https://es.linkedin.com/in/laia-navalon-arxe-763b2353">LinkedIn</a> | <a href="https://github.com/feelikeadoll">Github</a>
                    <p>Born in Barcelona. Passionate about Japan and nice looking websites.</p>
                </div>
            </div>
        </div>
    )
}

export default About;
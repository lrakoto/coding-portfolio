import React from 'react';

function Home() {
    return (
        <div>
            <main class="px-3">
                <h1>Welcome to Lova's coding portfolio</h1>
                <p class="lead">DEVELOPER | DESIGNER | GAMER</p>
                <p class="lead">Thanks for visiting this page. Here you'll find a collection of recent work.</p>
                <p class="lead">
                    <form action="/projects">
                        <button action="submit" class="btn btn-lg btn-primary fw-bold">View Projects</button>
                    </form>
                </p>
            </main>
        </div>
    )
}

export default Home;
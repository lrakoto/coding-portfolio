import React from 'react';

function Home() {
    return (
        <div>
            <main class="px-3">
                <h1 class="main-title py-4">Welcome to Lova's coding portfolio</h1>
                <p class="lead spread1">DEVELOPER <span class="text-primary">|</span> DESIGNER <span class="text-primary">|</span> GAMER</p>
                <p class="lead">Thanks for visiting this page. Here you'll find a collection of my most recent work.</p>
                <p class="lead">
                        <a href="/projects"><button action="submit" class="btn btn-lg btn-primary fw-bold my-3">View Projects</button></a>
                </p>
            </main>
        </div>
    )
}

export default Home;
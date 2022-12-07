import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

function Home() {
    return (
        <div>
            <main class="px-3">
                <h1 class="main-title py-4">Welcome to Lova's coding portfolio</h1>
                <p class="lead spread1">DEVELOPER <span class="text-primary">|</span> DESIGNER <span class="text-primary">|</span> GAMER</p>
                <p class="lead">Thanks for visiting this page. Here you'll find a collection of my most recent work.</p>
                <p class="lead">
                    <Router>
                        <Link to='/projects'><button class="btn btn-lg btn-primary fw-bold my-3">View Projects</button></Link>
                        <Routes>
                            <Route path='/projects' element={<Projects />} />
                            <Route path='/*' element={<Home />} />
                            <Route path='*' element={<Home />} />
                        </Routes>
                    </Router>
                </p>
            </main>

        </div>

    )
}

export default Home;
import React from 'react';

function Projects() {
  return (
    <div>
      <main>

        <section className="text-center container">
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="main-title">Projects</h1>
              <p className="lead text-muted">View projects here</p>
            </div>
          </div>
        </section>

        <div className="album">
          <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-lg">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://i.ibb.co/9V2yxZL/bshooter.png" />

                  <div className="card-body">
                    <h4>BlockShooter</h4>
                    <p className="card-text">From the beginning, I wanted to do a point and click shooter so I knew that I needed to implement some sort of cursor tracking and event listeners at the cursor for the shooting mechanic.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="https://github.com/lrakoto/blockshooter" target="_blank"><button type="submit" className="btn btn-sm btn-outline-secondary">Github</button></a>
                        <a href="https://lrakoto.github.io/blockshooter/" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">View Live Project</button></a>
                      </div>
                      <small className="text-muted">Javascript | HTML | CSS</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-lg">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://i.ibb.co/mFDVjTd/autodex.png" />

                  <div className="card-body">
                    <h4>AutoDex</h4>
                    <p className="card-text">AutoDex is a simple vehicle search application that allows you to save favorite cars to your account. It uses the NHTSA API to pull vehicle information and pulls images from the Unsplash API.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="https://github.com/lrakoto/auto-dex" target="_blank"><button type="submit" className="btn btn-sm btn-outline-secondary">Github</button></a>
                        <a href="https://auto-dex.herokuapp.com/" target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">View Live Project</button></a>
                      </div>
                      <small className="text-muted">Javascript | Node | Express</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-lg">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://i.ibb.co/zmbPtVW/p3.jpg" alt="p3" />

                  <div className="card-body">
                    <h4>Project 3 - Coming Soon</h4>
                    <p className="card-text">This project is coming soon!<br/><br/><br/><br/></p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Github Coming Soon</button>
                      </div>
                      <small className="text-muted">Coming Soon</small>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Projects;
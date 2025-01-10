import React from 'react'

const MainPage = () => {
    return (
        <section id='main-page'>
            <div id='video-presentation'>
                <video autoPlay loop muted>
                    <source src='/videos/9656466-hd_1920_1080_24fps.mp4' type='video/mp4'/>
                </video>
            </div>
        </section>
    )
}

export default MainPage
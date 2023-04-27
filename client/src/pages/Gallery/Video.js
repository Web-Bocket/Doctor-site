import React from 'react'
import './gallery.css';

const Video = () => {
    return (
        <div className='video_parent'>
            <div className='video_parent_div'>

                <div className='video_one_div'>
                    <div className='youtube_div'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/E8OAEesRab8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='video_text_div'>
                        <h3>Homeopathy - Just good medicine</h3>
                        <p>Homeopathic physicians seek to cure their patients on the physical, mental and emotional levels, and each treatment is tailored to apatient’s individual needs. Homeopathy is generally a safe treatment, as it uses medicines in extremely diluted quantities, and there areusually minimal side effects. Its non-toxicity makes it a good choice for the treatment of children. Another benefit of homeopathy is thecost of treatments; homeopathic remedies are inexpensive, often a fraction of the cost of conventional drugs.</p>
                    </div>
                </div>

                <div className='video_one_div'>
                    <div className='video_text_div'>
                        <h3>Homeopathic Medicine</h3>
                        <p>Homeopathy, or homeopathic medicine, is a holistic system of treatment that originated in the late eighteenth century. The namehomeopathy is derived from two Greek words that mean “like disease.” The system is based on the idea that substances that producesymptoms of sickness in healthy people will have a curative effect when given in very dilute quantities to sick people who exhibit thosesame symptoms. Homeopathic remedies are believed to stimulate the body’s own healing processes.</p>
                    </div>
                    <div className='youtube_div'>
                        <iframe src="https://www.youtube.com/embed/lGSGTrn5INA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Video
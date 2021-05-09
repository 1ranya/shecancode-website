import React from 'react';
import uipath from '../assets/uipath.png';
function BlogContent(props) {
    return (
        <div class="hero-body" id="#BlogContent">
            <div class="container">
            <div className="title titleSection has-text-centered">ENJOY READING
            </div>
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img src={uipath} alt="Image"/>
                    </figure>
                </div>
                <div className="title articleTitle">
                    Titre
                </div>
                <div className="subtitle">
                    Descriptif 
                </div>
                <p className="ArticleContentSection">Contenu</p>
                {/* seperation doesn't work */}
                <div className="separation"></div> 
                <div className="columns dateCreatorSection">
                    <div className="column">
                        Date
                    </div>
                    <div className="column">
                        Author
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default BlogContent;
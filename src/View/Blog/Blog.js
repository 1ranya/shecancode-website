import uipath from '../assets/uipath.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons'

function Blog(){
    const triggerArticle = () => {
        console.log("hllo")
    }
    return(
    <div class="hero-body" id="Blog">
        <div class="container has-text-centered">
            <p className="title titleSection">LISTE DES BLOGS </p>
            <br/>
            <div class="box BlogBox">
                <article class="media">
                    <div class="media-left">
                        <a><figure class="image">
                            <img src={uipath} alt="Image" loading="lazy"/>
                        </figure></a>
                    </div>
                    <div class="media-content">
                        <div class="content box contentBlogBox">
                            <h3 className="titreBlogBox"><a><u>Gmail configuration | UiPath</u></a></h3>
                            <p className="sous-titreBlogBox"><small> Ça parle d'un sujet important </small></p>
                            <p className="media-left date"><FontAwesomeIcon icon={faBookmark} /><small> Published 20/05/1995 </small> </p>
                        </div>  
                    </div>
                </article>
            </div>
        </div>
    </div>
    )
}
export default Blog;
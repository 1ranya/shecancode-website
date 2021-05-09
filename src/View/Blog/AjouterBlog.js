import { useState } from 'react';
import formulaireLogo from '../Blog/formulaireLogo2.svg';
function Blog(){
    const [changeBorderColor, setChangeBorderColor] = useState()
    const submitClick = () =>{
        setChangeBorderColor("True") 
    }
    const changeBorderColorCss = " onClickCss"
    console.log(changeBorderColor)
    return(
    <div class="hero-body" id="AjouterBlog">
        <div class="container has-text-centered">
            <p className="title titleSection">NEW BLOG</p>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="field labelForm">
                        <label class="labelForm">Author</label>
                        <div class="control">
                            <input class="input inputForm" type="text" placeholder="Author"/>
                        </div>
                        <p class="help is-danger is-success">Author name is required</p>
                    </div>

                    <div class="field labelForm">
                        <label class="labelForm">Title</label>
                        <div class="control">
                            <input class="input inputForm" type="text" placeholder="Title"/>
                        </div>
                        <p class="help is-danger is-success">Title is required</p>
                    </div>

                    <div class="field labelForm">
                        <label class="labelForm">Subtitle</label>
                        <div class="control">
                            <input class="input inputForm" type="text" placeholder="Subtitle"/>
                        </div>
                    </div>

                    <div class="field labelForm">
                        <label class="labelForm">Content</label>
                        <div class="control inputForm">
                            <textarea class="textarea inputForm" placeholder="Content"></textarea>
                        </div>
                        <p class="help is-danger is-success">Content is required</p>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <button className="button is-outlined submitButton" onClick={submitClick}>Submit</button>
                        </div>
                        <div class="control">
                            <button class="button is-outlined cancelButton">Cancel</button>
                        </div>
                    </div>
                </div>
                <div class="column formulaireLogo">
                    <img src={formulaireLogo} width="120%" loading="lazy"/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Blog;
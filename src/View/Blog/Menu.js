import logo from '../Global/GirlPower.svg';
function Menu(){
    return(
    <div class="hero-body" id="Menu">
        <div class="container has-text-centered">
          <div class="columns is-mobile">
            <div class="column">
              <br/>
              <br/>
              <br/>
              <p class="title menuTitle"><b>SHE CAN CODE</b></p>
              <p class="title">
                What's better than sharing knowledge?
              </p>
              <p class="contenu">
                _ As a girl in tech, i believe that sharing with the community what i learn
               is a mission to be carried out.
                Here YOU will ENJOY Several interesting topics, 
                that you might know or discover for the first time _
              </p>
            </div>

            <div class="column">          
              <img className="svg" src={logo} loading="lazy"></img>
            </div>
          </div>
        </div>
    </div>
    )
}
export default Menu
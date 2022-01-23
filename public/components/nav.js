function navbar() {
  return ` <div id="navi">
    
    <div id="navlogo">
        <div class="btn">
            <span class="fas fa-bars"></span>
         </div>
        <a class="navlabels" id="imglogo" href="/home"><img  width="46%" 
            src="https://www.zoomcar.com/blog/wp-content/uploads/2020/03/footer-logo.png"/></a>
       
    </div>

    <div id="navlabel">
        <label><a class="navlabels" href="/host">Become a host</a></label>
        
         <label><a id="zms" class="navlabels" href="/cars/zms">ZMS</a></label>

         <label id="signup"><a  id="profile_name" class="navlabels">Login/Signup</a></label>
         <div id="profilepicappen"></div>

         </div>
  
 </div>
   
</div>
  <nav class="sidebar">
   
     <ul>
        <div id="lookgray" class="gap">
            <label class="sidemenu">
                <a  id="sd_login" >
                    <span class="icon" id="side_loginpro"><i class="fas fa-user-alt"></i></span>
                    <span id="side_login" class="item">Login or Signup</span>
                </a>
            </label>
            <br>
         </div>
      
         <div class="gap">
            <label class="sidemenu">
                <a href="#">
                    <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
                    <span class="item">Change City</span>
                </a>
            </label>
            <br>
             </div>
       
        <div class="gap">
            <label class="sidemenu">
                <a href="#">
                    <span class="icon"><i class="fab fa-joomla"></i></span>
                    <span id="supermiler" class="item">Supermiler Club</span>
                </a>
            </label>
            <br>
        </div>
       
        <div class="gap">
            <label class="sidemenu">
                <a href="#">
                    <span class="icon"><i class="fas fa-clone"></i></i></span>
                    <span class="item">Zoomcar Fleet Vehicles Policies</span>
                </a>
            </label>
            <br>
        </div>
     
        <div class="gap">
            <label class="sidemenu">
                <a href="#">
                    <span class="icon"><i class="fas fa-clone"></i></span>
                    <span class="item">Zoomcar Host Vehicles Policies</span>
                </a>
            </label>
            <br>
        </div>
       
        <div class="gap">
            <label class="sidemenu">
                <a href="#">
                    <span class="icon"><i class="fas fa-phone-alt"></i></span>
                    <span class="item">Help & Support</span>
                </a>
            </label>
        </div>
        <div class="gap">
            <label class="sidemenu">
                <a href="#">
                    <span class="icon" id="logouticon"></span>
                    <span class="item" id="logout"></span>
                </a>
            </label>
        </div>
    </ul> 
</nav>`;
}
export default navbar;

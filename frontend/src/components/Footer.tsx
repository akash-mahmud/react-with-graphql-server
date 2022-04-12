import React from 'react'

function Footer() {
  return (
      <>
      <div className="bgded overlay row4" style={{"backgroundImage":"url('./images/demo/backgrounds/01.png')"}}>
  <footer id="footer" className="hoc clear"> 
  
                    <div className="center btmspace-50">
                    <h6 className="heading">Foxclore</h6>
                    <ul className="faico clear">
                        <li><a className="faicon-dribble" href="#"><i className="fab fa-dribbble"></i></a></li>
                        <li><a className="faicon-facebook" href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a className="faicon-google-plus" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a className="faicon-linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>
                        <li><a className="faicon-twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a className="faicon-vk" href="#"><i className="fab fa-vk"></i></a></li>
                    </ul>
                    <p className="nospace">Sed pellentesque in nisi nulla facilisi sed pretium duis varius ut ut.</p>
                    </div>
   
                <hr className="btmspace-50"/>
  
    <div className="one_quarter first">
      <h6 className="heading">Nunc neque pellentesque</h6>
      <p className="nospace btmspace-15">Interdum velit vitae pede aliquam mollis neque ut ullamcorper tempor dolor.</p>
      <form action="#" method="post">
        <fieldset>
          <legend>Newsletter:</legend>
          <input className="btmspace-15" type="text" value="" placeholder="Name"/>
          <input className="btmspace-15" type="text" value="" placeholder="Email"/>
          <button type="submit" value="submit">Submit</button>
        </fieldset>
      </form>
    </div>
    <div className="one_quarter">
      <h6 className="heading">Tortor varius nisi</h6>
      <ul className="nospace linklist">
        <li>
          <article>
            <p className="nospace btmspace-10"><a href="#">Id euismod est risus ac neque aliquam erat volutpat pellentesque adipiscing.</a></p>
            <time className="block font-xs" dateTime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
          </article>
        </li>
        <li>
          <article>
            <p className="nospace btmspace-10"><a href="#">Nunc hendrerit adipiscing nulla donec vestibulum odio quisque gravida morbi.</a></p>
            <time className="block font-xs" dateTime="2045-04-05">Thursday, 5<sup>th</sup> April 2045</time>
          </article>
        </li>
      </ul>
    </div>
    <div className="one_quarter">
      <h6 className="heading">Vel condimentum auctor</h6>
      <ul className="nospace linklist">
        <li><a href="#">Hendrerit id lacus praesent</a></li>
        <li><a href="#">Ullamcorper risus gravida</a></li>
        <li><a href="#">Suscipit tempor turpis</a></li>
        <li><a href="#">Pede dictum ipsum vel auctor</a></li>
        <li><a href="#">Leo est tincidunt est sed</a></li>
      </ul>
    </div>
    <div className="one_quarter">
      <h6 className="heading">Nunc sapien varius</h6>
      <ul className="nospace clear latestimg">
        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
      </ul>
    </div>
  
  </footer>
</div>

<div className="wrapper row5">
  <div id="copyright" className="hoc clear"> 

    <p className="fl_left">Copyright &copy; 2018 - All Rights Reserved - <a href="#">Domain Name</a></p>
    <p className="fl_right">Template by <a target="_blank" href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>

  </div>
                  </div>  
                 
    </>
  )
}

export default Footer
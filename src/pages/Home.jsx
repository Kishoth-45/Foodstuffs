import React from 'react'

export const Home = () => {
  return (
    <>
    <div className='homebody'>
    <div className='banner'>
      <div className='section'>
                   <div>
                   <div className="section-title">
                      <span >Foodstuffs</span>
                      <div className="subtitle"><h1> <b>Fruits</b> <br />& Vegetables</h1></div>
                  </div>
                  <p>Brinjal, also known as eggplant or aubergine, is a plant that belongs to the nightshade family. It is a popular vegetable in many cuisines around the world. Brinjals are typically purple or white in color, and they have a spongy, meaty texture.</p>
                  <div className='banner-btns'>
                      <a href="" class="btn showbtn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.39025 12.636V11.06L14.2425 4.756C15.2525 3.668 15.2525 1.904 14.2425 0.816001C13.2324 -0.272 11.5949 -0.272 10.5848 0.816001L0.539316 11.637C-0.612777 12.878 0.203182 15 1.83249 15H6.19566C7.4077 15 8.39025 13.9416 8.39025 12.636ZM6.92719 11.0601L5.03558 9.02244L1.57385 12.7514C1.34343 12.9996 1.50663 13.424 1.83249 13.424H6.19566C6.59968 13.424 6.92719 13.0712 6.92719 12.636V11.0601ZM6.13287 7.84044L11.6194 1.9304C12.058 1.45787 12.7693 1.45787 13.2079 1.9304C13.6466 2.40294 13.6466 3.16907 13.2079 3.6416L7.72144 9.55164L6.13287 7.84044Z" fill="#CDC6BE"/>
                          </svg> Show More
                      </a>
                      <a href="" class="btn findbtn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.97487 11.0098C8.98031 11.7822 7.73058 12.2422 6.37332 12.2422C3.12957 12.2422 0.5 9.61492 0.5 6.37402C0.5 3.13313 3.12957 0.505859 6.37332 0.505859C9.61706 0.505859 12.2466 3.13313 12.2466 6.37402C12.2466 7.73009 11.7863 8.97872 11.0131 9.97241L13.285 12.2421C13.5717 12.5285 13.5717 12.993 13.285 13.2794C12.9983 13.5659 12.5334 13.5659 12.2467 13.2794L9.97487 11.0098ZM10.7783 6.37402C10.7783 8.8047 8.80612 10.7751 6.37332 10.7751C3.94051 10.7751 1.96833 8.8047 1.96833 6.37402C1.96833 3.94335 3.94051 1.9729 6.37332 1.9729C8.80612 1.9729 10.7783 3.94335 10.7783 6.37402Z" fill="#494949"/>
                          </svg> Find Products
                      </a>
                  </div>
                </div>
                <div className='banner-slide-btn'>
                  <div className='i'>
                  <i class="fa-solid fa-chevron-left"></i><i class="fa-solid fa-chevron-left"></i>
                  </div>
                  <div className='i'>
                  <i class="fa-solid fa-chevron-right"></i><i class="fa-solid fa-chevron-right"></i>
                  </div>
                </div>

      </div>
      
      <div className='banner-img'>
        <img src="Images/main-banner.png" alt="" />
      </div>
      
    </div>

    </div>
    </>
  )
}

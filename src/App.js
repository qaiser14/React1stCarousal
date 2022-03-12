import React from 'react'
import Carousal001 from './Carousal001'
import ImageGalleryxx from './ImageGalleryxx'
import 'react-router-dom'
import { Routes,Route} from 'react-router-dom'


class App extends React.Component{
  render(){
    return(
      <div>
         hello app
         {/* <BrowserRouter> */}
          <Routes>
          {/* <Route path="/" element={<App />} /> */}
            <Route  path="carousel" element={<Carousal001 />} />
          </Routes>
         {/* </BrowserRouter> */}

         {/* <Carousal001 /> */}

         

      </div>
    )
  }
}

export default App


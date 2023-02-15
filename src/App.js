//import logo from './logo.svg';
//import './App.css';
import React from "react";

import { MainMenu } from "./components/MainMenu";
import { PageContent } from "./components/PageContent";
import { Footer } from "./components/Foorter";
import { ResumeTemplate } from "./portfolio/ResumeTemplate";

function App() {
  const [ itemSelected, setItemSelected] = React.useState(false);

  const [ showTemplate, setShowTemplate ] = React.useState(true);

  const changeShowTemplate = () => {
    return setShowTemplate( true )
  }

  return (
    <React.Fragment>
      {
        !showTemplate ? 
        (
          <React.Fragment>
            <button 
            onClick={
              () => {
                changeShowTemplate()
              }
            }
            > Go to template </button>
            <MainMenu
            itemSelected={ itemSelected }
            setItemSelected={ setItemSelected }
            />


          
            <PageContent>

            </PageContent>
            <Footer/>
          </React.Fragment>
        ) : (
          <ResumeTemplate/>
        )

      }
    </React.Fragment>
  );
}

export default App;

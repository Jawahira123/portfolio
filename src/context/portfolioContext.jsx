import { createContext} from "react";

export const PortfolioContext=createContext();

function PortfolioBtns({children}){
     
    const github = () => {
    window.open("https://github.com/Jawahira123", "_blank");
   };

    const linkedin = () => {
    window.open("https://www.linkedin.com/in/jawahira-sanofar-20b08539b/", "_blank");
    };

    const email = () => {
    window.location.href = "mailto:jawahirasanofar@gmail.com?subject=Inquiring%20you&body=Hello%20Jawahira,%0A%0AI%20visited%20your%20portfolio...";
    };

    return(
        <PortfolioContext.Provider value={{github,linkedin,email}}>
            {children}
        </PortfolioContext.Provider>
    )
}

export default PortfolioBtns;
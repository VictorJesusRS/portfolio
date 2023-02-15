import React, { useEffect } from "react";
import "../styles/MainMenu.css";


function MainMenu( {itemSelected, setItemSelected} ) {

    const menuItems = [
        {
            name: 'Inicio'
        },
        {
            name: 'Proyectos'
        },
    ];

    //const [itemSelected, setItemSelected] = React.useState(false);
    
    const menuItemClick = ( msg ) => {
        console.log(msg);
        setItemSelected( true );
       
    };

    useEffect( () => {
         console.log(itemSelected);
    }, [itemSelected]);

    return (
        <div>
           {
            menuItems.map(  ( item, index )  => {
                return <div 
                key={ `${ index }` }
                className="text-gray border-blue"
                onClick={ () => { menuItemClick( item.name ); } }
                > { item.name } { index } </div>;
            })

           }
        </div>
    );
}

export { MainMenu };
import React from 'react'
import Blog from './Blog'
import Section from './Section'

function Categorias(props) {
    return (
        // Este es el codigo para la sección de las categorias de blogs, se incluyen 3 blogs por categorias
        <div className="categorias mt-5">
            <div className="container">
                {/* Este es el titulo de la categoria */}
                <Section 
                    titleSection="Canciones clásicas del rock"
                />
                <div className="row">                
                {/*En este h6 se incluye el nombre de la categoría en el cual incluí un icono de carpeta*/}
                <Blog       
                    category="Classic rock"
                    imgUrl="https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Led Zeppelin - Stairway to Heaven"
                    content="Led Zeppelin fue un grupo británico de rock, considerado uno de los mejores grupos 
                    musicales de la historia. Fue fundado en 1968 por el guitarrista Jimmy Page."
                    date="05/02/2020"
                    author="Aleksa Palladino"          
                  />
                  <Blog       
                    category="Classic rock"
                    imgUrl="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Queen-Bohemian Rhapsody"
                    content="El himno de la banda británica, creada por Freddie Mercury en 1975 para el álbum A Night at the Opera.El sencillo logro 2.176.000 ventas, siendo el tercer récord de ventas de la historia."
                    date="28/01/2020"
                    author="Lee Pace"          
                  />
                  <Blog       
                    category="Classic rock"
                    imgUrl="https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="The Rolling Stones-Satisfaction"
                    content="The Rolling Stones es una banda británica de rock originaria de Londres. The Rolling Stones son conocidos como «Sus Satánicas Majestades»."
                    date="10/01/2020"
                    author="Mackenzie Davis"          
                  />
                                                                                  
                </div>
            </div>
            <div className="container">
                {/* Este es el titulo de la categoria */}
                <Section 
                    titleSection="Los mejores conciertos de rock"
                />
                <div class="row">                
                {/*En este h6 se incluye el nombre de la categoría en el cual incluí un icono de carpeta*/}
                <Blog       
                    category="Concerts"
                    imgUrl="https://images.unsplash.com/photo-1564585222527-c2777a5bc6cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Queen Live At Wembley Stadium 1986"
                    content="Queen presentó en el año 1986 dos legendarios conciertos en el estadio Wembley, donde aproximadamente unas 100 mil personas cada noche presenciaron a la mítica banda."
                    date="05/01/2020"
                    author="Kerry Bishe"          
                  />
                  <Blog       
                    category="Concerts"
                    imgUrl="https://images.unsplash.com/photo-1497911270199-1c552ee64aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Guns N`Roses Live In Paris 1992"
                    content="Como parte del Use Your Illusion World Tour, la banda norteamericana Guns N’ Roses ofreció un concierto de dos horas y media en la ciudad de París."
                    date="03/12/2019"
                    author="Scoot McNairy"          
                    />
                  <Blog       
                    category="Concerts"
                    imgUrl="https://images.unsplash.com/photo-1574805950011-8cdf615261b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Bruce Springsteen East Berlin 1988"
                    content="Se trata de la actuación en la Alemania Oriental comunista, en el año 1984 de un icono estadounidense como Bruce Springsteen, en pleno apogeo ya de su fama."
                    date="27/11/2019"
                    author="Tobby Huse"          
                  />
                                                                                  
                </div>
            </div>
            <div className="container">
                {/* Este es el titulo de la categoria */}
                <Section 
                    titleSection="Los mejores solos de guitarra"
                />
                <div class="row">                
                {/*En este h6 se incluye el nombre de la categoría en el cual incluí un icono de carpeta*/}
                <Blog       
                    category="Guitar"
                    imgUrl="https://images.unsplash.com/photo-1567451702523-b6b238ed8be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="J. Hendrix-All Along The Watchtower"
                    content="Hay conciertos grandes, otros históricos y luego está el de Jimi Hendrix en Woodstock. No hay muchos que hayan alcanzado la épica de aquella actuación."
                    date="03/02/2020"
                    author="Lee Pace"          
                    />
                  <Blog       
                    category="Guitar"
                    imgUrl="https://images.unsplash.com/photo-1520496938502-73e942d08cc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Randy Rhoads-Crazy Train"
                    content="Con la banda de Ozzy Osbourne grabó el álbum ‘Blizard of Ozz’ (1980), donde los solos de Randy se convirtieron en su mejor tarjeta de presentación."
                    date="27/12/2019"
                    author="Aleksa Palladino"          
                    />
                  <Blog       
                    category="Guitar"
                    imgUrl="https://images.unsplash.com/photo-1565829577241-474d81bf757c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="Slash-Sweet Child O' Mine"
                    content="Slash en Sweet Child O' Mine, clásico de Guns N' Roses. Es una clase magistral... logrando progresivamente más emoción con cada grito de su Les Paul."
                    date="02/12/2019"
                    author="August Emersion"          
                  />
                                                                                  
                </div>
            </div>
        </div>
    );
}

export default Categorias;
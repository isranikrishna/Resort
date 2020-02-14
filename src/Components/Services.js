import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail , FaHiking , FaShuttleVan , FaBeer } from 'react-icons/fa';


export default class Services extends Component {
    state = {
        services  : [
            {
                icon: <FaCocktail/>,
                title: "free coctails",
                info: ' block of text motherfucker '

            },
            {
                icon: <FaHiking/>,
                title: "Endless hiking",
                info: ' block of text motherfucker '

            },
            {
                icon: <FaShuttleVan/>,
                title: "free Shuttle",
                info: ' block of text motherfucker '

            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: ' block of text motherfucker '

            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                  <div className="services-center">
                      {this.state.services.map((item,index)=> {
                          return <article key={index} className="service">
                              <span>{item.icon}</span>
                              <h6> {item.title}</h6> 
                              <p>{item.info}</p>
                        
                          </article>
                      })}
            </div>
            </section>
        )
    }
}

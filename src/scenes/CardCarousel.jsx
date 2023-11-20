import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardComp from './CardComp';
import img1 from '../img/covid.jpg'
import img2 from '../img/stu.jpeg'
import img3 from '../img/gems.jpg'
import img4 from '../img/mush.jpg'
import img5 from '../img/dataE.png'
import img6 from "../img/socialM.png"
import { useBreakpointValue } from '@chakra-ui/react';



const CardCarousel = ({ cards }) => {
    const [repo, setRepo] = useState([])
    
   const isMobile = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = process.env.REACT_APP_TOKEN
        const username = process.env.REACT_APP_USERNAME
        const apiUrl = `https://api.github.com/users/${username}/repos`

        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (response.ok) {
          const data = await response.json()
          setRepo(data)
        } else {
          console.error("Failed to fetch")
        }
      } catch (err) {
        console.error("Error:", err)
      }
    }
    fetchData()
  }, [])

  const repository = {
    "COVID-19_Predictions": img1, 
    "Student-Performance-Indicator": img2, 
    "GemStone_Classification_App": img3, 
    "MushroomClassification": img4, 
    "Data_Engineering_Proj": img5, 
    "SocialMedia": img6
  }
  

  const reposToDisplay = repo.filter((r) => {
    return repository[r.name]
  })


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1, 
    } 
    


  return (
    <Slider {...settings}>
        
          {reposToDisplay.map((r) => (
          <CardComp 
            key={r.id}
            src={repository[r.name]}
            head={r.name}
            body={r.description ? r.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lectus vitae dui tincidunt aliquam. Vestibulum eget lacinia massa, vel volutpat orci. Sed non ante ac massa accumsan ultrices. Sed non fermentum tortor."}
            link={r.html_url}
          />
        ))}
        
    </Slider>
  )
}

export default CardCarousel
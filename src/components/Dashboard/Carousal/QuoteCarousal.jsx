import React from 'react'
import { Card, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const QuoteCarousal = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      // slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // slidesToSlide: 1 // optional, default to 1.
    }
  };
  const jsonOutput = [{
    author: "Aron",
    message: "Quote of the Week,this updates every week"
  }, {
    author: "Aron",
    message: "Quote of the Week,this updates every week"
  }, {
    author: "Aron",
    message: "Quote of the Week,this updates every week"
  }, {
    author: "Aron",
    message: "Quote of the Week,this updates every week"
  }, {
    author: "Aron",
    message: "Quote of the Week,this updates every week"
  }, {
    author: "Aron",
    message: "Quote of the Week,this updates every week"
  }, {
    author: "Aron",
    message: "Quote of the Week,this updates every week"
  }]

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      // means to render carousel on server-side.
      infinite={false}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
    // itemClass="carousel-item-padding-40-px"
    >
      {
        jsonOutput.map((data, i) => (
          <Card key={i} style={{
            width: '100%',
            backgroundColor: "#3a84d7",
            borderRadius: "10px",
            color: '#FFF',
            height: '150px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center'

          }}>
            <Typography>
              {data.message}
            </Typography>
            <Typography>

              {data.author}
            </Typography>
          </Card>

        ))
      }


    </Carousel>
  )
}

export default QuoteCarousal
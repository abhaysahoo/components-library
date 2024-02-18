import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/index"
import Card from "./components/Card/index"
import Testimonial from "./components/Testimonial/Testimonial"
import profileImage from "./images/abhay.jpg"
import { BsUpload, BsCloudUpload } from "react-icons/bs"

function App() {
  return ( 
    <>
      <Badge color="green" shape="pill">Badge</Badge>
      <br />
      <br />
      <Banner variant="neutral">
        <Banner.Header>Update available</Banner.Header>
        <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
      </Banner>
      <br />
      <Banner variant="success">
        <Banner.Header>Congratulations</Banner.Header>
        <Banner.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Banner.Text>
      </Banner>
      <br />
      <Banner variant="warning">
        <Banner.Header>Attention</Banner.Header>
        <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
      </Banner>
      <br />
      <Banner variant="error">
        <Banner.Header>There is a problem with your application</Banner.Header>
        <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
      </Banner>
      <br />
      <br />
      <Card 
        icon={<BsCloudUpload />}
        backgroundColor="#3F75FE"
      >
        <Card.Header>Easy Deployment</Card.Header>
        <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
      </Card>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Testimonial
        src={profileImage}
        alt="profile pic of Abhay"
        name="Abhay Sahoo"
        designation="Workation, CTO"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
      </Testimonial>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Testimonial
        src={profileImage}
        alt="profile pic of Abhay"
        name="Abhay Sahoo"
        designation="Workation, CTO"
      >
        ollla ollla ollla e ohhh! o lalla lalla le ohhh! 
      </Testimonial>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

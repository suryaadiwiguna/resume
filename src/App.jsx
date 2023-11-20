import './App.css'
import Header from './components/Header'
import Photo from './components/Photo'
import Section from './components/Section'
import imageSource from './assets/potrait.jpg'

function App() {
  return (

    <div className='main-page'>
      <div className='left-section'>
        <Header name="Surya Adi Wiguna" jobTitle="Noob Software Engineer" />
        <Section
          title="Summary"
          content="I am a noob software developer with 0 year of experience. Mollit consectetur ea laboris sit eu duis consequat ullamco eu aliquip nulla laboris adipisicing consequat. Anim veniam non pariatur ad eiusmod." />
        <Section
          title="Experience"
          subtitle="Trainee"
          detail="Purwadhika / Jakarta / 2023.10 - present"
          content="Enim ad mollit pariatur velit proident voluptate cillum laboris exercitation sunt sit. Duis irure sit enim irure ullamco et velit excepteur fugiat aute quis sint. Adipisicing duis cillum mollit commodo veniam voluptate magna aliquip culpa. Ex qui eiusmod nulla excepteur."
        />
        <Section
          subtitle="Corporate Slave"
          detail="Startup Company / Jakarta / 2021 - 2023"
          content="Consectetur commodo cillum consectetur mollit amet ex cupidatat nulla anim. Non pariatur cupidatat voluptate amet laborum commodo. Et officia nostrud aliquip nostrud incididunt veniam. Voluptate nulla nostrud deserunt quis ad consectetur non excepteur laborum. Eu sit commodo nulla esse minim laboris dolor mollit nulla." />
        <Section
          subtitle="Intern"
          detail="A Nice Company / Bandung / 2019 - 2021"
          content="Esse aute et enim sunt ipsum. Adipisicing esse non voluptate qui sint elit cupidatat et. Reprehenderit ullamco incididunt dolore quis mollit minim veniam fugiat. Laborum cillum adipisicing magna anim dolor. Labore consequat velit velit magna enim ut magna." />
        <Section
          title="Education"
          content="Bachelor's degree in Computer Science"
        />
      </div>

      <div className='right-section'>
        <Photo imgsrc={imageSource} />
        <Section
          title="Contact"
          content="Lorem ipsum dolor sit amet"
        />
        <Section
          title="Skills"
          content="Lorem ipsum dolor sit amet"
        />
        <Section
          title="Certificates"
          content="Lorem ipsum dolor sit amet"
        />
        <Section
          title="Languages"
          content="Lorem ipsum dolor sit amet"
        />
      </div>
    </div>

  )
}

export default App

import './App.css'
import Header from './components/Header'
import Section from './components/Section'

function App() {
  return (

    <div className='main-page'>
      <div className='left-section'>1
        <Header name="Surya Adi Wiguna" jobTitle="Noob Software Engineer" />
        <Section
          title="Summary"
          content="Lorem ipsum dolor sit amet" />
        <Section
          title="Experience"
          content="Lorem ipsum dolor sit amet"
        />
        <Section
          title="Education"
          content="Lorem ipsum dolor sit amet"
        />


      </div>
      <div className='right-section'>
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

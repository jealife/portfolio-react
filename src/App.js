import "./App.css";
import Side from "./components/content/Side";
import Hero from "./components/hero/Hero";


function App() {
  return (
    <div className="App">
      <main className="main">
          <Hero/>
          {/* <Main/> */}
          <section  id='grid-main'>
           <aside>
                <Side />
           </aside>
            <section>
                <div className='about-section' id="about">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quod temporibus quos natus ullam, amet doloremque eius nisi repellat cumque distinctio nostrum libero fugiat possimus, adipisci nam recusandae animi, quia architecto obcaecati. Vero sequi accusamus autem ipsam non, voluptates quod earum laboriosam sapiente incidunt, quisquam eum dolore voluptate mollitia temporibus!
                </div>
                <div className='services-section' id="services">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quod temporibus quos natus ullam, amet doloremque eius nisi repellat cumque distinctio nostrum libero fugiat possimus, adipisci nam recusandae animi, quia architecto obcaecati. Vero sequi accusamus autem ipsam non, voluptates quod earum laboriosam sapiente incidunt, quisquam eum dolore voluptate mollitia temporibus!
                </div>
                <div className='work-section' id="work">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quod temporibus quos natus ullam, amet doloremque eius nisi repellat cumque distinctio nostrum libero fugiat possimus, adipisci nam recusandae animi, quia architecto obcaecati. Vero sequi accusamus autem ipsam non, voluptates quod earum laboriosam sapiente incidunt, quisquam eum dolore voluptate mollitia temporibus!
                </div>
                <div className='contact-section' id="contact">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quod temporibus quos natus ullam, amet doloremque eius nisi repellat cumque distinctio nostrum libero fugiat possimus, adipisci nam recusandae animi, quia architecto obcaecati. Vero sequi accusamus autem ipsam non, voluptates quod earum laboriosam sapiente incidunt, quisquam eum dolore voluptate mollitia temporibus!
                </div>
            </section>
        </section>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'



function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitute">Longitute</label>
              <input name="longitute" id="longitute" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/11400130?s=460&v=4" alt="Cristiano Moraes"/>
              <div className="user-info">
                <strong>Cristiano Moraes</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>Java and C Programmer actually working with C#, javaScript and Python.</p>
            <a href="https://github.com/sdmoraes22">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/11400130?s=460&v=4" alt="Cristiano Moraes"/>
              <div className="user-info">
                <strong>Cristiano Moraes</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>Java and C Programmer actually working with C#, javaScript and Python.</p>
            <a href="https://github.com/sdmoraes22">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/11400130?s=460&v=4" alt="Cristiano Moraes"/>
              <div className="user-info">
                <strong>Cristiano Moraes</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>Java and C Programmer actually working with C#, javaScript and Python.</p>
            <a href="https://github.com/sdmoraes22">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/11400130?s=460&v=4" alt="Cristiano Moraes"/>
              <div className="user-info">
                <strong>Cristiano Moraes</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>Java and C Programmer actually working with C#, javaScript and Python.</p>
            <a href="https://github.com/sdmoraes22">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
    
  );
}

export default App;

import logo from './logo.svg';
import './skill.css';

function Skill() {
  return (
    <div className="baap">
        <div class="skill-nav">
            {/* <p>I Work With</p> */}
        </div>
        <div class="skill-core">
            <div class="skill-core-title">
                <p>Backend</p>
            </div>

            <div class="skill-box">
                <div class="skill-name">
                    <p>API</p>
                </div>
                <div class="skill-desc">
                    <p>Flask</p>
                    <p>FastAPI</p>
                </div>
                {/* <div class="skill-desc-img">
                        <div class="skill-img img-flask"></div>
                        <div class="skill-img img-fastapi"></div>
                </div> */}

            </div>

            <div class="skill-box">
                <div class="skill-name">
                    <p>Database</p>
                </div>
                <div class="skill-desc">
                    <p>Relational Database</p>
                    <p>Document Oeranted Database</p>
                </div>
            </div>

            <div class="skill-core-title">
                <p>Frontend</p>
            </div>

            <div class="skill-box">
                <div class="skill-name skill-name-ln">
                    <p>Disigning</p>
                </div>
                <div class="skill-desc">
                    <p>Figma</p>
                </div>
            </div>

            <div class="skill-core-title">
                <p>Languages</p>
            </div>

            <div class="skill-box-lang">
                <div class="skill-lang">
                    <p>c/c++</p>
                </div>
                <div class="skill-lang">
                    <p>Python</p>
                </div>
                
                <div class="skill-lang">
                    <p>Javascript</p>
                </div>
                
                <div class="skill-lang">
                    <p>Java</p>
                </div>
            </div>
            
        </div>
    </div>
  );
}

export default Skill;


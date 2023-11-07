import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <header className="avatar">
        <img src="aditicopyy.jpg" alt="picture of aditi"/>
        </header>
        <div className="data">

      <h1 >Aditi Jaiswal</h1>
      <p className="skill">Learning to become a full stack web developer. Currently learning React and it's my very first React App. When not studying, I love to write, paint and read books. </p>
      <Skillzz  />
     
     </div> 
    </div>
  );
}
function Skillzz(){
  return ( 
      <div  >
    <ul className="skill-list" >
  <li style={{backgroundColor:"pink"}}> HTML 🤗</li>
  <li style={{backgroundColor:"lightblue"}}>JavaScript  👩‍💻 </li>
  <li style={{backgroundColor:"lightgreen"}}>GitHub  💻</li>
  <li style={{backgroundColor:"yellow"}}>Git  💻 </li>
  <li style={{backgroundColor:"seagreen"}}> CSS  👩‍💻 </li>
</ul>
</div>
);
}
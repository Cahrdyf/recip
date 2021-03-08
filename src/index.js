import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

function App() {
  return(
    <div className="wrapper">
	  <Card 
	    img="mothersstew.png" 
		title="MOTHERS STEW"
		desc='MY MTOHER USED TO MAKE THIS STEW WHEN SHE WAZ ALIVE. SHE ALWAYS SAID: "THEODORE, REMOVE YOUR GENITALS FROM AND EAT YOUR STEW" THEN I THREW IT ON THE BIEGE CARPET AND MADE A PRIMAL NOISE'
	  />
	  
	  <Card 
	    img="cookiebread.png"
		title="Cookie Bread"
		desc="Grandma Curtis-Anne used to make this all the time when was kids. It was whole wheat bread with cookies in it. RIP Grandma. If you dead, that is"
	  />
	  
	   <Card 
	    img="whitebreadhotdog.png"
		title="Hot Dog w/ White Bread"
		desc="You gotta thaw hotdog"
	  />
	  
	</div>
  );
}

function Card(props){
  return (
    <div className="card">
	  <div className="card-body">
	    <img src={props.img} className="card-image" />
		<h2 className="card-title">{props.title}</h2>
		<p className="card-description">{props.desc}</p>
	  </div>
	  <button className="card-button">View Recipes</button>
	</div>
  );
}

ReactDOM.render(
  <App />, document.getElementById("root")
);


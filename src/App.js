import "./App.css";
import Card from "./Card";

const list = [
  {
    id: 1,
    img: "https://media.pitchfork.com/photos/608839f84c67840074db8afb/1:1/w_600/Billie-Eilish-Happier-Than-Ever.jpeg",
    name: "Billie Eilish",
    job: "Artist",
  },
  {
    id: 2,
    img: "https://i.hizliresim.com/jj82aye.jpg",
    name: "Devrim Demir",
    job: "Army general",
  },
  {
    id: 3,
    img: "https://www.darryncodes.co.uk/img/darryncodes-profile.jpg",
    name: "Darryn",
    job: "Frontend developer",
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/ogw/ADea4I53IZ54wvTnQaHVKZEGEx7Knjw3Hko7wLfS-8oDGQ=s83-c-mo",
    name: "Eli Moyal",
    job: "Full stack developer",
  },
];

function App() {
  return (
    <div className="App">
      {list.map((value, index) => {
        return (
          <div key={value.id}>
            <Card data={value} />;
          </div>
        );
      })}
    </div>
  );
}

export default App;

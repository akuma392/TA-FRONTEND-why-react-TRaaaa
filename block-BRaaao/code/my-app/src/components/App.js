import data from '../data';

function App() {
  return (
    <>
      <Header />;
      <Hero />
      <Articles />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <h4> Logo</h4>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

function Hero() {
  return (
    <img
      className="hero"
      src="https://images.pexels.com/photos/7334364/pexels-photo-7334364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt=""
    />
  );
}

function Articles() {
  return (
    <>
      <h3> Article</h3>
      <div className="main">
        {data.map((elm) => (
          <Article {...elm} />
        ))}
      </div>
    </>
  );
}
function Article(props) {
  return (
    <div className="rootElm">
      <h6>{props.author} </h6>
      <h4> {props.title}</h4>
      <p>{props.desciption}</p>
      <img src={props.urlToImage} alt="" width="180" />
      <p>{props.publishedAt}</p>
      <p>{props.content}</p>
    </div>
  );
}

// author: 'Omkar Godbole',
// title: 'Third Halving Turns Out to Be Non-Event for Bitcoin’s Price',
// description:
//   "Bitcoin's price volatility has declined following the network's third mining reward halving event on Monday.",
// url:
//   'https://www.coindesk.com/third-blockchain-halving-turns-out-non-event-bitcoins-price',
// urlToImage:
//   'https://static.coindesk.com/wp-content/uploads/2020/05/btc-chart-may-12-1200x628.png',
// publishedAt: '2020-05-12T11:40:34Z',
// content:
//   "Bitcoin's price volatility has declined following the network's third mining reward halving event on Monday.  \r\nThe reward per block mined on bitcoin's blockchain was reduced to 6.25 BTC from 12.5 BTC at 19:23 UTC, when the cryptocurrency was trading near $8,… [+3792 chars]",
// },
function Footer() {
  return (
    <div className="footer">
      <h4> Logo</h4>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </div>
  );
}
export default App;

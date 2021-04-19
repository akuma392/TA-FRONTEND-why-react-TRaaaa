import colors from '../colors';

function App() {
  return Object.keys(colors).map((key) => {
    <Color name={key} allColors={colors[key]} />;
  });
}

function Color(props) {
  return (
    <div>
      <div>{props.name}</div>
      <ul>
        {props.allColors.map((color, i) => {
          <li>
            <div className="color-box" style={{ backgroundColor: color }}></div>
            <div className="color-info">
              <span>{i === 0 ? 50 : 100 * i}</span>
              <span>{color}</span>
            </div>
          </li>;
        })}
      </ul>
    </div>
  );
}
export default App;

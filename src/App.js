// import './App.css';

function App() {
  const handleClick = async () => {
    try {
      const response = await fetch('https://api.github.com/repos/chandraveermathur/DASHBOARD-YAML/actions/workflows/main.yml/dispatches', {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': 'token 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'
        },
        body: JSON.stringify({
          ref: 'main'
        })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Trigger</button>
    </div>
  );
}

export default App;

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Hello John!</h2>
          <p>Right now your react.js superpower is at 0% but THIS is your opportunity to change it ...</p>
          <p>Take this repository and adjust it to your needs,</p>
          <p>and remember: "With great power comes great responsibility."</p>
      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('content')
);

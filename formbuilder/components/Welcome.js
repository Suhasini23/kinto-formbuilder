import React from "react";


export default function Welcome(props) {
  const createNewForm = () => {
    props.resetForm(() => {
      props.history.pushState(null, "/builder");
    });
  };

  return (
    <div>
      <div className="jumbotron background">
        <div className="container">
        <h1>Create your own forms</h1>
        <p>
            This is the <strong>ClinDocs formbuilder</strong>, a tool to help
            you create online forms easily.
        </p>
        <p><button type="button" onClick={createNewForm} className="btn btn-primary btn-lg">Start a new form</button></p>
        </div>
      </div>

    </div>
  );
}

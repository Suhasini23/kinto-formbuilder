import React from "react";
import { Droppable } from "react-drag-and-drop";

import Default from "./Default";
import SchemaField from "react-jsonschema-form/lib/components/fields/SchemaField";


export default function SchemaFieldWrapper(props) {
  const {error, schema} = props;
  const {properties} = schema;

  const onClick = (event) => {
    props.publishForm((collectionID) => {
      props.history.pushState(null, `/builder/published/${collectionID}`);
    });
  };

  const onDrop = ({field}) => {
    props.addField(JSON.parse(field));
  };

  const button = (
    <div className="pull-right">
      <button onClick={onClick} className="btn btn-success align-right">
        Create form
      </button>
    </div>);

  return (
    <div>
      {error ? <div className="alert alert-danger">{error}</div> : null}
      <div className="rjsf">
        <SchemaField {...props} />
      </div>
      <Droppable types={["field"]} className="form-area" onDrop={onDrop}>
        {Object.keys(properties).length === 0 ?
          <Default /> : null}
      </Droppable>
      {Object.keys(properties).length === 0 ? null : button}
    </div>
  );
}
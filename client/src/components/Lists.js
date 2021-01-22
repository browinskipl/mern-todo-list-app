import React from 'react';
import ListsList from './ListsList';
import Modal from './Modal';

function Lists() {
  return (
    <div>
      <h1>Your lists:</h1>
      <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">
        Add new list
      </button>
      <Modal/>
      <ListsList/>
    </div>
  );
}

export default Lists;

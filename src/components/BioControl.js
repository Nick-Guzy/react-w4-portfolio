import React, { useEffect, useState } from 'react';
import NewBioForm from './NewBioForm';
import BioList from './BioList';
import EditBioForm from './EditBioForm.js';
import BioDetail from './BioDetail';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { bioDB, auth } from './../firebase.js'

function BioControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainBioList, setMainBioList] = useState([]);
  const [selectedBio, setSelectedBio] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(bioDB, "bios"),
      (collectionSnapshot) => {
        const bios = [];
        collectionSnapshot.forEach((doc) => {
          bios.push({
            name: doc.data().name,
            age: doc.data().age,
            contact: doc.data().contact,
            description: doc.data().description,
            id: doc.id
          });
        });
        setMainBioList(bios);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedBio != null) {
      setFormVisibleOnPage(false);
      setSelectedBio(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }


  const handleDeletingBio = async (id) => {
    await deleteDoc(doc(bioDB, "bios", id));
    setSelectedBio(null);
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditingBioInList = async (bioToEdit) => {
    const bioRef = doc(bioDB, "bios", bioToEdit.id);
    await updateDoc(bioRef, bioToEdit);
    setEditing(false);
    setSelectedBio(null);
  }

  const handleAddingNewBioToList = async (newBioData) => {
    await addDoc(collection(bioDB, "bios"), newBioData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedBio = (id) => {
    const selection = mainBioList.filter(bio => bio.id === id)[0];
    setSelectedBio(selection);
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the portfolio.
          <a href="/sign-in">Click here to sign in </a>
        </h1>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {

    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {
      currentlyVisibleState = <EditBioForm Bio={selectedBio} onEditBio={handleEditingBioInList} />
      buttonText = "Return to Bio List";
    } else if (selectedBio != null) {
      currentlyVisibleState = <BioDetail
      Bio={selectedBio}
        onClickingDelete={handleDeletingBio}
        onClickingEdit={handleEditClick} />
      buttonText = "Return to Bio List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewBioForm onNewBioCreation={handleAddingNewBioToList} />;
      buttonText = "Return to Bio List";
    } else {
      currentlyVisibleState = <BioList onBioSelection={handleChangingSelectedBio} bioList={mainBioList} />;
      buttonText = "Add Bio";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {error ? null : <button onClick={handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }
}


export default BioControl;


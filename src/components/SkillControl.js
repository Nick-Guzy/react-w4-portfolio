import React, { useEffect, useState } from 'react';
import NewSkillForm from './NewSkillForm';
import SkillList from './SkillList';
import EditSkillForm from './EditSkillForm.js';
import SkillDetail from './SkillDetail';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { skillDB, auth } from './../firebase.js'

function SkillControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainSkillList, setMainSkillList] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(skillDB, "skills"),
      (collectionSnapshot) => {
        const skills = [];
        collectionSnapshot.forEach((doc) => {
          skills.push({
            title: doc.data().title,
            description: doc.data().description,
            yearsOfExperience: doc.data().yearsOfExperience,
            id: doc.id
          });
        });
        setMainSkillList(skills);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedSkill != null) {
      setFormVisibleOnPage(false);
      setSelectedSkill(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }


  const handleDeletingSkill = async (id) => {
    await deleteDoc(doc(skillDB, "skills", id));
    setSelectedSkill(null);
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditingSkillInList = async (skillToEdit) => {
    const skillRef = doc(skillDB, "skills", skillToEdit.id);
    await updateDoc(skillRef, skillToEdit);
    setEditing(false);
    setSelectedSkill(null);
  }

  const handleAddingNewSkillToList = async (newSkillData) => {
    await addDoc(collection(skillDB, "skills"), newSkillData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedSkill = (id) => {
    const selection = mainSkillList.filter(skill => skill.id === id)[0];
    setSelectedSkill(selection);
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the portfolio.</h1>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {

    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {
      currentlyVisibleState = <EditSkillForm skill={selectedSkill} onEditSkill={handleEditingSkillInList} />
      buttonText = "Return to Skill List";
    } else if (selectedSkill != null) {
      currentlyVisibleState = <SkillDetail
        skill={selectedSkill}
        onClickingDelete={handleDeletingSkill}
        onClickingEdit={handleEditClick} />
      buttonText = "Return to Skill List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewSkillForm onNewSkillCreation={handleAddingNewSkillToList} />;
      buttonText = "Return to Skill List";
    } else {
      currentlyVisibleState = <SkillList onSkillSelection={handleChangingSelectedSkill} skillList={mainSkillList} />;
      buttonText = "Add Skill";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {error ? null : <button onClick={handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }
}


export default SkillControl;


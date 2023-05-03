import React, { useEffect, useState } from 'react';
import NewProjectForm from './NewProjectForm';
import ProjectList from './ProjectList';
import EditProjectForm from './EditProjectForm.js';
import ProjectDetail from './ProjectDetail';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { projectDB, auth } from './../firebase.js'

function ProjectControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainProjectList, setMainProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(projectDB, "projects"),
      (collectionSnapshot) => {
        const projects = [];
        collectionSnapshot.forEach((doc) => {
          projects.push({
            title: doc.data().title,
            link: doc.data().link,
            description: doc.data().description,
            date: doc.data().date,
            id: doc.id,
            // uid: auth.currentUser.id
          });
        });
        setMainProjectList(projects);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedProject != null) {
      setFormVisibleOnPage(false);
      setSelectedProject(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }


  const handleDeletingProject = async (id) => {
    await deleteDoc(doc(projectDB, "projects", id));
    setSelectedProject(null);
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditingProjectInList = async (projectToEdit) => {
    const projectRef = doc(projectDB, "projects", projectToEdit.id);
    await updateDoc(projectRef, projectToEdit);
    setEditing(false);
    setSelectedProject(null);
  }

  const handleAddingNewProjectToList = async (newProjectData) => {
    await addDoc(collection(projectDB, "projects"), newProjectData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedProject = (id) => {
    const selection = mainProjectList.filter(project => project.id === id)[0];
    setSelectedProject(selection);
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
      currentlyVisibleState = <EditProjectForm project={selectedProject} onEditProject={handleEditingProjectInList} />
      buttonText = "Return to Project List";
    } else if (selectedProject != null) {
      currentlyVisibleState = <ProjectDetail
        project={selectedProject}
        onClickingDelete={handleDeletingProject}
        onClickingEdit={handleEditClick} />
      buttonText = "Return to Project List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewProjectForm onNewProjectCreation={handleAddingNewProjectToList} />;
      buttonText = "Return to Project List";
    } else {
      currentlyVisibleState = <ProjectList onProjectSelection={handleChangingSelectedProject} projectList={mainProjectList} />;
      buttonText = "Add Project";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {error ? null : <button onClick={handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }
}


export default ProjectControl;


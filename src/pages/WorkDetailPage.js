// pages/WorkDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const WorkDetailPage = ({ experiences }) => {
    console.log("Work experience = " + experiences);
  const { id } = useParams();
  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    return <div>Experience not found!</div>;
  }

  return (
    <div>
      <h1>{experience.title}</h1>
      <p>{experience.description}</p>
      <div>
        <h2>Gallery</h2>
        {/* <div className="gallery">
          {experience.gallery.map((image, index) => (
            <img key={index} src={image} alt={`Gallery image ${index + 1}`} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default WorkDetailPage;

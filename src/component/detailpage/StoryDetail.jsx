import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
// import './style.css'
const StoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('summary');

  useEffect(() => {
    axios.get(`https://child.onrender.com/api/sciencefiction/${id}`)
      .then(response => {
        setStory(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching story:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
      <h1>loding..</h1>
        <ClipLoader size={150} color={"#ffffff"} loading={loading} />
      </div>
    );
  }

  if (!story) {
    return <div>Error loading story.</div>;
  }

  return (
    <div className="story-detail">
      <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt={story.title} />
      <h2>{story.title}</h2>
      <div className="tabs">
        <button onClick={() => setActiveTab('summary')}>Summary</button>
        <button onClick={() => setActiveTab('details')}>Details</button>
        <button onClick={() => setActiveTab('author')}>Author</button>
      </div>
      <div className="tab-content">
        {activeTab === 'summary' && <p>{story.summary}</p>}
        {activeTab === 'details' && <p>{story.details}</p>}
        {activeTab === 'author' && <p>{story.author}</p>}
      </div>
    </div>
  );
};

export default StoryDetail;

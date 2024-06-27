// src/pages/AngebotForm.js
import React, { useState } from 'react';

const AngebotForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    beschreibung: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/angebote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Erfolg:', data);
        alert('Angebot erfolgreich eingereicht');
        setFormData({ name: '', email: '', beschreibung: '' });
      })
      .catch((error) => {
        console.error('Fehler:', error);
        alert('Fehler beim Einreichen des Angebots');
      });
  };

  return (
    <div>
      <h2>Angebot Einholen</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Beschreibung:
            <textarea name="beschreibung" value={formData.beschreibung} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit" className="btn btn-main btn-lg btn-sm">Angebot Einreichen</button>
      </form>
    </div>
  );
};

export default AngebotForm;

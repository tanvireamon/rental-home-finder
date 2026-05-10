import React, { useState } from 'react';

const Step3Photos = ({ data, updateData, errors }) => {
  const [uploadProgress, setUploadProgress] = useState({});
  const [verifyingPhoto, setVerifyingPhoto] = useState(null);

  const handlePhotoUpload = async (e) => {
    const files = Array.from(e.target.files);
    
    if (data.photos.length + files.length > 20) {
      alert('Maximum 20 photos allowed');
      return;
    }

    for (const file of files) {
      // Verify image
      await verifyImage(file);
    }
  };

  const verifyImage = async (file) => {
    setVerifyingPhoto(file.name);
    
    try {
      // Create FormData for upload
      const formData = new FormData();
      formData.append('file', file);

      // Upload and verify with backend
      const response = await fetch('/api/photos/verify', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });

      if (response.ok) {
        const photoData = await response.json();
        
        // Add verified photo to list
        updateData('photos', [
          ...data.photos,
          {
            id: Date.now(),
            name: file.name,
            url: photoData.url,
            verified: true,
            uploadedAt: new Date().toISOString(),
          },
        ]);
      } else {
        alert(`Photo verification failed for ${file.name}`);
      }
    } catch (error) {
      console.error('Error uploading photo:', error);
      alert(`Failed to upload ${file.name}`);
    } finally {
      setVerifyingPhoto(null);
    }
  };

  const removePhoto = (photoId) => {
    updateData(
      'photos',
      data.photos.filter((p) => p.id !== photoId)
    );
  };

  const reorderPhotos = (draggedIndex, droppedIndex) => {
    const newPhotos = [...data.photos];
    const [draggedPhoto] = newPhotos.splice(draggedIndex, 1);
    newPhotos.splice(droppedIndex, 0, draggedPhoto);
    updateData('photos', newPhotos);
  };

  return (
    <div className="step-form">
      <h2>📸 Upload Property Photos</h2>
      <p className="step-description">Add high-quality photos of your property (minimum 1, maximum 20)</p>

      {/* Upload Area */}
      <div className="photo-upload-area">
        <input
          type="file"
          id="photoInput"
          multiple
          accept="image/*"
          onChange={handlePhotoUpload}
          disabled={verifyingPhoto !== null}
          style={{ display: 'none' }}
        />
        <label htmlFor="photoInput" className="upload-label">
          <div className="upload-content">
            <span className="upload-icon">📷</span>
            <h3>Click to upload or drag photos here</h3>
            <p>PNG, JPG, GIF up to 10MB. Max 20 photos.</p>
            {verifyingPhoto && (
              <p className="verifying">🔍 Verifying {verifyingPhoto}...</p>
            )}
          </div>
        </label>
      </div>

      {/* Error Message */}
      {errors.photos && (
        <div className="error-message">
          {errors.photos}
        </div>
      )}

      {/* Photos Counter */}
      <div className="photos-counter">
        <span className="count">{data.photos.length} / 20 photos uploaded</span>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${(data.photos.length / 20) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Photo Gallery */}
      {data.photos.length > 0 && (
        <div className="photos-gallery">
          <h3>Uploaded Photos</h3>
          <p className="gallery-hint">Drag to reorder, click to remove</p>
          
          <div className="photos-grid">
            {data.photos.map((photo, index) => (
              <div
                key={photo.id}
                className="photo-item"
                draggable
                onDragStart={() => {
                  e.dataTransfer.effectAllowed = 'move';
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'));
                  reorderPhotos(draggedIndex, index);
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.dataTransfer.dropEffect = 'move';
                }}
              >
                <img src={photo.url} alt={photo.name} />
                
                <div className="photo-overlay">
                  <button
                    type="button"
                    className="btn-remove"
                    onClick={() => removePhoto(photo.id)}
                  >
                    🗑️ Remove
                  </button>
                </div>

                <div className="photo-info">
                  <span className="photo-number">#{index + 1}</span>
                  {photo.verified && (
                    <span className="verified-badge">✓ Verified</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="tips-section">
        <h3>📸 Photo Tips for Better Listings</h3>
        <ul>
          <li>Use good lighting - photos taken during daytime are best</li>
          <li>Show multiple angles - bedroom, living room, kitchen, bathroom</li>
          <li>Include exterior shots and entrance</li>
          <li>Avoid cluttered or messy areas</li>
          <li>First photo will be the thumbnail - make it attractive!</li>
        </ul>
      </div>
    </div>
  );
};

export default Step3Photos;
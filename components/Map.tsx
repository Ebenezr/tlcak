'use client';
import React from 'react';

const Map = () => {
  return (
    <iframe
      title="Google map location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1776.8095235312785!2d36.74695391091373!3d-1.2930017966597946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bc5692c24b7%3A0x6efa1a6f634f1800!2sTrue%20Light%20Christian%20Assembly%20Kenya!5e0!3m2!1sen!2ske!4v1675491292299!5m2!1sen!2ske"
      width={380}
      height={350}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map;

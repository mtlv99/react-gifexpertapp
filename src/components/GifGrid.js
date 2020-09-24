import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <h3>{category}</h3>

        {loading && <p>Loading...</p>}
      </div>

      <div className="card-grid">
        {/* El spread operator en este caso inyecta directamente todas las propiedades del objeto img como props */}
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

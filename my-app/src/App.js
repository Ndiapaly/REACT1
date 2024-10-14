import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Description from "./Description";
import Image from "./Image";
import Name from "./Name";
import Price from "./Price";
import product from "./product"; // Assurez-vous que le nom du fichier est correct

const App = () => {
  const firstName = "Ndiapaly"; // Remplacez par votre prénom

  return (
    <div className="container mt-5">
      <div className="card">
        <Image imageUrl={product.imageUrl} />
        <div className="card-body">
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </div>
      </div>
      <p className="mt-3">Bonjour, {firstName ? firstName : "!"}</p>
      {firstName && (
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16OB7?ver=ab1a&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
          alt="Laptop Surface Go 3"
        />
      )}
    </div>
  );
};

export default App;

const CountriesFlag = ({flag, name}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        border: "1px solid gray",
        borderRadius: "10px",
        width: "150px",
        height: "150px",
        padding: "10px",
      }}
    >
      <img src={flag} alt={`Flag of ${name}`} style={{width: "100px", height: "100px", objectFit: "contain"}}/>
      <h3 style={{margin: "0"}}>{name}</h3>
    </div>
  );
};

export default CountriesFlag;

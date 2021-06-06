import react, { useState, useEffect } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

interface Iprops {
  value: any;
}

const Star: react.FC<Iprops> = props => {
  const [dec, setDec] = useState(0);

  useEffect(() => {
    setDec(dec => dec + props.value * 10 - 10 * Math.floor(props.value));
  }, [props.value]);

  const halfStar = () => {
    return <FaStarHalf color="gold" title={`${props.value}`}></FaStarHalf>;
  };

  return (
    <div>
      <p>
        Rating:
        {[...Array(5)].map((star, index) => {
          if (index < Math.floor(props.value)) {
            return <FaStar color="gold" title={`${props.value}`}></FaStar>;
          }
          return null;
        })}
        {dec >= 5 ? halfStar() : null}
      </p>
    </div>
  );
};

export default Star;

import { useParams, useNavigate } from 'react-router-dom';

const OtherColor = () => {
  const { color }= useParams();
  const navigate = useNavigate();

  return (
    <>
    <h2>The color you selected is: {color} </h2>
    <button onClick={() => navigate('/')}>Go Back To Home</button>
    </>
  )
}

export default OtherColor;
import { useNavigate } from "react-router-dom";
const HomeButton = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <button type="button" onClick={handleClick}>
      Home page
    </button>
  );
};

export default HomeButton;

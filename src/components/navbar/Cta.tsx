import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
export default function Cta(){
    const navigate = useNavigate();
    const disabled = false;
    return(
    <Button 
      onClick={() => navigate("/login")}
      disabled={disabled}
      text="Login"
      className="hidden lg:block"
      />
    );
}
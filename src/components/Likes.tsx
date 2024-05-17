import { Heart } from "lucide-react";
import { useState } from "react";

const Likes = () => {
    const [filled, setFilled] = useState(false);

    return(
        <>
            <Heart
            color="var(--HeaderTextColor)"
            size={17}
            fill={filled ? "var(--HeaderTextColor)" : "none"}
            onClick={() => setFilled((prevState) => !prevState)}
          />
        </>
    )
}

export default Likes; 